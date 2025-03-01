// About.vue
<template>
        <MyHeader />
        <ContactUs />
    
</template>


<script>
import MyHeader from '../components/MyHeader.vue';
import ContactUs from '../components/ContactUs.vue';

export default {
  components: { ContactUs, MyHeader },
}
</script>