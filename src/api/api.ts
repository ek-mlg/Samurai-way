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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`)
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {

    getProfile: (userId: string) => {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data)
    },
    getStatus: (userId: string) => {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance
            .put('profile/status', { status: status })
    },
}

export const authAPI = {
    me: () => {
        return instance
        .get(`auth/me`)
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance
            .post(`auth/login`, { email, password, rememberMe })
    },
    logout: () => {
        return instance
            .delete(`auth/login`)
    }
}

