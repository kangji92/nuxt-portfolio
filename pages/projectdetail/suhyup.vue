<!--eslint-disable vue/no-v-html-->
<template>
    <div class="project-detail">
        <div class="container">
            <div class="prj-intro">
                <div class="inner">
                    <h1 class="prj-info__ttl" v-html="$t('project.ttl_suhyup')"></h1>
                    <div class="prj-intro__info">
                        <dl>
                            <dt>dd : </dt>
                            <dd>dd
                            </dd>
                        </dl>
                        <dl>
                            <dt>dd : </dt>
                            <dd>
                                ddd
                            </dd>
                        </dl>
                    </div>
                    <div class="prj-intro__mockup">
                        <div class="mockup">
                            <span></span>
                            <span></span>
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
</template>

<script>
export default {
    data() {
        return {
        };
    },
}
</script>

<style lang="scss" scoped>
.project-detail {
    font-family: $font-eng;

    .inner {
        margin: 0 40px;
    }

    h1 {
        margin-top: 80px;
        font-size: 48px;
        font-weight: 600;
        padding-bottom: 20px;
        line-height: 1.25em;
    }

    .sub-ttl {
        font-size: 28px;

    }

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

    .contour {
        display: block;
        width: 64px;
        height: 1px;
        background: #707070;
        margin-bottom: 24px;
    }

    h2 {
        display: inline-block;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 30px;

        @include respond-to("bp-max-820") {
            font-size: 5vw;
            margin-bottom: 5vw;
        }
    }

    h4 {
        font-size: 24px;
    }

    dl {
        width: 100%;
        font-size: 18px;
        line-height: 1.5em;

        dt {
            display: inline-block;
            width: 22%;
        }

        dd {
            display: inline-block;
            padding-left: 18px;
        }
    }
}
</style>