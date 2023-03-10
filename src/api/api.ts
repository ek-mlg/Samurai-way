import axios from "axios";

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

    getUsers2: (currentPage: number = 1, pageSize: number = 10) => {
        axios.get(`/foolow?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}
