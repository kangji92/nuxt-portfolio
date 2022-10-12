<!--eslint-disable vue/no-v-html-->
<template>
    <div class="projects">
        <div class="inner">
            <VueSlickCarousel class="slider" :arrows="true" :dots="true">
                <div v-for="project in projectList" :key="project.idx" class="prj-wrap">
                    <div class="prj-info">
                        <p class="prj-info__num">{{project.idx}}</p>
                        <h3 class="prj-info__ttl" v-html="$t('project.ttl_' + project.name)"></h3>
                        <p class="prj-info__sub-ttl" v-html="$t('project.subttl_' + project.name)"></p>
                        <div class="prj-info__summary">
                            <dl>
                                <dt v-html="$t('project.info_dt_01')"></dt>
                                <dd>{{ $t("project.info_dd_01_" + project.name) }}</dd>
                            </dl>
                            <dl>
                                <dt v-html="$t('project.info_dt_02')"></dt>
                                <dd>{{ $t("project.info_dd_02_" + project.name) }}</dd>
                            </dl>
                            <dl>
                                <dt v-html="$t('project.info_dt_03')"></dt>
                                <dd>{{ $t("project.info_dd_03_" + project.name) }}</dd>
                            </dl>
                            <dl>
                                <dt v-html="$t('project.info_dt_04')"></dt>
                                <dd>{{ $t("project.info_dd_04_" + project.name) }}</dd>
                            </dl>
                        </div>
                        <div class="btn-wrap">
                            <!--   <nuxt-link :to="`/portfolio/project-detail/${project.name}`">Detail View</nuxt-link> -->
                            <nuxt-link :to="`/projectdetail/${project.name}`">Detail View</nuxt-link>
                        </div>
                    </div>
                    <div class="prj-photo">
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
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            projectList: [
                {
                    idx: "01",
                    id: "kdxp",
                    name: "kdxp",
                    mockup_wrap: "mockup-wrap",
                    mockup_class_01: "mockup__mo kdxp",
                    image_class: "kdxp",
                },
                {
                    idx: "02",
                    id: "suhyup",
                    name: "suhyup",
                    mockup_wrap: "mockup-wrap",
                    mockup_class_01: "mockup__pc suhyup",
                    image_class: "suhyup",
                },
                {
                    idx: "03",
                    id: "mobilian",
                    name: "mobilian",
                    mockup_wrap: "mockup-wrap",
                    mockup_class_01: "mockup__mo mobilian",
                    image_class: "mobilian",
                },
                {
                    idx: "04",
                    id: "kyobo",
                    name: "kyobo",
                    mockup_wrap: "mockup-wrap__respons",
                    mockup_class_01: "mockup__pc kyobo",
                    mockup_class_02: "mockup__pad kyobo",
                    mockup_class_03: "mockup__mo kyobo",
                    image_class: "kyobo",
                },
                {
                    idx: "05",
                    id: "inihub",
                    name: "inihub",
                    mockup_wrap: "mockup-wrap__respons",
                    mockup_class_01: "mockup__pc inihub",
                    mockup_class_03: "mockup__mo inihub",
                },
                {
                    idx: "06",
                    id: "nexess",
                    name: "nexess",
                    info_ttl_06: "",
                    mockup_wrap: "mockup-wrap",
                    mockup_class_01: "mockup__pc nexess-demo",
                    mockup_class_02: "mockup__pad nexess-demo",
                },
                {
                    idx: "07",
                    id: "multi-demo",
                    name: "multi-demo",
                    mockup_wrap: "mockup-wrap__respons",
                    mockup_class_01: "mockup__pc multi-demo",
                    mockup_class_03: "mockup__mo multi-demo",
                    image_class: "multi-demo",
                },
                {
                    idx: "08",
                    id: "inipass",
                    name: "inipass",
                    image_class: "inipass",
                    mockup_wrap: "mockup-wrap__respons",
                    mockup_class_01: "mockup__pc inipass",
                    mockup_class_03: "mockup__mo inipass",
                },
                {
                    idx: "09",
                    id: "lotte-event",
                    name: "lotte-event",
                    mockup_wrap: "",
                    mockup_class_01: "mockup__mo lotte",
                },
                {
                    idx: "10",
                    id: "snbcorp",
                    name: "snbcorp",
                    mockup_wrap: "mockup-wrap__respons",
                    mockup_class_01: "mockup__pc snbcorp",
                    mockup_class_02: "mockup__mo snbcorp",
                },
                {
                    idx: "11",
                    id: "wellpot",
                    name: "wellpot",
                    mockup_wrap: "mockup-wrap__respons",
                    mockup_class_01: "mockup__pc wellpot",
                    mockup_class_02: "mockup__mo wellpot",
                },
                {
                    idx: "12",
                    id: "wedding",
                    name: "wedding",
                    sub_ttl: "Mobile Wedding Invitation",
                    mockup_wrap: "mockup-wrap",
                    mockup_class_01: "mockup__mo wedding",
                },
            ],
        }
    },
   
}
</script>

