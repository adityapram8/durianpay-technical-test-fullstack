package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/durianpay/fullstack-boilerplate/internal/entity"
	pu "github.com/durianpay/fullstack-boilerplate/internal/module/payment/usecase"
	"github.com/durianpay/fullstack-boilerplate/internal/openapigen"
	"github.com/durianpay/fullstack-boilerplate/internal/transport"
)

type PaymentHandler struct {
	paymentUC pu.PaymentUsecase
}

func NewPaymentHandler(paymentUC pu.PaymentUsecase) *PaymentHandler {
	return &PaymentHandler{paymentUC: paymentUC}
}

func (h *PaymentHandler) GetPaymentList(w http.ResponseWriter, r *http.Request, params openapigen.GetDashboardV1PaymentsParams) {
	payments, err := h.paymentUC.GetPaymentList(&params)
	if err != nil {
		transport.WriteError(w, err)
		return
	}

	paymentsRes := make([]openapigen.Payment, len(payments))
	for i, p := range payments {
		paymentsRes[i] = toOpenAPIPayment(p)
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(openapigen.PaymentListResponse{Payments: &paymentsRes}); err != nil {
		transport.WriteAppError(w, entity.ErrorInternal("internal server error"))
	}
}

func (h *PaymentHandler) GetPaymentSummary(w http.ResponseWriter, r *http.Request) {
	summary, err := h.paymentUC.GetPaymentSummary()
	if err != nil {
		transport.WriteError(w, err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(summary); err != nil {
		transport.WriteAppError(w, entity.ErrorInternal("internal server error"))
	}
}

// toOpenAPIPayment converts entity.Payment to openapigen.Payment.
func toOpenAPIPayment(p *entity.Payment) openapigen.Payment {
	id := p.ID
	merchant := p.Merchant
	amount := fmt.Sprintf("%d", p.Amount)
	status := string(p.Status)

	op := openapigen.Payment{
		Id:       &id,
		Merchant: &merchant,
		Amount:   &amount,
		Status:   &status,
	}

	if t, err := time.Parse(time.RFC3339, p.CreatedAt); err == nil {
		op.CreatedAt = &t
	}

	return op
}
