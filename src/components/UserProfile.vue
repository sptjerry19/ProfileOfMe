<script setup>
import Profile from "./informations/Profile.vue";
import Teams from "./informations/Teams.vue";
import Project from "./informations/Project.vue";
import Connec from "./informations/Connec.vue";
</script>

<template>
  <div
    class="flex mt-20 flex-col dark:text-white lg:w-2/3 px-2 w-full"
    @click="$emit('opePanel', false)"
  >
    <div class="flex flex-col">
      <div class="flex text-2xl">
        <h1 class="opacity-75">UserProfile</h1>
        /{{ prevPage }}
      </div>
      <div
        class="relative bg-white shadow-xl mt-10 dark:bg-black dark:shadow-zinc-700"
      >
        <div class="w-full h-60">
          <img
            class="w-full h-56"
            src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/pages/profile-banner.png"
            alt=""
          />
        </div>
        <div class="absolute md:bottom-12 bottom-6 left-10">
          <img
            class="w-32 h-32 object-cover rounded-full"
            src="../assets/avatar.jpeg"
            alt=""
          />
        </div>
        <div class="flex justify-around md:pl-28 pl-40 mb-9 items-center">
          <div class="flex flex-col">
            <h1 class="pl-3 text-2xl">{{ infor.name }}</h1>
            <div class="md:flex hidden">
              <p class="p-3 flex items-center">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg> </i
                >{{ infor.work }}
              </p>
              <p class="p-3 flex items-center">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg> </i
                >{{ infor.addess }}
              </p>
              <p class="p-3 flex items-center">
                <i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg> </i
                >{{ infor.join }}
              </p>
            </div>
          </div>
          <button class="h-11 px-4 bg-blue-500 rounded-lg hover:opacity-70">
            <a
              href="https://vn.joboko.com/xem-cv/pham-duy-linh-36062fb88bf2d8ea-2306677"
              >connected</a
            >
          </button>
        </div>
      </div>
    </div>
    <div class="flex mt-10">
      <button
        class="text-black dark:text-white p-4 rounded shadow-md flex items-center justify-center mr-3"
        @click="changePage('Profile')"
        :class="{ 'bg-indigo-500': prevPage == 'Profile' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2 sm:mr-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <p class="hidden sm:block">Profile</p>
      </button>
      <button
        class="text-black dark:text-white p-4 rounded shadow-md flex items-center justify-center mr-3"
        @click="changePage('Teams')"
        :class="{ 'bg-indigo-500': prevPage == 'Teams' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 sm:mr-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>

        <p class="hidden sm:block">Teamss</p>
      </button>
      <button
        class="text-black dark:text-white p-4 rounded shadow-md flex items-center justify-center mr-3"
        @click="changePage('Project')"
        :class="{ 'bg-indigo-500': prevPage == 'Project' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2 sm:mr-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
          />
        </svg>

        <p class="hidden sm:block">Project</p>
      </button>
      <button
        class="text-black dark:text-white p-4 rounded shadow-md flex items-center justify-center mr-3"
        @click="changePage('Connection')"
        :class="{ 'bg-indigo-500': prevPage == 'Connection' }"
      >
        Connection
      </button>
    </div>
    <div class="flex flex-col w-full">
      <Profile v-if="prevPage == 'Profile'" />
      <Teams v-else-if="prevPage == 'Teams'" />
      <Project v-else-if="prevPage == 'Project'" />
      <Connec v-else-if="prevPage == 'Connection'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevPage: "Profile",
      infor: {
        name: "SPT Jerry",
        work: "UX design",
        addess: "Hanoi City",
        join: "joined ",
      },
    };
  },
  methods: {
    changePage(name) {
      console.log(this.prevPage);
      this.prevPage = name;
    },
  },
};
</script>
