<template>
    <div class="two-container two">
        <div class="two__bg-tree">
            <img class="img-tree" src="~@/assets/img/web_image/scenery2/box2.png" alt="img-tree">
            <img class="img-char3" src="~@/assets/img/web_image/scenery2/char3.png" alt="img-char3">
        </div>
        <div class="two__future">
            <section>
                <div class="two__future__title">Plan for the future</div>
                <article class="two__future__desc">
                    The one thing I always passionate about is drawing. I can spend a whole day just to draw everything that come to my head. That was why I wanted to become an artist. But sadly, my parents didn’t think it was a good choice. Instead, they wanted me to have a more reliable job in the future. I had to listen to them, but drawing is still my hobby. That was why I chose to study IT, in order to become a artist, so that I can continue my pursuit. Graphic designing is a fairly new job in this country, it can be hard to get a suitable job right after graduating. I have to become better to get the job I want. I will have to work hard, since I do need a lot of money for things in my life. There will be lots of thing to worry about. But there will come to a time when everything seem to be settled, and I have enough saving. When that time come, I will leave everything behind and travel around the world. I will go everywhere I can, get to every famous landscape, and draw every each of them. It has been my biggest dream since I was a kid, be free to go anywhere and do anything I can. And I know, with the right determination, that dreams can be achieved.
                </article>
            </section>
        </div>
        <div class="two__talk">
            <div >
                <p class="talk">“Art is never finished, only abandoned”</p>
                <p class="talk1">-Leonardo da Vinc-</p>
            </div>
        </div>
        <div class="box-society">
            <Society/>
        </div>
    </div>
</template>

<script>
import Society from '../../../components/Society.vue'
import gsap from 'gsap'
export default {
    name: 'Layout2',
    components: { Society },
    mounted () {
        gsap.timeline()
            .fromTo('.two__future__title', {y: -200,duration:0.5, opacity:0}, {y: 0, duration:2, opacity: 1})
            .fromTo('.two__future__desc', {duration:0.5, opacity:0}, { duration:2, opacity: 1})
    }
}
</script>

<style lang='scss' scoped>
.two {
    position: relative;
    background: var(--colorBacKgroundSecoond);
    width: 130vw;
    display: flex;
    z-index: 1;
    &__future{
        position: absolute;
        top: 10%;
        left: 120px;
        width: 50%;
        height: 80%;
        color: var(--colorMainText);
        z-index: 6;
        &__title{
            font-size: 3.5rem;
            font-weight: 600;
            letter-spacing: 5px;
            word-spacing: 5px;
            line-height: 100px;
        }
        &__desc{
            line-height: 20px;
            font-size: 1.2rem;
            letter-spacing: 3px;
            word-spacing: 5px;
            line-height: 25px;
        }
    }
    &__bg-tree{
        background: linear-gradient(90deg, var(--colorBacKgroundSecoond) 40%, var(--colorBacKgroundlLinear) 80%);
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 5;
        .img-tree{
            position: absolute;
            right: 20vw;
            top: 0;
            width: 75vw;
            height: 100%;
            z-index: 10;
        }
        .img-char3{
            position: absolute;
            left: 45%;
            bottom:0;
            width: 100px;
            height: 200px;
            z-index: 10;
        }
    }
    &__talk{
        transform: rotate(-90deg) translateX(-44vh) translateY(10vw);
        height: 100px;
        width: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        display: flex;
        .talk{
            font-size: 1.5rem;
            color: #f50c04;
            letter-spacing: 5px;
            word-spacing: 5px;
            width: 100vh;
            text-align: center;
        }
        .talk1{
            font-size: 0.9rem;
            color: #f50c04;
            letter-spacing: 5px;
            word-spacing: 5px;
            width: 100vh;
            position: absolute;
            left: 55%;
        }
    }
}

</style>
