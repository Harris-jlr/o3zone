// About.vue
<template>
 <MyHeader />
 <AboutAllen />
    
</template>


<script>
import MyHeader from '../components/MyHeader.vue';
import AboutAllen from '/src/components/AboutAllen.vue';

export default {
  components: { AboutAllen, MyHeader},
}
</script>