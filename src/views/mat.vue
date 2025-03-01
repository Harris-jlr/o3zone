// About.vue
<template>
        <MyHeader />
        <PemfHero />
    
</template>


<script>
import MyHeader from '../components/MyHeader.vue';
import PemfHero from '../components/PemfHero.vue'

export default {
  components: { PemfHero, MyHeader },
}
</script>