<template>
  <main class="mt-10 sm:mt-8">
    <div class="mx-auto max-w-7xl">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
          <div>
            <a href="#" class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
              <span class="ml-3 px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide text-center bg-indigo-500 rounded-full flex"> Apply <span class="ml-2 hidden md:block">Now</span></span>
              <span class="ml-4 text-sm">
                Self-paced and instructor-led
                <br class="md:hidden" />
                courses available
              </span>
              <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
            </a>
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
              <span class="md:block text-gray-700">NEAR Certified to</span>
              {{ ' ' }}
              <span class="text-indigo-400 md:block">
                <span id="benefits">build the future.</span>
              </span>
            </h1>

            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              NEAR University provides opportunities to earn Certificates of Completion that represent the ability to design, develop, test and deploy apps powered by smart contracts on the NEAR platform.
            </p>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
          <div class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
            <div class="px-4 py-8 sm:px-10">
              <div class="mt-6">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted } from 'vue';
import Typed from 'typed.js';

import { ChevronRightIcon } from '@heroicons/vue/outline';

import RegistrationForm from '@/components/RegistrationForm.vue';

export default {
  components: {
    ChevronRightIcon,
    RegistrationForm
  },
  setup() {
    // prettier-ignore
    onMounted(() => {
      const benefits = [
        'lead the revolution',
        'design the future',
        'change the world',
        'make it rain',
        'build the future',
        'NFT all the things',
        'earn VIP bounties',
        'mentor others',
        'follow your dreams',
        'play it safe',
        'execute on plan B',
        'make waves'
      ].sort(() => Math.random() - 0.5);

      new Typed('#benefits', {
        strings: benefits,
        typeSpeed: 60,
        backSpeed: 10,
        backDelay: 2000,
        loop: true,
        loopCount: 3
      });
    });
  }
};
</script>
