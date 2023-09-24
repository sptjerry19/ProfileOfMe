<template>
  <div
    class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs mt-20 dark:shadow-zinc-600"
  >
    <img
      class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      alt="product designer"
    />
    <h1 class="text-lg text-gray-700">{{ name }}</h1>
    <h3 class="text-sm text-gray-400">{{ work }}</h3>
    <p class="text-xs text-gray-400 mt-4">
      {{ about }}
    </p>
    <button
      class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-900 font-semibold uppercase tracking-wide hover:bg-indigo-800 bg-transparent border border-indigo-800 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
    >
      <a :href="link">connect Me</a>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    work: String,
    about: String,
    link: String,
  },
};
</script>
