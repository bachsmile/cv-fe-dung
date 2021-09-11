<template>
    <div class="container-bar">
        <div class="skill" v-for="(item, index) in listSkill" :key="index">
            <span class="Name">{{item.skill}}</span>
            <div class="percent">
                <div class="progess" :style="{ width: item.percent+'%'}"></div>
            </div>
            <span class="Value">{{item.percent}}%</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChartSkill',
    data() {
        return {
            listSkill: [
                {
                    skill: 'drawing',
                    percent: '75'
                },
                {
                    skill: 'photoshop',
                    percent: '85'
                },
                {
                    skill: 'illustrator',
                    percent: '50'
                },
                {
                    skill: 'design',
                    percent: '75'
                },
                {
                    skill: 'color',
                    percent: '75'
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
.container-bar{
    position: relative;
    width: 450px;
    height: auto;
    background: var(--colorBacKgroundMain);
    transform: rotate(-90deg) translate(-300px, -70px);
    position: absolute;
    left: 0;
    top: 0;
    .skill{
        position: relative;
        display: flex;
        // margin: 20px 0;
        padding: 10px 10px 10px;
        background: linear-gradient(#616161 0%, #333 10%, #222);
        border-radius: 8px;
        border:  2px solid #000;
        overflow: hide;
        transition: 0.5s;
    }
    .skill::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: rgba(255, 255, 255, .1);
        z-index: 10;
    }

    .skill .Name {
        position: relative;
        width: 110px;
        text-align: right;
        color: #fff;
        margin-top: -2px;
        text-transform: uppercase;

    }
    .skill .Value{
        position: relative;
        width: 40px;
        text-align: left;
        color: #fff;
        margin-top: -2px;
        text-transform: uppercase;
    }
    .skill .percent{
        position: relative;
        width: calc(100% - 150px);
        height: 20px;
        margin: 0 10px;
        border-radius: 10px;
        background: #151515;
        box-shadow: inset 0 0 10px #000;
        overflow: hidden;
    }
    .skill .percent .progess{
        position: absolute;
        top: 0;
        left: 0;
        // width: 70%;
        height: 100%;
        border-radius: 10px;
        background: #fff;
        box-shadow: inset 0 0 2px #000;
        animation: animateProgess 2s ease-in-out forwards;
    }
    .skill:nth-child(1) .percent .progess {
        background: linear-gradient(45deg, #1fe6ff, #673AB7);
    }
    .skill:nth-child(2) .percent .progess {
        background: linear-gradient(45deg, #3bc0ff, #33ff00);
    }
    .skill:nth-child(3) .percent .progess {
        background: linear-gradient(45deg, #ffee54, #ff00ca);
    }
    .skill:nth-child(4) .percent .progess {
        background: linear-gradient(45deg, #3822ff, #f32156);
    }
    .skill:nth-child(5) .percent .progess {
        background: linear-gradient(45deg, #ffde22, #f34b21);
    }
    
}
.container-bar:hover .skill{
    opacity: 0.05;
}
.container-bar .skill:hover{
    opacity: 1;
    transform: scale(1.2);
}
@keyframes animateProgess {
        from {
            width: 0;
        }
}
</style>