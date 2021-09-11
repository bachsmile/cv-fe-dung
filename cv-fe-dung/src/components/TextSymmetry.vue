<template>
  <div class="text-symmetry">
        <div class="text-symmetry__text">
            SKILLS
        </div>
        <div class="text-symmetry__textShadow">
            SKILLS
        </div>
  </div>
</template>

<script>
export default {
    name: 'TextSymmetry'
}
</script>

<style lang="scss" scoped>
.text-symmetry{
    line-height: 80px;
    letter-spacing: 10px;
    width: 375px;
    &__text{
        color: #D2140F;
        font-size: 6rem;
    }
    &__textShadow{
        // color: white;
        font-size: 6rem;
        transform: rotateZ(-180deg);
        background: -webkit-linear-gradient(90deg, rgba(255,255,255,1) 26%, rgba(201,198,198,1) 15%, rgba(0,0,0,1) 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>
