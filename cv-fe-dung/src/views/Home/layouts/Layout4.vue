<template>
  <div class="four-container four">
        <div class="four-slide">
            <div class="four-slide__bg">
                <img src="~@/assets/img/web_image/imglarge/1/5.png" alt="img-bg4">
            </div>
            <div class="four-slide__frameImg">
                <img src="~@/assets/img/web_image/imglarge/2/1.jpg" alt="img-bg5">
                <div class="four-slide__frame-text">
                    <span>WARTER COLOR</span>
                </div>
            </div>
        </div>
        <div class="box-society">
            <Society/>
        </div>
  </div>
</template>

<script>
import Society from '../../../components/Society.vue'
export default {
	components: { Society },
    name: 'Layout4'
}
</script>
<style lang='scss' scoped>
.four-container{
    position: relative;
    width: inherit;
    height: inherit;
    display: flex;
    .four-slide{
        position: relative;
        height: inherit;
        width: 90%;
        &__bg{
            background: lightblue;
            height: 100%;
            img{
                width: 100%;
                height: inherit;
                object-fit: cover;
                overflow: hidden;
            }
        }
        &__frameImg{
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0%, -50%);
            width: 100%;
            height: 400px;
            background: olive;
            img{
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
        &__frame-text{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 30px 0;
            span{
                font-size: 4rem;
                color: #fff;
                font-weight: 100 ;
                font-family: system-ui;
                text-transform: uppercase;
                letter-spacing: 10px;
                word-spacing: 5px;
            }
        }
        &__bg::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #454545;
            opacity: 0.8;
        }
    }
}
</style>