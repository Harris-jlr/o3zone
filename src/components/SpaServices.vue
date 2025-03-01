<template>
  <div>
    <div class="bg-gray-900 p-12">
      <!-- Title -->
      <h2 class="text-center mb-4 text-gray-200 text-3xl leading-10 tracking-wider">
        O3Zone Services
      </h2>

      <!-- Description & CTA -->
      <p class="text-center text-gray-300 max-w-3xl mx-auto mb-6">
        Discover our range of ozone therapy services designed to promote wellness, detoxification, and healing. 
        Each service is carefully curated to enhance your overall health and vitality. Explore our offerings 
        and schedule your appointment today.
      </p>

      <!-- Responsive Grid Layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 justify-center">
        <!-- Service Card -->
        <div class="max-w-xs bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
          <img src="../assets/03.png" alt="DetoxU" class="h-40 w-full object-cover rounded-lg mb-4">
          <p class="font-bold text-2xl">DetoxU</p>
          <p class="text-gray-700">
            The "DetoxU" Ozone Steam Sauna increases the eliminative, detoxifying, and cleansing capacity of the skin promoting healthy tone and texture.
          </p>
        </div>

        <div class="max-w-xs bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
          <img src="../assets/ozone_spa.png" alt="PEMF" class="h-40 w-full object-cover rounded-lg mb-4">
          <p class="font-bold text-2xl">MaintainU</p>
          <p class="text-gray-700">
            The "MaintainU" Ozone Steam Sauna maintenance program geared towards healthy skin, stimulate the body's immune system, and maintain higher levels of fixed oxygen.
          </p>
        </div>

        <div class="max-w-xs bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
          <img src="../assets/mixture.png" alt="Ear Insufflation" class="h-40 w-full object-cover rounded-lg mb-4">
          <p class="font-bold text-2xl">Ear Insufflation</p>
          <p class="text-gray-700">
            In the ear canal, ozone primarily serves as a disinfectant by killing off pathogens. Ozone is often used for sinus infections, blockages, and other sinus issues.
          </p>
        </div>

        <div class="max-w-xs bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
          <img src="../assets/o3water.jpg" alt="Ozonated Water" class="h-40 w-full object-cover rounded-lg mb-4">
          <p class="font-bold text-2xl">Ozonated Water</p>
          <p class="text-gray-700">
            Amplifies energy and promotes clarity and healing.
          </p>
        </div>
      </div>
      <div class="mt-8 text-center">
          <a href="/contact" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg font-semibold transition shadow-lg">
            Contact Us to Schedule an Appointment
          </a>
        </div>
    </div>
  </div>
</template>
