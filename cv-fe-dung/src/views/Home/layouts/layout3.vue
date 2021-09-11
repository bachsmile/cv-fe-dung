<template>
  <div class="three-container">
        <div class="container-left__icon">
            <TextSign stroke="red"/>
        </div>
        <img src="~@/assets/img/web_image/imglarge/3/lulu_tris_poppy.png" alt="">
        <Frame v-for="(item, i) in srcFrame " :key="i" :bottom="item.positon.bottom" 
            :left="item.positon.left" :src="item.src"/>
        <div class="box-society">
            <Society/>
        </div>
  </div>
</template>

<script>
import Frame from '../../../components/box/Frame.vue'
import Society from '../../../components/Society.vue'
import TextSign from '../../../components/TextSign.vue'
export default {
	components: { Frame, Society, TextSign },
    name: 'Layout3',
    data() {
        return {
            srcFrame:[
                {
                    src:require('../../../assets/img/web_image/imglarge/1/1.png'),
                    positon: {
                        bottom: "10%",
                        left: "10%"
                    }
                },
                {
                    src: require('../../../assets/img/web_image/imglarge/1/2.png'),
                    positon: {
                        bottom: "10%",
                        left: "30%"
                    }
                },
                {
                    src: require('../../../assets/img/web_image/imglarge/1/3.png'),
                    positon: {
                        bottom: "10%",
                        left: "50%"
                    }
                },
                {
                    src: require('../../../assets/img/web_image/imglarge/1/4.png'),
                    positon: {
                        bottom: "10%",
                        left: "70%"
                    }
                }
            ]
        }
    },
}
</script>

<style lang='scss' scoped>
    .three-container{
        position: relative;
        width: inherit;
        height: inherit;
        display: flex;
        img{
            width: 93%;
            height: 100%;
            overflow: hidden;
            object-fit: fill;
        }
    }
    .container-left__icon{
        position: absolute;
        top: 0;
        right: 10%;
    }
</style>