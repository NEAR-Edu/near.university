<template>
  <ContainerTitle :title="title" :subtitle="subtitle" />
  <main>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-8 sm:px-0 space-y-3">
        <p>
          NEAR is growing and so is our community of creators, developers and entrepreneurs.
        </p>
        <p>
          To support this growth we're training 1000 teachers to build the Open Web.
        </p>
        <p>
          We want your help.
        </p>
        <ul class="list-disc list-inside space-y-3">
          <li>
            <strong>Are you an experienced teacher?</strong>
            <br />
            <em class="ml-6">If you are, great! If not, you could become a teacher -- we're training and hiring teachers now!</em>
          </li>
          <li>
            <strong>Have you created educational content for the NEAR community? </strong>
            <br />
            <em class="ml-6">If you have, great! If not, you could earn NEAR tokens to teach others -- we're funding contributions now!</em>
          </li>
        </ul>
        <div class="border-t border-gray-200 py-5">
          <em>Fill out the form below to share more about yourself and your interests, including the work you have already created. We will be reaching out to interested teachers and contributors over coming months as our demands for content and training continue to grow.</em>
        </div>
        <div class="border-"></div>
        <EarnForm />
      </div>
    </div>
  </main>
</template>
<script>
import ContainerTitle from '@/components/base/ContainerTitle.vue';
import EarnForm from '@/components/focus/earn/EarnForm.vue';

export default {
  name: 'EarnPage',
  components: {
    ContainerTitle,
    EarnForm
  },
  data() {
    return {
      title: 'Earn by Helping Others Learn',
      subtitle: 'Make a tutorial, become a coach or answer a few questions to start earning NEAR tokens'
    };
  }
};
</script>
