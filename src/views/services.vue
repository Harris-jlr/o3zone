// About.vue
<template>
        <MyHeader />
        <SpaServices />
    
</template>


<script>
import MyHeader from '../components/MyHeader.vue';
import SpaServices from '../components/SpaServices.vue';

export default {
  components: { SpaServices, MyHeader },
}
</script>