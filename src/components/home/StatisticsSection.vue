<template>
  <div class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
    <div class="relative sm:py-16 lg:py-0">
      <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
        <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
        <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
          <defs>
            <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
        </svg>
      </div>
      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
        <!-- Testimonial card-->
        <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&?auto=format&fit=crop&fp-z=3&width=1440&height=1440&sat=-100" alt="" />
          <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
          <div class="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
          <div class="relative px-8">
            <blockquote class="mt-8">
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  {{ quote.text }}
                </p>
              </div>

              <footer class="mt-4">
                <p class="text-base font-semibold text-indigo-200">{{ quote.attribution }}</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
      <!-- Content area -->
      <div class="pt-12 sm:pt-16 lg:pt-20">
        <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
          Learn, earn, connect and certify
        </h2>

        <!-- Stats section -->
        <div class="mt-4">
          <dl class="grid grid-cols-4 gap-x-2 gap-y-4">
            <div v-for="stat in stats" :key="stat.label" class="border-t-2 border-gray-100 pt-6">
              <dt class="text-base font-medium text-gray-500">{{ stat.label }}</dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
        <div class="mt-6 text-gray-500 space-y-5 text-lg">
          <p>
            The opportunities to learn are endless. So how do you choose?
          </p>
          <p>
            NEAR is a decentralized application platform that is secure enough to manage high value assets like money or identity and performant enough to make them useful for everyday people, putting the power of the Open Web in your hands.
          </p>
          <p class="font-extrabold">
            Join our global community of explorers and adventurers seeking a better future for all through the Open Web.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const stats = [
  { label: 'Courses', value: '12' },
  { label: 'Content', value: '46 hrs' },
  { label: 'Teachers', value: '8' },
  { label: 'Students', value: '123' }
];

export default {
  data() {
    return {
      quote: {
        text: 'Learning is awesome',
        attribution: 'A Student'
      }
    };
  },
  setup() {
    return {
      stats
    };
  }
};
</script>
