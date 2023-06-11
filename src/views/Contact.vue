<template>
    <div class="row ">
        <div v-for="da in data" class="col-xl-6 col-12 mb-xl-0 mb-5" style="    display: flex;
        justify-content: center;">
            <div class="card mb-3" style="width: 18rem; text-align: center; cursor:pointer"
                @click="openWebsite(da.website)">
                <div class="card-body">
                    <i v-if="da.name == 'Line'" class="fa-brands fa-line fa-bounce fa-2xl"></i>
                    <i v-if="da.name == 'Gmail'" class="fa-solid fa-envelope fa-bounce fa-2xl"></i>
                    <i v-if="da.name == 'Phone'" class="fa-solid fa-phone fa-bounce fa-2xl"></i>
                    <i v-if="da.name == 'Github'" class="fa-brands fa-github fa-bounce fa-2xl"></i>
                    <p class="card-text">{{ da.title }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            data: this.$ContactData,
        }
    },
    methods: {
        openWebsite(url) {
            if (url)
                window.open(url, '_blank');
        }
    }
}
</script>

<style></style>