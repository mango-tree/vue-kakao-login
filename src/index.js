import KakaoLogin from './KakaoLogin.vue'
import Vue from 'vue'

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-kakao-login', KakaoLogin)
  },
  // build: {
  //   assetsPublicPath: '/',
  //   assetsSubDirectory: 'static'
  // }
};
