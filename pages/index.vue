<script setup lang="ts">
import { useFlowbite } from "@/composables/flowbite";
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
</script>

<template>
  <div class="relative">
    <div class="fixed bottom-5 right-5 w-16 h-16 z-10">
      <NuxtLink to="https://wa.me/+918888888888?text=I would like to join python course">
        <img src="https://cdn.icon-icons.com/icons2/840/PNG/512/Whatsapp_icon-icons.com_66931.png" alt="whatsapp"
          class="w-16 h-16 block" />
      </NuxtLink>
    </div>
    <HomeHero class="mt-20 md:mt-10" />
    <HomeCourses class="mt-20" />
    <HomeEnroll class="mt-20" />
    <HomeFooter class="mt-20" />
  </div>
</template>

