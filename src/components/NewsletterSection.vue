<template>
  <div v-show="display">
    <section class="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:flex lg:items-center" aria-labelledby="newsletter-heading">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-extrabold text-blue-gray-600 sm:text-4xl">
          Sign up for our newsletter
        </h2>
        <p class="mt-3 max-w-3xl text-lg text-blue-gray-500">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <label for="emailAddress" class="sr-only">Email address</label>
          <input id="emailAddress" name="emailAddress" type="email" autocomplete="email" required="" class="w-full px-5 py-3 border border-blue-gray-300 shadow-sm placeholder-blue-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md" placeholder="Enter your email" />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Notify me
            </button>
          </div>
        </form>
        <p class="mt-3 text-sm text-blue-gray-500">
          We care about the protection of your data. Read our
          {{ ' ' }}
          <a href="#" class="font-medium underline">
            Privacy Policy.
          </a>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    display: {
      type: Boolean,
      default: false
    }
  }
};
</script>
