<!--eslint-disable vue/no-v-html-->
<template>
  <div class="portfolio-main">
    <div class="inner">
      <full-page ref="fullpage" :options="options">
        <section data-anchor="slide1" class="section vh-100">
          <div class="content">
            <!--eslint-disable-next-line vue/no-v-html-->
            <h1 v-html="$t('portfolio.ttl')"></h1>
            <p>{{ $t("portfolio.ttl_p") }}</p>
            <a href="#" class="ico-down"><img src="@/assets/images/ico_down.png" alt=""></a>
          </div>
        </section>
        <section data-anchor="slide2" class="section">
          <div class="content desc">
            <div class="desc-inner">
              <h3>{{ $t("portfolio.sec_1_ttl_h3") }}</h3>
              <ul class="item-group">
                <li>
                  <h4>{{ $t("portfolio.sec_1_ttl_h4_1") }}</h4>
                  <p v-html="$t('portfolio.sec_1_desc_1')"></p>
                </li>
                <li>
                  <h4>{{ $t("portfolio.sec_1_ttl_h4_2") }}</h4>
                  <p v-html="$t('portfolio.sec_1_desc_2')"></p>
                </li>
                <li>
                  <h4>{{ $t("portfolio.sec_1_ttl_h4_3") }}</h4>
                  <p v-html="$t('portfolio.sec_1_desc_3')"></p>
                </li>
                <li>
                  <h4>{{ $t("portfolio.sec_1_ttl_h4_4") }}</h4>
                  <p v-html="$t('portfolio.sec_1_desc_4')"></p>
                  <ul class="tool-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section data-anchor="slide3" class=" section">
          <div class="content">
            <ExperienceSlider />
          </div>
        </section>
        <!--
        <section data-anchor="slide3" class=" section">
          <div class="content">
            <div class="img1"></div>
            <h3 class="ttl1">테스트 텍스스ㅡ스스스ㅡ스 <span>dadfjlajfklg djglotugd n</span></h3>
            <div class="img2"></div>
            <h3 class="ttl2">테스트 텍스스ㅡ스스스ㅡ스 <span>dadfjlajfklg djglotugd n</span></h3>
          </div>

        </section>-->
        <section data-anchor="slide4" class="section">
          <div class="content">
            <ProjectSlider />
          </div>

        </section>
        <section data-anchor="slide5" class="section">
          <div class="content">
            <div class="contact-inner">
              <div class="txt-group">
                <em>Thank you.</em>
              </div>
              <nuxt-link tag="button" class="btn trn" to="/portfolio/resume">
                {{ $t("btn-resume") }}
              </nuxt-link>
            </div>
          </div>

        </section>
      </full-page>

    </div>
  </div>
</template>

<script>

import ProjectSlider from '@/components/ProjectSlider.vue';
import ExperienceSlider from '@/components/ExperienceSlider.vue';

export default {
  components: { ProjectSlider, ExperienceSlider },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        licenseKey: "57A4E3B2-4CF4497D-84973653-2E0DBD93",
        verticalCentered: false, // flex
        navigation: true,
        controlArrows: true,
        scrollBar: false,
        // scrollOverflow: true,
        Navigation: true,
        // NavigationPosition: "Right", // Navigate the position of the small dot
        NavigationToolTIPS: ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"],
        slidesNavigation: true,
        showActiveTooltip: true,
        anchors: ["slide1", "slide2", "slide3", "slide4", "slide5"],
        // sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
      },
      mounted() {
        this.scrollAnimation();
      },
      methods: {
        scrollAnimation() {
          const tl = this.$gsap
          tl.timeline({
            scrollTrigger: {
              trigger: ".content", // 객체기준
              // start: "center center",
              // end: "bottom top",
              start: '0s',
              pinSpacing: true, //  시작점
              end: '+=1000s', // 끝점
              markers: true,  // 가이드선
              scrub: true,  // 모션바운스
              pin: true, // 핀고정
              y: 0,
              duration: 0.5,
              ease: "slow(0.7, 0.7, false)",
              opacity: 0,
            }
          })
           .to(".content", { x: innerWidth * 1, opacity: 0 });
       
        },
      }
 
    }
  },
 
 
}
</script>

<style>
#fp-sr-only .fp-sr-only {
  overflow: auto;
}
</style>
<style lang="scss" scoped>

.portfolio-main {
  width: 100%;
  height: 100%;
  background-color: #fef8ee;
  font-family: $font-eng;
  scroll-behavior: smooth;

  .inner {
   
    padding: 40px 0;
    padding: 0;
    margin: 0 40px;
  }


  .section {
    width:100%;
    height: 100vh;
    position: relative;
    @include display-flex {
      justify-content: getJustify(center);
      flex-direction: column;
      /*align-items: checkAlign(center);*/
    }
  }
 
  .content {
    height: 100%;
    //opacity: 0;
    //position: absolute;
    //top: 2em;
    //transform: translate(0, -100vh);
    @include display-flex {
      justify-content: getJustify(center);
      flex-direction: column;
    }
  }
  h1 {
    font-size: 62px;
    text-align: left;
    color: #000;
    margin: 0;
    letter-spacing: -0.05em;
    font-weight: 300;


  }

  p {
    font-size: 22px;
    margin-top: 30px;

  }

  .ico-down {
    position: absolute;
    bottom: 8%;
    left: 50%;
    @include translateX(-50%);
    width: 36px;
    height: 36px;

    img {
      width: 100%;
    }
  }

  .navigation {
    position: fixed;
    text-align: right;
    right: 74px;
    top: 50%;
    @include translateY(-50%);

    ul li {
      line-height: 1.8;

      a {
        font-size: 18px;

        @include display-flex {
          justify-content: getJustify(fe);
          align-items: checkAlign(center);
        }

        .txt {
          opacity: 0;

          &:hover {
            opacity: 1;
          }
        }

        .dot {
          margin-left: 8px;
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0, 0, 0, .5);
        }
      }
    }
  }
}

