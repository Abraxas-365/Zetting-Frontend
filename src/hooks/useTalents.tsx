
import { useContext, useEffect, useState } from "react"
import { apiCalls } from "../api/apiCalls"
import { AuthContext } from "../context/AuthContext"




export const useTalents = (profession: string) => {
    const [talents, setTalents] = useState([])
    const [page, setPageProject] = useState(1)
    const { token } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const getTalets = async () => {
        const { data } = await apiCalls.get('/api/users-search/profession=' + profession + '/page=' + page, config)
        console.log(data);
        setTalents(data)
    }

    useEffect(() => {
        getTalets();

    }, [page])
    return { talents }

}
