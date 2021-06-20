<template>
  <ContainerTitle />
  <main>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-8 sm:px-0">
        <div class="h-full">
          <StatisticsSection />
          <SectionDivider text="Learn" />
          <LearnSection />
          <SectionDivider text="Earn" />
          <div>
            overview of earning
          </div>
          <SectionDivider text="Connect" />
          <div>
            overview of connecting
          </div>
          <SectionDivider text="Certify" />
          <div>
            overview of certifying
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import ContainerTitle from '@/components/base/ContainerTitle.vue';
import SectionDivider from '@/components/base/SectionDivider.vue';

import StatisticsSection from '@/components/home/StatisticsSection.vue';
import LearnSection from '@/components/home/LearnSection.vue';

export default {
  name: 'HomePage',
  components: {
    ContainerTitle,
    SectionDivider,
    StatisticsSection,
    LearnSection
  }
};
</script>
