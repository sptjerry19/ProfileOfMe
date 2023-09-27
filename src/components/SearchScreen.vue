<template>
  <div
    class="flex flex-col fixed w-2/3 shadow-xl rounded-sm dark:shadow-zinc-700"
  >
    <div class=" h-3 blur-sm"></div>
    <input
      class="w-full px-4 py-3 rounded-sm dark:bg-black dark:text-white"
      type="text"
      v-model="searchQuery"
      placeholder="Search Project"
      @click="openPanel = !openPanel"
    />
    <div
      v-if="openPanel"
      class="w-full panel-default z-20 bg-white opacity-95 dark:bg-zinc-600"
    >
      <div class="table-responsive">
        <table v-if="resources.length" class="table w-full">
          <tbody>
            <div
              class="w-full"
              v-for="(item, index) in resultQuery"
              :key="index"
            >
              <div class="w-full py-2 px-3 hover:bg-slate-200">
                <a :href="item.uri" target="_blank">{{ item.title }}</a>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openPanel: Boolean,
  },
  data() {
    return {
      searchQuery: null,
      resources: [
        { title: "Music App", uri: "aaaa.com", category: "a", icon: null },
        {
          title: "Todo App",
          uri: "aaaa.com",
          category: "a",
          icon: null,
        },
        { title: "Dashboard", uri: "aaaa.com", category: "a", icon: null },
        {
          title: "Profile",
          uri: "bbbb.com",
          category: "b",
          icon: null,
        },
        { title: "Arduino", uri: "bbbb.com", category: "b", icon: null },
        { title: "Basic Skills", uri: "cccc.com", category: "c", icon: null },
        {
          title: "Sort Array",
          uri: "dddd.com",
          category: "d",
          icon: null,
        },
      ],
    };
  },
  methods: {},
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    },
  },
};
</script>
