import { useEffect, useState } from "react"
import { apiProjects } from "../../../api/apiCalls"
import { Project } from "../models"

export const useProjects = (kind: string) => {
    const [projects, setState] = useState([] as Array<Project>)
    const [page, setPageProject] = useState(1)
    const [isLoadingProjects, setIsLoading] = useState(true)
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q2QGdtYWlsLmNvbSIsImlkIjoiMjZlNDY5YWEtYmZmMi00ZmE4LWFmN2ItMDI2MzJkMDdhMTFiIn0.ZaIFf-W2AHPwU-Mi2v8D506AYQ859hEGunMrUD322ss'
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const getProjects = async (kind: string) => {

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
