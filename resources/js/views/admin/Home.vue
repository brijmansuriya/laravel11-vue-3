<template>
    <h1>Home</h1>
    <div v-if="authStore.user">
      <p>Welcome, </p>

      <div v-for="(value, key) in authStore.user">
        <p>{{ key }}: {{ value }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useAuthStore } from '../../store/authStore';
  
    const authStore = useAuthStore();
  
  onMounted(() => {
    console.log('Home component mounted');
    // Fetch user data from the API or store
    authStore.fetchUserData();
    
    if (!authStore.user) {
      // Redirect to login page
      this.$router.push('/login');
    }
  });
  </script>
  