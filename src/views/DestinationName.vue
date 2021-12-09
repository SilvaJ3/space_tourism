<template>
  <div class="grid grid-cols-2 py-10">
    <div class="flex flex-col justify-center items-end">
      <img :src="require(`@/assets/destination/image-${destinationName.name.toLowerCase()}.png`)" alt="" class="w-72 h-72">
    </div>
    <div class="flex flex-col justify-center text-white px-20">
      <div class="flex flex-col justify-center">
        <h1 class="text-6xl my-8 uppercase">{{destinationName.name}}</h1>
        <p class="mb-6">{{ destinationName.description }}</p>
        <hr class="h-1 my-3">
        <div class="grid grid-cols-2 mt-4">
          <div class="flex flex-col">
            <p class="text-xs">AVG. DISTANCE</p>
            <h1 class="text-2xl">{{ destinationName.distance }}</h1>
          </div>
          <div class="flex flex-col">
            <p class="text-xs">EST. TRAVEL TIME</p>
            <h1 class="text-2xl">{{ destinationName.travel }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"

export default {
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  computed: {
    destinationName() {
      return store.destinations.find(
        destination => destination.id == this.id
      )
    }
  }
}
</script>

<style>

</style>