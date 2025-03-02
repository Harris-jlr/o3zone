<template>
  <div class="bg-gray-900 pb-20">
    <div class="flex">
     
    
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold text-center mb-2">Contact Us</h2>
    <p class="text-gray-600 text-center mb-6">
      Reach out for more information or to schedule a free consultation.
    </p>

    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block text-gray-700">Your Name</label>
        <input v-model="form.name" type="text" placeholder="Your Name"
          class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200">
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <!-- Email (Optional) -->
      <div>
        <label class="block text-gray-700">Email (Optional)</label>
        <input v-model="form.email" type="email" placeholder="Your Email"
          class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200">
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <!-- Journey Story -->
      <div>
        <label class="block text-gray-700">Your Journey</label>
        <textarea v-model="form.story" rows="5" placeholder="What can we help you with..."
          class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"></textarea>
        <p v-if="errors.story" class="text-red-500 text-sm">{{ errors.story }}</p>
      </div>

      <!-- Contact Number  -->
      <div>
        <label class="block text-gray-700">Contact Number</label>
        <input v-model="form.number" type="number" placeholder="Your Phone Number"
          class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200">
        <p v-if="errors.number" class="text-red-500 text-sm">{{ errors.number }}</p>
      </div>


      <!-- Submit Button -->
      <button type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Submit your Request
      </button>
    </form>
    <div class="flex-row max-w-60 m-auto">
        <img src="../assets/scan2book.png" alt="qr code for groupon">
      </div>
    </div> 
    
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        story: '',
        image: null
      },
      errors: {}
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.form.name) this.errors.name = "Please enter your name.";
      if (this.form.email && !/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = "Enter a valid email.";
      }
      if (!this.form.story) this.errors.story = "Please share your journey.";
      return Object.keys(this.errors).length === 0;
    },
    handleFileUpload(event) {
      this.form.image = event.target.files[0];
    },
    submitForm() {
      if (this.validateForm()) {
        console.log("Journey submitted:", this.form);
        alert("Thank you for sharing your journey!"); 

        // Reset form after submission
        this.form = { name: '', email: '', story: '', image: null };
      }
    }
  }
};
</script>

<style scoped>
/* Custom styles (if needed) */
</style>

  