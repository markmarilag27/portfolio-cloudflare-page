<script lang="ts" setup>
const { width = '100%', height = '100%' } = defineProps<{
  width?: string
  height?: string
}>()
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3_3)">
      <rect
        :width="width"
        :height="height"
        rx="8"
        fill="#6366F1"
      />
      <path
        d="M51 434V79H180L255 304.5L330 79H459V434H361V234L289.5 432.5H220L149 234V434H51Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_3">
        <rect
          :width="width"
          :height="height"
          rx="8"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>
