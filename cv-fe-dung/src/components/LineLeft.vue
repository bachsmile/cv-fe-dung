<template>
    <div  class="container-left">
        <div class="container-left__icon">
            <TextSign stroke="#fff"/>
        </div>
        <div class="list-title">
            <ul>
                <li><i class="fas fa-home"></i></li>
                <li><i class="fas fa-gamepad"></i></li>
                <li><i class="fas fa-chart-bar"></i></li>
                <li><i class="fas fa-images"></i></li>
            </ul>
        </div>
    </div>
</template>

<script>
import TextSign from './TextSign.vue'
export default {
    name: 'LineLeft',
    components: { TextSign }
}
</script>

<style lang="scss" scoped >
.container-left{
    position: fixed;
    // padding-right: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 8;
    background: linear-gradient(90deg,  black 0%, #B3120E 100%);
    width: 120px;
        &__icon{
            // height: 100%;
            display: flex;
            justify-content: center;
            padding: 20px 0;
        }
        .list-title{
            display: flex;
            width: inherit;
            height: 80%;
            color: #fff;
            ul{
                margin: 0;
                padding: 0 10px;
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: space-evenly;
                font-size: 1.4rem;
                cursor: pointer;
                width: inherit;
                li{
                    text-align: center;
                    // width: 100%;
                    padding: 8px 0;
                }
                li:hover{
                    outline: 1px solid #fff;
                    box-shadow: #fff 0px 0px 10px 0px;
                }
            }
        }
}
</style>
