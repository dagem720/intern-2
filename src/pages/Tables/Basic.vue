<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Payment</h1>
      <v-row>
        <v-col cols="12">
          
            <p>Payment is upto date</p>
          
        </v-col>
       
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from './mock'

export default {
  name: 'Tables',
  data() {
    return {
      mock
    }
  }
}

</script>

<style src="./Basic.scss" lang="scss"></style>
