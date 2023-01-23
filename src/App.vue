<template>
  <div id="wrapper">
    <div class="Homeheader">
      <nav class="navbar">
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
                <router-link to="/log-in" class="navbar-item fsmall latobold px-5">Log In</router-link>
                <router-link to="/register" class="button is-outlined fsmall is-responsive latobold px-5">Register</router-link>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </div>

    <section class="section">
       <router-view/>
    </section>
  
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
@import '../node_modules/bulma';
@font-face {
  font-family: "Menlo";
  src: local("Menlo"),
   url(./assets/Menlo-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Latoregular";
  src: local("Latoregular"),
   url(./assets/Lato-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Latobold";
  src: local("Latobold"),
   url(./assets/Lato-Bold.ttf) format("truetype");
}

.menlo{
  font-family: "Menlo", Helvetica, Arial !important;
}


.latoregular{
  font-family: "Latoregular", Helvetica, Arial !important;
}

.latobold{
  font-family: "Latobold", Helvetica, Arial !important;
}

.fsmall{
  font-size: 0.9rem !important;
}

</style>
