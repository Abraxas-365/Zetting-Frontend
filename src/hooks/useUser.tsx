
import { useContext, useEffect, useState } from "react"
import { apiCalls } from "../api/apiCalls"
import { User } from "../interfaces/appInterfaces"



export const useUser = (id: any) => {
    const [user, setUser] = useState({} as User)
    const [isLoading, setisLoading] = useState(true)

    const getUser = async () => {
        console.log("opteniendo ususario");
        const { data } = await apiCalls.get<User>('/api/users/id=' + id)
        setUser(data)
        setisLoading(false)
    }
    useEffect(() => {
        getUser()
    }, [])
    return { user, isLoading }

}
