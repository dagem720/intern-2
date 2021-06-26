import Vue from 'vue';
import Vuex from 'vuex';

import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/database');
Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    drawer: true,
    user: {
      loggedIn: false,
      data: null,
    
    },
    REmails:[],
    alert:false,
    errormessage:'',
    user2:null,
    snack:false,
    UserDetail:'',
    Students:[]
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    setsnack(state,value)
    {
      state.snack=value
    },
    setAlert(state,value)
    {
      state.alert=value
    },
    setErrorMessage(state,value)
    {
      state.errormessage=value
    },
    sentMessage(state,value){
        state.sentmessage=value
    },
    setLoading(state,payload){
      state.loading=payload
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
      
    },
    SET_USER(state, data) {
      
      state.user.data = data;
      state.user2=data
      
    },
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
      
    },
    setUserDetail(state,value)
  {
    state.UserDetail=value
  },
  setStudents(state,value)
  {
    state.Students=value
  }
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
    },
    fetchuserDetail({commit,getters}){
      const userId=getters.user2.id
      firebase.database().ref('/students/' + userId).on('value',data,err)
      function data(data){
        var userDetail
         const obj = data.val()
          userDetail={
            email:obj.email,
            fname:obj.fname,
            lname:obj.lname,
            dept:obj.dept,
            studentid:obj.studentid,
            type:obj.type
          }
          
          
         
     
        
         
        commit('setUserDetail',userDetail)
        //console.log(userDetail)
          }
        function err(error){
          console.log(error)
        }},
fetchStudents({commit})
 {
     
  firebase.database().ref("students/").on('value',data,err)
  function data(data) {
    const students = []
    const obj = data.val()
    for (let key in obj) {
      
        
      students.push({
        studentid: obj[key].studentid,
        fname:obj[key].fname,
        lname:obj[key].lname,
        dept:obj[key].dept,
        type:obj[key].type
      }
      
      )
      
        
       
      }
        
     
    commit('setStudents',students)
   // console.log(item)
   
  
  }
  function err(error){
    
      console.log(error)
     
    }
 },
    signout({commit}){
      firebase.auth().signOut().then(()=>{
       
      commit('SET_USER',null)
      commit('setUserDetail',null)
     
    //  commit('setUserDetail',{
    //     type:null
    //   })
    })
    .catch(error=>{
      console.log(error)
    })
  },
    fetchUser({dispatch, commit}, user) {
      commit("setLoggedIn", user !== null);
     
     
     
      if (user) {
        commit("SET_USER", {
          
          id: user.uid,   
        });
     
         // dispatch('fetchuserDetail')
         
          var userId = firebase.auth().currentUser.uid;
          dispatch('fetchuserDetail')
         dispatch('fetchStudents')
     
          console.log(userId)
  
  
  
          
          
      } 
      else {
        commit("SET_USER", null);
       
      }
    },
    Login({commit},payload)
    {
      
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password).then(user=>{
        const newUser={
          id:user.uid,
          email:payload.email
      }
     
      commit('SET_USER',newUser)
     
    })
    .catch(error=>{
      console.log(error)
     
    })
    
    },
    addStudent({commit}, payload)
    {
     const password=payload.fname+payload.lname
     const email=payload.fname+payload.studentid+payload.dept+'@aastu.edu.et'
     const pass = password.toLowerCase();
     //console.log(password)
    let studentDetail={
       fname:payload.fname,
       lname:payload.lname,
       studentid:payload.studentid,
       dept:payload.dept,
       email:email
     }
      firebase.auth().createUserWithEmailAndPassword(email,pass)
      .then((data)=>{
        
        firebase.database().ref('/students/').child(data.user.uid).set(studentDetail ).then(()=>{
          commit('setsnack',true)
          
        }
        )
       
    
       
      })
      .catch(error=>{
      console.log(error)
      })
    }
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer;
    },
    user2(state)
    {
      return state.user2;
    },
    snack(state)
    {
      return state.snack
    },
    UserDetail(state)
    {
      return state.UserDetail
    },
    allStudents(state)
    {
      return state.Students
    }
  }
});
