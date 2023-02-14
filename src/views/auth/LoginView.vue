<template>
 <!-- First section on home page - get started and welcome-->
  <div class="p38 mt-6 column is-half">
       <h2 class=" menlo color-black text-center py-4 f50"> Rapidbear <br> Account Login</h2>
       <form @submit.prevent="submitForm">
                <div class="field pt-4">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
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
            <div class="field pt-4">
              <p class="control">
                <button class="button bg-purple color-white">
                  Login
                </button>
              </p>
            </div>
            <div class="is-flex is-justify-content-space-between">
              <router-link to="/register"  class="fsmall color-black">New user, <strong>Register Here</strong></router-link>

              <router-link to="/reset-pass"  class="fsmall color-black">Forgot password? <strong> Reset Here</strong> </router-link>
            </div>
        </form>
    </div>

</template>

<script>

export default {
  name: 'LoginView',
  components: {
 
  }
}
</script>
