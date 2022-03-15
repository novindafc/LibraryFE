<template>
<div>
  <b-form >
    <section>
        <b-field label="Email">
            <b-input v-model="data.email" type="email"  maxlength="30" >
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input v-model="data.password" type="password" maxlength="30" ></b-input>
        </b-field>
       <b-button type="submit" variant="primary" @click="submitForm(data)">Login</b-button>
        
    </section>
  </b-form>
  </div>
</template>

<script>
  // import validations from "@/utils/validations";
  export default {
    data() {
      return {
        // valid: false,
        // showPassword: false,
        // hasName: false,
        data: {
          email: '',
          password: ''
        },
        // ...validations
      }
    },
    props: ["submitForm"]
  }
</script>

<style lang="scss" scoped>
</style> 