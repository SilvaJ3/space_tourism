<template>
  <div id="app" class="h-screen">
    <div id="nav" class="fixed top-5 right-0 py-4">
      <nav class="w-screen flex items-center">
        <div class="w-1/3 flex pl-10 items-center">
          <img src="./assets/shared/logo.svg" alt="">
          <span class="border-b border-gray-400 line"></span>
        </div>
        <div class="w-2/3 flex justify-center link_list">
          <router-link to="/" class="text-xl py-6">00 HOME</router-link>
          <router-link to="/destination/1" class="text-xl py-6">01 DESTINATION</router-link>
          <router-link to="/crew" class="text-xl py-6">02 CREW</router-link>
          <router-link to="/technology" class="text-xl py-6">03 TECHNOLOGY</router-link>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Bellefair', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  color: white;
  margin: auto 3%;
}

#nav a.router-link-exact-active {
  color: white;
  border-bottom: solid 2px white
}

nav .line {
  transform: translateX(75px);
  width: 550px
}

.link_list{
  background: #0b0d17bd;
}
</style>
