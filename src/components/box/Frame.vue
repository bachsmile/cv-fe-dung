<template lang="">
    <div class="frame" :id="randomID">
        <img :src='src' />
        <spam class='shadows'></spam>
    </div>
</template>
<script>
export default {
    name: 'Frame',
    props: {
        top: String,
        right: String,
        bottom: String,
        left: String,
        src: String,
    },
    methods: {
        setPosition () {
            const position = document.getElementById(this.randomID)
            // console.log(position)
            position.style.top = this.top ? this.top : null
            position.style.right = this.right ? this.right : null
            position.style.bottom = this.bottom ? this.bottom : null
            position.style.left = this.left ? this.left : null
        }
    },
    computed: {
        randomID: () => {
            const alpha = 'abcdefghijklmnopqrstuvwxyz'
            const alphaUpperCase = alpha.toUpperCase()
            const digits = '0123456789'
            const ALPHA_NUMERIC = alpha + alphaUpperCase + digits
            var keys = ''
            for (let i = 0; i < 10; i++) {
                keys += ALPHA_NUMERIC.charAt(Math.floor(Math.random() * ALPHA_NUMERIC.length))
            }
            // console.log(keys)
            return keys
        }
    },
    mounted () {
        this.setPosition()
    }
}
</script>
<style lang="scss" scope>
    .frame{
        position: absolute;
        margin: 20px;
        // padding: 10px;
        color: #fff;
        width: 200px;
        height: 100px;
        border: 4px solid black;
        box-shadow: 0px 0px 80px -10px black;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
        }
    }
    .shadows{
        width: 100%;
        height: 100px;
        background: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0px;
    }
</style>
