<script lang="ts" setup>
const url = useRequestURL()

useHead({
  link: [
    {
      rel: 'canonical',
      href: url.href,
    },
  ],
})
</script>

<template>
  <main>
    <div class="max-w-2xs mx-auto md:max-w-2xl lg:max-w-4xl">
      <h1 class="text-3xl font-bold">
        I’m Mark Marilag — Full Stack Developer in the Philippines
      </h1>
      <p>
        I have seven years of experience building key platforms—from secure freelance-hiring and wealth-management
        dashboards to high-volume HR and fundraising apps. I design scalable, user-centered solutions that help
        companies grow and make complex processes simpler. Whether you need to update legacy systems or start a new
        project, let’s work together to bring your next product to life.
      </p>
    </div>
  </main>
</template>
