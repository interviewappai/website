<script setup lang="ts">
import Card from "./Card.vue";
const Data = [
  {
    title: "Python Basics & Advanced To-Do List",
    week: "Week 1",
    description: "Explore Python fundamentals while building a feature-rich to-do list application. Learn control flow, functions, and data structures as you create a priority-based task manager with a graphical user",
    features: [
      "Priority-based task management",
      "Task editing and deletion",
      "Automatic task sorting",
      "Priority-based filtering",
      "Data persistence",
      "High-priority task alerts",
    ],
  },
  {
    title: "Object-Oriented Programming & Fitness Tracker",
    week: "Week 2",
    description:
      "Dive into object-oriented programming by developing a comprehensive fitness tracking application. Create user profiles, log workouts, and visualize progress while mastering OOP concepts.",
    features: [
      "User profile management",
      "Workout logging and tracking",
      "Progress visualization",
      "Goal setting and monitoring",
      "Data persistence",
      "Performance graphs and charts",
    ],
  },
  {
    title: "Python Modules & Custom Data Analysis",
    week: "Week 3",
    description:
      " Learn to create reusable Python modules while building a powerful data analysis tool. Implement statistical functions, process CSV files, and develop a flexible module for various data analysis tasks.",
    features: [
      "Custom statistical functions",
      "CSV file processing",
      "Robust error handling",
      "Data filtering and sorting",
      "Reusable module structure",
      "Customizable analysis settings",
    ],
  },
  {
    title: "Essential Modules & Game Developmen",
    week: "Week 4",
    description:
      "Explore essential Python modules while creating an engaging game. Utilize Pygame for graphics, implement game mechanics, and incorporate time-based challenges using built-in Python modules.",
    features: [
      "Player movement and controls",
      "Multiple levels with scaling difficulty",
      "Collision detection",
      "Scoring system",
      "Game state management",
      "Sound and music integration",
      "Random enemy generation",
      "Time-based challenges",
    ],
  },
];
</script>

<template>
  <div>
    <section class="bg-white dark:bg-gray-900" id="courses">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            What we offer
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Dive into Python programming with our hands-on, project-driven course.           </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <!-- Pricing Card -->
          <Card v-for="item,index in Data" :title="item.title" :week="item.week" :description="item.description"
            :features="item.features" :key="item.index" />
        </div>
      </div>
    </section>
  </div>
</template>
