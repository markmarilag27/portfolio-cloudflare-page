<script lang="ts" setup>
import type { CompanyProject } from '~/utils/content/works.content'

const props = defineProps<CompanyProject>()
</script>

<template>
  <section class="bg-white rounded shadow border-sm md:max-w-[48%]">
    <img
      :src="props.imageUrl"
      :title="props.name"
      :alt="props.name"
      loading="lazy"
      width="100%"
      height="auto"
      class="aspect-3/2 object-cover"
    >
    <div class="flex flex-col py-6 px-4">
      <h4 class="text-lg md:text-xl font-bold">
        {{ props.name }}
      </h4>
      <p class="text-xs md:text-base pt-1 pb-2">
        {{ props.description }}
      </p>
      <NuxtLink
        :href="props.url"
        target="__blank"
      >
        <small class="font-bold pt-1">Link: <span class="text-primary">{{ props.url }}</span></small>
      </NuxtLink>
      <small class="font-bold pt-1">Role: <span class="text-primary">{{ props.role }}</span></small>
      <small class="font-bold pt-1">Technology Stack: <span class="text-primary">{{ props.technology_stack.join(', ') }}</span></small>
    </div>
  </section>
</template>
