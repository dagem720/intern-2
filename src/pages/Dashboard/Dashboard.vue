<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class=" ">
        <div><h1 class="page-title">Profile</h1></div>
          
      </v-row>
      <v-row>
      <div>
              <p>Name: {{userdetail.fname+' '+userdetail.lname}}</p>
              <p>email: {{userdetail.email}}</p>
              <p>Department: {{userdetail.dept}}</p>
              <p>ID: {{userdetail.studentid}}</p>
              
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
  computed: {
    userdetail()
     {
       return this.$store.getters.UserDetail
 
    }, 
  },
};
</script>

