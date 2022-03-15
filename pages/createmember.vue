<template>
  <b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
            <h2 class="title is-3 has-text-grey">
      Add Member 
    </h2>
          <hr>
          <MemberForm :submitForm="Add" buttonText="Add"/>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MemberForm from '@/components/MemberForm'
  export default {
       name: 'CreateMember',
       middleware:  ['auth'],
      layout:"admin",
       components:{
      MemberForm,
    },
    data() {
      return {
      }
    },
    methods: {
      
    async Add(member){
        
        await this.$axios.post('/items/member', {
        
            Name: member.Name ,
            Gender: member.Gender ,
            Phone: member.Phone ,
            Occupation: member.Occupation,
            Email: member.Email,
            
          })
          .then(() => {
             this.$buefy.toast.open('Add Member Success!')
            this.$router.push({name:'member'})
        
            //  window.location = 'http://localhost:3000/member'
          })
          .catch(error => {
      
            this.validation = error.response.data
          })
      }
    }
  }
</script>

