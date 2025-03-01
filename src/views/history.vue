// About.vue
<template>
       <MyHeader />
        <OzoneHistory />
    
</template>


<script>


import MyHeader from '../components/MyHeader.vue';
import OzoneHistory from '../components/OzoneHistory.vue';


export default {
  components: { OzoneHistory, MyHeader },
}
</script>