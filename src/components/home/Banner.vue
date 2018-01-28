<template>
  <section class="center">
    <div class="row container">
      <div class="col s12">
        <hr class="hide-on-med-and-up" />
        <h1 class="title-heading">var name='Harvey'</h1>
        <h5 class="title-subheading">
          <span class="syntax-keyword">switch</span>
          <span class="syntax-symbol">&#40;</span> time
          <span class="syntax-symbol">&#41;</span> &#123;
          <span class="syntax-keyword">case</span>
          <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">DAY</span>:
          <span class="syntax-keyword">case</span>
          <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">DUSK</span>:
          <span class="syntax-keyword">return </span>
          <span class="syntax-string">"{{dayDusk}}"</span>;
          <span class="syntax-keyword">case</span>
          <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">NIGHT</span>:
          <span class="syntax-keyword">return</span>
          <span class="syntax-string">"{{night}}"</span>;
          <span class="syntax-keyword">case</span>
          <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">DAWN</span>:
          <span class="syntax-keyword">return</span>
          <span class="syntax-string">"{{dawn}}"</span>;
          <span class="syntax-keyword">default</span>:
          <span class="syntax-keyword">return</span>
          <span class="syntax-string">"{{end}}"</span>; }
        </h5>
      </div>
      <div class="row">
        <div class="col s12">
          <p>&copy; {{year}} Joseph Harvey Angeles. All rights reserved.</p>
        </div>
      </div>
      <hr class="hide-on-med-and-up" />
      <div class="row">
        <div class="col s12">
          <div class="vutton-group" role="group" aria-label="...">
            <button type="button" @click="links.go(links.wakatime)" class="vutton vutton-default">
              <i class="fa fa-clock-o"></i>
            </button>
            <button type="button" @click="links.go(links.linkedIn)" class="vutton vutton-default">
              <i class="fa fa-linkedin"></i>
            </button>
            <button type="button" @click="links.go(links.github)" class="vutton vutton-default">
              <i class="fa fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {Profession, ContactLinks} from '@/components/configuration.conf'
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
  created() {
    this.dayDusk = Profession.dayDusk
    this.night = Profession.night
    this.dawn = Profession.dawn
    this.end = Profession.end
    this.links = ContactLinks
  }
}
</script>

<style scoped>
  section {
    background-color: #eee;
    width: 100%;
  }
  .title-heading {
    font-family: 'VT323', 'Courier New', 'Courier', serif;
    font-size: 4rem;
    margin-top: 7%;
  }
  .title-subheading {
    font-family: 'Consolas', 'Times New Roman', Times, 'serif';
  }
  .syntax-keyword{
    color:#F62459;
  }

  .syntax-symbol{
      color:#FFA400;
  }

  .syntax-enum{
      color:#4B77BE;
  }

  .syntax-const{
      color:#22A7F0;
  }

  .syntax-string{
      color: #26A65B;
  }
  p {
    font-size: .75em;
    margin-top: 2.5%;
  }
  .vutton-group {
    margin-bottom: 2.55%;
  }
  hr {
    border-color: transparent;
    margin: 15% auto;
  }
</style>

