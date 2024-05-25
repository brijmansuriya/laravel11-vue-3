<template>
    <div>
      <label :for="inputId" class="sr-only">{{ label }}</label>
      <input :id="inputId" v-model="inputValue" :name="inputName" :type="inputType" :required="isRequired"
             :class="inputClass" :placeholder="placeholder"
             class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      inputId: {
        type: String,
        required: true
      },
      inputValue: {
        type: [String, Number],
        default: ''
      },
      inputName: {
        type: String,
        required: true
      },
      inputType: {
        type: String,
        default: 'text'
      },
      isRequired: {
        type: Boolean,
        default: false
      },
      inputClass: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }
    }
  };
  </script>
