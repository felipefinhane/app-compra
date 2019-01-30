export interface IUser {
    id?: number;
    name?: string;
    email: string;
    password?: string;
    password_confirmation?: string;
    token?: string;
}