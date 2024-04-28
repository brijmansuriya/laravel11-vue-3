<template>
  <div>
    <header class="bg-violet-800 text-white py-4">
      <!-- Your header content here -->
      <!-- For example, a navigation menu -->
      <nav class="flex justify-center">
        <router-link to="/" class="px-4 py-2">Home</router-link>
        <router-link to="/about" class="px-4 py-2">About</router-link>
        <router-link to="/contact" class="px-4 py-2">Contact</router-link>
        <router-link :to="{ name: 'Register' }" class="px-4 py-2">Register</router-link>
        <router-link :to="{ name: 'Login' }" class="px-4 py-2">Login</router-link>
      </nav>
    </header>
    <main class="container mx-auto my-8">
      <!-- Your main content here -->

      <router-view>
        <slot></slot>
      </router-view>
    </main>
    <footer class="bg-violet-800 text-white py-4">
      <!-- Your footer content here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
/* Your scoped styles here */
</style>
