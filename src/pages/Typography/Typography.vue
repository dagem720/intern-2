<template>
  <v-container fluid class="typography-page">
    <h1 class="page-title mt-10 mb-6">Cources</h1>
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
            cource Name
          </th>
          <th class="text-left">
            Credit hour
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cource in cources"
          :key="cource.name"
        >
          <td>{{ cource.name }}</td>
          <td>{{ cource.ch }}</td>
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
    {name:"Software Tools", ch:3},
    {name:"Component Design", ch:4},
    {name:"Seminar", ch:1},
    {name:"Research Methodology", ch:3},
    {name:"Simulation", ch:3},
  ],
};
    }
  }
 
</script>

