<script lang="ts" setup>
import ProjectDetails from './ProjectDetails.vue'
import { works } from '~/utils'
</script>

<template>
  <div
    id="works"
    class="w-full py-8 md:py-28 bg-[#FFFFFF]"
  >
    <div class="max-w-2xs mx-auto md:max-w-2xl lg:max-w-4xl">
      <h2 class="text-2xl font-bold mb-3 md:text-4xl text-primary">
        Professional Experience Highlights
      </h2>
      <p class="text-xs tracking-wide md:text-base lg:text-lg mb-6">
        Over the past several years, I’ve driven impactful projects across
        Blueshores, Cell 5 and Appetiser Apps.
      </p>

      <article
        v-for="(work, workIndex) in works"
        :key="workIndex"
        class="py-4 flex flex-col md:flex-row md:gap-4"
      >
        <img
          :src="work.companyLogoUrl"
          :alt="work.companyName"
          :title="work.companyName"
          width="83"
          height="82"
          class="max-w-[83px] w-full h-full"
        >
        <div class="content">
          <h3 class="text-lg md:text-xl font-bold">
            {{ work.companyName }}
          </h3>
          <NuxtLink
            :href="work.companyUrl"
            target="__blank"
          >
            <small class="font-bold py-1">Link: {{ work.companyUrl }}</small>
          </NuxtLink>
          <p class="text-xs md:text-base py-1">
            {{ work.companyOverview }}
          </p>
          <small class="font-bold py-4">Bellow projects that I worked at</small>
          <div class="py-6 flex gap-4 flex-wrap">
            <ProjectDetails
              v-for="(project, projectIndex) in work.projects"
              :key="projectIndex"
              :name="project.name"
              :description="project.description"
              :image-url="project.imageUrl"
              :technology_stack="project.technology_stack"
              :url="project.url"
              :role="project.role"
            />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
