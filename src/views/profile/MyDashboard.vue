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
                    <div class="panel-heading p-6 bg-purplegradient color-white latoregular">
                      <div class="is-flex is-justify-content-space-between">
                        <h1 class="title is-2 color-white latoregular">
                        Welcome to RapidBear !  
                      </h1>
                        <button  class="button width100px is-ghost bg-purple color-white textdecoration-none fsmall my-5"> Verify</button>
                      </div>
                      <p>Last login time: 2022-07-25 10:02:0</p>
                      <p> IP: 41.184.244.76</p>
                      <button  class="button width100px is-ghost bg-purple color-white textdecoration-none fsmall my-5">Hide Balance</button>
                     
                     
                      <div class="is-flex ">
                        <div>
                            <p class="heading">Account Balance:</p>
                           <h1 class="f30 latoregular">0.00000000 BTC</h1>
                        </div>
                        <div class="px-6">
                            <p class="heading">Estimated Value:</p>
                           <h1 class="f30 latoregular">N0.00</h1>
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
                      <div class="heading f16">Balance Details</div>
                      <div class="pt-0 mt-0">
                        <router-link to="/deposit"  class="button width100px mx-2 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Deposit</router-link>
                        <router-link to="/withdraw"  class="button width100px is-ghost bg-purple color-white textdecoration-none fsmall my-5">Withdraw</router-link>
                     </div>
                    </div>
                    <div>
                      <button  class="button width100px is-ghost bg-purple color-white textdecoration-none fsmall my-5">Hide Balance</button>
                      <div>
                          <p class="heading">Account Balance:</p>
                          <h1 class="f30 latoregular">0.00000000 BTC</h1>
                      </div>
                      <div class="pt-5">
                          <p class="heading">Estimated Value:</p>
                          <h1 class="f30 latoregular">N0.00</h1>
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
                    <div class="heading f16">Activity</div>
                    <div class="">
                        <div class="is-flex py-2  is-justify-content-space-between">
                          <div class="heading">Web - Port Harcourt</div>
                          <div class="title fsmall   color-white">2022-07-25 10:02:09</div>
                        </div>
                        <div class="is-flex py-2 is-justify-content-space-between">
                          <div class="heading">Web - Port Harcourt</div>
                          <div class="title fsmall   color-white">2022-07-25 10:02:09</div>
                        </div>
                        <div class="is-flex py-2 is-justify-content-space-between">
                          <div class="heading">Web - Port Harcourt</div>
                          <div class="title fsmall   color-white">2022-07-25 10:02:09</div>
                        </div>

                        <button  class="button width100px is-ghost bg-purple color-white textdecoration-none fsmall my-5">See All</button>
                      
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
   