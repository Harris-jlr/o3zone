<template>
  <div class="bg-gray-900">

    <div class="relative isolate pt-14">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="py-24 sm:py-32 md:py-18 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl text-center">
            <img >
            <h1 class="text-balance text-5xl font-semibold tracking-tight pt-10 text-white sm:text-6xl">Ozone Steam Sauna Therapy</h1>
            <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Few wellness practices are as timeless as the sauna. They are well-loved for their calming, restorative effects. When combined with O3 they go way beyond just relaxation, the health benefits of this type of sauna can be significant.</p>
            <div class="mt-4 flex items-center justify-center gap-x-6">
              <a href="/services" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
              <a href="/history" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <img src="../assets/ozone_spa.png" alt="App screenshot" width="2432" height="1442" class="mt-4 rounded-md pt-10 sm:mt-24 lg:mt-4" />
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Ozone Services', href: '/ozone' },
  { name: 'The PEMF Mat', href: '/pemf' },
  { name: 'Share your Journey', href: '/journey' },
  { name: 'Schedule Now', href: '/schedule' },
  { name: 'Company', href: '/company' },
]

const mobileMenuOpen = ref(false)
</script>