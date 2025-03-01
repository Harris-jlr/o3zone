// About.vue
<template>
       <MyHeader />
        <MyScheduler />
    
</template>


<script>


import MyHeader from '../components/MyHeader.vue';
import MyScheduler from '../components/MyScheduler.vue';


export default {
  components: { MyScheduler, MyHeader },
}
</script>