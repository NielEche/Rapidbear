<template>
  <div id="wrapper">
    <div class="Homeheader" >
      <nav class="navbar bg-transparent" >
        <div class="navbar-brand">
          <router-link to="/" class="px-5 py-2">
            <img alt="Rapidbear logo" width="100" height="40" src="https://res.cloudinary.com/nieleche/image/upload/v1674478276/Rapid_Logo_Purple_1_1_bajmiw.png">
          </router-link>

          <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div> 
        
        <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
          <div class="navbar-end">  
            <router-link to="/about" class="navbar-item fsmall latobold px-5">About</router-link>
            <router-link to="/products" class="navbar-item fsmall latobold px-5">Products</router-link>
            <router-link to="/company" class="navbar-item fsmall latobold px-5">Company</router-link>
            <router-link to="/learn" class="navbar-item fsmall latobold px-5">Learn</router-link>
          </div>

          <div class="navbar-end">  
            <div class="navbar-item">
              <div class="buttons px-5">
                <router-link to="/log-in" class="fsmall color-white latobold px-5">Log In</router-link>
                <router-link to="/register" class=" color-white fsmall is-responsive latobold px-5">Register</router-link>
              </div>
            </div>
          </div>
        </div>

      </nav>

      <section class="section px-0">
        <router-view/>
      </section>
    </div>

  
    <footer class="footer">
        <p class="has-text-centered">Copyright (c) 2023</p>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    }
  }
}
</script>

<style lang="scss">

@import '../src/assets/css/general.css';
@import '../node_modules/bulma';
@font-face {
  font-family: "Menlo";
  src: local("Menlo"),
   url(./assets/fonts/Menlo-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Latoregular";
  src: local("Latoregular"),
   url(./assets/fonts/Lato-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Latobold";
  src: local("Latobold"),
   url(./assets/fonts/Lato-Bold.ttf) format("truetype");
}

.menlo{
  font-family: "Menlo", Helvetica, Arial !important;
  font-weight: bolder !important;
  line-height: 1.3;
}


.latoregular{
  font-family: "Latoregular", Helvetica, Arial !important;
}

.latobold{
  font-family: "Latobold", Helvetica, Arial !important;
}

.Homeheader {
  background: url("./assets/bg.png") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
}

.buy-ad {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./assets/buyad.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}



.p16{
  padding: 1rem 1rem !important;
}

.p38{
  padding: 3rem 3rem !important;
}

.p200{
  padding: 13rem 0rem !important;
}

.f13{
  font-size: 13px !important;
}

.fsmall{
  font-size: 0.9rem !important;
}

.f20{
  font-size: 25px !important;
}

.f40{
  font-size: 40px !important;
}

.f50{
  font-size: 50px !important;
}

.bg-transparent {
  background:transparent !important;
}

.bg-purple {
  background-color: #540052 !important;
}

.bg-white {
  background-color: #fff !important;
}

.color-white{
  position: relative;
  color:#fff !important;
}

.color-black{
  color:#000 !important;
}

.bg-black{
  background-color: #000 !important;
}

.text-center{
  text-align: center !important;
}


</style>
