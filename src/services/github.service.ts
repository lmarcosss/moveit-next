import axios from 'axios'
import { UserInformations } from '../types'

interface GetUserInformationsData {
    data: UserInformations
}

const getUserInformations = (user: string): Promise<GetUserInformationsData> => {
    const endPoint = `https://api.github.com/users/${user}`

    return axios.get(endPoint)
}

export const GithubService = { getUserInformations }