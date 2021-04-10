export interface CreditCard {
  cardId?: number;
  customerId?: number;
  nameOnTheCard: string;
  cardNumber: string;
  cvv: number;
  expirationDate: string;
}
