<script setup>
import ConnecCard from "./ConnecCard.vue";
</script>

<template>
  <div class="flex flex-wrap justify-around mb-10">
    <ConnecCard
      v-for="connect in conections"
      :key="connect.id"
      :name="connect.name"
      :work="connect.work"
      :about="connect.about"
      :link="connect.link"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      conections: [
        {
          id: 1,
          name: "Jerry Phạm",
          work: "Developer",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "https://www.facebook.com/profile.php?id=100058441982148",
        },
        {
          id: 2,
          name: "Đắc Hiếu",
          work: "Programer",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "https://www.facebook.com/profile.php?id=100058441982148",
        },
        {
          id: 3,
          name: "Vĩ Minh",
          work: "Programer",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "https://www.facebook.com/profile.php?id=100058441982148",
        },
        {
          id: 4,
          name: "Quang Kiên",
          work: "Programer",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          link: "https://www.facebook.com/profile.php?id=100058441982148",
        },
      ],
    };
  },
};
</script>
