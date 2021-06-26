<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class=" ">
        <div><h1 class="page-title">Admin Dashboard</h1></div>
          
      </v-row>
      <v-row>
      <v-btn class="primary mb-3" to="/allstudents">All Students</v-btn>
     
      </v-row>
      <v-row>
      
      <v-btn class="primary" to="/addstudent">Add Student</v-btn>
      </v-row>
      <v-row>
      <div>
              
            
          </div></v-row>
      
    </div>
  </v-container>
</template>

<script>

export default {
  name: "Dashboard",
  components: {
    
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
  mounted() {
   
  },
};
</script>

