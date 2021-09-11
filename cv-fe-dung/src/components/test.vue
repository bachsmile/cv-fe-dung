<template>
    <div id="home-page" class="home-page" @mousewheel="wheel($event)">
        <div class="t1"></div>
        <div class="t1"></div>
        <div class="t1"></div>
        <div class="t1"></div>
    </div>
</template>

<script>
// import TextSign from './TextSign.vue'
export default {
    components: { },
    methods: {
        wheel (e) {
            e = window.event || e
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
            document.getElementById('home-page').scrollLeft -= (delta * 40)
            e.preventDefault()
        }
    },
    mounted () {
        document.querySelector('.home-page')
            .addEventListener('mousewheel', (e) => {
                console.log(e)
                if (e.deltaY < 0) {
                    console.log('up')
                    window.scrollBy(-50, 0, 'smooth')
                } else {
                    console.log('down')
                    window.scrollBy(50, 0, 'smooth')
                }
            })
            .scrollIntoView({
                behavior: 'smooth'
            })
    }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
// overflow: hidden;
}
.home-page{
    display: flex;
    width: 1000vh;
    flex-direction: row;
    overflow: hidden;
}
.t1 {
    width: 100vw;
    height: 100vh;
    background: red;
    margin-right: 10px;
}
</style>
