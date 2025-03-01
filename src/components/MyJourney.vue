<template>
    <!-- Fullscreen Overlay -->
    <div class="inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50 pb-20">
      <div class="max-w-2xl w-full mx-4 p-6 bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg border border-gray-700">
        <h2 class="text-2xl font-bold text-center text-white mb-2">Share Your Journey</h2>
        <p class="text-gray-300 text-center mb-6">
          Inspire others by sharing your experience with O3Zone.
        </p>
  
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Name -->
          <div>
            <label class="block text-gray-200">Your Name</label>
            <input v-model="form.name" type="text" placeholder="Your Name"
              class="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-400">
            <p v-if="errors.name" class="text-red-400 text-sm">{{ errors.name }}</p>
          </div>
  
          <!-- Email (Optional) -->
          <div>
            <label class="block text-gray-200">Email (Optional)</label>
            <input v-model="form.email" type="email" placeholder="Your Email"
              class="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-400">
            <p v-if="errors.email" class="text-red-400 text-sm">{{ errors.email }}</p>
          </div>
  
          <!-- Journey Story -->
          <div>
            <label class="block text-gray-200">Your Journey</label>
            <textarea v-model="form.story" rows="5" placeholder="Share your experience..."
              class="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring focus:ring-blue-400"></textarea>
            <p v-if="errors.story" class="text-red-400 text-sm">{{ errors.story }}</p>
          </div>
  
          <!-- Image Upload (Optional) -->
          <div>
            <label class="block text-gray-200">Upload a Photo (Optional)</label>
            <input type="file" @change="handleFileUpload" accept="image/*"
              class="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
            <p v-if="form.image" class="text-gray-400 text-sm">Selected: {{ form.image.name }}</p>
          </div>
  
          <!-- Submit Button -->
          <button type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Share Your Story
          </button>
  
          <!-- Cancel Button -->
          <button @click="closeForm"
            class="mt-2 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Cancel
          </button>
        </form>
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
  
          // Reset form and navigate to the home page
          this.form = { name: '', email: '', story: '', image: null };
          this.$router.push('/'); // Redirect to home page
        }
      },
      closeForm() {
        this.$emit('close'); // Emit event to close the form
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add fade-in animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .fixed {
    animation: fadeIn 0.3s ease-in-out;
  }
  </style>
  