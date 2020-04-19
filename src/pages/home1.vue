<template>
<div class="q-pa-md q-gutter-sm">
 <q-bar>
       <q-btn dense flat round icon="lens" size="8.5px" color="black" />
       <q-btn dense flat round icon="lens" size="8.5px" color="black" />
       <q-btn dense flat round icon="lens" size="8.5px" color="black" />
       <q-btn dense flat round icon="lens" size="8.5px" color="white" />
       <q-btn dense flat round icon="lens" size="8.5px" color="white" />
        中国移动
       <q-btn dense flat icon="wifi" />
       <div class="col text-center text-weight-bold">
        1：43 pm
       </div>
       80%
       <q-icon :name="fasBatteryFull" />
       <!--  -->
     </q-bar>

     <q-banner class="bg-white text-black">
        <h3>
            <b>
                <i>
                    爱 阅 读    R E A D
                </i>    
            </b>
        </h3>
    
    </q-banner>
     <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
</div>

</template>

<script>
    import {fasBatteryFull } from '@quasar/extras/fontawesome-v5'
    import carousel from 'src/components/carousel'
    // import carousel from 'src/components/carousel'

export default {
  created () {
     this.fasBatteryFull = fasBatteryFull
  },
//   name: 'home',
// 
//   components: {
    // carousel
//   },
 components:{
        "carousel":carousel
    },
}

</script>

<style>

</style>