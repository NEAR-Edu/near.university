<template>
  <ContainerTitle :title="title" :subtitle="subtitle" />
  <main>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-8 sm:px-0">
        <div>This is the connect page</div>
      </div>
    </div>
  </main>
</template>
<script>
import ContainerTitle from '@/components/base/ContainerTitle.vue';

export default {
  name: 'EarnPage',
  components: {
    ContainerTitle
  },
  data() {
    return {
      title: 'Connect with the Community',
      subtitle: 'Find and engage with members of the learning community'
    };
  }
};
</script>
