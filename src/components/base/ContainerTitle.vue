<template>
  <header>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-extrabold text-blue-gray-600 sm:text-4xl">
        {{ title }}
      </h1>
      <h3 class="text-xl lg:leading-loose pt-6 md:pt-0 italic text-blue-gray-600 ">
        {{ subtitle }}
      </h3>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Welcome to NEAR University',
      validator(value) {
        return value.length <= 30;
      }
    },
    subtitle: {
      type: String,
      default: 'Here you can learn, earn, connect and certify among friends in the NEAR community',
      validator(value) {
        return value.length <= 100;
      }
    }
  },
  setup() {}
};
</script>
