<template>
  <div class="home h-screen p-20 flex items-center justify-center">
    <div class="grid grid-cols-2">
      <div class="flex flex-col p-14 text-white">
        <h1 class="text-4xl leading-10">SO, YOU WANT TO TRAVEL TO <span class="text-9xl">{{`\nSPACE`}}</span></h1>
        <p class="mt-4 break-words leading-8">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="bg-white rounded-full h-60 w-60 flex justify-center items-center">
          <h1 class="text-3xl">EXPLORE</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style>
.home {
  background-image: url("../assets/home/background-home-desktop.jpg")
}

</style>