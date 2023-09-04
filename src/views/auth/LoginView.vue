<template>
 <!-- First section on home page - get started and welcome-->
  <div class="is-flex is-justify-content-space-between is-flex-wrap-wrap bg-purple">
    <div class=" p-6 mt-6 column ">
       <h2 class=" menlo color-white text-center py-4 f40"> Rapidbear <br> Account Login</h2>
       <form @submit.prevent="doLogin">
          <div class="field pt-4">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" v-model="formData.email" placeholder="Email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field pt-4">
            <p class="control has-icons-left">
              <input class="input" type="password" v-model="formData.password" placeholder="Password">
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
            <router-link to="/register"  class="fsmall color-white">New user, <strong>Register Here</strong></router-link>

            <router-link to="/reset-pass"  class="fsmall color-white">Forgot password? <strong> Reset Here</strong> </router-link>
          </div>
        </form>
    </div>
    <div class=" py-6">
      <img class="p-5" width="472" height="490" src="https://res.cloudinary.com/nieleche/image/upload/v1675390688/NFT-alt-mobile_2_zsqxgq.png" alt="Image">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { useAuthStore } from '../../store'
import { useToast } from "vue-toastification"

const toast = useToast()

export default {
  name: 'LoginView',
  setup() {
    
  },
  data(){
    return {
      formData: {
          email: '',
          password: '',
      }
    }
  },
  methods: {
    doLogin(){
      const authStore = useAuthStore();

      const user = this.formData

      authStore.login(user)
        .then((response) => {
          // Handle successful login
          if(response){
            // toast.success('Login successful');
            console.log('Login successful');
          }
        })
        .catch(error => {
          // Handle login error
          console.error('Login error:', error);
        });
    }
  },
  components: {},
}
</script>
