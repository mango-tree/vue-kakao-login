# vue-kakao-login

VueJS 컴포넌트로 만든 카카오 로그인 서비스입니다.

## 설치

```shell
npm install --save vue-kakao-login
```

## 사용

```javascript
<template>
  <div id="app">
    <KakaoLogin
      api-key="<api-key>"
      image="kakao_login_btn_large"
      :on-success=onSuccess
      :on-failure=onFailure
      />
  </div>
</template>

<script>
import KakaoLogin from 'vue-kakao-login'

let onSuccess = (data) => {
  console.log(data)
  console.log("success")
}
let onFailure = (data) => {
  console.log(data)
  console.log("failure")
}

export default {
  name: 'App',
  components: {
    KakaoLogin
  },
  methods: {
    onSuccess,
    onFailure
  }
}
</script>

<style>
</style>
```

## props

- `api-key` (필수) _[string]_ - 카카오 API Key입니다.
- `on-success`(필수) _[function]_ - 로그인 성공 시의 콜백 함수입니다.
- `on-failure`(필수) _[function]_ - 로그인 실패 시의 콜백 함수입니다.
- `language` _[string]_ - 언어를 설정합니다 (kr, en). 기본값: `kr`
- `image` _[string]_ - 카카오에서 제공하는 로그인 버튼 이미지 종류를 선택합니다. 다음과 같은 이미지들이 있습니다:
  - kakao_account_login_btn_large_narrow_ov
  - kakao_account_login_btn_large_narrow
  - kakao_account_login_btn_large_wide_ov
  - kakao_account_login_btn_large_wide
  - kakao_account_login_btn_medium_wide_ov
  - kakao_account_login_btn_medium_wide
  - kakao_account_login_btn_medium_narrow_ov
  - kakao_account_login_btn_medium_narrow
  - kakao_login_btn_large_ov
  - kakao_login_btn_large
  - kakao_login_btn_medium_ov
  - kakao_login_btn_medium
  - kakao_login_btn_small_ov
  - kakao_login_btn_small
 기본값: `kakao_account_login_btn_medium_wide`
- `componentStyle` _[object]_ - 우편번호 검색창에 미리 표시할 검색어입니다. 기본값: `null`
- `script-url` _[string]_ - 컴포넌트에서 사용할 카카오 API 주소입니다. 기본값: `'https://developers.kakao.com/sdk/js/kakao.min.js'`
- `error-message` _[string]_ - 로드되지 않을 때 나타낼 에러 메시지입니다. 기본값: `현재 카카오 로그인 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.`

## 안내

`vue-kakao-login`는 Daum 우편번호 서비스와 독립적으로 제작된 패키지입니다. VueJS환경에서 발생하는 `vue-kakao-login`의 버그는 패키지 레포지터리의 [이슈트래커](https://github.com/mango-tree/vue-kakao-login/issues)에 말씀해주세요.
