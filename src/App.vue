<template>

  <div class="w-full mx-px center">
     <router-view />
     <myfooter />
  </div>
  

</template>

<script>

import myfooter from '/src/components/myfooter.vue'


export default {
  components: { myfooter },
}
</script>

<style>
</style>