<template>
  <div class="py-xl-5 px-xl-5 py-3 px-3 mycontainer mx-auto h-100">

    <div class="row h-100">
      <div class="col-xl-3 col-12 mb-xl-0 mb-3 h-100">
        <Sidenav class="h-100" />
      </div>
      <div class="col-xl-9 col-12 h-100 fakefooter">
        <div class="row h-100 overflow-auto">
          <div class="card z-index-0">
            <nav class="my-3 text-center">
              <router-link :to="{ name: 'Service' }" class="me-2">
                <el-button type="primary" :class="[$route.name == 'Service' ? 'buttonselect' : '']" plain> <i
                    class="fa-regular fa-handshake fa-xl me-2"> </i>
                  服務項目</el-button>
              </router-link>
              <router-link :to="{ name: 'Portfolio' }" class="me-2">
                <el-button type="primary"
                  :class="[$route.name == 'Portfolio' || $route.name == 'Intro' ? 'buttonselect' : '']" plain> <i
                    class="fa-solid fa-palette fa-xl me-2"> </i>
                  作品集</el-button>
              </router-link>
              <router-link :to="{ name: 'Contact' }" class="me-2">
                <el-button type="primary" :class="[$route.name == 'Contact' ? 'buttonselect' : '']" plain> <i
                    class="fa-solid fa-id-card fa-xl me-2"> </i>
                  聯絡我</el-button>
              </router-link>
            </nav>
            <div class="card-body">

              <router-view v-motion-slide-left />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from '@/components/Sidenav';

export default {
  components: {
    Sidenav,
  },
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

#app,
.el-button,
p,
.card .card-body,
a,
input,
textarea,
button {
  font-family: "Noto Sans TC", sans-serif !important;
}

a {
  color: initial !important;
  text-decoration: none !important;
}

#app {
  background-image: url(assets/img/background.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}


.cardblur {
  border: 0 solid rgba(0, 0, 0, .125) !important;
  border-radius: 1rem !important;
  background-color: #ffffff40 !important;
  backdrop-filter: blur(15px) !important;
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, .05) !important;
}

.buttonselect {
  --el-button-text-color: #ffffff !important;
  --el-button-bg-color: #409eff !important;
  --el-button-border-color: #409eff !important;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: rgb(106 122 232 / 46%);
}

@media (min-width: 1200px) {
  .mycontainer {
    width: 80%;
  }

  #app {
    height: 100vh;
    overflow: hidden;
  }

  .head {
    width: 100%;
    border-radius: 50%;
  }

}

@media (max-width: 1200px) {
  #app {}

  .mycontainer {
    width: 100%;
  }

  .head {
    width: 55%;
    border-radius: 50%;
  }

  .fakefooter {
    margin-bottom: 30vh;
  }
}
</style>
