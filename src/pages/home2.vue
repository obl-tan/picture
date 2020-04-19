<!--组件不知道怎么引用，我放在一个.vue中-->
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
<!--搜索 -->

    <div align="center">
        <div >
            <input type="text" class="placeholder"  placeholder="搜书名"  style="width:1000px;"> 
            <q-btn dense flat icon="search" />
           
        </div>
    </div>
<!-- 轮播图 -->

    <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-white text-black shadow-1 rounded-borders no-shadow"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <!-- 引用图片 -->
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/material.png" />
          <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
<!-- 卡片 -->

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
    
    <div class="q-pa-md row items-start q-gutter-md">
     <q-card style="width:1000px;">  
         <div>
             <h4><b><i>新书推荐</i></b></h4>
             </div>
        <q-card class="my-card">
          <q-card-section horizontal>
            <q-img
              class="col-8"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />

            <q-card-section>
              <div>
                  <h5><b> 小包子</b></h5>

              </div>
              毛姆的《小包子》中“月亮”代表的
              是美好的理想和不披物质世俗所羁绊

            </q-card-section>
          </q-card-section>

          <q-separator />
        </q-card>
    </q-card> 
    <!-- 尾端 --> 
    </div>
        
     <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab label="首页" icon="home" />
        <q-tab  icon="book" label="书架" />
        <q-tab  icon="person" label="我的" />
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