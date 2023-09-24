<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    rel="stylesheet"
  />
  <!-- This is an example component -->
  <div
    class="fixed top-0 left-0 h-screen w-16 bg-gray-800"
    @click="isOpenFull = true"
  >
    <div
      class="py-4 px-2 text-gray-700 bg-gray-900 rounded-lg text-center shadow-lg h-screen"
    >
      <img
        src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
        alt="alt placeholder"
        class="w-8 h-8 mx-auto mb-5"
      />
      <span class="cursor-pointer hover:text-white px-2 block mb-5">
        <i class="fas fa-stream"> </i>
      </span>
      <span class="cursor-pointer hover:text-white px-2 block mb-5">
        <i class="fas fa-search p-2 bg-gray-800 rounded-full"> </i>
      </span>
      <span class="cursor-pointer hover:text-white px-2 block mb-5 relative">
        <i class="fas fa-users"> </i>
        <span
          class="absolute right-0 top-0 -mt-2 text-xs bg-yellow-500 text-black font-medium px-2 shadow-lg rounded-full border-2 border-gray-900"
          >3</span
        >
      </span>
      <span class="cursor-pointer hover:text-white px-2 block mb-5">
        <i class="fas fa-calendar-alt"> </i>
      </span>
    </div>
  </div>

  <div
    v-if="isOpenFull"
    class="fixed top-0 left-0 h-screen w-60 py-4 px-2 text-gray-700 bg-gray-900 rounded-lg text-left capitalize font-medium shadow-lg"
  >
    <i
      class="absolute right-2 top-2 w-8 fas fa-xmark p-2 bg-gray-800 rounded-full hover:bg-red-300 cursor-pointer"
      @click="isOpenFull = false"
      >x
    </i>
    <img
      src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
      alt="alt placeholder"
      class="w-8 h-8 mx-auto mb-5"
    />
    <span
      class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5"
    >
      <i class="w-8 fas fa-stream p-2 bg-gray-800 rounded-full"> </i>
      <span class="mx-2">categories</span>
    </span>
    <span
      class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5"
    >
      <i class="w-8 fas fa-search p-2 bg-gray-800 rounded-full"> </i>
      <span class="mx-2">search</span>
    </span>
    <span
      class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5"
    >
      <span class="w-8 mb-5 relative">
        <i class="w-8 fas fa-user p-2 bg-gray-800 rounded-full"> </i>
        <span
          class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full"
          >3</span
        >
      </span>
      <span class="mx-2">sign ups</span>
    </span>
    <span
      class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5"
    >
      <i class="w-8 fas fa-th p-2 bg-gray-800 rounded-full"> </i>
      <span class="mx-2">menu</span>
    </span>
    <span
      class="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5"
    >
      <i class="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full"> </i>
      <span class="mx-2">calendar</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenFull: false,
    };
  },
};
</script>
