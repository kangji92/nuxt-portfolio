<template>
    <div class="modal">
        <div class="modal-content">
            다이얼로그
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .modal {        
        .modal-content {
                @include display-flex {
                    align-items: checkAlign(center);
                    justify-content: getJustify(sb);
                }
            }
    }

    
  

</style>