<template>
    <div class="notice-wrap">
        <div class="inner">
            <div class="txt-wrap">
                 <h2>페이지를 찾을 수 없습니다.</h2>
                <button>메인화면으로 이동</button>
            </div>
            
        </div>
        <!--<p>
            This page could not be found
        </p>
         <p>Back to the home page</p>
         -->
       
       
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.notice-wrap {
    background: #FEF8EE;
    width: 100%;
    height: 100%;
    min-height: 100vh;
}
.notice-wrap {
    .inner {width: 50%; border: 1px solid #000; border-radius: 15px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
    .txt-wrap {margin: 15px; text-align: center;}
}
#__layout {width: 100; height: 100%;  background: #FEF8EE;}
</style>