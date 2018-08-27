<template>
  <div id="kakao-login-btn"
    v-on:click=loginWithKakao
    v-bind:style="[componentStyle]">
    <img :src="getPic()"/>
    <!-- <div :style="`backgroundImage: require(assets/login/kr/kakao_account_login_btn_medium_wide.png);`"/> -->
  </div>
</template>
<script>
const defaultErrorMessage = '현재 카카오 로그인 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.'

export default {
  name: 'KakaoLogin',
  props: {
    apiKey: {
      type: String,
      required: true
    },
    onSuccess: {
      required: true
    },
    onFailure: {
      required: true
    },
    language: {
      type: String,
      default: 'kr'
    },
    image: {
      type: String,
      default: 'kakao_account_login_btn_medium_wide'
    },
    customImg: {
      type: String,
      default: ''
    },
    componentStyle: {
      type: Object,
      default: null
    },
    scriptUrl: {
      type: String,
      default: 'https://developers.kakao.com/sdk/js/kakao.min.js'
    },
    errorMessage: {
      default: defaultErrorMessage
    },
    
  },
  computed: {
    getPic3() {
      // return Image
      // let images = require.context('../assets/', false, /\.png$/)
      // console.log(images)
      // return ""
      return require(`./assets/login/kr/kakao_account_login_btn_medium_wide.png`)
      // return require('@/assets/login/'+this.language+'/'+this.image+'.png');
    }
  },
  mounted: function () {
    const scriptId = 'kakao_login'
    const isExist = !!document.getElementById(scriptId)
    if (!isExist) {
      const script = document.createElement('script')
      script.src = this.scriptUrl
      script.onload = () => this.initiate(this)
      script.onerror = error => this.handleError(error)
      script.id = scriptId
      document.body.appendChild(script)
    } else this.initiate(this)
  },
  methods: {
    getPic2() {
      // return Image
      // let images = require.context('../assets/', false, /\.png$/)
      // console.log(images)
      return ""
      // return require('./assets/login/'+this.language+'/'+this.image+'.png');
    }
  },
  data () {
    return {
      images: [],
      getPic() {
        // return Image
        // let images = require.context('../assets/', false, /\.png$/)
        // console.log(images)
        // return ""
        return require("./assets/login/kr/kakao_account_login_btn_medium_wide.png")
        // return require('./assets/login/'+this.language+'/'+this.image+'.png');
      },
      initiate: (comp) => {
        Kakao.init(comp.apiKey);
      },
      loginWithKakao: () => {
        Kakao.Auth.login({
          success: (authObj) => this.onSuccess(authObj),
          fail: (err) => this.onFailure(err)
        });
      },
      handleError: (err) => {
        console.warn(`This component threw an error (in '${err.target.outerHTML}'):`, this)
      },
    }
  }
}
</script>