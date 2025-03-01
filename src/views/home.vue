// Schedule.vue
<template>
      <MyHeader />
      <LandingPage />
</template>

<script>
import MyHeader from '../components/MyHeader.vue';
import LandingPage from '../components/LandingPage.vue';

export default {
  components: { LandingPage, MyHeader },
}
</script>