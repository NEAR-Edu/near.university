<template>
  <ContainerTitle :title="title" :subtitle="subtitle" />
  <main>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-8 sm:px-0">
        <div class="h-full">
          <ActivitiesSection />
          <InstructorsSection />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import ContainerTitle from '@/components/base/ContainerTitle.vue';
import InstructorsSection from '@/components/focus/learn/InstructorsSection.vue';
import ActivitiesSection from '@/components/focus/learn/ActivitiesSection.vue';

export default {
  name: 'LearnPage',
  components: {
    ContainerTitle,
    InstructorsSection,
    ActivitiesSection
  },
  data() {
    return {
      title: 'Learn to Build the New Web',
      subtitle: 'Build web3 (ie. blockchain-powered & decentralized) apps today'
    };
  }
};
</script>
