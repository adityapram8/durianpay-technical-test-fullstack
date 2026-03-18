package repository

import (
	"database/sql"
	"fmt"
	"strings"

	"github.com/durianpay/fullstack-boilerplate/internal/entity"
)

type PaymentRepository interface {
	GetPaymentByID(id string) (*entity.Payment, error)
	AllPayments(status *string, sort *string) ([]*entity.Payment, error)
	CountPayments(status *string) (int, error)
}

type Payment struct {
	db *sql.DB
}

func NewPaymentRepo(db *sql.DB) *Payment {
	return &Payment{db: db}
}

func (r *Payment) GetPaymentByID(id string) (*entity.Payment, error) {
	row := r.db.QueryRow(`SELECT id, merchant, amount, status, created_at FROM payments WHERE id = ?`, id)
	var p entity.Payment
	if err := row.Scan(&p.ID, &p.Merchant, &p.Amount, &p.Status, &p.CreatedAt); err != nil {
		if err == sql.ErrNoRows {
			return nil, entity.ErrorNotFound("payment not found")
		}
		return nil, entity.WrapError(err, entity.ErrorCodeInternal, "db error")
	}
	return &p, nil
}

func (r *Payment) AllPayments(status *string, sort *string) ([]*entity.Payment, error) {
	query := `SELECT id, merchant, amount, status, created_at FROM payments`
	args := []any{}

	if status != nil && *status != "" {
		query += ` WHERE status = ?`
		args = append(args, *status)
	}

	if sort != nil && *sort != "" {
		orderClauses := []string{}
		for _, field := range strings.Split(*sort, ",") {
			field = strings.TrimSpace(field)
			if strings.HasPrefix(field, "-") {
				orderClauses = append(orderClauses, fmt.Sprintf("%s DESC", strings.TrimPrefix(field, "-")))
			} else {
				orderClauses = append(orderClauses, fmt.Sprintf("%s ASC", field))
			}
		}
		if len(orderClauses) > 0 {
			query += ` ORDER BY ` + strings.Join(orderClauses, ", ")
		}
	}

	rows, err := r.db.Query(query, args...)
	if err != nil {
		return nil, entity.WrapError(err, entity.ErrorCodeInternal, "db error")
	}
	defer rows.Close()

	var payments []*entity.Payment
	for rows.Next() {
		var p entity.Payment
		if err := rows.Scan(&p.ID, &p.Merchant, &p.Amount, &p.Status, &p.CreatedAt); err != nil {
			return nil, entity.WrapError(err, entity.ErrorCodeInternal, "db scan error")
		}
		payments = append(payments, &p)
	}
	return payments, rows.Err()
}

func (r *Payment) CountPayments(status *string) (int, error) {
	query := `SELECT COUNT(1) FROM payments`
	args := []any{}

	if status != nil && *status != "" {
		query += ` WHERE status = ?`
		args = append(args, *status)
	}

	var cnt int
	if err := r.db.QueryRow(query, args...).Scan(&cnt); err != nil {
		return 0, entity.WrapError(err, entity.ErrorCodeInternal, "db error")
	}
	return cnt, nil
}
