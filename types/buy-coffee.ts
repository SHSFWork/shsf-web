interface SubscriptionResponse {
  current_page: number;
  data: Subscription[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface Subscription {
  subscription_id: number;
  subscription_cancelled_on: string | null;
  subscription_created_on: string;
  subscription_updated_on: string;
  subscription_current_period_start: string;
  subscription_current_period_end: string;
  subscription_coffee_price: string;
  subscription_coffee_num: number;
  subscription_is_cancelled: boolean | null;
  subscription_is_cancelled_at_period_end: boolean | null;
  subscription_currency: string;
  subscription_message: string | null;
  message_visibility: number;
  subscription_duration_type: string;
  referer: string | null;
  country: string | null;
  transaction_id: string;
  payer_email: string;
  payer_name: string;
}

interface SupporterResponse {
  current_page: number;
  data: Supporter[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface Supporter {
  support_id: number;
  support_note: string | null;
  support_coffees: number;
  transaction_id: string;
  support_visibility: number;
  support_created_on: string;
  support_updated_on: string;
  transfer_id: string | null;
  supporter_name: string;
  support_coffee_price: string;
  support_email: string | null;
  is_refunded: boolean | null;
  support_currency: string;
  support_type: number;
  referer: string | null;
  country: string;
  order_payload: string;
  support_hidden: number;
  refunded_at: string | null;
  payer_email: string;
  payment_platform: string;
  payer_name: string;
}
