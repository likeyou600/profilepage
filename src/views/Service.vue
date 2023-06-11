<template>
    <div class="row">
        <div class="col-xl-6 col-12 mb-xl-0 mb-3">
            <p> <i class="fa-solid fa-earth-asia fa-xl me-2"></i><strong>網頁</strong></p>
            <div v-for="da in  data ">
                <strong>{{ da.emoji }} {{ da.title }}</strong>
                <router-link :to="{ name: 'Intro', params: { name: da.introname } }" v-if="da.introname">
                    <el-button type="success" plain class="ms-3">查看範例</el-button>
                </router-link>
                <p>{{ da.content }}</p>

            </div>
        </div>
        <div class="col-xl-6 col-12">
            <p> <i class="fa-solid fa-server fa-xl me-2"></i><strong>伺服器</strong></p>

            <i class="fa-brands fa-linux me-2"></i>
            <i class="fa-brands fa-docker me-2"></i>
            <strong>{{ $ServiceServerData.title }}</strong>
            <p>{{ $ServiceServerData.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: this.$ServiceData,

        }
    },
}
</script>

<style>
.centerflex {
    display: flex;
    align-items: center;
}
</style>