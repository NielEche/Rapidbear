<template>
    <!-- First section on home page - get started and welcome-->
     <div class="p38 mt-6 column is-half">
          <h2 class=" menlo color-black text-center py-4 f50"> Reset <br> Password</h2>
          <form @submit.prevent="submitForm" class="py-5 ">
            <div class="field pt-4">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="New Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div class="field pt-4">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Confirm Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>

               <div class="field pt-4">
                 <p class="control">
                   <button class="button bg-purple color-white">
                     Reset
                   </button>
                 </p>
               </div>
           </form>
       </div>
   
   </template>
   
   <script>
   
   export default {
     name: 'PassResetView2',
     components: {
    
     }
   }
   </script>
   