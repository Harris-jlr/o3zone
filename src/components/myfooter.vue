<template>
  <footer class="bg-gray-800 text-gray-400 py-12 px-6">
    <div class="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-16">
      
      <!-- Column 1-2: Copyright -->
      <div class="col-span-3 flex flex-col">
        <p>&copy; 2025 Blueline Design, LLC. All rights reserved.</p>
        <div class="mt-4 flex space-x-6">
          <a href="https://www.facebook.com/OZONETherapy3" class="hover:text-white"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="https://x.com/MyO3zone" class="hover:text-white"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="https://www.instagram.com/myo3zone/" class="hover:text-white"><i class="fab fa-instagram fa-lg"></i></a>
          <a href="https://www.linkedin.com/company/myo3zone/" class="hover:text-white"><i class="fab fa-linkedin fa-lg"></i></a>
        </div>
      </div>

      

      <!-- Column 5: Solutions -->
      <div class="w-32">
        <h3 class="text-sm font-semibold text-gray-300 uppercase">Solutions</h3>
        <ul class="mt-2">
          <li v-for="item in navigation.solutions" :key="item.name">
            <a :href="item.href" class="text-base hover:text-white">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Column 6: Legal -->
      <div class="w-32">
        <h3 class="text-sm font-semibold text-gray-300 uppercase">Legal</h3>
        <ul class="mt-2">
          <li v-for="item in navigation.legal" :key="item.name">
            <a :href="item.href" class="text-base hover:text-white">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

     <!-- Column 4: Allen G. Rikke Contact Information -->
      <div class="text-left col-span-2 flex flex-col min-w-[200px]">
        <p class="text-lg font-bold text-white">Allen G. Rikke</p>
        <p class="text-md">25814 Budde Rd</p>
        <p class="text-md">Spring, TX 77380</p>
        <p class="text-md text-teal-400 mt-3">(832) 545-0393</p>
        <p class="text-sm">Hours: 9-7 Weekdays</p>
        <p class="text-sm">By Appointment Only</p>
      </div>

      <!-- Column 7-8: Newsletter Subscription -->
      <div class="col-span-2 flex flex-col max-w-[220px]">
        <h3 class="text-sm font-semibold text-gray-300 uppercase">Subscribe to our Newsletter</h3>
        <form class="flex flex-col ">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full text-gray-900 rounded-md"
          />
          <button class="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </form>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navigation: {
        solutions: [
          { name: "Analytics", href: "#" },
          { name: "Insights", href: "#" },
        ],
        legal: [
          { name: "Privacy", href: "#" },
          { name: "Terms", href: "#" },
          { name: "Contact Us", href: "/contact" },
        ],
      },
    };
  },
};
</script>

<style>
/* FontAwesome for social icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>
