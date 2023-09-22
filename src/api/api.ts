import axios, {AxiosResponse} from "axios";
import {setUserDataAC} from "../Redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "987ba286-46e2-4eba-be1a-8d065605a7e3"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow: (userId: number) => {
        return instance.post(`/follow/${userId}`)
    },

    unFollow: (userId: number) => {
        return instance.delete(`/follow/${userId}`)
    },

    getUsers2: (currentPage: number = 1, pageSize: number = 10) => {
        axios.get(`/foolow?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}


