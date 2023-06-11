<template>
    <div class="row">
        <div v-for="da in data" class="col-xl-4 col-12 mb-xl-0 mb-3" style="    display: flex;
        justify-content: center;">
            <router-link :to="{ name: 'Intro', params: { name: da.name } }">
                <div class="card mb-3" style="width: 18rem;">
                    <img :src="da.imgsrc[0]" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{ da.title }}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: this.$WebsiteData,

        }
    }
}
</script>

<style>
.centerflex {
    display: flex;
    align-items: center;
}
</style>