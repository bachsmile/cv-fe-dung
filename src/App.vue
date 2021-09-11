<template>
  <router-view/>
</template>

<style lang='scss'>
/* color config */
/* //////////////// */
:root {
    // color text
    --colorMainText: #ffff;
    --colorDynamicText:#ffff;
    --colorDynamicTextSecond:red;
    //  color background
    --colorBacKgroundMain: #D2140F;
    --colorBacKgroundSecoond: #CB130F;
    --colorBacKgroundlLinear: #000;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
   scroll-behavior: smooth;
}
ul, li {
    list-style: none;
}
.box-society{
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
    right: 2%;
    z-index: 10;
}
</style>
