import axios from 'axios';

const baseApiURL = 'http://localhost:8000/api'

export const apiProjects = axios.create({
    baseURL: baseApiURL + '/projects'
});

export const serveDefaultImages = "http://localhost:8000/api/static/app_default_images"
