<template>
<section class="section">
  <b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
          <h2 class="title is-3 has-text-grey">
      Data Member 
    </h2>
          <hr>
          <b-button variant="primary" class="mb-3" @click="AddMember()">Add</b-button>
         
        <MemberTable :submitForm="GetId" />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
           <h2 class="title is-3 has-text-grey">
      Edit Member 
    </h2>
          <hr>
         
          <MemberForm :submitForm="EditMember" buttonText="Update" :tableId= "{IdTabs}" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</section>
</template>

<script>
import MemberForm from '@/components/MemberForm'
import MemberTable from '@/components/DataTable/MemberTable'

  export default {
    name: 'MemberPage',
    middleware:  ['auth'],
    layout:"admin",
    components:{
      MemberForm,
      MemberTable
       
    },
    data() {
      return {
       
        IdTabs : null,
        validation: [],
      }
    },
    
     methods: {
       GetId(id) {
          this.IdTabs = id;
    },
  
      AddMember(){
        this.$router.push({
              name: 'createmember'
            })
      },
       scrollToElement(row) {
         
      this.$axios.get(`/items/member/${row}`)
        .then(response => {
            this.member.Id = response.data.data.Id;
            this.member.Name   = response.data.data.Name;
            this.member.Gender   = response.data.data.Gender;
            this.member.Phone   = response.data.data.Phone;
            this.member.Occupation   = response.data.data.Occupation;
            this.member.Email   = response.data.data.Email;
        })
         const el = this.$refs.scrollToMe;

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({behavior: 'smooth'});
    }
       },
       async EditMember(member) {
        await this.$axios.patch('/items/member/'+member.Id, {
            Name: member.Name ,
            Gender: member.Gender ,
            Phone: member.Phone ,
            Occupation: member.Occupation,
            Email: member.Email,
          })
          .then((res) => {
        
            this.$buefy.toast.open('Update Member Success!')
            // this.$router.push({name:'member'})
            window.location.reload(true)
            // window.location = 'http://localhost:3000/member'
            
          })
          .catch(error => {
      
            this.validation = error.response.data
          })
      }
    }

  }
</script>

