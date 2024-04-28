// authStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: null,
        user: null,
        errors : {},
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post('api/login', { email, password });
                if (response.data.status) {
                    this.setToken(response.data.data.token);
                    return true; // Indicate successful login
                } else {
                    console.log(response.data.message);
                    return false; // Indicate failed login
                }
            } catch (error) {
                console.error('Error:', error);
                return false; // Indicate failed login
            }
        },
        async register(name ,email, password) {
            // this.errors.value = null;
            try {
                const response = await axios.post('api/register', { name, email, password });
                console.log('::::::::::::response',response);
                if (response.data.status) {
                    this.setToken(response.data.data.token);
                    return true; // Indicate successful login
                } else {
                    console.log(response.data.message);
                    return false; // Indicate failed login
                }
            } catch (error) {
                if (error.response.status === 422) {
                    for (const key in error.response.data.errors) {
                        this.errors.value = error.response.data.errors
                    }
                }
            }
        },

        //admin home deshbord
        async fetchUserData() {

            try {
                const token = this.getTokenFromLocalStorage();
                if (!token) {
                    console.error('Authentication token not found');
                    return;
                }
                const response = await axios.get('/api/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.setUser(response.data);
            } catch (error) {
                console.log('Error:', error); // Log any network or server errors
                // Handle error scenario as needed
            }
        },

        setToken(token) {
            this.token = token;
            this.saveTokenToLocalStorage(token);
            // localStorage.setItem('token', token);
        },
        saveTokenToLocalStorage(token) {
            console.log('Token saved to local storage:', token);
            localStorage.setItem('token', token);
        },
        getTokenFromLocalStorage() {
            return localStorage.getItem('token');
        },
        setUser(user) {
            this.user = user;
        },


    },
});
