<template class="bg-black">
    <!-- First section on home page - get started and welcome-->
      <div class="bg-black  column ">
    

        <div class="section p-0 ">
          <div class="columns">
            <aside class="column is-2 bg-darkgray p-0">
              <nav class="menu">
                <ul class="menu-list">
                  <li><router-link to="/mydashboard" class=" color-white lato f13 py-2"> <img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Group_6_wwih7z.png" alt="dashboard"> Dashboard</router-link></li>
                  <li><router-link to="/kycVerification" class="color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/Frame_1_vj3ttp.png" alt="verify">Verification</router-link></li>
                  <li><router-link to="/myPayments"  class="color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/mdi_account-cash-outline_xvmfk3.png" alt="payment">Payment</router-link></li>
                  <li><router-link to="/mySettings" class="is-active color-white lato f13 py-2"><img class="mx-2" width="20" height="20" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/carbon_settings-adjust_xdipic.png" alt="settings">Settings</router-link></li>
                </ul>
            
              </nav>
            </aside>
            
            <main class="column">
              <div class="level">
                <div class="column mt-4 w-100 is-12 has-text-left">
                 <div class="p-2 is-flex is-justify-content-space-between">
                    <div class="px-2">
                      <div class="title is-2 color-white mb-1 ">Settings</div>
                      <div class="heading color-white">Make changes to your Rapidbear Account.</div>
                    </div>
                    <img class="mx-2" width="100" src="https://res.cloudinary.com/nieleche/image/upload/v1675997097/carbon_settings-adjust_xdipic.png" alt="settings">
                  </div> 
                </div>
              </div>
              
              <div class="columns is-multiline bg-darkgray">
                <div class="column is-12 px-6 py-5">
                  <div class="box bg-gray color-white">
                    <div class="">
                      <div class="heading f16">My Profile</div>
                    </div>
                    <hr>

                    <form action="">
                        <div class="is-flex is-justify-content-space-between my-3">
                            <div class=" f16">
                                Username
                                <br>
                                <span>
                                    Anonymous-User-00153
                                </span>
                            </div>
                        <div class="pt-0 mt-0">
                            <router-link to=""  class="button width100px mx-2 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Edit</router-link>
                        </div>
                        </div>

                        <div class="is-flex is-justify-content-space-between my-4">
                            <div class="f16">
                                Avatar
                                <br>
                                <span>
                                    <img class="profile-picture" src="https://unsplash.it/300/300/?random&pic=1(14 kB)" alt="profile-picture">
                                </span>
                            </div>
                        <div class="pt-0 mt-0">
                            <router-link to=""  class="button width100px mx-2 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Change</router-link>
                        </div>
                        </div>


                        <div class="is-flex is-justify-content-space-between my-4">
                            <div class="f16">
                                P2P Profile Settings
                                <br>
                                <span>
                                    Edit your P2P nickname here.
                                </span>
                            </div>
                        <div class="pt-0 mt-0">
                            <router-link to=""  class="button width100px mx-2 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Manage</router-link>
                        </div>
                        </div>
                    </form>
                  </div>
                </div>

                 <div class="column is-12 px-6 py-5">
                  <div class="box bg-gray color-white">
                    <div class="">
                      <div class="heading f16">Preferences</div>
                    </div>
                    <hr>

                    <form action="">
                        <div class="is-flex is-justify-content-space-between">
                            <div class="f16">
                                Order Confirmation Reminders
                                <br>
                                <span class="latoregular">
                                    If the order reminder function is enabled, it will need to be reconfirmed every time an order is submitted.
                                </span>
                            </div>
                        <div class="pt-0 mt-0">
                            <router-link to=""  class="button width100px mx-2 is-ghost bg-purple color-white textdecoration-none fsmall my-5">Manage</router-link>
                        </div>
                        </div>
                    </form>
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
     name: 'mySettings',
     components: {
    
     }
   }
   </script>
   