<template>
  <div>
    <div class="hidden md:block">
      <div class="ml-10 flex items-baseline space-x-4">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
const navigation = [
  { name: 'Dashboard', href: 'Home', current: true },
  { name: 'login', href: 'Login', current: false },
  { name: 'register', href: 'Register', current: false },
]
</script>