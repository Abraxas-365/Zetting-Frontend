import { useEffect, useState } from "react"
import { apiActors } from "../../../../api/apiCalls"
import { Actor } from "../models"

export const useActors = () => {
    const [actors, setActors] = useState([] as Array<Actor>)
    const [page, setPageActors] = useState(1)
    const [isLoadingActors, setIsLoading] = useState(true)
    const getActors = async () => {

        const { data } = await apiActors.get(`/page=` + page)
        console.log(data)
        setActors(data)
        setIsLoading(false)

    }
    useEffect(() => {
        getActors();
    }, [page])

    return { actors, setIsLoading, isLoadingActors, setPageActors, page, getActors }
}
