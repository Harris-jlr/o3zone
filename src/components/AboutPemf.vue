<template>
  <div>
    <!-- Section 1: Brainwave Frequencies -->
    <div class="bg-gray-200 p-6 sm:p-10 ">
      <h2 class="text-center mb-6 text-gray-800 text-xl sm:text-2xl md:text-3xl leading-10 tracking-wider">
        Let's Start with Learning your Brainwave Frequencies
      </h2>
      <p class="max-w-3xl mx-auto px-4 sm:px-12 text-sm sm:text-base leading-6 text-center">
        Experience deep relaxation and rejuvenation with the HealthyWave Mat, lined with natural gemstones like amethyst, jade, tourmaline, and obsidian...
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:px-12 lg:px-22 gap-6 mt-4 sm:mt-10 justify-items-center min-w-[220px]">
        <div
          v-for="(frequency, index) in frequencies"
          :key="index"
          class="max-w-xs w-full rounded-lg p-6 text-center bg-white shadow-lg flex flex-col items-center"
        >
          <p class="mt-3 font-bold text-lg sm:text-xl">{{ frequency.Name }}</p>
          <img
            :src="frequency.image"
            :alt="frequency.title"
            class="w-full max-w-[200px] h-auto mx-auto object-contain"
            loading="lazy"
          />
          
          <p class="font-bold text-md sm:text-lg text-gray-700">{{ frequency.title }}</p>
          <p class="text-sm sm:text-base leading-6 text-gray-600">{{ frequency.description }}</p>
        </div>
      </div>
    </div>

    <!-- Section 2: Main Image -->
    <img
      src="/src/assets/Picture7.png"
      alt="App screenshot"
      class="mt-4 sm:mt-12 mx-auto rounded-md bg-white/5 ring-1 ring-white/10 w-full max-w-3xl"
    />

    <!-- Section 3: Benefits -->
    <div class="flex flex-wrap justify-center gap-4 mt-6 sm:mt-12">
      <div v-for="(benefit, index) in benefits" :key="index" class="flex flex-col items-center w-36 sm:w-42">
        <img
          :src="benefit.image"
          class="w-16 h-16 object-contain"
          loading="lazy"
        />
        <p class="text-center text-sm sm:text-base mt-2">{{ benefit.text }}</p>
      </div>
    </div>

    <!-- Section 4: Gemstones -->
    <div class="bg-gray-200 p-6 sm:p-10 mt-8">
      <h2 class="text-center mb-6 text-gray-800 text-xl sm:text-2xl md:text-3xl leading-10 tracking-wider">
        The Healthy Wave Mat is Lined with a Layer of Natural Gemstones
      </h2>
      <p class="max-w-3xl mx-auto px-4 sm:px-12 text-sm sm:text-base leading-6 text-center">
        Experience deep relaxation and rejuvenation with the HealthyWave Mat, lined with natural gemstones like amethyst, jade, tourmaline, and obsidian...
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 sm:mt-10 justify-items-center">
        <div
          v-for="(gemstone, index) in gemstones"
          :key="index"
          class="max-w-xs w-full rounded-lg p-6 text-center bg-white shadow-lg"
        >
          <img
            :src="gemstone.image"
            :alt="gemstone.title"
            class="w-full max-w-[150px] h-auto mx-auto object-contain"
            loading="lazy"
          />
          <p class="mt-3 font-bold text-lg sm:text-xl">{{ gemstone.title }}</p>
          <p class="text-sm sm:text-base leading-6 text-gray-600">{{ gemstone.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frequencies: [
        { Name: "Delta", title: "0.5-4Hz", description: "For deep sleep enhancement and recovery", image: "/assets/waves/delta.png" },
        { Name: "Theta", title: "4-7Hz", description: "Assists creativity, memory, and meditation", image: "/assets/waves/theta.png" },
        { Name: "Alpha", title: "7-12Hz", description: "Improves learning and calm focus", image: "/assets/waves/alpha.png" },
        { Name: "Beta", title: "12-30Hz", description: "Enhances performance and quick thinking", image: "/assets/waves/beta.png" },
      ],
      benefits: [
        { text: "Ease Muscle Tension", image: "/assets/svg/Ease_Muscle_Tension_Instantly.svg" },
        { text: "Unlock Restful, Deep Sleep", image: "/assets/svg/Unlock_Restful_Deep_Sleep.svg" },
        { text: "Boost Circulation", image: "/assets/svg/Boost_Circulation_for_Total_Vitality.svg" },
        { text: "Fast-Track Recovery", image: "/assets/svg/Fast-Track_Your_Recovery.svg" },
        { text: "Power Up Energy Naturally", image: "/assets/svg/Power_Up_Your_Energy_Levels_Naturally.svg" },
      ],
      gemstones: [
        { title: "Tourmaline", description: "Shields against negativity, reduces pain, aids sleep", image: "/assets/Tourmaline.png" },
        { title: "Amethyst", description: "Spiritual elevation, peace, stress protection", image: "/assets/Amethyst.png" },
        { title: "Jade", description: "Brings fortune, friendship, emotional healing", image: "/assets/Jade.png" },
        { title: "Obsidian", description: "Strong protection against negativity", image: "/assets/obsidian.png" },
        { title: "Quartz", description: "Amplifies energy, promotes clarity", image: "/assets/quartz.png" },
      ],
    };
  },
};
</script>

