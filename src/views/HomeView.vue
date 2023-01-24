<template>
  <div class="home">

   <!-- First section on home page - get started and welcome-->
    <div class="p38 column is-half">
       <h2 class=" menlo color-black mt-5 f50">Transact Crypto,<br>easily.</h2>
       <p class=" mt-2 color-black latoregular fsmall">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      <router-link to="/log-in"  class="button bg-purple color-white fsmall my-5">Get Started </router-link>

      <div class="start is-flex is-justify-content-space-between mt-5 menlo f20 color-black">
          <div>
            <div>
              20M+ 
            </div>
            <div class="f13 latoregular">Registered users</div>
          </div>

          <div>
            <div> 300M+ </div>
            <div class="f13 latoregular">Transactions completed</div>
          </div>
          <div>
            <div> 0.10%  </div>
            <div class="f13 latoregular">Lowest transaction fee</div>
        </div>
      </div>
    </div>

    <!-- Ad section -->
    <div class="buy-ad mt-5 ">
      <div class="container is-max-desktop">
        <h1 class="column is-half is-offset-one-quarter menlo color-white f40 text-center p200 px-3">Buy, Trade and Hold Crypto NOW.</h1>
      </div>
    </div>

    <!-- Account completion steps section -->
    <div class="start-steps bg-black">
      <div class="container is-fluid py-6">
        <h1 class="menlo color-white f20 text-center py-5">Build your Rapidbear portfolio</h1>

        <!-- Steps-->
        <div class="is-flex is-justify-content-space-between">
          <div>
            <article>
              <div class="media-left bg-white">
                <figure>
                  <img width="450" height="144" src="https://res.cloudinary.com/nieleche/image/upload/v1674530353/verify_izvhmn.png" alt="Image">
                </figure>
              </div>
              <div class="media-content media-left bg-white">
                <div class="content p16">
                  <p class="f20">
                    <small class="f13">Takes about 10 mins</small> 
                    <br>  
                    <strong>Verify your identity</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div class="media-left bg-white">
                <figure>
                  <img width="450" height="144" src="https://res.cloudinary.com/nieleche/image/upload/v1674530481/fund_qj6csw.png" alt="Image">
                </figure>
              </div>
              <div class="media-content media-left bg-white">
                <div class="content p16">
                  <p class="f20">
                    <small class="f13">Takes about 10 mins</small> 
                    <br>  
                    <strong>Fund your account</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div class="media-left bg-white">
                <figure>
                  <img width="450" height="144" src="https://res.cloudinary.com/nieleche/image/upload/v1674530483/trade_crnhwv.png" alt="Image">
                </figure>
              </div>
              <div class="media-content media-left bg-white">
                <div class="content p16 ">
                  <p class="f20">
                    <small class="f13">Takes about 10 mins</small> 
                    <br>  
                    <strong>Start Trading</strong>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <router-link to="/log-in"  class="button is-ghost bg-purple textdecoration-none color-white fsmall my-5">Get Started </router-link>


      </div>
    </div>


       <!-- Ad section -->
    <div class="buy-ad ">
      <div class="container is-max-desktop">
        <h1 class="column is-half is-offset-one-quarter menlo color-white f40 text-center p200 px-3">Buy, Trade and Hold Crypto NOW.</h1>
      </div>
    </div>


  </div>

</template>

<script>

export default {
  name: 'HomeView',
  components: {
 
  }
}
</script>
