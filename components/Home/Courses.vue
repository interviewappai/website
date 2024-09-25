<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            What we offer
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <!-- Pricing Card -->
          <Card title="Advanced Task Manager" week="Week 1" description="Learn how to use the Python Task Manager. " />
          <Card title="Fitness Tracker" week="Week 2" description="Learn how to use the Python Task Manager. " />
          <Card title="Data Analytics" week="Week 3" description="Learn how to use the Python Task Manager. " />
          <Card title="Games Development" week="Week 4" description="Learn how to use the Python Task Manager. " />
        </div>
      </div>
    </section>
  </div>
</template>
