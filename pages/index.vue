<script lang="ts" setup>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import WorkSection from '~/components/WorkSection.vue'
import MyProcessSection from '~/components/MyProcessSection.vue'

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
    <HeroSection />
    <AboutSection />
    <WorkSection />
    <MyProcessSection />
  </main>
</template>
