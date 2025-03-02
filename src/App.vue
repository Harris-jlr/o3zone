<template>
  <div class="w-full mx-px center">
    <router-view />
    <myfooter />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import myfooter from '/src/components/myfooter.vue';

export default {
  components: { myfooter },
  setup() {
    onMounted(() => {
      // Inject Google Analytics Script
      const scriptTag = document.createElement('script');
      scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-D3QR9ZCELH';
      scriptTag.async = true;
      document.head.appendChild(scriptTag);

      // Google Analytics Initialization
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-D3QR9ZCELH');
    });
  }
};
</script>

<style>
/* Add any global styles here */
</style>