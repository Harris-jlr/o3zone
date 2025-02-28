<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="bg-white">
      <!-- Header -->
      <div class="relative bg-gray-800">
        <div class="absolute inset-0">
          <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
          <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div class="relative">
          <iframe width="100%" height="500px" src="https://www.youtube.com/embed/VvR8Z3JUyuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>
  
      
    </div>
    <planetChart/>
  </template>
  
  <script>
  import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'
  import PlanetChart from '/src/components/planetChart.vue'
  
  const supportLinks = [
    {
      name: 'Repair and Maintenance',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: PhoneIcon,
    },
    {
      name: 'Tools and Tracking',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: SupportIcon,
    },
    {
      name: 'Project Details',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      icon: NewspaperIcon,
    },
  ]
  
  export default {
    setup() {
      return {
        supportLinks, 
        components: { PlanetChart },
      }
    },
  }
  </script>