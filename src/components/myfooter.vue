<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <footer class="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-4 lg:px-4 ">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-1 xl:col-span-1">
            <p class="text-base text-gray-400 xl:text-center">&copy; 2025 Blueline Design, llc. All rights reserved.</p>
          </div>
          <div class="mt-2 mb-6 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-1 md:gap-8">
              <div class="pl-6">
                <p class="text-lg text-gray-400">Allen G. Rikke: (832) 545-0393</p>
                <p class="text-md text-gray-200">25814 Budde Rd, Spring, TX 77380</p>
                <p class="text-sm text-gray-300">Hours: M-F 9am - 7pm</p>
                <p class="text-sm text-gray-300">By Appointment Only</p>
              </div>
             
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul role="list" class="mt-2">
                  <li v-for="item in navigation.solutions" :key="item.name">
                    <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-2 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" class="mt-2">
                  <li v-for="item in navigation.legal" :key="item.name">
                    <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { defineComponent, h } from 'vue'
  
  const navigation = {
    solutions: [
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Contact Us', href: '/contact' },
    ],
  }
  
  export default {
    setup() {
      return {
        navigation,
      }
    },
  }
  </script>