<template>
    <div class="h-screen flex bg-gray-800">
        <div class="w-64 bg-gray-800">
            <div class="flex flex-col h-full">
                <div class="bg-gray-900 text-white px-4 py-6">
                    Admin Dashboard
                </div>
                <!-- Navigation links -->
                <div class="flex-1 overflow-y-auto">
                    <Sidebar />
                    <slot></slot>
                </div>
                <!-- Sidebar footer -->
                <div class="bg-gray-900 text-white px-4 py-6">
                    © 2024 Admin Dashboard
                </div>
            </div>
        </div>
        <!-- Main content -->
        <div class="flex-1">
            <!-- Main content here -->
        </div>
    </div>
</template>

<script>
import Sidebar from '../layouts/Sidebar.vue'
export default {
    name: 'Layout',
     components: {
        Sidebar
    }
}
</script>

