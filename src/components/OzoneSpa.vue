<template>
<div>
    <div class="flex flex-col">
      <SpaHero />
    </div>

    <div>
        <div >

            <div class="bg-gray-200 p-12">
              
                <h2 class="text-center mb-12 text-gray-800 text-3xl leading-10 tracking-wider">
                  O3Zone Services
                </h2>
              
              <div class="flex flex-nowrap px-5 justify-center gap-4">
                
                  <div class="max-w-3xs min-h-64 rounded-lg px-4 py-6 text-center place-content-center bg-white">
                    <div class="h-100% w-auto">
                      
                        <img src="../assets/03.png" alt="DetoxU" loading="lazy">
                      
                    </div>
                    <div class="m-0 p-0 border-0">
                      <p class="font-bold text-2xl my-2">DetoxU</p>
                      <p class="flex-1 leading-6">
                        The "DetoxU" Ozone Steam Sauna increases the eliminative, detoxifying and cleansing capacity of the skin promoting healthy tone and texture.
                      </p>
                    </div>
                  </div>
                
                  <div class="max-w-3xs min-h-64 rounded-lg px-4 py-6 text-center place-content-center bg-white">
                    <div class="h-100% w-auto">
                      
                        <img src="../assets/spa_seat.png" alt="Amethyst" loading="lazy" class="cards__item__image">
                      
                    </div>
                    <div class="m-0 p-0 border-0">
                      <p class="font-bold text-2xl my-2">MaintainU</p>
                      <p class="flex-1 leading-6">
                        The "MaintainU" Ozone Steam Sauna maintenance program will stimulate the body's immune system and increase levels of oxygen in the bloodstream.
                      </p>
                    </div>
                  </div>
                
                  <div class="max-w-3xs min-h-64 rounded-lg px-4 py-6 text-center place-content-center bg-white">
                    <div class="h-100% w-auto">
                      
                        <img src="../assets/pemf_ad.png" alt="Jade" loading="lazy" class="cards__item__image">
                      
                    </div>
                    <div class="m-0 p-0 border-0">
                      <p class="font-bold text-2xl">PEMF</p>
                      <p class="flex-1 leading-6">
                        Our Healthy Wave mat includes Far infrared heat, red light therapy, negative ions, and natural crystals that work together to provide a relaxing and therapeutic experience.
                      </p>
                    </div>
                  </div>
                
                  <div class="max-w-3xs min-h-64 rounded-lg px-4 py-6 text-center place-content-center bg-white">
                    <div class="h-100% w-auto">
                      
                        <img src="../assets/mixture.png" alt="obsidian" loading="lazy" class="cards__item__image">
                      
                    </div>
                    <div class="m-0 p-0 border-0">
                      <p class="font-bold text-2xl py-2">Ear Insufllation</p>
                      <p class="flex-1 leading-6">
                        In the ear canal, ozone primarily serves as a disinfectant by killing off pathogens. Ozone is often used for sinus infections, blockages, and other sinus issues.
                      </p>
                    </div>
                  </div>
                
                  <div class="max-w-3xs min-h-64 rounded-lg px-4 py-6 text-center place-content-center bg-white">
                    <div class="h-100% w-auto">
                        <img src="../assets/o3water.jpg" alt="quartz" loading="lazy" class="cards__item__image">
                    </div>
                    <div class="m-0 p-0 border-0">
                      <p class="font-bold text-2xl">Ozonated Water</p>
                      <p class="flex-1 leading-6">
                        Amplifies energy and promotes clarity and healing
                      </p>
                    </div>
                  </div>
                
              </div>
            </div>
            
            
            </div>
    </div>
</div>    
</template>

<script>
import SpaHero from './SpaHero.vue';

export default {
  components: { SpaHero },
}
</script>

<style>
</style>