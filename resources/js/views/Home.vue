<script setup>
// ... ref and onMounted
import { ref, onMounted } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
//axis
import axios from 'axios';

const token = ref(null);
const user = ref(null);

onMounted(async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Authentication token not found');
            return;
        }
        // Make API call to get user information
        const response = await axios.get('api/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        user.value = response.data;
    } catch (error) {
        console.error('Error:', error); // Log any network or server errors
    }
});
</script>
<template>
    <DefaultLayout>
        <h1>home</h1>
    </DefaultLayout>
</template>