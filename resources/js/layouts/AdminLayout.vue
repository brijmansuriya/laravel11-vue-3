  <template>
    <div class="min-h-full">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company" />
              </div>
              <div>
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- <a v-for="item in navigation" :key="item.name" :href="item.href"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->
                    <!-- Show logout button when user is logged in -->
                    <button @click="handleLogout" type="button"
                      class="btn bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
                      Logout
                    </button>
                    <!-- Show login and register links when user is not logged in -->
                    <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.route }"
                      :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                      :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <router-view></router-view>
        </div>
      </main>
    </div>
  </template>
<script setup>
import { Disclosure } from '@headlessui/vue'
import axios from 'axios';
const navigation = [
  { name: 'AdminHome', route: 'AdminHome', current: true },
  { name: 'login', route: 'Login', current: false },
  { name: 'register', route: 'Register', current: false },
]

const handleLogout = async () => {
  try {
    // Remove items from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Call logout API
    await axios.post('/api/logout');

    // Redirect to login page
    navigateTo('/login');
  } catch (error) {
    // Handle errors, such as network errors or server errors
    console.error('Logout failed:', error);
    // Optionally, display an error message to the user
  }
}

</script>