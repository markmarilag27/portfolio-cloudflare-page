<script lang="ts" setup>
import { works } from '~/utils'
</script>

<template>
  <div
    id="works"
    class="w-full py-28 bg-[#FFFFFF]"
  >
    <div class="max-w-2xs mx-auto md:max-w-2xl lg:max-w-4xl">
      <h2 class="text-2xl font-bold mb-3 md:text-4xl">
        Professional Experience Highlights
      </h2>
      <p class="text-xs tracking-wide md:text-base lg:text-lg">
        Over the past several years, I’ve driven impactful projects across
        Jellow, Performativ, Appetiser Apps and Metadata Computer Systems. From architecting secure
        freelancer marketplaces and streamlining WealthTech reporting to
        building award-winning web, these roles showcase
        my ability to design robust systems, collaborate with diverse teams, and
        deliver scalable, production-ready solutions.
      </p>

      <article
        v-for="(work, workIndex) in works"
        :key="workIndex"
        class="py-4"
      >
        <header class="flex flex-col md:flex-row gap-2 md:items-center-safe">
          <NuxtLink
            :href="work.companyUrl"
            target="__blank"
          >
            <img
              class="relative block max-w-[100px] max-h-[80px]"
              :src="work.companyLogo"
              :title="work.companyName"
              width="200"
              height="80"
              loading="lazy"
              :alt="work.companyName"
            >
          </NuxtLink>
          <h3 class="text-lg md:text-xl lg:text-2xl font-bold">
            {{ work.companyName }}
          </h3>
        </header>

        <h4 class="text-xs md:text-base font-bold py-3">
          Company Overview
        </h4>
        <ul class="list-disc ml-4">
          <li
            v-for="(overview, overviewIndex) in work.companyOverview"
            :key="overviewIndex"
            class="text-xs md:text-base lg:text-lg py-1"
          >
            {{ overview }}
          </li>
        </ul>

        <h4 class="text-xs md:text-base font-bold py-3">
          Key Contributions
        </h4>
        <ul class="list-disc ml-4">
          <li
            v-for="(contribution, contributionIndex) in work.keyContributions"
            :key="contributionIndex"
            class="text-xs md:text-base lg:text-lg py-1"
          >
            {{ contribution }}
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
