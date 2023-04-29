export interface Subscription {
    id: number,
    id_application: number,
    id_user: number,
    application_name: string,
    user_username: string,
    date_start: string,
    date_ending:string,
    payment: number,
    active: number
}