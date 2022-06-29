import Vue from "vue";
import ScrollLock from 'vue-lock-scroll'

Vue.use(ScrollLock, {
  propName: '$locker',
  gapedElements: '.header'
})
