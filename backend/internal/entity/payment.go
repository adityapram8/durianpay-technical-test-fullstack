package entity

type PaymentStatus string

const (
	PaymentCompleted  PaymentStatus = "completed"
	PaymentProcessing PaymentStatus = "processing"
	PaymentFailed     PaymentStatus = "failed"
)

type Payment struct {
	ID        string        `json:"id"`
	Merchant  string        `json:"merchant"`
	Amount    int64         `json:"amount"`
	Status    PaymentStatus `json:"status"`
	CreatedAt string        `json:"created_at"`
}
