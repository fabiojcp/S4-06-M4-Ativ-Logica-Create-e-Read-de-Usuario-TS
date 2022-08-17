export interface CreateUser {
    email: string
    name: string
    password: string
}

export interface User {
    id: string
    email: string
    name: string
    password: string
    createdOn: Date;
    updatedOn: Date;
}

export interface Login {
    email: string
    password: string
}