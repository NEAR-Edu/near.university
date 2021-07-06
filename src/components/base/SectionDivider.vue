<template>
  <div class="relative py-20 lg:pl-6">
    <div class="absolute inset-0 mt-3 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-2 border-gray-100" />
    </div>
    <div class="relative flex justify-start">
      <span class="pr-3 font-extrabold text-opacity-30 md:text-opacity-20 bg-white text-near-royal text-4xl md:-ml-6 md:text-6xl lg:ml- pl-0 md:pl-6 lg:pl-0">
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
