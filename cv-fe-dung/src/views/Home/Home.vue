<template>
    <div>
        <LineLeft id="lineLeft"/>
        <div class="home-page" >
            <div class="outer-wrapper">
                <div class="wrapper">
                    <div class="slide one">
                        <Layout1/>
                    </div>
                    <div id="two" class="slide two" >
                        <Layout2 v-if="isActiveLayout2"/>
                    </div>
                    <div class="slide three">
                        <Layout3/>
                    </div>
                    <div class="slide four">
                        <Layout4/>
                    </div>
                    <div class="slide five">
                        <div class="five-slide">
                            <div class="five-slide__bg">
                                <img src="" alt="">
                            </div>
                            <div class="five-slide__frameImg">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="box-society">
                            <Society/>
                        </div>
                    </div>
                    <div class="slide six">
                        <div class="six-slide">
                            <div class="six-slide__bg">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="box-society">
                            <Society/>
                        </div>
                    </div>
                    <div class="slide seven">
                        <div class="seven-slide">
                            <div class="seven-slide__bg">
                                <img src="" alt="">
                            </div>
                            <div class="seven-slide__frameImg">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="box-society">
                            <Society/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LineLeft from '../../components/LineLeft.vue'
import Society from '../../components/Society.vue'
// import TextSign from '../../components/TextSign.vue'
import Layout1 from './layouts/layout1.vue'
import Layout2 from './layouts/Layout2.vue'
// @ is an alias to /src
import {mapMutations, mapState} from 'vuex'
import Layout3 from './layouts/layout3.vue'
import Layout4 from './layouts/Layout4.vue'
export default {
    components: { Society, Layout1, LineLeft, Layout2, Layout3, Layout4 },
    name: 'Home',
    data () {
        return {
            scrollX: 0,
            widthWeb: 0
        }
    },
    methods: {...mapMutations(['ON_ACTIVE_TEXT_DINAMIC','ON_ACTIVE_SKILLBAR','ON_ACTIVE_LAYOUT2'])},
    computed: { ...mapState(['isActiveLayout2'])

    },
    mounted () {
        
        // var width = document.getElementById('two')
        var post = 0
        // document.getElementById('lineLeft').style.display = 'none'
        window.addEventListener('mousewheel', (e) => {
            // console.log(e)
            if (e.deltaY < 0) {
                // console.log(1)
                if (post > 0) post = post - 1
            } else {
                // console.log(0)
                post = post + 1
            }
            console.log(post)
            post === 40 ? this.ON_ACTIVE_TEXT_DINAMIC():''
            post === 45 ? this.ON_ACTIVE_SKILLBAR():''
            post === 55 ? this.ON_ACTIVE_LAYOUT2():''
        })
    }
}
</script>
<style lang="scss" scoped>
.slide{
    width: 100vw;
    height: 100vh;
}
.wrapper{
    display: flex;
    flex-direction: row;
    width: 950vw;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
}
    .outer-wrapper{
        width: 100vh;
        height: 100vw;
        transform: rotate(-90deg) translateX(-100vh);
        transform-origin: top left;
        overflow-y: scroll;
        overflow-x: hidden;
        position: absolute;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
::-webkit-scrollbar {
    display:none;
    // overflow: hidden;
}
.desc{
    overflow: hidden;
}
.box-society{
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
    right: 2%;
    top: 0;
    z-index: 10;
}
.one{
    position: relative;
    display: flex;
    width: 300vw;
    z-index: 5;
}
.two {
    position: relative;
    background: #CB130F;
    width: 130vw;
    display: flex;
    z-index: 1;
}
.three {
    position: relative;
    background: black;
}
.four {
    position: relative;
    background: black;
    padding: 10px 0px;
}
.five {
    position: relative;
    background: black;
    padding: 10px 100px 10px 20px;
    .five-slide{
        position: relative;
        height: inherit;
        &__bg{
            background: lightblue;
            height: 85%;
            transform: translate(0%, 5%);
        }
        &__frameImg{
            position: absolute;
            top: 0;
            left: 0;
            width: 40%;
            height: 85%;
            transform: translate(80%, 5%);
            background: olive;
        }
    }
}
.six {
    position: relative;
    background: black;
    padding: 10px 100px;
    .six-slide{
        position: relative;
        height: inherit;
        &__bg{
            background: lightblue;
            height: 90%;
            transform: translate(0%, 5%);
        }
    }
}
.seven {
    position: relative;
    background: black;
    padding: 20px 100px 20px 40px;
    .seven-slide{
        position: relative;
        height: inherit;
        &__bg{
            background: white;
            height: 80%;
            transform: translate(0%, 10%);
        }
    }
}
</style>
