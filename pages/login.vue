<template>
<div class="box">
<b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
           <h2 class="title is-3 has-text-grey">
      Login 
    </h2>
    <UserLogin :submitForm="loginUser" />
    </b-card>
     </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
import UserLogin from '@/components/UserLogin'
export default {
    name :"LoginPage",
    auth: ['guest'],
    layout:"empty",
    components:{
      UserLogin
    },
 
  methods: {
    async loginUser(loginInfo) {
     try {
        await this.$auth.loginWith('local', { data: loginInfo })
         .then((response) => this.$auth.setUser({email:loginInfo.email, password:loginInfo.password}),
        console.log(this.$auth.loggedIn),
        console.log(this.$auth.user),
        // this.$store.dispatch('snackbar/setSnackbar', {text: `Thanks for signing in, ${this.$auth.user.name}`}),
        // this.$router.push({name:'dashboard'})
        
         )
      } catch (err) {
        console.log(err)
        // this.$store.dispatch('snackbar/setSnackbar', {color: 'red', text: 'There was an issue signing up.  Please try again.'})
      }
    
    }
  }
}
</script>