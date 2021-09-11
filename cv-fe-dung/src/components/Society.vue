<template>
  <div class="society">
      <ul>
          <li><i class="fab fa-facebook-square icon-soc"></i></li>
          <li><i class="fab fa-instagram-square icon-soc"></i></li>
          <li><i class="fab fa-deviantart icon-soc"></i></li>
          <li><i class="fas fa-envelope icon-soc"></i></li>
      </ul>
  </div>
</template>
<script>
export default {
    name: 'Society'
}
</script>

<style lang='scss' scoped>
.society{
    position: relative;
    cursor: pointer;
    ul{
        padding: 0;
        list-style: none;
        .icon-soc{
            font-size: 2.5rem;
            color: white;
            z-index: 1;
        }
        li{
            margin: 10px;
            text-align: center;
        }
    }
}
.society::before{
    content: '';
    background: linear-gradient(90deg, black, #AC110D);
    width: 100%;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 10px 0;
    transform: translate(-50%, -50%);
    opacity: 0.5;
}
</style>
