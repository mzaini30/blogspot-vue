<template>
  <div x-data="{open: false}" x-cloak class="p-6">
    <button
      x-on:click="open = !open"
      class="bg-black text-white px-5 py-2 rounded-lg"
    >
      toggle
    </button>
    <div x-show="open" class="mt-4">hello</div>
    <router-link to="/about">go to about</router-link>
  </div>
</template>
