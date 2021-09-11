<template>
    <div class="one-container">
        <div class="one-container__bg-mountain">
            <img class="img-mountain" src="~@/assets/img/web_image/scenery1/bg1.png" alt="img-mountain">
        </div>
        <div class="one-container__future">
            <div class="container-left">
                <div class="container-left__icon">
                    <TextSign/>
                </div>
                <div class="box-infor">
                    <section class="container-left__infor-person">
                        <div class="full-name">
                            <div class="sub-name">
                                Elly
                            </div>
                            <div class="name">
                                Dung Le Minh Tuong
                            </div>
                        </div>
                        <div class="desc">
                            <TextDynamic v-for="(item, i) in listTextDynamic" :key="i"
                                :idText="item.id"
                                :text="item.text" :delay="item.delay" :speed="item.speed" :textAlign="item.textAlign"
                                :colorDynamic="item.colorDynamic"  :color="item.color"
                                @click="log(i)">
                            </TextDynamic>
                            <span></span>
                        </div>
                    </section>
                    <section class="container-left__contact">
                        <div class="contact-link">
                            <article>
                                <div class="contact-title">
                                    Visit my Portfolio
                                </div>
                                <div class="contact-desc">
                                    deviantart.com/familee
                                </div>
                            </article>
                            <article>
                                <div class="contact-title">
                                    Contact me on Skype
                                </div>
                                <div class="contact-desc">
                                    live:.cid.6a0befc4ff505cf7
                                </div>
                            </article>
                            <article>
                                <div class="contact-title">
                                    Contact me on mail
                                </div>
                                <div class="contact-desc">
                                    ellylee0811@gmail.com
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
                <div class="box-society">
                    <Society/>
                </div>
            </div>
            <div class="container-center">
                <div class="container-center__text">
                    I really appreciate your interest, <br/>
                    continue your visit
                </div>
            </div>
            <div class="container-right">
                <div class="box-skill" v-if="isActiveTextDinamic">
                    <section class="container-left__infor-person">
                        <div class="desc">
                            <TextDynamic v-for="(item, i) in listTextDynamic2" :key="i"
                                :idText="item.id"
                                :text="item.text" :delay="item.delay" :speed="item.speed" :textAlign="item.textAlign"
                                :colorDynamic="item.colorDynamic" :color="item.color"
                                @click="log(i)">
                            </TextDynamic>
                            <span></span>
                        </div>
                    </section>
                    <section class="container-left__contact">
                        <div class="contact-link">
                            <article>
                                <div class="contact-title">
                                    Visit my Portfolio
                                </div>
                                <div class="contact-desc">
                                    deviantart.com/familee
                                </div>
                            </article>
                            <article>
                                <div class="contact-title">
                                    Contact me on Skype
                                </div>
                                <div class="contact-desc">
                                    live:.cid.6a0befc4ff505cf7
                                </div>
                            </article>
                            <article>
                                <div class="contact-title">
                                    Contact me on mail
                                </div>
                                <div class="contact-desc">
                                    ellylee0811@gmail.com
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
                <div class="container-right__posText">
                    <TextSymmetry/>
                </div>
                <div class="container-right__progessKills">
                    <div class="progessKills-wapper">
                        <div class="progessKills__title">SKILLS</div>
                        <div v-if="isActiveSkillBar" class="chartskill">
                            <ChartSkill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ChartSkill from '../../../components/ChartSkill.vue'
