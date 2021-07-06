<template>
  <ContainerTitle />
  <main>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="px-4 py-8 sm:px-0">
        <div class="h-full">
          <StatisticsSection />
          <SectionDivider text="Learn" />
          <LearnSection />
          <SectionDivider text="Earn" />
          <EarnSection />
          <SectionDivider text="Connect" />
          <ConnectSection />
          <SectionDivider text="Certify" />
          <CertifySection />
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
import EarnSection from '@/components/home/EarnSection.vue';
import ConnectSection from '@/components/home/ConnectSection.vue';
import CertifySection from '@/components/home/CertifySection.vue';

export default {
  name: 'HomePage',
  components: {
    CertifySection,
    ConnectSection,
    ContainerTitle,
    EarnSection,
    LearnSection,
    SectionDivider,
    StatisticsSection
  }
};
</script>
