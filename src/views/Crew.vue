<template>
  <div class="crew h-full px-40 py-44 pt-72 flex flex-col justify-center">
    <h1 class="text-white text-2xl pl-20"><span class="text-gray-600">02</span> MEET YOUR CREW</h1>
    <div class="grid grid-cols-2 pt-10">
      <div class="flex flex-col justify-center text-white">
        <div v-for="crew in crews" :key="crew.id" v-show="currentCrew == crew.id" class="flex flex-col justify-center">
          <h2 class="text-gray-500 mb-0 text-4xl">{{ crew.role }}</h2>
          <h1 class="text-white text-7xl mb-5">{{ crew.name }}</h1>
          <p class="pr-10">{{ crew.bio }}</p>
        </div>
        <div class="flex justify-start text-white">
          <div
          v-for="crew in crews" 
          :key="crew.id" 
          class="mr-4 mt-10 cursor-pointer bg-gray-500 rounded-full w-3 h-3" 
          @click="selectCrew(crew.id)" 
          :class="currentCrew == crew.id ? 'active' : ''"
          >
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-end">
        <img :src="require(`@/assets/crew/image-${currentImg}.png`)" alt="" class="profile">
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: "Destination",
  data() {
    return {
      crews: store.crew,
      currentCrew: 1
    }
  },
  methods: {
    selectCrew(id){
      this.currentCrew = id;
    },
  },
  computed: {
    currentImg: function(){
      return this.crews[this.currentCrew - 1].name.toLowerCase().split(" ").join("-")
    }
  },
  mounted() {
    setInterval(() => {
      this.currentCrew++;
      if(this.currentCrew == 5) {
        this.currentCrew = 1;
      }
    }, 5000);
  }
}
</script>

<style scoped>
.crew {
  background-image: url("../assets/crew/background-crew-desktop.jpg");
}
.profile {
  height: 490px;
}

.active {
  background-color: white !important;
}
</style>