import Society from '../../../components/Society.vue'
import TextDynamic from '../../../components/TextDynamic.vue'
import TextSign from '../../../components/TextSign.vue'
import TextSymmetry from '../../../components/TextSymmetry.vue'
import {mapState} from 'vuex'
import gsap from 'gsap'
export default {
    components: { TextDynamic, TextSymmetry, Society, TextSign, ChartSkill },
    data () {
        return {
            listTextDynamic: [
                {
                    id: 'td-0',
                    text: 'I’m an 2D artist has experiences ',
                    delay: '0.5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-1',
                    text: 'in working with game developers ',
                    delay: '1',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-2',
                    text: 'to create awesome games ',
                    delay: '1.5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-3',
                    text: 'and 2D concept design. ',
                    delay: '2',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-4',
                    text: 'Besides, I have experiences ',
                    delay: '2.5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-5',
                    text: 'in Designing and Drawing POD. ',
                    delay: '3',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-6',
                    text: 'Being a self-taught artist ',
                    delay: '3.5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-7',
                    text: 'I learned what I know by looking ',
                    delay: '4',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-8',
                    text: 'at things around me and trying ',
                    delay: '4.5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-9',
                    text: 'to develop a personal concept of art. ',
                    delay: '5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-10',
                    text: 'Great deal of attention to details.',
                    delay: '5.5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-11',
                    text: 'Passionate about playing games and',
                    delay: '6',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                },
                {
                    id: 'td-12',
                    text: 'animations as well as the artist community. ',
                    delay: '6.5',
                    speed: 0.5,
                    textAlign: 'left',
                    colorDynamic: '#D2140F',
                    color: 'var(--colorDynamicText)'
                }
            ],
            listTextDynamic2: [
                {
                    id: 'td2-0',
                    text: 'Good traditional and digital art skills ',
                    delay: '0.5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-1',
                    text: 'Passion to develop environments and characters',
                    delay: '1',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-2',
                    text: 'Skilled with various programs like Adobe Photoshop, Paint tool SAI',
                    delay: '1.5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-3',
                    text: 'A keen eye for colour and light',
                    delay: '2',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-4',
                    text: 'Good understanding of anatomy',
                    delay: '2.5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-5',
                    text: 'Great sense of scale and spatial awareness',
                    delay: '3',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-6',
                    text: 'Great deal of attention to details',
                    delay: '3.5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-7',
                    text: 'Ambitious to bring a new level of innovation',
                    delay: '4',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-8',
                    text: 'at things around me and trying ',
                    delay: '4.5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-9',
                    text: 'Great passion for the game development process ',
                    delay: '5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-10',
                    text: 'Able to match the game style and quality level',
                    delay: '5.5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-11',
                    text: 'Dedicated gamer and fantasy/sci-fi geek',
                    delay: '6',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                },
                {
                    id: 'td2-12',
                    text: 'Art suitable for web or mobile development',
                    delay: '6.5',
                    speed: 0.5,
                    textAlign: 'right',
                    colorDynamic: 'black',
                    color: 'var(--colorDynamicTextSecond)'
                }
            ]
        }
    },
    computed: mapState(['isActiveTextDinamic','isActiveSkillBar']),
    mounted () {
        gsap.timeline()
            .fromTo('.full-name', {x: -500, opacity: 0},{x:0, duration: 1, opacity: 1})
            .fromTo('.container-left__contact', {x: 500, opacity: 0},{x:0, duration: 2, opacity: 1})
    }
}
</script>

<style lang='scss' scoped>
.one-container{
    background: linear-gradient(90deg, var(--colorBacKgroundMain) 40%, var(--colorBacKgroundlLinear) 80%);
    // width: calc(300vw - 20vw);
    height: 100%;
    position: relative;
    z-index: 6;
    &__bg-mountain{
        z-index: 3;
        .img-mountain{
            position: absolute;
            right: 20vw;
            top: 0;
            width: 3000px;
            height: 100%;
            z-index: 1;
        }
    }
    &__future{
        display: flex;
        .container-left{
            position: relative;
            padding-right: 10px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 8;
                &__icon{
                    width: 120px;
                    height: 100%;
                    background: linear-gradient(90deg,  #5a0a06 0%, #B3120E 100%);
                    display: flex;
                    justify-content: center;
                    padding: 20px 0;
                }
                .box-infor{
                    position: relative;
                    display: flex;
                    width: 100%;
                    z-index: 9;
                }
                &__infor-person{
                    margin: 40px 70px;
                    flex: 1;
                    height: 100vh;
                    position: relative;
                    .sub-name{
                        color: black;
                        font-weight: 500;
                        font-size: 5rem;
                        font-family: 'Times New Roman', Times, serif;
                        letter-spacing: 1px
                    }
                    .name{
                        font-weight: 100;
                        font-size: 3rem;
                        letter-spacing: 5px;
                        word-spacing: 5px;
                        margin: 30px 0;
                    }
                }
                &__contact{
                    flex: 1;
                    text-align: right;
                    position: relative;
                    .contact-link{
                        position: absolute;
                        bottom: 15%;
                        left: 15%;
                    }
                    .contact-desc{
                        font-weight: bold;
                        font-size: 2rem;
                    }
                    .contact-title{
                        font-size: 1.3rem;
                    }
                }
        }
        .container-center{
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 8;
            // background: blueviolet;
            position: relative;
            justify-content: center;
            &__text{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -120%);
                text-align: center;
                font-size: 2rem;
            }
        }
        .container-right{
            width: 100vw;
            height: 100vh;
            z-index: 10;
            position: relative;
            &__posText{
                position: absolute;
                top: 20%;
                right: 25%;
            }
            &__progessKills{
                height: 100vh;
                width: 20vw;
                background: var(--colorBacKgroundMain);
                position: absolute;
                right: 0;
                .progessKills__title{
                    font-size: 3.5rem;
                    color: #fff;
                    font-weight: 100;
                    text-align: center;
                }
                .progessKills-wapper{
                    position: relative;
                }
            }
            .box-skill{
                position: absolute;
                top: 50%;
                right: 23%;
                z-index: 10;
                text-align: right;
                color: aliceblue;
            }
        }
    }
}
.box-society{
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
    right: 2%;
    z-index: 10;
}
.chartskill{
    transition: all 1s ease;
}
</style>
