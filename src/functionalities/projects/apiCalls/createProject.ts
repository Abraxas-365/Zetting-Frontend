import { apiProjects } from "../../../api/apiCalls"
import { Project } from "../models"


export const createProject = async (project: Project) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q2QGdtYWlsLmNvbSIsImlkIjoiMjZlNDY5YWEtYmZmMi00ZmE4LWFmN2ItMDI2MzJkMDdhMTFiIn0.ZaIFf-W2AHPwU-Mi2v8D506AYQ859hEGunMrUD322ss'
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await apiProjects.post('/new', project, config)


}
