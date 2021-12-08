<template>
  <div class="destination h-full px-40 py-44 pt-80 flex flex-col justify-center">
    <h1 class="text-white text-2xl pl-20"><span class="text-gray-600">01</span> PICK YOUR DESTINATION</h1>
    <div class="grid grid-cols-2 py-10">
      <div class="flex flex-col justify-center items-end">
        <img :src="require(`@/assets/destination/image-${currentImg}.png`)" alt="" class="w-72 h-72">
      </div>
      <div class="flex flex-col justify-center text-white px-20">
        <ul class="flex justify-start text-white">
          <li 
          v-for="destination in destinations" 
          :key="destination.id" 
          class="mr-4 uppercase cursor-pointer py-3" 
          @click="selectDestination(destination.id)" 
          :class="currentDestination == destination.id ? 'border-b-2' : ''"
          >
            {{ destination.name }}
          </li>
        </ul>
        <div v-for="destination in destinations" :key="destination.id" v-show="currentDestination == destination.id" class="flex flex-col justify-center">
          <h1 class="text-6xl my-8 uppercase">{{destination.name}}</h1>
          <p class="mb-6">{{ destination.description }}</p>
          <hr class="h-1 my-3">
          <div class="grid grid-cols-2 mt-4">
            <div class="flex flex-col">
              <p class="text-xs">AVG. DISTANCE</p>
              <h1 class="text-2xl">{{ destination.distance }}</h1>
            </div>
            <div class="flex flex-col">
              <p class="text-xs">EST. TRAVEL TIME</p>
              <h1 class="text-2xl">{{ destination.travel }}</h1>
            </div>
          </div>
        </div>
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
      destinations: store.destinations,
      currentDestination: 1
    }
  },
  methods: {
    selectDestination(id){
      this.currentDestination = id;
    } 
  },
  computed: {
    currentImg: function(){
      return this.destinations[this.currentDestination - 1].name.toLowerCase()
    }
  }
}
</script>

<style scoped>
.destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
}
</style>