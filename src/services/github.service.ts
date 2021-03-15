import axios from 'axios'
import { UserInformationAPI } from '../types'

interface GetUserInformationData {
    data: UserInformationAPI
}

const getUserInformations = (user: string): Promise<GetUserInformationData> => {
    const endPoint = `https://api.github.com/users/${user}`

    return axios.get(endPoint)
}

export const GithubService = { getUserInformations }