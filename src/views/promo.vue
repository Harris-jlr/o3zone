// About.vue
<template>
        <MyHeader />
        <SpaHero />
    
</template>


<script>
import MyHeader from '../components/MyHeader.vue';
import SpaHero from '/src/components/SpaHero.vue'

export default {
  components: { SpaHero, MyHeader},
}
</script>