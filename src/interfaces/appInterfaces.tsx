
export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {

    id?: string;
    name?: string;
    contact?: UserContact;
    profession?: Profession;
    password?: string;
    verified?: boolean;
    perfil_image?: string;
    features?: Features


}

export interface UserContact {

    email?: string;
    phone?: string;
    country?: string;
    identifierDocument?: string;
}

export interface Profession {
    name?: string;
    description?: string;
    price?: number;

}

export interface Project {
    id?: string;
    name: string;
    image?: string;
    description?: string;
    workers?: Array<string>;
    color?: string;



}

export interface Features {
    age?: number;
    gender?: string;
    height?: number;
    body?: string;
    Skin?: string;
    hair_type?: Array<string>;
    hair_color?: string;
    eye_color?: string;


}

export interface WorkRequest {
    id?: string;
    owner?: User;
    project?: Project;
    worker?: User;
    acepted?: string;
    created_at?: string;
    updated_at?: string
}

export interface Notification {
    notified?: User;
    notifier?: User;
    type?: string
    workRequest?: WorkRequest
    is_read?: string
    message?: string
    created_at?: string
    updated_at?: string

}
