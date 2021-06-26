<template>
  <v-container fluid class="typography-page">
    <h1 class="page-title mt-10 mb-6">Schedule</h1>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
           
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class=" pb-6">
              <v-col cols="12" class="card-dark-grey">
                
                
                 <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
        <th class="text-left">
            
          </th>
          <th class="text-left">
            2:30
          </th>
          <th class="text-left">
            4:30
          </th>
          <th class="text-left">
            8:00
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cource in cources"
          :key="cource.day"
        >
        <td>{{ cource.day }}</td>
          <td>{{ cource.mor }}</td>
          <td>{{ cource.mor2 }}</td>
          <td>{{ cource.aft }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      
    </v-row>
    
   
  </v-container>
</template>

<script>
export default {
  name: 'Typography',
  data(){
    return{
      cources:[
    {day:"Monday",mor:"Software Tools",mor2:"",aft:"Spftware tools Lab"},
    {day:"Theusday",mor:"",mor2:"Component Design",aft:""},
    {day:"Wednsday",mor:"Research Methodology",mor2:"",aft:""},
    {day:"Thursday",mor:"Seminar",mor2:"Component Design",aft:"Simulation"},
    {day:"Friday",mor:"",mor2:"",aft:"Software Tools"},
  ],
};
    }
  }
 
</script>

