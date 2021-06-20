<template>
  <SiteContainer>
    <router-view />
  </SiteContainer>
</template>

<script>
import SiteContainer from '@/components/layout/SiteContainer.vue';

export default {
  components: {
    SiteContainer
  }
};
</script>
