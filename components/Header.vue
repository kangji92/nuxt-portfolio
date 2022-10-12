<template>
    <div>
        <nav>
            <div class="inner">
                <div class="logo"></div>
                <!-- <div class="lang">
                    <a href="">KOR</a> |
                    <a href="">ENG</a>
                </div> 
                <nuxt-link v-if="$i18n.locale !== 'kr'" :to="switchLocalePath('kr')">
                        KOR
                    </nuxt-link>
                    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
                        ENG
                    </nuxt-link>
                    -->
                <div class="lang">
                    <nuxt-link :to="switchLocalePath('kr')">
                        KOR
                    </nuxt-link> |
                    <nuxt-link :to="switchLocalePath('en')">
                        ENG
                    </nuxt-link>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    height: 80px;
    z-index: 1000000;
    font-family: $font-eng;
    .inner {
        width: calc(100% - 80px);
        margin: auto;
        height: 80px;

        @include display-flex {
            align-items: checkAlign(center);
            justify-content: getJustify(sb);
        }
    }
    .lang {margin-right: 30px;}
}

.logo {
    width: 48px;
    height: 48px;
    background: url("@/assets/images/logo_kangji.png") no-repeat center center;
    background-size: 48px;
}
</style>