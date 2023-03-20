<template class="bg-black">
    <!-- First section on home page - get started and welcome-->
      <div class="bg-black  column ">
    

        <div class="section p-0 ">
          <div class="columns">
            <aside class="column is-2 bg-darkgray p-0">
              <nav class="menu">
                <ul class="menu-list">
                  <li><router-link to="/MyDashboard" class="is-active lato f13 py-2"> <img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Group_6_wwih7z.png" alt="dashboard"> Dashboard</router-link></li>
                  <li><router-link to="/kycVerification" class="color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Frame_1_vj3ttp.png" alt="verify">Verification</router-link></li>
                  <li><router-link to="/myPayments"  class="color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/mdi_account-cash-outline_xvmfk3.png" alt="payment">Payment</router-link></li>
                  <li><router-link to="/mySettings" class="color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/carbon_settings-adjust_xdipic.png" alt="settings">Settings</router-link></li>
                </ul>
            
              </nav>
            </aside>
            
            <main class="column">
              <div class="level">
                <div class="column mt-4 w-100 is-12 has-text-centered">
                  <img class="profile-picture" src="https://unsplash.it/300/300/?random&pic=1(14 kB)" alt="profile-picture">
                  <div class="level-item">
                    <div class="py-2">
                      <div class="title is-4 color-white">Anonymous-User-00153</div>
                      <div class="heading color-white">User ID: 163369273</div>
                    </div>
                  </div> 
                </div>
              </div>
              
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="panel p-3 ">
                    <div class="panel-heading px-5 py-6 bg-purplegradient color-white latoregular">
                      <div class="is-flex is-justify-content-space-between">
                        <h2 class="f30 is-2 color-white latobold">
                        Welcome to RapidBear !  
                      </h2>
                        <button class="button is-ghost bg-purple color-white textdecoration-none fsmall my-5 w30"> Verify</button>
                      </div>
                      <p class="fsmall">Last login time: 2022-07-25 10:02:0</p>
                      <p class="fsmall"> IP: 41.184.244.76</p>
                      <button  class="button w30 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Hide Balance</button>
                     
                     
                      <div class="is-flex ">
                        <div class="pr-3">
                            <p class="fsmall latoregular">Account Balance:</p>
                           <h2 class="latobold">0.00000000 BTC</h2>
                        </div>
                        <div class="px-3">
                            <p class="fsmall latoregular">Estimated Value:</p>
                           <h2 class=" latobold">N0.00</h2>
                        </div>
                      </div>
                    </div>
                  
                  
                  </div>
                </div>
              </div>


              <div class="columns is-multiline p-4">
                <div class="column is-8">
                  <div class="box bg-gray color-white">
                    <div class="is-flex is-justify-content-space-between">
                      <p class="upper fsmall latoregular">Balance Details</p>
                      <div class="pt-0 mt-0">
                        <router-link to="/deposit"  class="button  mx-2 is-ghost bg-purple color-white textdecoration-none fsmall ">Deposit</router-link>
                        <router-link to="/withdraw"  class="button  is-ghost bg-purple color-white textdecoration-none fsmall">Withdraw</router-link>
                     </div>
                    </div>
                    <div>
                      <button  class="button w30 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Hide Balance</button>
                      <div>
                          <p class="upper fsmall latoregular">Account Balance:</p>
                          <h1 class="latobold ">0.00000000 BTC</h1>
                      </div>
                      <div class="pt-5">
                          <p class="upper fsmall latoregular">Estimated Value:</p>
                          <h1 class=" latobold ">N0.00</h1>
                      </div>
                    </div>
                  
                    <!--<div class="level">
                      <div class="level-item">
                        <div class="">
                          <div class="heading">Sales $</div>
                          <div class="title is-5">250,000</div>
                        </div>
                      </div>
                      <div class="level-item">
                        <div class="">
                          <div class="heading">Overall $</div>
                          <div class="title is-5">750,000</div>
                        </div>
                      </div>
                      <div class="level-item">
                        <div class="">
                          <div class="heading">Sales %</div>
                          <div class="title is-5">25%</div>
                        </div>
                      </div>
                    </div>-->
                  </div>
                </div>
                <div class="column is-4 ">
                  <div class="box bg-gray color-white">
                    <p class="upper fsmall latoregular">Activity</p>
                    <div class="">
                        <div class="is-flex py-2  is-justify-content-space-between">
                          <p class="upper fsmall latobold">Web - Port Harcourt</p>
                          <p class=" fsmall   color-white">2022-07-25 10:02:09</p>
                        </div>
                        <div class="is-flex py-2 is-justify-content-space-between">
                          <p class="upper fsmall latobold">Web - Port Harcourt</p>
                          <p class="title fsmall   color-white">2022-07-25 10:02:09</p>
                        </div>
                        <div class="is-flex py-2 is-justify-content-space-between">
                          <p class="upper fsmall latobold">Web - Port Harcourt</p>
                          <p class="title fsmall   color-white">2022-07-25 10:02:09</p>
                        </div>

                        <button  class="button is-ghost bg-purple color-white textdecoration-none fsmall my-5">See All</button>
                      
                    </div>
                  </div>
                </div>
             
              </div>
              
            </main>
          </div>
        </div>
       </div>
   
   </template>
   
   <script>
   
   export default {
     name: 'MyDashboard',
     components: {
    
     }
   }
   </script>
   