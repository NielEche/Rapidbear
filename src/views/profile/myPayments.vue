<template class="bg-black">
    <!-- First section on home page - get started and welcome-->
      <div class="bg-black  column ">
    

        <div class="section p-0 ">
          <div class="columns">
            <aside class="column is-2 bg-darkgray p-0">
              <nav class="menu">
                <ul class="menu-list">
                  <li><router-link to="/mydashboard" class=" color-white lato f13 py-2"> <img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Group_6_wwih7z.png" alt="dashboard"> Dashboard</router-link></li>
                  <li><router-link to="/kycVerification" class=" color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Frame_1_vj3ttp.png" alt="verify">Verification</router-link></li>
                  <li><router-link to="/myPayments"  class="is-active color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/mdi_account-cash-outline_xvmfk3.png" alt="payment">Payment</router-link></li>
                  <li><router-link to="/mySettings" class=" color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/carbon_settings-adjust_xdipic.png" alt="settings">Settings</router-link></li>
                </ul>
            
              </nav>
            </aside>
            
            <main class="column">
              <div class="level">
                <div class="column mt-4 w-100 is-12 has-text-left">
                 <div class="p-2 is-flex is-justify-content-space-between">
                    <div class="px-2">
                      <h3 class="my-0 py-0 is-2 color-white mb-1 f30 latobold">Manage Payments</h3>
                    </div>
                    <div class="px-2">
                        <img  width="50" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/mdi_account-cash-outline_xvmfk3.png" alt="settings">
                    </div>
                   </div> 
                </div>
              </div>
              
                <div class="columns is-multiline bg-darkgray">
                    <div class="column is-12 px-5 py-5">
                    <div class="box bg-gray color-white">
                        <div class="">
                            <div class="px-2">
                                <h2 class="f30 is-2 color-white latobold">
                                    Deposit
                                </h2>
                                <p class="fsmall latoregular upper color-white">Deposit quickly and safely to your account.</p>
                            </div>
                        </div>
                        <hr>

                        
                        <div class="is-flex is-justify-content-space-between my-4">
                            <div>
                                <p class="fsmall latoregular">
                                    Requirements <br>
                                    <ul>
                                        <li>- Deposit type</li>
                                    </ul> 
                                </p>
                            </div>
                            <div class="pt-0 mt-0">
                                <router-link to=""  class="button mx-2 is-ghost bg-purple color-white textdecoration-none fsmall">Begin</router-link>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>


                <div class="columns is-multiline bg-darkgray">
                    <div class="column is-12 px-5 py-5">
                        <div class="box bg-gray color-white">
                            <div class="">
                                <div class="px-2">
                                    <h2 class="f30 is-2 color-white latobold">
                                        Withdraw
                                    </h2>
                                    <p class="fsmall latoregular upper color-white">Withdraw from your account.</p>
                                </div>
                            </div>
                            <hr>

                            
                            <div class=" my-4">
                                <div class="is-flex ">
                                    <div>
                                        <p class="fsmall latoregular">Account Balance:</p>
                                        <h2 class="latobold">0.00000000 BTC</h2>
                                    </div>
                                    <div class="px-6">
                                        <p class="fsmall latoregular">Estimated Value:</p>
                                        <h2 class=" latobold">N0.00</h2>
                                    </div>
                                </div>
                                <div class="pt-0 mt-0">
                                    <router-link to=""  class="button is-ghost bg-purple color-white textdecoration-none fsmall my-5">Withdraw</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns is-multiline bg-darkgray">
                    <div class="column is-12 px-5 py-5">
                        <div class="box bg-gray color-white">
                            <div class="">
                                <div class="px-2">
                                    <h2 class="f30 is-2 color-white latobold">
                                        Notifications
                                    </h2>
                                    <p class="fsmall latoregular upper color-white">See all your recent transactions here.</p>
                                </div>
                            </div>
                            <hr>

                            
                            <div class="my-4">
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
                </div>
            </main>
          </div>
        </div>
       </div>
   
   </template>
   
   <script>
   
   export default {
     name: 'myPayments',
     components: {
    
     }
   }
   </script>
   