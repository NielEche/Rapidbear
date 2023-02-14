<template >
    <!-- First section on home page - get started and welcome-->
     <div class="p38 mt-6 column is-half">
          <h2 class=" menlo color-black text-center py-4 f50"> Verify <br> Account</h2>
          <form @submit.prevent="submitForm">
                  
               <div class="field pt-4">
                <div class="card is-outlined borderpurple">
                    <div class="card-content text-left ">
                        <p class="title color-purple f13">
                            Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. Thank you ! </p>
                    </div>
                    </div>
               </div>
               <div class="field pt-4">
                 <p class="control">
                   <button class="button bg-purple color-white">
                     RESEND VERIFICATION CODE
                   </button>
                 </p>
               </div>
           </form>
       </div>
   
   </template>
   
   <script>
   
   export default {
     name: 'VerifyAccount',
     components: {
    
     }
   }
   </script>
   