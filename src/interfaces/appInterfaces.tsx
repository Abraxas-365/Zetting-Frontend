
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
    owner_id?: string;
    project_id?: string;
    worker_id?: string;
    acepted?: string;
    created_at?: string;
    updated_at?: string
}

export interface Notification {
    notified_id?: string;
    notifier_image?: string;
    notifier_id?: string;
    type?: string
    reference_id?: string;
    is_read?: string
    message?: string
    created_at?: string
    updated_at?: string

}
