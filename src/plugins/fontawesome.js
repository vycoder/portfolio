import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faMedium,
  faGithub,
  faGithubSquare,
  faLinkedin,
  faAndroid,
  faFacebook,
  faTwitterSquare,
  faRedditSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({ app, router, Vue }) => {
  library.add(faEnvelope)
  library.add(faTwitter)
  library.add(faMedium)
  library.add(faGithub)
  library.add(faLinkedin)
  library.add(faAndroid)
  library.add(faGithubSquare)
  library.add(faClock)
  library.add(faGlobe)
  library.add(faFacebook)
  library.add(faRedditSquare)
  library.add(faTwitterSquare)
  Vue.component('font-icon', FontAwesomeIcon)
}
