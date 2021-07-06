<template>
  <div class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
    <div class="relative sm:py-16 lg:py-0">
      <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
        <div class="absolute inset-y-0 right-1/2 w-full bg-light rounded-r-3xl lg:right-72" />
        <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
          <defs>
            <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-near-orange-light" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
        </svg>
      </div>
      <div class="relative mx-auto max-w-md sm:max-w-5xl lg:max-w-none lg:pt-20 lg:pb-10">
        <!-- Testimonial card-->
        <div class="relative pt-96 md:pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&?auto=format&fit=crop&fp-z=3&width=1440&height=1440&sat=-100" alt="" />
          <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
          <div class="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
          <div class="relative px-8">
            <blockquote>
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative h-56 lg:h-24">
                  {{ quote.text }}
                </p>
              </div>

              <footer class="mt-4">
                <p class="text-base font-semibold text-indigo-200">
                  <a :href="linkToExplorer(quote.attribution)" target="_blank">
                    {{ quote.attribution }}
                  </a>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <div class="relative sm:max-w-3xl">
      <!-- Content area -->
      <div class="pt-12 sm:pt-0 lg:pt-20">
        <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Learn, earn, <br class="block sm:hidden" />connect and certify.</h2>

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
import { ref } from 'vue';

const stats = [
  { label: 'Courses', value: '12' },
  { label: 'Content', value: '46 hrs' },
  { label: 'Teachers', value: '8' },
  { label: 'Students', value: '123' }
];

const quotes = [
  {
    text: 'This course is a one stop platform to learn everything about Blockchain and Crypto. The beauty of the course is in the simple language used by the trainer to teach a little complex technology.',
    attribution: 'actordin.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'This course was amazing. I knew nothing about blockchain before starting the course. Now I have a good foundational understanding to take the next step in my blockchain journey.',
    attribution: 'aderiniv.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Excellent course to build the fundamentals. Both Instructors are rally amazing',
    attribution: 'ageonimi.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Very, very well explained especially the code examples and the real world examples allows you to relate what you already know to what you are learning.',
    attribution: 'akleopto.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Amazing course that kept me interested throughout. I would highly recommend taking it!',
    attribution: 'anifulky.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Very good foundational information.',
    attribution: 'aniumpro.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Videos and tutorial are so informative.',
    attribution: 'aquafina1.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Super nice course. It almost concludes all concept that makes me get into the field fairly quickly.',
    attribution: 'audatert.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'I enjoyed, loved, and learned from this course.',
    attribution: 'blemater.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'I enjoyed this course very much!',
    attribution: 'busticks.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'A great journey indeed! Completed the course in 2 days and now will be exploring how I can apply this to build my own application.',
    attribution: 'carsetat.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'A good intro to the whole NEAR Protocol, crypto and smart contract world.',
    attribution: 'chentryp.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'I liked a lot, interesting, and funny sometimes, a very good experience of learning.',
    attribution: 'chodhoyb.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Gives a very good intro to the various important topics in the world of NEAR Protocol and blockchain.',
    attribution: 'ctrustre.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Very well structured course.',
    attribution: 'dentlext.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Very informative and detailed explanation of the blockchain and NEAR Protocol.',
    attribution: 'dophonse.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Instruction is very good, helpful support.',
    attribution: 'vuquoccho.near',
    event: 'NEAR Certified Developer'
  },
  {
    text: 'Dedicated instructors',
    attribution: 'tabbythunder.near',
    event: 'NEAR Certified Developer'
  }
];
export default {
  methods: {
    linkToExplorer(account) {
      return `https://explorer.near.org/accounts/${account}`;
    }
  },
  setup() {
    const random = () => Math.floor(Math.random() * quotes.length);
    const sample = quotes[random()];
    const quote = ref(sample);

    setInterval(() => {
      quote.value = quotes[random()];
    }, 5000);

    return {
      quote,
      stats
    };
  }
};
</script>
