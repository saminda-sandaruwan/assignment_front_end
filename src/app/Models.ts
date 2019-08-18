export interface contactUs {
    name: string,
    email: string,
    contactnum: string,
    message: string
}

export class contactUsData implements contactUs {
    name: string;
    email: string;
    contactnum: string;
    message: string;
}

export interface User {
    name: string,
    email: string,
    password: string,
    c_password: string
}

export class UserData implements User {
    name: string;
    email: string;
    password: string;
    c_password: string;
}

export interface Login {
    email: string,
    password: string,
}

export class LoginData implements Login {
    email: string;
    password: string;
}