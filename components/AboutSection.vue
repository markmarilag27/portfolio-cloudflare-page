<script lang="ts" setup>
import MyPicture from '~/assets/images/me.png'
</script>

<template>
  <div
    id="about"
    class="max-w-2xs mx-auto md:max-w-2xl py-8 md:py-28 lg:max-w-4xl flex flex-col md:flex-row-reverse items-center-safe gap-6 md:gap-6"
  >
    <div
      class="block rounded-full max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] flex-1"
    >
      <img
        class="relative block rounded-full w-full h-full"
        :src="MyPicture"
        width="120"
        height="120"
        alt="Profile picture"
        title="Linkedin profile"
        loading="lazy"
      >
    </div>
    <article class="flex-1">
      <h2 class="text-3xl font-bold mb-3 md:text-5xl lg:text-6xl text-primary">
        I’m Mark Marilag — Full Stack Developer in the Philippines
      </h2>
      <p class="text-xs tracking-wide md:text-base lg:text-lg">
        I have seven years of experience building key platforms—from secure
        freelance-hiring and wealth-management dashboards to high-volume HR
        and fundraising apps. I design scalable, user-centered solutions that
        help companies grow and make complex processes simpler. Whether you
        need to update legacy systems or start a new project, let’s work
        together to bring your next product to life.
      </p>
    </article>
  </div>
</template>
