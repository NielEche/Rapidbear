<template class="bg-black">
    <!-- First section on home page - get started and welcome-->
      <div class="bg-black  column ">
    

        <div class="section p-0 ">
          <div class="columns">
            <aside class="column is-2 bg-darkgray p-0">
              <nav class="menu">
                <ul class="menu-list">
                  <li><router-link to="/mydashboard" class=" color-white lato f13 py-2"> <img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Group_6_wwih7z.png" alt="dashboard"> Dashboard</router-link></li>
                  <li><router-link to="/kycVerification" class="is-active color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Frame_1_vj3ttp.png" alt="verify">Verification</router-link></li>
                  <li><router-link to="/myPayments"  class="color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/mdi_account-cash-outline_xvmfk3.png" alt="payment">Payment</router-link></li>
                  <li><router-link to="/mySettings" class=" color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/carbon_settings-adjust_xdipic.png" alt="settings">Settings</router-link></li>
                </ul>
            
              </nav>
            </aside>
            
            <main class="column">
              <div class="level">
                <div class="column mt-4 w-100 is-12 has-text-left">
                 <div class="p-2 is-flex is-justify-content-space-between">
                    <div class="px-2">
                      <h3 class="my-0 py-0 is-2 color-white mb-1 f30 latobold">KYC Verification</h3>
                    </div>
                    <div class="px-2">
                        <img  width="50" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Frame_1_vj3ttp.png" alt="settings">
                    </div>
                  
                  </div> 
                </div>
              </div>
              
              <div class="columns is-multiline bg-darkgray">
                <div class="column is-12 px-5 py-5">
                  <div class="box bg-gray color-white">
                    <div class="">
                      <p class="upper fsmall latoregular">Current Status</p>
                    </div>
                    <hr>

                    <form action="">
                        <div class="is-flex is-justify-content-space-between my-3">
                            <p class="latoregular fsmall">
                                Your account is currently not verified.
                                <br>
                                <span>
                                    Complete verification to access services on RapidBear.
                                </span>
                              </p>
                            <div class="pt-0 mt-0">
                                <img width="50" src="https://res.cloudinary.com/nieleche/image/upload/v1676923210/ic_baseline-verified-user_wszu0s.png" alt="">
                            </div>
                        </div>
                        <hr>

                        <p class="upper fsmall latoregular">Verified</p>
                        <div class="my-4">
                            <div class="fsmall latoregular is-flex ">
                              <div class="px-2">
                                <p>
                                  Requirements
                                </p>
                                <p class="fsmall">
                                        <ul>
                                            <li>- Personal information</li>
                                            <li>- Government-issued ID</li>
                                            <li>- Facial recognition</li>
                                        </ul> 
                                </p>
                              </div>

                                <div class="px-2">
                                    <p>Features</p>
                                    <p class="fsmall">
                                        <ul>
                                            <li>-  Fiat Deposit & Withdrawal Limits $50K Daily</li>
                                            <li>- Crypto Deposit Limit Unlimited</li>
                                            <li>- Crypto Withdrawal Limit 8M BUSD Daily</li>
                                            <li>- P2P Transaction Limits Unlimited</li>
                                            <li>- Other Features LPD/OTC </li>
                                        </ul> 
                                    </p>
                                </div>

                            </div>
                          <div class="pt-0 mt-0">
                              <router-link to=""  class="button  mx-2 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Begin</router-link>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>

              </div>


              <div class="columns is-multiline bg-darkgray">
                <div class="column is-12 px-5 py-5">
                  <div class="box bg-gray color-white">
                    <div class="">
                      <p class="fsmall latoregular upper">Current Status</p>
                    </div>
                    <hr>

                        <div class="is-flex is-justify-content-space-between my-3">
                            <p class="latoregular fsmall">
                                Your account is currently verified.
                                <br>
                            </p>
                            <div class="pt-0 mt-0">
                                <img width="40" src="https://res.cloudinary.com/nieleche/image/upload/v1676923210/Vector_zwnhny.png" alt="">
                            </div>
                        </div>
                        <hr>
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
     name: 'kycVerification',
     components: {
    
     }
   }
   </script>
   