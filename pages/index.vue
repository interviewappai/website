<script setup lang="ts">
import { useFlowbite } from "@/composables/flowbite";
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
</script>

<template>
<HomeHero />
<HomeCourses />
<HomeEnroll />
<HomeFooter />
</template>
