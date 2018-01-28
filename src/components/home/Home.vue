<template>
  <section>
    <app-banner></app-banner>
    <section class="container center">
      <div class="row">
        <div class="col s12">
          <article>
            <img src="../../assets/images/home/profile.png" alt="Joseph Harvey Angeles" class="responsive-img circle hello-world-img">
            <h4>public void <span class="orange-text">helloWorld</span><span class="bluegreen-text">&#40;&#41;</span> &#123;</h4>
            <p class="darkgrey-text intro-text">
              {{introduction}}
            </p>
            <h4>&#125;</h4>
          </article>
        </div>
      </div>
    </section>
    <h2 class="superheader flow-text">/** What I can do for you **/</h2>
    <section class="center">
      <div class="row">
        <div class="col s12 m4 offset-m1">
          <img src="../../assets/images/home/manifesto.png" alt="Manifesto" class="responsive-img circle">
        </div>
        <div class="col s12 m6">
          <h4><span class="orange-text">manifesto</span><span class="bluegreen-text">&#40;&#41;</span> &#123;</h4>
            <p class="darkgrey-text">
              {{manifesto}}
            </p>
          <h4>&#125;</h4>
        </div>
      </div>
    </section>
    <hr class="line-break" />
    <section class="center">
      <div class="row">
        <div class="col s12 m6 offset-m1">
          <h4><span class="orange-text">madskillz</span><span class="bluegreen-text">&#40;&#41;</span> &#123;</h4>
            <p class="darkgrey-text">
              return [ <span class="chip white-text" :class="skill.color" v-for="(skill, index) in skills" :key="index">{{skill.name}}</span>]
            </p>
          <h4>&#125;</h4>
        </div>
        <div class="col s12 m4">
          <img src="../../assets/images/home/madskills.png" alt="Skills" class="responsive-img circle">
        </div>
      </div>
    </section>
    <hr class="line-break" />
    <h2 class="superheader flow-text">/** Stats for nerdz **/</h2>
    <section class="center">
      <div class="row">
        <div class="col s12 m4 offset-m1">
          <embed :src="codingActivity.link" class="responsive-img"/>
        </div>
        <div class="col s12 m6">
          <h4><span class="orange-text">getCodingActivity</span><span class="bluegreen-text">&#40;30&#41;</span> &#123;</h4>
            <p class="darkgrey-text">
              {{codingActivity.description}}
            </p>
          <h4>&#125;</h4>
        </div>
      </div>
    </section>
    <hr class="line-break" />
    <section class="center">
      <div class="row">
        <div class="col s12 m6 offset-m1">
          <h4><span class="orange-text">getCodingLangStats</span><span class="bluegreen-text">&#40;&#41;</span> &#123;</h4>
            <p class="darkgrey-text">
              {{codingLanguages.description}}
            </p>
          <h4>&#125;</h4>
        </div>
        <div class="col s12 m4">
          <embed :src="codingLanguages.link" class="responsive-img"/>
        </div>
      </div>
    </section>
    <hr class="line-break" />
    <h2 class="superheader flow-text">/** Need help? **/</h2>
    <section class="container center">
      <div class="row">
        <div class="col s12">
          <article>
            <h4>public void <span class="orange-text">connect</span><span class="bluegreen-text">&#40;&#41;</span> &#123;</h4>
            <div class="socials">
              <a href="https://twitter.com/yev?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @yev</a>
              <div class="g-follow" data-annotation="none" data-height="24" data-href="//plus.google.com/u/0/116935343851654404857" data-rel="publisher"></div>
            </div>
            <p class="darkgrey-text intro-text">
              {{contactLinks.description}} Email me at {{contactLinks.email}}
            </p>
            <div class="vutton-group vutton-group-lg" role="group" aria-label="...">
              <button type="button" @click="contactLinks.mailMe()" class="vutton vutton-default vutton-lg">
                <i class="fa fa-envelope"></i>
              </button>
              <button type="button" @click="contactLinks.go(contactLinks.twitter)" class="vutton vutton-default vutton-lg">
                <i class="fa fa-twitter"></i>
              </button>
            </div>
            <p>
            </p>
            <h4>&#125;</h4>
          </article>
        </div>
      </div>
    </section>
    <hr class="line-break" />
    <section class="container center">
      <div class="row">
        <div class="col s12">
          <article>
            <a href="devlaboratories.com" target="_blank" >
              <img src="../../assets/images/home/devlabslogo.png" alt="DevLaboratories" class="devlabs-img responsive-img">
            </a>
            <h4><span class="orange-text">devLabs</span><span class="bluegreen-text">&#40;&#41;</span> &#123;</h4>
            <div class="socials">
              <a href="https://twitter.com/DevLaboratories?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @DevLaboratories</a>
            </div>
            <p class="darkgrey-text devlabs-text">
              {{devLabsDescription}}
            </p>
            <br />
            <a href="devlaboratories.com" target="_blank">Check the lab out!</a>
            <div class="devlabs-fb responsive-img hide-on-small-only">
              <div class="fb-like" data-href="https://www.facebook.com/devlaboratories/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
            </div>
            <h4>&#125;</h4>
          </article>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { Home, Skills, Stats, ContactLinks } from '@/components/configuration.conf'
import Banner from '@/components/home/Banner'
export default {
  components: {
    appBanner: Banner,
  },
  created() {
    this.introduction = Home.introduction
    this.manifesto = Home.manifesto
    this.devLabsDescription = Home.devlabsDesc
    this.skills = Skills
    this.codingActivity = Stats.codingActivity
    this.codingLanguages = Stats.codingLanguages
    this.contactLinks = ContactLinks
  }
}
</script>
<style scoped>
  img {
    width: 300px;
    vertical-align: middle;
  }
  h4 {
    font-size: 2em;
    text-align: center;
    margin: 1em;
    font-family: Consolas, Cochin, Georgia, Times, 'Times New Roman', serif
  }
  p {
    margin: 0 0 10px;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.4em;
  }
  p.intro-text, p.devlabs-text {
    margin: 0 auto;
    max-width: 470px;
  }
  .superheader {
    text-align: center;
    font-weight: 400;
    font-size: 3.8em;
    margin: 9% auto;
    font-family: 'Courier New', Courier, monospace;
  }
  .hello-world-img {
    width: 150px;
  }
  .line-break {
    margin: 5% auto;
    border-color: transparent;
  }
  .chip {
    font-size: .78em;
    cursor: default;
  }
  embed {
    max-width: 100%;
    border-radius: 5%;
    vertical-align: middle;
  }
  .vutton-group-lg>.btn, .vutton-lg {
    margin-top: 3%;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
  }
  .socials {
    margin-bottom: 2%;
  }
  .devlabs-fb {
    width: 20%;
    margin: 0 auto;
    text-align: center;
    margin-top: 2%;
  }
  .devlabs-img {
    width: 150px;
  }
</style>

