<template>
  <div class="max-w-7xl mx-auto">
    <div class="space-y-8 sm:space-y-12">
      <div class="space-y-5 sm:mx-auto sm:space-y-4 ">
        <p class="text-xl text-gray-500 mb-16 text-center">
          Meet the community of learners who have contributed to videos, demos, projects and more.
        </p>
      </div>
      <ul class="text-center mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
        <li v-for="person in people" :key="person.account">
          <div class="space-y-4">
            <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="avatar(person.account)" />
            <div class="space-y-2">
              <div class="text-xs font-medium lg:text-sm">
                <h3>{{ person.account }}</h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// prettier-ignore
const github = [
  'aidai524', 'almal', 'alsakhaev', 'amgando', 'aronbsz', 'chadoh',
  'cryptotwilight', 'DannyFung97', 'Danzondo', 'devey', 'ElderOrb',
  'encody', 'evgenykuzyakov', 'GopherJ', 'gyan0890', 'humanman',
  'IgorFroehner', 'ilyar', 'ipsedo1024', 'IsQiao', 'janedegtiareva',
  'marco-sundsk', 'mattlockyer', 'memoriesadrift', 'mikedotexe',
  'murilooon', 'myzyryzm', 'nikbhintade', 'norrec99', 'ozanisgor',
  'tannerwelsh', 'theophoric', 'think-in-universe', 'thisisjoshford',
   'ug02fast', 'vans163', 'willemneal', 'Zachary1Taylor'
];

export default {
  methods: {
    avatar(account) {
      return `https://github.com/${account}.png`;
    }
  },
  setup() {
    const random = () => Math.random() - 0.5;
    const people = github
      .sort(random)
      .slice(0, 18)
      .map(a => ({ account: a }));

    return {
      people
    };
  }
};
</script>
