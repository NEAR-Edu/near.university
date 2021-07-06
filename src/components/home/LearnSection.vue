<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Card -->
    <div v-for="card in cards" :key="card.title" class="bg-white overflow-hidden shadow rounded-lg">
      <div class="p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span :class="[card.iconBG, card.iconFG, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
              <component :is="card.icon" class="h-8 w-8" aria-hidden="true" />
            </span>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="text-sm font-medium text-gray-500 truncate">
                {{ card.title }}
              </dt>
              <dd>
                <div class="text-lg font-medium text-gray-900">
                  {{ card.content }}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-5 py-3">
        <div class="text-sm">
          <a :href="card.href" class="font-medium text-near-royal hover:text-near-blue">
            View all
          </a>
        </div>
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
    iconFG: 'text-near-royal',
    iconBG: 'bg-gray-50',
  },
  {
    title: 'Practice',
    content: '6 workshops',
    href: '#',
    icon: TerminalIcon,
    iconFG: 'text-near-orange',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Watch',
    content: '7 playlists',
    href: '#',
    icon: VideoCameraIcon,
    iconFG: 'text-near-red',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Listen',
    content: '3 podcasts',
    href: '#',
    icon: MicrophoneIcon,
    iconFG: 'text-near-yellow',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Pair',
    content: '27 registered',
    href: '#',
    icon: ChatAlt2Icon,
    iconFG: 'text-near-green',
    iconBG: 'bg-gray-50'
  },
  {
    title: 'Attend',
    content: '3 courses',
    href: '#',
    icon: UserGroupIcon,
    iconFG: 'text-near-blue',
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
