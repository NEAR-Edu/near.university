<template>
  <div>
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl font-extrabold text-blue-gray-600  tracking-tight sm:text-4xl">Meet our instructors</h2>
        <p class="text-xl text-blue-gray-600">
          NEAR University aims to recruit 1000 teachers into the NEAR ecosystem.
        </p>
        <p class="text-xl text-blue-gray-600">
          Here are the first few brave souls.
        </p>
        <a class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" href="https://near.org/educate" target="_blank">Join us!</a>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-6 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:gap-x-8">
          <li v-for="person in people" :key="person.name" class="relative rounded-lg border border-gray-300 bg-white px-4 py-4 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <a :href="'https://github.com/' + person.github" target="_blank">
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" :src="profileImage(person.github)" alt="" />
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>{{ person.name }}</h3>
                  <p class="text-indigo-600">{{ person.role }}</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let people = [
  {
    name: 'Sherif Abushadi',
    github: 'amgando'
  },
  {
    name: 'Jacob Lindhal',
    github: 'encody',
    role: 'Engineer, NEAR Education'
  },
  {
    name: 'Ryan Mehta',
    github: 'mehtaphysical',
    role: 'Engineer, NEAR Education'
  },
  {
    name: 'Hiba Machfej',
    github: 'hiba-machfej',
    role: 'Jr. Engineer, NEAR Education'
  },
  {
    name: 'Anuj Duggal',
    github: 'BigDaddy-Zephyr',
    role: 'Jr. Engineer, NEAR Education'
  },
  {
    name: 'Ozan İşgör',
    github: 'ozanisgor',
    role: 'Jr. Engineer, NEAR Education'
  },
  {
    name: 'Çağatay Soyer',
    github: 'norrec99',
    role: 'Jr. Engineer, NEAR Education'
  },
  {
    name: 'Matt Lockyer',
    github: 'mattlockyer',
    role: 'Engineer, NEAR DevRel'
  },
  {
    name: 'Vadim Ilin',
    github: 'zavodil',
    role: 'Engineer, NEAR DevRel'
  },
  {
    name: 'Evgeny Kuzyakov',
    github: 'evgenykuzyakov',
    role: 'Engineer, NEAR Core'
  },
  {
    name: 'Willem Wyndham',
    github: 'willemneal',
    role: 'Engineer, NEAR Core'
  },
  {
    name: 'Vlad Frolov',
    github: 'frol',
    role: 'Engineering Leader'
  }
];

export default {
  methods: {
    profileImage(account) {
      return `https://github.com/${account}.png`;
    }
  },
  setup() {
    people = people
      .map(p => {
        p.role = p.role || 'Educator @ NEAR';
        return p;
      })
      .sort(() => Math.random() - 0.5);

    return {
      people
    };
  }
};
</script>
