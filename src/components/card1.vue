// 没有加上图片
<template>
  <div class="q-pa-md row justify-ground q-gutter-md">
    <q-card class="my-card">
      <q-card-section >
      <div>
         <q-tabs
        v-model="tab"
        
      >
        <q-tab  icon="clipboard" />
         </q-tabs>
      </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="around">
     <q-btn flat>书单</q-btn>
        
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat>收藏</q-btn>

      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat>扫一扫</q-btn>
        
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn flat>优惠券</q-btn>
        
      </q-card-actions>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

<script>
export default {
 
}
</script>