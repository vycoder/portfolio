import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faDev,
  faGithub,
  faMedium,
  faYoutube,
  faTwitter,
  faLinkedin,
  faFacebook,
  faRedditSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'

export default ({ Vue }) => {
  library.add(
    faDev,
    faGithub,
    faMedium,
    faYoutube,
    faTwitter,
    faLinkedin,
    faFacebook,
    faRedditSquare,
    faTwitterSquare
  )
  Vue.component('f-icon', FontAwesomeIcon)
}
