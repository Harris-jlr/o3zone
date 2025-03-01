// About.vue
<template>
        <MyHeader />
        <MyJourney />
    
</template>


<script>
import MyHeader from '../components/MyHeader.vue';
import MyJourney from '../components/MyJourney.vue';

export default {
  components: { MyJourney, MyHeader },
}
</script>