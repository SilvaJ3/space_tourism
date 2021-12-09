<template>
  <div class="destination h-full px-40 py-44 pt-80 flex flex-col justify-center">
    <h1 class="text-white text-2xl pl-20"><span class="text-gray-600">01</span> PICK YOUR DESTINATION</h1>
    <div class="grid grid-cols-2 py-10">
      <div class="flex flex-col justify-center items-end">
        <img :src="require(`@/assets/destination/image-${currentImg}.png`)" alt="" class="w-72 h-72">
      </div>
      <div class="flex flex-col justify-center text-white px-20">
        <div class="flex justify-start text-white">
          <router-link 
          :to="{name: 'destinationName', params: {id: destination.id}}" 
          v-for="destination in destinations" 
          :key="destination.id"
          class="mr-4 uppercase cursor-pointer py-3" 
          >
            <h3>{{destination.name}}</h3>
          </router-link>
        </div>
        <router-view :key="$route.path"/>
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
  // methods: {
  //   selectDestination(id){
  //     this.currentDestination = id;
  //   } 
  // },
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