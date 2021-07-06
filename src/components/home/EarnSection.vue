<template>
  <p class="mb-16 text-lg text-gray-500 text-center">
    Earn NEAR tokens, unique NFTs and swag when you engage with the NEAR University learning community.
  </p>
  <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
    <div v-for="feature in features" :key="feature.name" class="relative">
      <dt>
        <CheckIcon class="absolute h-6 w-6 text-near-green" aria-hidden="true" />
        <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
      </dt>
      <dd class="mt-2 ml-9 text-base text-gray-500">
        {{ feature.description }}
      </dd>
    </div>
  </dl>
</template>
<script>
import { CheckIcon } from '@heroicons/vue/outline';

const features = [
  {
    name: 'Consume content',
    description: 'Earn rewards after reading an article, watching a video or listening to a podcast.'
  },
  {
    name: 'Complete a course',
    description: 'Every road worth traveling begins with a single step.'
  },
  {
    name: 'Refer a friend',
    description: 'The more the merrier! Come one, come all.  Refer your friends, colleagues and contacts to experience the Open Web.'
  },
  {
    name: 'Provide feedback',
    description: 'Meaningful feedback helps us all get better together faster.'
  },
  {
    name: 'Create new content',
    description: 'There is always room for another perspective, style or language.'
  },
  {
    name: 'Create a sequence',
    description: 'When you organize a new learning path for others to follow, it helps us all learn faster.'
  },
  {
    name: 'Curate content',
    description: 'By rating, ranking, sorting and filtering content you help everyone else learn.'
  }
];

export default {
  components: {
    CheckIcon
  },
  setup() {
    const random = () => Math.random() - 0.5;
    features.sort(random);

    return { features };
  }
};
</script>
