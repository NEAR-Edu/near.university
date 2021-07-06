<template>
  <div class="py-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 ">
      <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <div v-for="(card, cardIdx) in cards" :key="card.title" :class="[`hover:bg-${card.iconFG}-light`, cardIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', cardIdx === 1 ? 'sm:rounded-tr-lg' : '', cardIdx === cards.length - 2 ? 'sm:rounded-bl-lg' : '', cardIdx === cards.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
          <div>
            <span :class="[card.iconBG, `text-${card.iconFG}`, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
              <component :is="card.icon" class="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium  ">
              <a :href="card.href" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ card.title }}
              </a>
              <div class="text-lg font-extralight text-gray-900 hover:text-gray-100">
                {{ card.content }}
              </div>
            </h3>
            <p class="mt-2 text-sm text-gray-500  hover:text-gray-100">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      </div>
      <div class="hidden lg:block">
        <img class="opacity-20" src="@/assets/choices.png" alt="People working on laptops" />
      </div>
    </div>
  </div>
</template>

<script>
import { UserGroupIcon, MicrophoneIcon, TerminalIcon, BookOpenIcon, ChatAlt2Icon, VideoCameraIcon } from '@heroicons/vue/outline';

// prettier-ignore
const cards = [
  {
    title: 'Read',
    content: '12 resources',
    href: '#',
    icon: BookOpenIcon,
    iconFG: 'near-royal',
    iconBG: 'bg-gray-50',
  },
  {
    title: 'Practice',
    content: '6 workshops',
    href: '#',
    icon: TerminalIcon,
    iconFG: 'near-orange',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Watch',
    content: '7 playlists',
    href: '#',
    icon: VideoCameraIcon,
    iconFG: 'near-red',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Listen',
    content: '3 podcasts',
    href: '#',
    icon: MicrophoneIcon,
    iconFG: 'near-yellow',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Pair',
    content: '27 registered',
    href: '#',
    icon: ChatAlt2Icon,
    iconFG: 'near-green',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Attend',
    content: '3 courses',
    href: '#',
    icon: UserGroupIcon,
    iconFG: 'near-blue',
    iconBG: 'bg-gray-50'
  }
];

export default {
  setup() {
    return {
      cards
    };
  }
};
</script>
