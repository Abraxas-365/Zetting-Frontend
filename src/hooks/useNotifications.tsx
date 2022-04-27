import { useContext, useEffect, useState } from "react"
import { apiCalls } from "../api/apiCalls"
import { AuthContext } from "../context/AuthContext"
import { Notification } from "../interfaces/appInterfaces"

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<Array<Notification>>([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const getNotification = async () => {

        const { data } = await apiCalls.get('/api/notification/page=' + page, config)
        console.log(data)
        setNotifications(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getNotification();

    }, [page])
    return { notifications, isLoading }

}

