export interface Project {
    id: string;
    name: string;
    owner: User;
    workers: Array<User>;
    color: string;
    image: string;
    description: string;
}

export interface User {
    id: string;
    name: string;
    perfil_image: string;
}
