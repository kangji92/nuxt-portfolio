
<template>
  <div class="intro">
    <div class="inner">

      <div class="content">
        <!--eslint-disable-next-line vue/no-v-html-->
        <h1 v-html="$t('intro-ttl')"></h1>
        <div class="btns-wrap">
          <NuxtLink to="/portfolio">{{ $t('btn-portfolio')}}</NuxtLink>
          <NuxtLink to="https://kang-ji.tistory.com/" target="_blank">{{ $t('btn-blog') }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
 
}
</script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fef8ee;
  font-family: $font-eng;
  .inner {
      position: absolute;
      top: 50%;
      left: 40px;
      @include translateY(-50%);
  }
  h1 {
    font-size: 62px;
    text-align: left;
    color: #000;
    margin: 0;
    letter-spacing: -0.05em;
    font-weight: 300;
    em {
      font-weight: 500!important;
    }
  }
  .btns-wrap {
    margin-top: 8%;
    @include display-flex {
      justify-content: getJustify(fs);
    }
    a {
      display: block;
      min-width: 200px;
      height: 60px;
      font-size: 28px;
      text-align: center;
      border: 1px solid #000;
      border-radius: 60px;
      background: transparent;
      transition: 0.3s;
      @include display-flex {
        justify-content: getJustify(center);
        align-items: checkAlign(center);
      }
      &:hover {
          background: #333;
            color: #fef8ee;
      }
    }
    a + a {
      margin-left: 5%;
    }
  }
}
</style>
