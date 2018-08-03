<template>
  <header class="text-center">
    <p class="title-heading">var name='Harvey'</p>
    <h5 class="title-subheading">
      <span class="syntax-keyword">switch</span>
      <span class="syntax-symbol">&#40;</span> time
      <span class="syntax-symbol">&#41;</span> &#123;
      <span class="syntax-keyword">case&nbsp;</span>
      <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">DAWN</span>:
      <span class="syntax-keyword">return </span>
      <span class="syntax-string">"{{data.dawn}}"</span>;
      <span class="syntax-keyword">case&nbsp;</span>
      <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">DAY</span>:
      <span class="syntax-keyword">return </span>
      <h2 class="syntax-string">"{{data.day}}"</h2>;
      <span class="syntax-keyword">case&nbsp;</span>
      <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">DUSK</span>:
      <span class="syntax-keyword">return</span>
      <span class="syntax-string">"{{data.dusk}}"</span>;
      <span class="syntax-keyword">case&nbsp;</span>
      <span class="syntax-enum">CLOCK</span>.<span class="syntax-const">NIGHT</span>:
      <span class="syntax-keyword">return</span>
      <span class="syntax-string">"{{data.night}}"</span>;
      <span class="syntax-keyword">default</span>:
      <span class="syntax-keyword">return</span>
      <span class="syntax-string">"{{data.end}}"</span>; }
    </h5>
  </header>
</template>
<script>
export default {
  name: 'BannerComponent',
  props: ['data']
}
</script>
<style lang="stylus" scoped>
@import '~variables'
h2
  font-size 3.3rem !important
  margin 0
  display inline
  +respond-max($breakpoint-xxs)
    font-size 1.2rem !important

.title-heading
  font-family 'VT323', 'Courier New', 'Courier', serif
  margin 0
  font-size 6rem
  +respond-max($breakpoint-xxs)
    font-size 3rem

.title-subheading
  font-family 'Consolas', 'Times New Roman', Times, 'serif'
  padding 0 3rem
  +respond-max($breakpoint-xxs)
    padding 1rem

.syntax-keyword
  color #F62459

.syntax-symbol
  color #FFA400

.syntax-enum
  color #4B77BE

.syntax-const
  color #22A7F0

.syntax-string
  color #26A65B
  font-size 2.2rem
  +respond-max($breakpoint-xxs)
    font-size 1rem
</style>
