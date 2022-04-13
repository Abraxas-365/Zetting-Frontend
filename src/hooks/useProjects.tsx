import { useContext, useEffect, useState } from "react"
import { apiCalls } from "../api/apiCalls"
import { AuthContext } from "../context/AuthContext"
import { Project } from "../interfaces/appInterfaces"




export const useProjects = () => {
    const [projects, setState] = useState([] as Array<Project>)
    const [page, setPageProject] = useState(1)
    const [isLoadingProjects, setIsLoading] = useState(true)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const getProjects = async () => {

        const { data } = await apiCalls.get('/api/projects/projects/page=' + page, config)
        console.log(data)
        setState(data)
        setIsLoading(false)

    }
    useEffect(() => {
        getProjects();

    }, [page])
    return { projects, isLoadingProjects, setPageProject, page }

}

export const useMyProjects = () => {
    const [myProjects, setmyProjects] = useState([] as Array<Project>)
    const [page, setPageMyProject] = useState(1)
    const [isLoadingMyProjects, setIsLoading] = useState(true)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const getMyProjects = async () => {

        const { data } = await apiCalls.get<Array<Project>>('/api/projects/myprojects/page=' + page, config)
        setmyProjects([...myProjects, ...data])
        setIsLoading(false)
    }

    useEffect(() => {
        getMyProjects();

    }, [page])
    return { myProjects, isLoadingMyProjects, setPageMyProject, page }

}

export const useGetProjectById = (id: any) => {
    const [project, setProject] = useState({} as Project)
    const [isLoading, setIsLoading] = useState(true)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const getProject = async () => {

        const { data } = await apiCalls.get<Project>('/api/projects/id=' + id, config)
        setProject(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getProject();

    }, [])
    return { project, isLoading }

}
