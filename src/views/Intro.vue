<template>
    <div class="px-md-3">
        <h3 class="mb-3 text-center">【{{ now.title }}】</h3>
        <swiper :style="{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
        }" :navigation="true" :spaceBetween="30" :rewind="true" :zoom="true" :pagination="{ clickable: true, }"
            :modules="modules" class="mySwiper mb-3">
            <swiper-slide v-for="img in now.imgsrc">
                <div class="swiper-zoom-container">
                    <img :src="img" style="    width: 100%;" />
                </div>
            </swiper-slide>
        </swiper>
        <p>{{ this.now.content }}</p>
        <div v-for="tech in this.now.tech" class="tech">{{ tech }}</div>
        <el-button type="success" plain @click="openWebsite(now.website)" class="ms-3">前往網站</el-button>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Zoom, Navigation, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
    created() {
        this.$watch(
            () => ({
                name: this.name,
            }),
            () => {
                if (this.$route.name != 'Intro') {
                    return;
                }
                this.now = this.$WebsiteData.find(item => item.name === this.name);
            },
            { deep: true, immediate: true }
        );
    },
    data() {
        return {
            name: this.$route.params.name,
            now: []

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

<style>
.centerflex {
    display: flex;
    align-items: center;
}

.tech {
    display: inline-block;
    background-color: #abc5ff6e;
    border-radius: 20px;
    padding: 3px;
    margin: 0 5px 0 5px;
}
</style>