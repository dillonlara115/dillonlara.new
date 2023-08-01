// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'



import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faTrophy,
  faRss,
  faEnvelope,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faFacebook,
  faVuejs,
  faGit,
  faLinkedin,
  faInstagram,
  faBootstrap,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faShopify,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(
  faEnvelope,
  faGithub,
  faTwitter,
  faFacebook,
  faGit,
  faVuejs,
  faBootstrap,
  faInstagram,
  faLinkedin,
  faTrophy,
  faHtml5,
  faCss3Alt,
  faShopify,
  faJsSquare,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
  faRss,
  faCheck,
)


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueScrollTo)
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap'
  })
}
