import { useContext, useEffect, useState } from "react"
import { apiCalls } from "../api/apiCalls"
import { AuthContext } from "../context/AuthContext"


export type WorkRequest = {
    project_id: string;

}
export const useGetWorkRequest = (id: any) => {
    const [workRequest, setWorkRequest] = useState({} as workRequest)
    const [isLoading, setIsLoading] = useState(true)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const getWorkRequest = async () => {

        const { data } = await apiCalls.get<workRequest>('/api/work-request/id=' + id, config)
        setWorkRequest(data)
        setIsLoading(false)

    }
    useEffect(() => {
        getWorkRequest();

    }, [])
    return { workRequest, isLoading }

}
