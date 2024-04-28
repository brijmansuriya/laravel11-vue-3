<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Register</h2>
      </div>

      {{ errors }}
      <div v-if="errors">
    <div v-for="(value,index) in errors.value" :key="index" class="bg-indigo-600 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
        <p v-for="error in value" :key="error" class="text-sm">
            {{ error }}
        </p>
    </div>
</div>


      <form class="mt-8 space-y-6" @submit.prevent="handelRegister">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="px-3 py-2">
            <label for="name" class="sr-only">Name</label>
            <input id="name" v-model="name" name="name" type="name" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="name">
          </div>
          <div class="px-3 py-2">
            <label for="username" class="sr-only">Username</label>
            <input id="username" v-model="email" name="username" type="email" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username">
          </div>
          <div class="px-3 py-2">
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="password" name="password" type="password" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password">
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

  
<script setup>
import { useAuthStore } from '../../../store/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { register,errors } = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

//error message
const errorMessage = ref(''); 



const handelRegister = async () => {
  const isLoggedIn = await register(name.value ,email.value, password.value);
  if (isLoggedIn) {
    // Redirect to home page or any other page upon successful login
    // router.push({ name: 'AdminHome' });
    router.push({ name: 'Dashboard' });
  } else {
    console.log('Failed to login',isLoggedIn.data.errors);
    errorMessage
    // router.push('/');
    // Handle failed login
  }
};
</script>