.blank {
  width: 100%;
  height: 100vh;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;

  @include display-flex {
    justify-content: getJustify(center);
    align-items: checkAlign(fe);
  }

  background: #000;
  overflow: hidden;
}

.img1 {
  background: url('@/assets/images/test_bg.jpg') center center no-repeat;
  width: 60%;
  height: 60%;
  background-size: cover;


}

.img2 {
  background: url('@/assets/images/test_bg2.jpg') center bottom no-repeat;
  width: 100%;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  @include translate(-50%, 0);
  background-size: cover;


}

.ttl1 {
  position: absolute;
  top: 50%;
  left: 20%;
  font-size: 32px;
  @include translate(-50%, -50%);
  opacity: 0;

  span {
    font-size: 24px;
    font-weight: normal;
    display: block;
  }
}

.ttl2 {
  position: absolute;
  top: 50%;
  left: 20%;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  @include translate(-50%, -50%);


  span {
    font-size: 24px;
    font-weight: normal;
    display: block;
  }
}
.pagination-wrapper {
  position: fixed;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);

  .pagination {
    width: 14px;
    height: 14px;
    border: 1px solid #fefefe;
    border-radius: 50%;

    &+.pagination {
      margin-top: 20px;
    }

    &.active {
      background-color: #fefefe;
    }
  }
}

    .desc-inner {
      max-width: 1400px;
      margin: 0 auto;
      margin-top: 0;
      position: relative;
  
      @include respond-to("bp-landscape-1440") {
        // 1440
        width: calc(100% - 10%);
        margin-top: 8%;
      }
  
      @include respond-to("bp-tablet-820") {
        // 820
  
        margin-top: 15%;
      }
  
      h3 {
        font-size: 40px;
        font-family: $font-eng;
        text-align: center;
        @include respond-to("bp-mobile-600") {
          // 600
          text-align: center;
          font-size: 6.5vw;
        }
      }
  
      .item-group {
        margin-top: 15%;
  
        @include respond-to("bp-landscape-1440") {
          margin-top: 13vw;
        }
  
        @include respond-to("bp-tablet-820") {
          margin-top: 10%;
        }
  
        @include respond-to("bp-mobile-600") {
          margin-top: 8%;
        }
  
        &::before {
          content: "";
          display: block;
          width: 1px;
          height: 86px;
          background: #707070;
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
  
          @include respond-to("bp-landscape-1440") {
            height: 5vw;
            top: 5.4vw;
          }
  
          @include respond-to("bp-tablet-820") {
            display: none;
          }
        }
  
        li {
          float: left;
          width: 46%;
          height: 220px;
  
          &:nth-child(1),
          &:nth-child(3) {
            margin-right: 5%;
          }
  
          @include respond-to("bp-landscape-1440") {
            // 1440
            font-size: 1.45vw;
            height: 15vw;
          }
  
          @include respond-to("bp-landscape-1024") {
            // 1024px
            //width: 100%;
            // height: auto;
            //margin-bottom: 4%;
          }
  
          @include respond-to("bp-tablet-820") {
            // 820
            width: 100%;
            height: auto;
            margin-bottom: 5%;
          }
  
          h4 {
            font-size: 28px;
            text-align: left;
            font-family: $font-eng;
            line-height: 1.5em;
  
            @include respond-to("bp-landscape-1440") {
              // 1440
              font-size: 1.944445vw;
            }
  
            @include respond-to("bp-landscape-1024") {
              // 1024
              font-size: 2.734375vw;
            }
  
            @include respond-to("bp-tablet-820") {
              // 820
              font-size: 4.1vw;
            }
  
            @include respond-to("bp-mobile-600") {
              font-size: 5vw;
            }
          }
  
          p {
            font-size: 22px;
            margin-top: 6px;
            text-align: left;
            font-family: $font-kr;
            font-weight: 300;
            line-height: 1.3em;
  
            @include respond-to("bp-max-1440") {
              // 1440
              font-size: 1.45vw;
            }
  
            @include respond-to("bp-max-820") {
              // 820
              font-size: 4vw;
              line-height: 1.3;
              margin-top: 1%;
            }
  
            @include respond-to("bp-max-600") {
              // 600
              font-size: 1rem;
              margin-top: 1%;
            }
          }
  
          .tool-list {
            margin-top: 20px;
            width: 456px;
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
</style>
