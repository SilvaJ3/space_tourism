<template>
  <div class="destination h-full px-40 py-44 pt-80 flex flex-col justify-center">
    <h1 class="text-white text-2xl pl-20"><span class="text-gray-600">01</span> PICK YOUR DESTINATION</h1>
        <div class="flex items-center justify-end text-white mr-48">
          <router-link 
          :to="{name: 'destinationName', params: {id: destination.id}}" 
          v-for="destination in destinations" 
          :key="destination.id"
          class="mr-4 uppercase cursor-pointer py-3"
          >
            <h3>{{destination.name}}</h3>
          </router-link>
        </div>
        <transition name="slide" mode="out-in">
          <router-view :key="$route.path"/>
        </transition>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: "Destination",
  data() {
    return {
      destinations: store.destinations,
    }
  },
}
</script>

<style scoped>
.destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
}

.router-link-exact-active {
  border-bottom: solid 1px white
}

.slide-enter-active, .slide-leaver-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

</style>