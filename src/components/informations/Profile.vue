<template>
  <div id="profile" class="my-10">
    <div class="p-8 bg-white dark:bg-zinc-300 shadow mt-24">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div
          class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"
        >
          <div>
            <p class="font-bold text-gray-700 text-xl">22</p>
            <p class="text-gray-400">Friends</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">10</p>
            <p class="text-gray-400">Photos</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 text-xl">89</p>
            <p class="text-gray-400">Comments</p>
          </div>
        </div>
        <div class="relative">
          <div
            class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div
          class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"
        >
          <button
            class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            <a href="https://github.com/sptjerry19">Connect</a>
          </button>
          <button
            class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            <a href="https://www.facebook.com/profile.php?id=100058441982148"
              >Message</a
            >
          </button>
        </div>
      </div>

      <div class="mt-20 text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700">
          SPT Jerry,
          <span class="font-light text-gray-500">20</span>
        </h1>
        <p class="font-light text-gray-600 mt-3">Developer, Hanoi</p>

        <p class="mt-8 text-gray-500">
          Solution Manager - Creative Tim Officer
        </p>
        <p class="mt-2 text-gray-500">University of Computer Science</p>
      </div>

      <div class="mt-12 flex flex-col justify-center">
        <p class="text-gray-600 text-center font-light lg:px-16">
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </p>
        <button
          class="text-indigo-500 py-2 px-4 font-medium mt-4"
          @click="onShowmore"
        >
          {{ isShow }}
        </button>
        <div v-if="isShowmore" class="flex">
          <section class="relative pt-16 bg-blueGray-50">
            <div class="container mx-auto">
              <div class="flex flex-wrap items-center">
                <div
                  class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78"
                >
                  <div
                    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500"
                  >
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                      class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        class="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          class="text-pink-500 fill-current"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        Great for your awesome project
                      </h4>
                      <p class="text-md font-light mt-2 text-white">
                        Putting together a page has never been easier than
                        matching together pre-made components. From landing
                        pages presentation to login areas, you can easily
                        customise and built your pages.
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div class="w-full md:w-6/12 px-4">
                  <div class="flex flex-wrap">
                    <div class="w-full md:w-6/12 px-4">
                      <div class="relative flex flex-col mt-4">
                        <div class="px-4 py-5 flex-auto">
                          <div
                            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                          ></div>
                          <h6 class="text-xl mb-1 font-semibold">
                            CSS Components
                          </h6>
                          <p class="mb-4 text-blueGray-500">
                            Notus JS comes with a huge number of Fully Coded CSS
                            components.
                          </p>
                        </div>
                      </div>
                      <div class="relative flex flex-col min-w-0">
                        <div class="px-4 py-5 flex-auto">
                          <div
                            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                          ></div>
                          <h6 class="text-xl mb-1 font-semibold">
                            JavaScript Components
                          </h6>
                          <p class="mb-4 text-blueGray-500">
                            We also feature many dynamic components for React,
                            NextJS, Vue and Angular.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="w-full md:w-6/12 px-4">
                      <div class="relative flex flex-col min-w-0 mt-4">
                        <div class="px-4 py-5 flex-auto">
                          <div
                            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                          ></div>
                          <h6 class="text-xl mb-1 font-semibold">Pages</h6>
                          <p class="mb-4 text-blueGray-500">
                            This extension also comes with 3 sample pages. They
                            are fully coded so you can start working instantly.
                          </p>
                        </div>
                      </div>
                      <div class="relative flex flex-col min-w-0">
                        <div class="px-4 py-5 flex-auto">
                          <div
                            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                          ></div>
                          <h6 class="text-xl mb-1 font-semibold">
                            Documentation
                          </h6>
                          <p class="mb-4 text-blueGray-500">
                            Built by developers for developers. You will love
                            how easy is to to work with Notus JS.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer class="relative bg-blueGray-50 pt-8 pb-6 mt-2">
              <div class="container mx-auto px-4">
                <div
                  class="flex flex-wrap items-center md:justify-between justify-center"
                >
                  <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div class="text-sm text-blueGray-500 font-semibold py-1">
                      Made with
                      <a
                        href="https://www.creative-tim.com/product/notus-js"
                        class="text-blueGray-500 hover:text-gray-800"
                        target="_blank"
                        >Notus JS</a
                      >
                      by
                      <a
                        href="https://www.creative-tim.com"
                        class="text-blueGray-500 hover:text-blueGray-800"
                        target="_blank"
                      >
                        Creative Tim</a
                      >.
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowmore: false,
      isShow: "Show more",
    };
  },
  methods: {
    onShowmore() {
      this.isShowmore = !this.isShowmore;
      this.isShow = this.isShowmore ? "Close show" : "Show more";
    },
  },
};
</script>
