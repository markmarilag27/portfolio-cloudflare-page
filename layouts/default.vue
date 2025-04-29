<script lang="ts" setup>
import SvgLogo from '~/components/SvgLogo.vue'
import { navigationLinks } from '~/utils'
</script>

<template>
  <div>
    <nav class="fixed top-0 right-0 left-0 z-50 bg-[#000000] py-3">
      <div class="max-w-2xs mx-auto md:max-w-2xl lg:max-w-4xl flex justify-between">
        <NuxtLink to="/">
          <SvgLogo class="block relative max-w-12 max-h-12" />
        </NuxtLink>
        <div class="flex gap-4 items-center">
          <a
            v-for="(link, index) in navigationLinks"
            :key="index"
            :href="link.href"
            :target="link.target"
            class="text-white text-sm font-bold"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </nav>
    <NuxtPage />
    <footer class="bg-white py-20 text-center">
      <small>
        &copy; 2025, all rights reserved
      </small>
    </footer>
  </div>
</template>
