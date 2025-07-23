import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

// Настраиваем перехватчик для всех запросов axios
axios.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.accessToken) {
            // Добавляем пробел после 'Bearer'
            config.headers["Authorization"] = 'Bearer ' + user.accessToken;
            config.headers["Content-Type"] = "application/json";
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Добавляем перехватчик ответов
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // При получении ошибки 401 - очищаем локальное хранилище
            localStorage.removeItem("user");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
        window.location.href = "/login"; // Добавляем редирект при выходе
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    isAuthenticated() {
        const user = this.getCurrentUser();
        return !!user && !!user.accessToken;
    }
}

export default new AuthService();