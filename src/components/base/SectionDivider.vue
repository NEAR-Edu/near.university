<template>
  <div class="relative py-12">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-start">
      <span class="pr-3 bg-white text-near-blue text-2xl pl-6 lg:pl-0">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Untitled Section'
    }
  }
};
</script>
