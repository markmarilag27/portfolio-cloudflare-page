<script lang="ts" setup>
import { skills } from '~/utils'
</script>

<template>
  <div
    id="skills"
    class="w-full bg-[#f5f5f5] py-28"
  >
    <div class="max-w-2xs mx-auto md:max-w-2xl lg:max-w-4xl">
      <h2 class="text-2xl font-bold mb-3 md:text-4xl">
        Expertise & Capabilities
      </h2>
      <p class="text-xs tracking-wide md:text-base lg:text-lg mb-12">
        Below is an overview of the core skills I bring to every project,
        organized by category—from backend frameworks and frontend libraries to
        cloud platforms, DevOps tools, testing practices, and collaboration
        strengths.
      </p>

      <article
        v-for="(record, recordIndex) in skills"
        :key="recordIndex"
        class="py-4"
      >
        <h3 class="text-lg md:text-xl lg:text-2xl font-bold mb-3">
          {{ record.title }}
        </h3>
        <ul class="list-disc ml-4">
          <li
            v-for="(subRecord, subRecordIndex) in record.list"
            :key="subRecordIndex"
            class="text-xs md:text-base lg:text-lg py-1"
          >
            <span class="font-bold opacity-80">{{ subRecord.title }}</span>: <span>{{ subRecord.items.join(', ') }}</span>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
