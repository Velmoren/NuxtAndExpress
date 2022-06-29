import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '30743603-2686-4016-9fe9-cd28f7e91923',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
} // настройки плагина

Vue.use(YmapPlugin, settings);
