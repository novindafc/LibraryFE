<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/dashboard' }">
                <img
                    src="~assets/logo-vl.png" alt="Buefy" height="28"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
           <b-navbar-item href="#">
                {{$auth.user.email}}
            </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <!-- <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a> -->
                    
                    <a class="button is-light" @click="$auth.logout()">
                        Log out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<!--<template>
<div> 
  <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  
</div>
</template>-->
<script>
// import { mapState } from "vuex";
export default {
  name: "nav-bar",
  middleware: ['auth']
//   data() {
//     return {};
//   },
//   computed: {
//     ...mapState(["auth"])
//   },
//   methods: {
//     logOut() {
//       this.$store.dispatch("logOut");
//       this.$router.push("/login");
//     }
//   },
  
};
</script>
