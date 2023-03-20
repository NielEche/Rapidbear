<template>
  <div id="wrapper">
    <div class="" >
      <nav class="navbar bg-transparent" >
        <div class="navbar-brand">
          <router-link to="/" class="px-6 py-2">
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
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link fsmall latobold">
                Products
              </a>

              <div class="navbar-dropdown">
                <router-link to="/counterView" class="navbar-item fsmall latobold px-5">
                  Counter
                </router-link>
                <router-link to="/log-in" class="navbar-item fsmall latobold px-5">Rapid Pay Gateway</router-link>
              </div>
            </div>
            <router-link to="/learn" class="navbar-item fsmall latobold px-5">Learn</router-link>
          </div>

          <div class="navbar-end ">  
            <div class="navbar-item">
              <div class="buttons px-5">
                <router-link to="/log-in" class="fsmall color-black latobold px-5">Log In</router-link>
                <router-link to="/register" class=" color-black fsmall is-responsive latobold px-5">Register</router-link>
              </div>
            </div>
          </div>
        </div>

      </nav>

      <section class="section px-0 pt-0 pb-0">
        <router-view/>
      </section>
    </div>

  
    <footer class="footer bg-white pb-2 color-purple">
              <!-- footer section -->
      <div class="container py-5 is-fluid ">
        <div class="columns pb-2">
          <div class="column ">
            <ul class="menu-list">
              <li>
                <a class=""><strong>About</strong></a>
                <ul>
                  <li><router-link to="/about">About Us</router-link></li>
                  <li><a>News</a></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="column ">
            <ul class="menu-list">
              <li>
                <a class=""><strong>Products</strong></a>
                <ul>
                  <li><router-link to="/counterView"> Counter</router-link></li>
                  <li><router-link to="/log-in">Rapid Pay Gateway</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul class="menu-list">
              <li>
                <a class=""><strong>Services</strong></a>
                <ul>
                  <li><router-link to="/log-in">Buy / Sell Crypto</router-link></li>
                  <li><router-link to="/log-in">Wallet</router-link></li>
                  <li><router-link to="/log-in">Fund</router-link></li>
                  <li><router-link to="/log-in">Withdraw</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="column ">
            <ul class="menu-list">
              <li>
                <a class=""><strong>Support</strong></a>
                <ul>
                  <li><a>Prices</a></li>
                  <li><a>FAQs</a></li>
                  <li><a>Help Center</a></li>
                  <li><a>Give Us Feedback</a></li>
                  <li><a>Privacy Policy</a></li>
                  <li><a>Terms of system</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="column ">
              <ul class="menu-list">
                <li>
                  <a class=""><strong>Learn</strong></a>
                  <ul>  
                    <li><a>Trading Rules</a></li>
                    <li><a>Academy</a></li>
                    <li><a>Help Center</a></li>
                    <li><a>Browse crypto prices</a></li>
                  </ul>
                </li>
              </ul>
          </div>
          <div class="column">
            <ul class="menu-list">
              <li>
                <a class=""><strong>Community</strong></a>
                <ul>
                  <li><a>Instagram</a></li>
                  <li><a>Twitter</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="has-text-centered lato fsmall">© {{ new Date().getFullYear() }} Rapidbearexchange.com. All rights reserved</p> 
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

.borderpurple{
  border: 1px solid #540052 !important;
  border-radius: 10px;
}

.color-purple{
  color:#540052 !important;
}


.logobg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("https://res.cloudinary.com/nieleche/image/upload/v1675396707/icn3_ekuten.png") no-repeat ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size:cover;
 
}


.buy-ad {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./assets/rapidbg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover ;

}

.about-home {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://res.cloudinary.com/nieleche/image/upload/v1675394053/Mask_group_bajxj7.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover ;

}

.about-home2 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./assets/bgrapid.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover ;

}

.menu-list a.is-active {
    background-color: #353434 !important;
    color: #fff;
    border-left: 5px solid #540152 !important;
}


.h900{
  height:900px !important;
}

.profile-picture {
  border-radius: 50%;
  height: 150px;
  width: 150px;
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
.px100{
  padding: 8rem 4rem !important;
}

.f13{
  font-size: 13px !important;
}

.f16{
  font-size: 16px !important;
}

.fsmall{
  font-size: 0.6em !important;
}

.f20{
  font-size: 25px !important;
}

.f30{
  font-size: 30px !important;
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



.bg-darkgray {
  background-color: #1D1D1D !important;
}

.bg-purplegradient {
  background-image: linear-gradient(#540052, black) !important;
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

.bg-gray{
  background-color:#2E2D2D !important;
}

.bg-black{
  background-color: #000 !important;
}

.text-center{
  text-align: center !important;
}

.text-right{
  text-align: right !important;
}

.upper{
  text-transform: uppercase !important;
}

.fit {
  object-fit: cover;
  height: 100% !important;
  width:100% !important;
}

.w50 {
  width: 50% !important;
}

.w40 {
  width: 40% !important;
}

.w30 {
  width: 30% !important;
}

.content {
		padding: 3rem 2.5rem 5rem;
	}

  #nl {
	display: flex;
	align-items: center;
	justify-content: center;
  }

	.nl-card {
		width: 24rem;
		box-shadow: 0 0 7px 0 rgba(136, 136, 136, 0.11);
  }

    #email {
			display: block;
			width: 100%;
			font-size: 1rem;
			margin-bottom: 1.75rem;
			padding: 0.25rem 0;
			border: none;
			border-bottom: 1px solid #fff;
			transition: all .5s;
      background: black;

			&:hover {
				border-color: #540052;
			}

			&:active, &:focus {
				border-color: #fff;
			}
		}

      button {
			cursor: pointer;
			font-size: 1.2rem;
			color: white;
			border-radius: 4rem;
			display: block;
			width: 100%;
			background: transparent;
			border: 2px solid white;
			padding: 0.9rem 0 1.1rem;
			transition: color .5s, border-color .5s;	
		}


input:focus,
select:focus,
textarea:focus,
button:focus {
	outline: none;
}


.width100px{
  width:100px;
}

a.navbar-item:hover, .navbar-link:hover, a.navbar-item:focus {
  color:#540052 !important;
}
.navbar-link:not(.is-arrowless)::after{
  border-color:#540052 !important;
}

</style>
