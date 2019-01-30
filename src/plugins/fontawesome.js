import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faLinkedin,
  faGithub,
  faMedium,
  faYoutube,
  faTwitter,
  faDev
} from '@fortawesome/free-brands-svg-icons'

export default ({ Vue }) => {
  library.add(
    faLinkedin,
    faGithub,
    faMedium,
    faYoutube,
    faTwitter,
    faDev
  )
  Vue.component('f-icon', FontAwesomeIcon)
}
