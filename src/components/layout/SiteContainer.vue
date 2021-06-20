<template>
  <div class="min-h-screen bg-white">
    <SiteNavigation />
    <div class="py-10">
      <slot></slot>
    </div>
    <MetricsSection :display="showMetrics" />
    <NewsletterSection :display="showNewsletter" />
    <SiteFooter :display="showFooter" />
  </div>
</template>

<script>
import NewsletterSection from '@/components/NewsletterSection.vue';
import MetricsSection from '@/components/MetricsSection.vue';
import SiteNavigation from '@/components/base/SiteNavigation.vue';
import SiteFooter from '@/components/base/SiteFooter.vue';

export default {
  components: {
    NewsletterSection,
    MetricsSection,
    SiteNavigation,
    SiteFooter
  },
  computed: {
    showMetrics() {
      return false;
    },
    showNewsletter() {
      return false;
    },
    showFooter() {
      return true;
    }
  }
};
</script>
