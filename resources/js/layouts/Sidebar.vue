<template>
    <!-- <div class="sidebar">
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/settings">Settings</router-link>
    </div> -->

    <div class="flex-1 overflow-y-auto">
        <ul class="py-4">
            <li class="px-4 py-2 text-white hover:bg-gray-700"> <router-link to="/">Home</router-link></li>
            <!-- <li ><router-link to="/users">Users</router-link></li> -->
            <router-link class="px-4 py-2 text-white hover:bg-gray-700" to="/users">Users</router-link>
            <!-- Add more navigation links as needed -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style>
.sidebar {
    width: 200px;
    background-color: #333;
    color: #fff;
    padding: 20px;
}

.router-link {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
}
</style>
