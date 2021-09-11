<template>
    <div class="hello" :id="idText">
        <div class="wrapper-text">
            <div class="wrapper-text__text-dynamic">
                <div class="text" ><span  id="dynamic" ref="dynamic">{{text}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextDynamic',
    props: {
        idText: String,
        text: String,
        delay: String,
        speed: Number,
        color: String,
        colorDynamic: String,
        textAlign: String
    },
    data () {
        const lengtTXT = this.text ? this.text.length : 0
        return {
            i: lengtTXT
        }
    },
    methods: {
        runTypingTxt () {
            var child = document.createElement('span')
            child.style.animationTimingFunction = `steps(${this.i})`
            child.style.animationDelay = `${this.delay}s`
            child.style.animationDuration = `${this.speed}s`
            child.style.background = `${this.colorDynamic}`
            this.$refs.dynamic.appendChild(child)
            document.getElementById(this.idText).style.textAlign = `${this.textAlign}`
            document.getElementById(this.idText).style.color = `${this.color}`
        }
    },
    mounted () {
        this.runTypingTxt()
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
#dynamic{
    position: relative;
    >span{
        display: block;
        position: absolute;
        top:0px;
        right:0px;
        // background: #D2140F;
        width: 100%;
        height: 100%;
        animation: show forwards;
        border-left: 1px solid black;
    }
}
@keyframes show{
    from{
        width: 100%;
    }
    to{
        width: 0%;
        border-left: 0px solid black;
    }
}
$i: 10;
.hello{
    // display: flex;
    // justify-content: start;
}
.wrapper-text{
    display: inline-flex;
    &__text-dynamic{
        font-size: 1.2rem;
        letter-spacing: 4px;
        word-spacing: 5px;
        // color: white;
    }
    .text{
        overflow: hidden;
        span{
            position: relative;
        }
    }
}
@keyframes typing{
    100%{
        left: 100%;
        width: 0;
        margin: 0 -60px 0 60px;
    }
}
</style>
