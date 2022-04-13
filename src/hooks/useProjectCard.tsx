import { useContext, useEffect, useState } from "react"
import { apiCalls } from "../api/apiCalls"
import { AuthContext } from "../context/AuthContext"
import { Project, User, WorkRequest } from "../interfaces/appInterfaces"

export const useBuildProjectCard = (projectId: any) => {
    const [isLoading, setisLoading] = useState(true)
    const [users, setUsers] = useState([] as Array<User>)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const buildProjectCard = async () => {
        {/* get users from a project */ }
        const usersOfProject = await apiCalls.get('/api/users/project_id=' + projectId, config)
        setUsers(usersOfProject.data)
        setisLoading(false)


    }
    useEffect(() => {
        buildProjectCard();

    }, [])
    return { users }
}
