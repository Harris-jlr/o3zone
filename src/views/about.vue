// About.vue
<template>
        <MyHeader />
        <AboutPemf />
</template>


<script>
import MyHeader from '../components/MyHeader.vue';
import AboutPemf from '/src/components/AboutPemf.vue'

export default {
  components: { MyHeader, AboutPemf },
}
</script>