<template>
  <v-navigation-drawer
    app
    clipped
    v-model="DRAWER_STATE"
    :mini-variant="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    :mini-variant-width="sidebarMinWidth"
    :class="{'drawer-mini': !DRAWER_STATE}">
    <v-list v-if="student.type=='student'">
     
        <v-list-item
      
          color="primary"
        
          
         
          to="/studentdashboard"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-home </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Profile
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
       
          color="primary"
        
          
         
          to="/cources"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >mdi-format-size</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Cources
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
       
          color="primary"
        
          
         
          to="/schedule"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >mdi-book-variant-multiple</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Schedule
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
       
          color="primary"
        
          
         
          to="/schedul"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >mdi-book-variant-multiple</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Grade
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
       
          color="primary"
        
          
         
          to="/schedu"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >mdi-book-variant-multiple</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                issue
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
       
          color="primary"
        
          
         
          to="/sched"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >mdi-book-variant-multiple</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                E-Learning
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
       
          color="primary"
        
          
         
          to="/payment"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >mdi-grid-large</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Paymeny
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
       
          color="primary"
        
          
          
          to="/support"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >mdi-forum</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Support
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
      
    
   <v-list v-if="student.type=='admin'">
     <v-list-item
      
          color="primary"
        
          
         
          to="/admindashboard"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-home </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Admin Dashboard
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
      
          color="primary"
        
          
         
          to="/allstudents"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-home </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                All Students
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
         <v-list-item
      
          color="primary"
        
          
         
          to="/addstudent"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-home </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Add Student
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
   </v-list>
   <v-list v-if="student.type=='registrar'">
     
        <v-list-item
      
          color="primary"
        
          
         
          to="/allstudents"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            >  mdi-account-cowboy-hat  </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                All Students
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
      
          color="primary"
        
          
         
          to="/allstudents"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-home </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
               Cources
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
      
          color="primary"
        
          
         
          to="/allstudents"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-forum </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Grade
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item
      
          color="primary"
        
          
         
          to="/allstudents"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-grid-large </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Department
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
         <v-list-item
      
          color="primary"
        
          
         
          to="/sendpayment"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
             
            > mdi-format-size </v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                Send Payment Info
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
   </v-list>
    </v-navigation-drawer>
</template>

<script>
import {mapActions, mapState} from 'vuex'

  export default {
    props: {
        source: String,
    },
    data(){
      return {
        items: [
          { title: 'Profile', icon: 'mdi-home', link: '/dashboard' },
          { title: 'Cources', icon: 'mdi-format-size', link: '/typography' },
          { title: 'Paymeny', icon: 'mdi-grid-large', link: '/tables' },
          { title: 'Schedule', icon: 'mdi-book-variant-multiple', link: '/charts'},
          { title: 'Support', icon: 'mdi-forum', link: ''},
          
        ],
        sidebarWidth: 240,
        sidebarMinWidth: 96
      }
    },
    computed: {
      ...mapState(['drawer']),
      DRAWER_STATE: {
        get() {
          return this.drawer
        },
        set(newValue) {
          if (newValue === this.drawer) return;
          this.TOGGLE_DRAWER();
        }
      },
      student()
      {
        return this.$store.getters.UserDetail
      }
    },
    methods: {
      ...mapActions([ 'TOGGLE_DRAWER' ]),
    }
  }
</script>

<style src="./Sidebar.scss" lang="scss"/>
