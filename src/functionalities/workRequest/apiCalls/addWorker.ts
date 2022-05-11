import { apiWorkRequest } from "../../../api/apiCalls";
import { Workrequest } from "../models"

export const addWorker = async (projectId: string, workerId: string) => {
    var workrequest: Workrequest = {
        project: projectId,
        worker: workerId
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q2QGdtYWlsLmNvbSIsImlkIjoiMjZlNDY5YWEtYmZmMi00ZmE4LWFmN2ItMDI2MzJkMDdhMTFiIn0.ZaIFf-W2AHPwU-Mi2v8D506AYQ859hEGunMrUD322ss'
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await apiWorkRequest.post('/new', workrequest, config)


}
