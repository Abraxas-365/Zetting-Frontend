import { useEffect, useState } from "react"
import { apiProjects } from "../../../api/apiCalls"
import { Project } from "../models"

export const useProjects = (kind: string) => {
    const [projects, setState] = useState([] as Array<Project>)
    const [page, setPageProject] = useState(1)
    const [isLoadingProjects, setIsLoading] = useState(true)
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQGdtYWlsLmNvbSIsImlkIjoiZmM2NTk3ZmUtOTAwMC00MzVhLWIyZjMtY2E5YTU0MzQ1NjRiIn0.UeD41PsRbOAWc7lymnux5tNbuBwSp4ePaoZqHWm3Ixg'
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const getProjects = async (kind: string) => {

        console.log("el TIPO", kind)
        const { data } = await apiProjects.get(`/${kind}/page=` + page, config)
        console.log(data)
        setState(data)
        setIsLoading(false)

    }
    useEffect(() => {
        getProjects(kind);
    }, [page])

    return { projects, setIsLoading, isLoadingProjects, setPageProject, page, getProjects }
}
