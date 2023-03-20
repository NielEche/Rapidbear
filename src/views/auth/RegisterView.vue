<template>
    <!-- First section on home page - get started and welcome-->
     <div class="p-6 column bg-purple">
          <h2 class=" menlo color-white text-center py-4 f50"> Welcome to <br>Rapidbear!</h2>
          <p class=" menlo color-white text-center py-4 ">Register</p>
          <form @submit.prevent="submitForm">
                  <div class="field pt-4">
                    <p class="control ">
                      <input class="input" type="text" placeholder="First Name">
                    </p>
                  </div>

                  <div class="field pt-4">
                    <p class="control">
                      <input class="input" type="text" placeholder="Last Name">
                    </p>
                  </div>

                  <div class="field pt-4">
                    <p class="control">
                      <input class="input" type="text" placeholder="Phone Number">
                    </p>
                  </div>

                  <div class="field pt-4">
                    <p class="control has-icons-left has-icons-right">
                      <input class="input" type="email" placeholder="Email">
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
               <div class="field pt-4">
                 <p class="control has-icons-left">
                   <input class="input" type="password" placeholder="Password">
                   <span class="icon is-small is-left">
                     <i class="fas fa-lock"></i>
                   </span>
                 </p>
               </div>
               <div class="field pt-4 color-white ">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox">
                      I have read and agree to <a class="color-white f13" href="#"><strong>RapidBear’s Terms of Service and Privacy Policy.</strong></a>
                    </label>
                  </div>
                </div>
                <div class="field pt-4">
                 <p class="control">
                   <button class="button bg-purple color-white">
                     Create Account
                   </button>
                 </p>
                 <p class="text-center menlo color-purple py-2">OR</p>
                    <button class="button color-purple f13 py-4 rounded">
                        Continue with Google
                    </button>
               </div>
               <div class="is-flex is-justify-content-space-between">
                 <router-link to="/log-in"  class="fsmall color-white">Already have an account?<strong> Login Here</strong></router-link>
               </div>
             </form>
       </div>
       
   
   </template>
   
   <script>
   
   export default {
     name: 'RegisterView',
     components: {
    
     }
   }
   </script>
   