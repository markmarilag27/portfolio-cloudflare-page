<script lang="ts" setup>
import { myProcess } from '#imports'
</script>

<template>
  <section class="bg-gradient-to-br from-gray-50 to-gray-200 py-8 md:py-28">
    <div class="max-w-2xs mx-auto md:max-w-2xl lg:max-w-4xl">
      <h2 class="text-2xl font-bold mb-3 md:text-4xl text-primary">
        {{ myProcess.title }}
      </h2>
      <p class="text-xs tracking-wide md:text-base lg:text-lg mb-6">
        {{ myProcess.description }}
      </p>

      <article
        v-for="(process, processIndex) in myProcess.process"
        :key="processIndex"
        class="py-4"
      >
        <h3 class="text-lg font-bold mb-1">
          {{ process.title }}
        </h3>
        <p class="text-xs tracking-wide md:text-base mb-2">
          {{ process.description }}
        </p>
        <ul
          v-if="process.list"
          class="list-disc ml-4"
        >
          <li
            v-for="(text, textIndex) in process.list"
            :key="textIndex"
            class="text-xs md:text-base py-1"
          >
            {{ text }}
          </li>
        </ul>
        <p
          v-if="process.closingText"
          class="text-xs tracking-wide md:text-base mt-2"
        >
          {{ process.closingText }}
        </p>
      </article>
    </div>
  </section>
</template>
