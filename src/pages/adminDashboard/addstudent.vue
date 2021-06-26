<template>
  <v-container fluid class="typography-page">
    <h1 class="page-title mt-10 mb-6">Add Student </h1>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
           
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class=" pb-6">
              <v-col cols="12" class="card-dark-grey">
                
                <form>
                <v-text-field
      v-model="fname"
     label="First Name"
     
      required
    
    ></v-text-field><v-text-field
      v-model="lname"
     label="Last Name"
     
      required
    
    ></v-text-field>
  
    <v-text-field
      v-model="studentid"
     label="Student ID"
     
      required
    
    ></v-text-field>
    <v-text-field
      v-model="dept"
      
      label="Department"
     required
     
    ></v-text-field>
    
   

    <v-btn
      class="mr-4 primary"
      @click="submit"
    >
      submit
    </v-btn>
    
  </form>
                
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-snackbar
       timeout="2000"
      v-model="snack"
      color="green"
    >
      student Added

      
    </v-snackbar>
    </v-row>
    
   
  </v-container>
</template>

<script>
export default {
  name: 'Typography',
  data(){
    return{
     fname:'',
     lname:'',
     studentid:'',
     dept:''
     
     
};
    },
    methods: {
        submit()
        {
            this.$store.dispatch('addStudent',{fname:this.fname,lname:this.lname,studentid:this.studentid,dept:this.dept}).then(()=>{
             
            })
        }
    },
    computed:{
        snack()
        {
         return this.$store.getters.snack
        },
    }
  }
 
</script>

