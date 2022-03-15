<template>

     <b-form >
            <b-field label="Member Name">
              <b-input type="text" v-model="member.Name" :class="{ 'is-invalid': validation.Name }"
                placeholder="Enter Member Name">
              </b-input>
              <div v-if="validation.Name" class="mt-2">
                <b-alert show variant="danger">{{ validation.Name[0] }}</b-alert>
              </div>
              </b-field >
            <p class="content"><b>Gender</b>: {{ member.Gender }}</p>
        <b-dropdown
            v-model="member.Gender"
            aria-role="list">
            <template #trigger>
                <b-button
                    type="is-primary"
                    icon-right="menu-down">
                    Selected : {{ member.Gender}}
                </b-button>
            </template>


            <b-dropdown-item value="M" aria-role="listitem">
                <span>Male</span>
            </b-dropdown-item>

            <b-dropdown-item value="F" aria-role="listitem">
                <span>Female</span>
            </b-dropdown-item>
        </b-dropdown>
         
              <b-field label="Member Phone">
              <b-input type="text" v-model="member.Phone" :class="{ 'is-invalid': validation.Phone }"
                placeholder="Enter Member Phone">
              </b-input>
              <div v-if="validation.Phone" class="mt-2">
                <b-alert show variant="danger">{{ validation.Phone[0] }}</b-alert>
              </div>
            </b-field>
            
              <b-field label="Member Occupation">
              <b-input type="text" v-model="member.Occupation" :class="{ 'is-invalid': validation.Occupation }"
                placeholder="Enter Member Occupation">
              </b-input>
              <div v-if="validation.Occupation" class="mt-2">
                <b-alert show variant="danger">{{ validation.Occupation[0] }}</b-alert>
              </div>
            </b-field>

             <b-field label="Member Email">
              <b-input type="text" v-model="member.Email" :class="{ 'is-invalid': validation.Email }"
                placeholder="Enter Member Occupation">
              </b-input>
              <div v-if="validation.Email" class="mt-2">
                <b-alert show variant="danger">{{ validation.Email[0] }}</b-alert>
              </div>
            </b-field>
            
            
            <b-button type="submit" variant="primary" @click="submitForm(member)">{{buttonText}}</b-button>
     </b-form>
</template>
<script>

 export default {
   props: ["submitForm","buttonText", "tableId"],
    data() {
      return {
        // valid: false,
        // showPassword: false,
        // hasName: false,
         member: {
          Id:'', 
          Name: '',
          Gender: '',
          Phone: '',
          Occupation: '',
          Email: '',
        },
        validation: [],
        tabsId:this.tableId
    
      }
    },
    watch: {
      tableId(){
        this.getId()
      }   
  },

  methods: {
    async getId() {
      if (!this.tableId) {
        return;
      }
      await this.$axios.get(`/items/member/${this.tableId.IdTabs}`)
        .then(response => {
            this.member.Id = response.data.data.Id;
            this.member.Name   = response.data.data.Name;
            this.member.Gender   = response.data.data.Gender;
            this.member.Phone   = response.data.data.Phone;
            this.member.Occupation   = response.data.data.Occupation;
            this.member.Email   = response.data.data.Email;
        })
    }
    },
    
  }
</script>

<style lang="scss" scoped>
</style> 