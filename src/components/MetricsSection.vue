<template>
  <div v-show="display">
    <div class="relative bg-gray-900">
      <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div class="h-full w-full xl:grid xl:grid-cols-2">
          <div class="h-full xl:relative xl:col-start-2">
            <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 class="text-sm font-semibold tracking-wide uppercase">
            <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">NEAR by the Numbers</span>
          </h2>
          <p class="mt-3 text-3xl font-extrabold text-white">The Foundation for Creation</p>
          <p class="mt-5 text-lg text-gray-300">NEAR is an open source platform that enables creators, communities, and markets to drive a more open, interconnected and consumer-empowered world.</p>
          <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <p v-for="item in metrics" :key="item.id">
              <span class="block text-2xl font-bold text-white">{{ item.stat }}</span>
              <span class="mt-1 block text-base text-gray-300"
                ><span class="font-medium text-white">{{ item.emphasis }}</span> {{ item.rest }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const metrics = [
  { id: 1, stat: '250K+', emphasis: 'MainNet accounts', rest: 'were created by people just like you.' },
  { id: 2, stat: '150k+', emphasis: 'MainNet daily transactions', rest: 'demonstrate strong growth of the network.' },
  { id: 3, stat: '100+', emphasis: 'Students', rest: 'have completed the NEAR Certified Developer course.' },
  { id: 4, stat: '10+', emphasis: 'NEAR Certified Developers', rest: 'have completed the NCD.L1v verification' }
];

export default {
  props: {
    display: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    return {
      metrics
    };
  }
};
</script>
