package usecase

import (
	"github.com/durianpay/fullstack-boilerplate/internal/entity"
	pr "github.com/durianpay/fullstack-boilerplate/internal/module/payment/repository"
	"github.com/durianpay/fullstack-boilerplate/internal/openapigen"
)

type (
	PaymentUsecase interface {
		GetPaymentList(params *openapigen.GetDashboardV1PaymentsParams) ([]*entity.Payment, error)
		GetPaymentSummary() (*openapigen.PaymentSummaryResponse, error)
	}

	Payment struct {
		repo pr.PaymentRepository
	}
)

func NewPaymentUsecase(repo pr.PaymentRepository) *Payment {
	return &Payment{repo: repo}
}

func (uc *Payment) GetPaymentList(params *openapigen.GetDashboardV1PaymentsParams) ([]*entity.Payment, error) {
	if params.Id != nil {
		p, err := uc.repo.GetPaymentByID(*params.Id)
		if err != nil {
			return nil, err
		}
		return []*entity.Payment{p}, nil
	}

	return uc.repo.AllPayments(params.Status, params.Sort)
}

func (uc *Payment) GetPaymentSummary() (*openapigen.PaymentSummaryResponse, error) {
	statuses := []string{"", "completed", "processing", "failed"}
	sum := make(map[string]int, len(statuses))

	for _, status := range statuses {
		s := &status
		if status == "" {
			s = nil
		}
		cnt, err := uc.repo.CountPayments(s)
		if err != nil {
			return nil, err
		}
		sum[status] = cnt
	}

	return &openapigen.PaymentSummaryResponse{
		Total:      sum[""],
		Completed:  sum["completed"],
		Processing: sum["processing"],
		Failed:     sum["failed"],
	}, nil
}
