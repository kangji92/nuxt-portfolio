<!--eslint-disable vue/no-v-html-->
<template>
  <div class="project-detail">
    <div v-for="project in projectList" :key="project.id" :class="project.name">
      <div class="container">
        <div class="prj-intro">
          <div class="inner">
            <!--          <h1>{{ $route.name}}</h1> -->
            <h1 class="prj-info__ttl" v-html="$t('project.ttl_mobilian')"></h1>
            <p class="prj-info__sub-ttl" v-html="$t('project.subttl_mobilian')"></p>
            <div class="prj-intro__info">
              <dl>
                <dt>{{ $t("project.info_date") }}</dt>
                <dd>
                  {{ $t("project." + project.name + "_info_date") }}
                </dd>
              </dl>
              <dl>
                <dt>{{ $t("project.info_output") }}</dt>
                <dd>
                  {{ $t("project." + project.name + "_info_output") }}
                </dd>
              </dl>
            </div>
            <div class="prj-intro__mockup">
              <div :class="project.mockup_wrap">
                <div class="mockup" :class="project.mockup_class_01">
                  <span></span>
                  <span></span>
                </div>
                <div class="mockup" :class="project.mockup_class_02">
                  <span></span>
                  <span></span>
                </div>
                <div class="mockup" :class="project.mockup_class_03">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="prj-stack">
          <div class="inner">
            <div class="col">
              <span class="contour"></span>
              <div class="ttl">
                <h2>{{ $t("project.artical_ttl_01") }}</h2>
              </div>
              <dl>
                <dt>Encode :</dt>
                <dd>UTF-8</dd>
              </dl>
              <dl>
                <dt>SCM :</dt>
                <dd>Git</dd>
              </dl>
              <dl>
                <dt>Git Cloud Service :</dt>
                <dd>Bitbucket</dd>
              </dl>
              <dl>
                <dt>Git-GUI :</dt>
                <dd>Sourcetree</dd>
              </dl>
              <dl>
                <dt>Framework :</dt>
                <dd>Vue.js (Vue-cli)</dd>
              </dl>
              <dl>
                <dt>UI Guide Tool :</dt>
                <dd>Zeplin, Photoshop</dd>
              </dl>
              <dl class="project__desc">
                <dt>Details</dt>
                <dd>
                  - Vuex 상태관리 <br />
                  - i18n 다국어 지원<br />
                  - Vue-router 라우팅 기능<br />
                  - Sass(SCSS)
                </dd>
              </dl>
              <dl class="project__desc">
                <dt>웹 호환성</dt>
                <dd>
                  - PC : Chrome, MSEdge, Firefox, IE11, Safari <br />
                  - Tablet/Mobile : Android 6.X / IOS 10.X
                </dd>
              </dl>
              <dl class="project__desc">
                <dt>해상도 범위</dt>
                <dd>
                  - PC/ Tablet(가로) : 801px ~ 1920px<br />
                  - Mobile/ Tablet(세로) : 280px ~ 800px
                </dd>
              </dl>
            </div>
            <div class="col">
              <span class="contour"></span>
              <div class="ttl">
                <h2>Style Guides</h2>
              </div>

              <div class="style-guide">
                <div class="sub-ttl">
                  <h4>Colors</h4>
                </div>
                <div class="palette-wrap">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div class="style-guide fonts">
                <div class="sub-ttl">
                  <h4>Fonts</h4>
                </div>
                <div class="fonts-wrap">
                  <ul>
                    <li>
                      <p>교보생명 Font SemiBold</p>
                    </li>
                    <li>
                      <p>교보생명 Font Bold</p>
                    </li>
                    <li>
                      <p>교보생명 Font Reguler</p>
                    </li>
                    <li>
                      <p>교보생명 Font Lignt</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="style-guide buttons">
                <div class="sub-ttl">
                  <h4>Buttons</h4>
                </div>
                <div class="buttons-wrap">
                  <ul>
                    <li><button>Button</button></li>
                    <li><button>Button</button></li>
                    <li><button>Button</button></li>
                    <li><button>Button</button></li>
                  </ul>
                </div>
              </div>
              <div class="style-guide icons">
                <div class="sub-ttl">
                  <h4>Icons</h4>
                </div>
                <div class="icons-wrap">

                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="prj-preview">
          <div class="inner">
            <div class="ttl">
              <h2>Components</h2>
              <p>Responsive | Desktop / Tablet / Mobile | 32 Screens</p>
            </div>
            <article>
              <p class="visual__ttl">Individual UI</p>
              <div class="visual-box">
                <div class="mockup_sub">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="visual-box">
                <div class="mockup_sub">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>
            <article>
              <p class="visual__ttl">Individual UI</p>
              <div class="visual-box">
                <div class="mockup_sub">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="visual-box">
                <div class="mockup_sub">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>

          </div>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projectList: [
        {
          idx: 1,
          name: "mobilian",
          ttl: "+ Tech Stack",
          artical_ttl: "Tech Stack",
          mockup_wrap: "mockup-wrap",
          mockup_class_01: "mockup__mo mobilian",
          image_class: "mobilian",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/prj-detail";

.project-detail {

    .col {
      //   @include clearfix;
      display: block;
      float: left;
      width: 50%;
      text-align: left;
  
      @include respond-to("bp-max-820") {
        width: 100%;
        margin-top: 10vw;
  
  
      }
    }
    .col+.col {
      @include respond-to("bp-max-820") {
        margin-top: 13vw;
      }
    }
    

         .mockup-wrap {
           .mockup__mo {
             width: 300px;
             height: 579px;
             position: absolute;
             right: 380px;
             top: 80px;
    
             span {
               &:nth-child(1) {
                 position: absolute;
                 left: 50%;
                 top: 50%;
                 width: 300px;
                 height: 579px;
                 @include translate(-50%, -50%);
               }
    
               &:nth-child(2) {
                 display: block;
                 position: relative;
                 width: 300px;
                 height: 579px;
                 background: url('@/assets/images/mockup/iPhone11_bar.png') no-repeat;
                 background-size: 100%;
               }
             }
    
             &.kdxp {
               span {
                 &:nth-child(1) {
                   width: 250px;
                   height: 536px;
                   background: url('@/assets/images/projects/initech/kdxp/easyauth_iphone_03.png') center center no-repeat;
                   background-size: 100%;
    
                   &::after {
                     content: '';
                     display: block;
                     width: 250px;
                     height: 536px;
                     margin-left: 280px;
                     background: url('@/assets/images/projects/initech/kdxp/easyauth_iphone_00.png') center center no-repeat;
                     background-size: 100%;
                     border-radius: 25px;
                   }
                 }
               }
             }
    
             &.mobilian {
               right: 680px;
    
               span {
                 &:nth-child(1) {
                   width: 250px;
                   height: 536px;
                   background: url('@/assets/images/projects/initech/mobilian/mobilian_03.jpg') center center no-repeat;
                   background-size: 100%;
    
                   &::before {
                     content: '';
                     display: block;
                     width: 250px;
                     height: 536px;
                     margin-left: 280px;
                     background: url('@/assets/images/projects/initech/mobilian/mobilian_01.jpg') center center no-repeat;
                     background-size: 100%;
                     border-radius: 25px;
                   }
    
                   &::after {
                     content: '';
                     display: block;
                     position: absolute;
                     top: 0;
                     left: 260px;
                     width: 250px;
                     height: 536px;
                     margin-left: 280px;
                     background: url('@/assets/images/projects/initech/mobilian/mobilian_04.jpg') center center no-repeat;
                     background-size: 100%;
                     border-radius: 25px;
                   }
                 }
    
                 &:nth-child(2) {
                   background: url('@/assets/images/mockup/iPhone11_.png') no-repeat;
                   background-size: 100%;
                 }
               }
             }
           }
    
           .mockup__pc {
             width: 800px;
             height: 679px;
             position: absolute;
             right: 80px;
             top: 60px;
    
             span {
               &:nth-child(1) {
                 position: absolute;
                 left: 50%;
                 top: 50%;
                 width: 800px;
                 height: 679px;
                 @include translate(-50%, -50%);
               }
    
               &:nth-child(2) {
                 display: block;
                 position: relative;
                 width: 800px;
                 height: 679px;
                 background: url('@/assets/images/mockup/iMac_24.png') no-repeat;
                 background-size: 100%;
               }
             }
    
             &.suhyup {
               span {
                 &:nth-child(1) {
                   width: 758px;
                   height: 679px;
                   background: url('@/assets/images/projects/initech/suhyup/suhyup_03.png') center 26px no-repeat;
                   background-size: 100%;
                 }
               }
             }
           }
         }
}

</style>