<style>


.slick-list {
    width: 80%;
    width:100%;
    height: 80vh;
  
}
.slick-dots { margin-left: 80px;}
.slick-dots li {
    display: inline-block;
    margin: 0.5rem;
}

.slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #000;
    opacity: 0.5;
    font-size: 0;
    border: none;
    cursor: pointer;
}
.slick-dots li.slick-active button {
    opacity: 1;
}

.slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.slick-arrow.slick-prev {
    text-indent: -999px;
    width: 48px;
    height: 48px;
    left: 10px;
    z-index: 1000;
    background: url("~@/assets/images/ico_prev.png") center center no-repeat;
    background-size: 100%;
    opacity: 0.3;
}

.slick-arrow.slick-next {
    text-indent: -9999px;
    width: 48px;
    height: 48px;
    right: 10px;
    background: url("~@/assets/images/ico_next.png") center center no-repeat;
    background-size: 100%;
    opacity: 0.4;
}
.slick-arrow.slick-prev:hover,
.slick-arrow.slick-prev:focus,
.slick-arrow.slick-next:hover,
.slick-arrow.slick-next:focus {
    opacity: 1;
    transition: all 0.3s;
}
</style>

<style lang="scss" scoped>


















































.prj-wrap {
    @include display-flex {
        display: flex;
        justify-content: getJustify(sb);
    }
    @include respond-to("bp-max-820") {
        display: block;
    }
}
.prj-info {
    font-family: $font-eng;
    color: $txt-def;
    position: relative;
    width: calc(40% - 100px);
    height: 740px;
    margin-top: 2%;
    margin-left: 0;
    padding: 0 0 50px 100px;
    color: #222;
    text-align: left;
    @include respond-to("bp-max-820") {
        padding: 0;
        width: 100%;
            height: auto;
           
    }
}
.prj-photo {
    position: relative;
    margin-top: 2%;
    width: calc(60% - 170px);
    height: 740px;
    min-height: 780px;
    padding: 50px 0;
    margin-right: 120px;
    @include respond-to("bp-max-820") {
         
        width: 72%;
          
            padding: 0;
            height: auto;
            margin: 0 auto;
    }
    .mockup-wrap {
        .mockup__mo {
            width: 300px;
            height: 579px;
            position: absolute;
            right: 380px;
            top: 80px;
            @include respond-to("bp-max-820") {
                 left:0;
                 width: 33vw;
                height: 64vw;
            }
    
            span {
                &:nth-child(1) {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 300px;
                    height: 579px;
                    @include translate(-50%, -50%);
                    @include respond-to("bp-max-820") {
                         
                        width: 33vw;
                            height: 64vw;
                        }
                }
    
                &:nth-child(2) {
                    display: block;
                    position: relative;
                    width: 300px;
                    height: 579px;
                    background: url('@/assets/images/mockup/iPhone11_bar.png') no-repeat;
                    background-size: 100%;
                    @include respond-to("bp-max-820") {
                        width: 33vw;
                            height: 64vw;
                        }
                }
            }
            &.kdxp {
                span {
                    &:nth-child(1) {
                        width: 250px;
                        height: 536px;
                        background: url('@/assets/images/projects/initech/kdxp/easyauth_iphone_03.png') center center no-repeat;
                        background-size: 100%;
                        @include respond-to("bp-max-820") {
                                width: 28vw;
                                height: 59vw;
                        }
                        &::after {
                            content: '';
                            display: block;
                            width: 250px;
                            height: 536px;
                            margin-left: 280px;
                            background: url('@/assets/images/projects/initech/kdxp/easyauth_iphone_00.png') center center no-repeat;
                            background-size: 100%;
                            border-radius: 25px;
                            @include respond-to("bp-max-820") {
                                width: 100%;
                                height: 59vw;
                                margin-left: 32vw;

                            }
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
            @include respond-to("bp-max-820") {
                width: 65vw;
                height: 60vw;
                left: 50%;
                @include translateX(-50%);
            }
    
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
                    @include respond-to("bp-max-820") {
                            width: 100%;
                            height: 60vw;
                        }
                }
            }
            &.suhyup {
                span {
                    &:nth-child(1) {
                        width: 758px;
                        height: 679px;
                        background: url('@/assets/images/projects/initech/suhyup/suhyup_03.png') center 26px no-repeat;
                        background-size: 100%;
                        @include respond-to("bp-max-820") {
                            width:98%;
                            height: 60vw;
                        }
                    }
                }
            }
        }
    }
    .mockup-wrap__respons {
        .mockup__mo {
            width: 260px;
            height: 501px;
            position: absolute;
            right: 680px;
            top: 180px;
        
            span {
                &:nth-child(1) {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 260px;
                        height: 501px;
                    @include translate(-50%, -50%);
                }
    
                &:nth-child(2) {
                    display: block;
                    position: relative;
                    width: 260px;
                    height: 501px;
                    background: url('@/assets/images/mockup/iPhone11_.png') no-repeat;
                    background-size: 100%;
                }
            }
            &.kyobo {
                span {
                    &:nth-child(1) {
                        background: url('@/assets/images/projects/initech/kyobo/mo_01_kakao_2.jpg') center 0 no-repeat;
                        background-size: 100%;
                    }
                }

            }
        }
        .mockup__pc {
            width: 924px;
            height: 548px;
            position: absolute;
            right: -40px;
            top: 60px;
            span {
                &:nth-child(1) {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 686px;
                    height: 513px;
                    @include translate(-50%, -50%);
                }
    
                &:nth-child(2) {
                    display: block;
                    position: relative;
                    width: 924px;
                    height: 548px;
                    background: url('@/assets/images/mockup/macbook_air.png') no-repeat;
                    background-size: 100%;
                }
            }
            &.kyobo {
                span {
                    &:nth-child(1) {
                        background: url('@/assets/images/projects/initech/kyobo/intergration_pc_01.png') center 0 no-repeat;
                        background-size: 100%;
                    }
                }

            }
        }
    }


}
 .btn-wrap {
     margin-top: 10%;
    @include respond-to("bp-max-820") {
        position: absolute;
        bottom: 0;
    }

     a {
         width: 211px;
         height: 60px;
         border-radius: calc(60px * 0.5);
         font-size: 28px;
         display: block;
         text-align: center;
         border: 1px solid #707070;

         @include display-flex {
             justify-content: getJustify(center);
             align-items: checkAlign(center);
         }

         color: $txt-def;
         font-family: $font-eng;
         font-weight: 300;

         &:hover {
             transition: 0.3s;
             background: #333;
             color: #fff;
         }
     }
 }
.prj-info__num {
    font-size: 4.6rem;
    color: rgba(0, 0, 0, 0.15);
    font-weight: 500;
    margin-bottom: 16px;
}
 .prj-info__ttl {
     font-size: 32px;
     line-height: 1.25;
     letter-spacing: -0.05em;
     br {
         display: none;
     }
     em {
         font-weight: 600;
     }
     @include respond-to("bp-max-820") {
         font-size: 6vw;
         font-size: 2rem;
         margin-top: 3vw;
         br {
             display: block;
         }
     }
 }

 .prj-info__sub-ttl {
    margin-bottom: 26%;
    padding-top: 16px;
    font-size: 24px;
    line-height: 1.3;
    font-family: $font-eng;
    @include respond-to("bp-max-820") {
        margin-bottom: 5%;
    }
 }

 .prj-info__summary {
     dl {
        @include display-flex {
            justify-content: getJustify(fs);
        }
        dt {
             min-width: 190px;
             padding-right: 10px;
             font-size: 18px;
             font-weight: 300;
             line-height: 1.5;
        }
        dd {
             font-size: 18px;
             font-weight: 400;
             letter-spacing: normal;
         }
     }
 }
</style>