import { useContext, useEffect, useState } from "react"
import { apiCalls } from "../api/apiCalls"
import { AuthContext } from "../context/AuthContext"
import { Notification, Project, User, WorkRequest } from "../interfaces/appInterfaces"

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
        setNotifications(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getNotification();

    }, [page])
    return { notifications, isLoading }

}

export const useBuildNotification = (notifications: Notification) => {
    const [user, setUser] = useState({} as User)
    const [isLoading, setisLoading] = useState(true)
    const [workRequest, setWorkRequest] = useState({} as WorkRequest)
    const [project, setProject] = useState({} as Project)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const buildNotification = async () => {
        const userData = await apiCalls.get<User>('/api/users/id=' + notifications.notifier_id)
        setUser(userData.data)
        //TODO: hacer un switch para los tipos
        const workRequestData = await apiCalls.get<WorkRequest>('/api/work-request/id=' + notifications.reference_id, config)
        setWorkRequest(workRequestData.data)

        const projectData = await apiCalls.get<Project>('/api/projects/id=' + workRequestData.data.project_id, config)
        setProject(projectData.data)

    }
    useEffect(() => {
        buildNotification();

    }, [])
    return { user, project, workRequest }


}
