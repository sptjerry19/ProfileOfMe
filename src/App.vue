<script setup>
import SearchScreen from "./components/SearchScreen.vue";
import UserProfile from "./components/UserProfile.vue";
import SetTings from "./components/SetTings.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="flex relative flex-col items-center dark:bg-zinc-800">
    <UserProfile />
    <SearchScreen :open-panel="openPanel" />
    <SetTings />
  </div>
  <Navigation />
</template>

<script>
export default {
  data() {
    return {
      openPanel: false,
    };
  },
};
</script>
