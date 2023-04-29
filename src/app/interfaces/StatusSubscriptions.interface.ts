export interface StatusSubscriptions {
    id: number;
    id_application: number;
    date_start: Date;
    date_ending: Date;
    payment: number;
    active: boolean;
    id_user: number;
    username: string;
    max_date_ending: Date;
    days_remaining: number;
    status: string;
  }