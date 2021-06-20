<template>
  <form action="#" method="POST" class="space-y-4">
    <div>
      <label for="name" class="sr-only">Full name</label>
      <input type="text" name="name" id="name" autocomplete="name" placeholder="Full name" required="" class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div>
      <label for="email" class="sr-only">Email address</label>
      <input type="text" name="email" id="email" autocomplete="email" placeholder="Email address" required="" class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>
      <input id="password" name="password" type="password" placeholder="Password" autocomplete="current-password" required="" class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div>
      <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Create your learning account
      </button>
    </div>
  </form>
</template>
