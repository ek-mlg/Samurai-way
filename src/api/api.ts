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
            .catch(error => {
                console.error("Ошибка в методе 'getProfile':", error);
                throw error;
            });
    },
    getStatus: (userId: string) => {
        return instance
            .get(`profile/status/${userId}`)
            .catch(error => {
                console.error("Ошибка в методе 'getStatus':", error);
                throw error;
            });
    },
    updateStatus: (status: string) => {
        return instance
            .put('profile/status', {status: status})
            .catch(error => {
                console.error("Ошибка в методе 'updateStatus':", error);
                throw error;
            });
    },
}

export const authAPI = {
    me: () => {
        return instance
            .get(`auth/me`)
            .catch(error => {
                console.error("Ошибка в методе 'me':", error);
                throw error;
            });
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
            .catch(error => {
                console.error("Ошибка в методе 'login':", error);
                throw error;
            });
    },
    logout: () => {
        return instance
            .delete(`auth/login`)
            .catch(error => {
                console.error("Ошибка в методе 'logout':", error);
                throw error;
            });
    }
}

