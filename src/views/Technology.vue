<template>
  <div class="technology h-full px-40 py-44 pt-72 flex flex-col justify-center">
    <h1 class="text-white text-2xl pl-20"><span class="text-gray-600">03</span> SPACE LAUNCH 101</h1>
    <div class="grid grid-cols-2 pt-10">
      <div class="flex justify-center text-white">
        <div class="flex flex-col justify-center text-white mt-5">
          <div
          v-for="technology in technologies" 
          :key="technology.id" 
          class="mr-2 mt-5 cursor-pointer rounded-full w-16 h-16 flex justify-center items-center border-2" 
          @click="selectTechnology(technology.id)"
          :class="currentTechnology == technology.id ? 'active' : ''"
          >
            <span class="text-xl">{{technology.id}}</span>
          </div>
        </div>
        <div v-for="technology in technologies" :key="technology.id" v-show="currentTechnology == technology.id" class="flex flex-col justify-center px-10 mt-10">
          <span class="text-sm mb-3">THE TERMINOLOGY...</span>
          <h1 class="text-white text-5xl mb-6 uppercase">{{ technology.name }}</h1>
          <p class="">{{ technology.description }}</p>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <img :src="require(`@/assets/technology/image-${currentImg}`)" alt="" class="technologyImage">
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: "Technology",
  data() {
    return {
      technologies: store.technology,
      currentTechnology: 1
    }
  },
  methods: {
    selectTechnology(id){
      this.currentTechnology = id;
    },
  },
  computed: {
    currentImg: function(){
      return this.technologies[this.currentTechnology - 1].images.portrait
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTechnology++;
      if(this.currentTechnology === 4) {
        this.currentTechnology = 1;
      }
    }, 5000);
  }
}
</script>

<style scoped>
.technology {
  background-image: url("../assets/technology/background-technology-desktop.jpg");
}

.technologyImage {
  height: 400px
}

.active {
  background-color: white !important;
  color: black !important
}
</style>