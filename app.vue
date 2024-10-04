<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap");

.logo {
  font-family: "Silkscreen", cursive;
  font-weight: 700;
  background-size: 400% 400%;
  animation: Gradient 5s ease infinite;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 40%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
