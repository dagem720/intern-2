<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters >
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img width="200px" height="200px" src="@/assets/logo.jpg" contain></v-img>
            <p>AASTU Extension students portal</p>
          </div>
        </v-col>
        <v-col cols="12" lg="5" class="login-part d-flex align-center justify-center mb-10" >
          <v-row no-gutters class="align-start">
            <v-col cols="12" class="login-part d-flex align-center flex-column">
              <div class="login-wrapper pt-md-4 pt-0">
                
                  
                    
                  
                  

                  
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium my-10">Sign in</p>
                           
                          </v-col>
                
                          <v-form>
                            <v-col>
                              <v-text-field
                                  v-model="email"
                                  
                               
                                  label="Email Address"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="password"
                                  
                                  type="password"
                                  label="Password"
                                 
                                  required
                              ></v-text-field>

                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  class="text-capitalize"
                                  large
                                  :disabled="password.length === 0 || email.length === 0"
                                  color="primary"
                                  @click="Login"
                              >
                                Login
                                </v-btn>
                              <v-btn large text class="text-capitalize primary--text">Forget Password</v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                 

                  

               
              </div>
            </v-col>
           
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        
       
        password: '',
        
      }
    },

    methods: {
     
        Login()
        {
             
            this.$store.dispatch('Login',{email:this.email,password:this.password}).then(()=>{
             
            })
        
        
      }
    },
    computed:{
      user2()
    {
      return this.$store.getters.user2
    },
    },
     watch:{
          user2(value){
              if(value !== null && value !== undefined)
              {
                if(this.email=='admin@aastu.edu.et')
                 { 
                   this.$router.push('/admindashboard')
                  this.$store.dispatch('fetchStudents')
                 }
               else
                  this.$router.push('/dashboard')
              }
          }
      },

    
  }

</script>

<style src="./Login.scss" lang="scss"/>
