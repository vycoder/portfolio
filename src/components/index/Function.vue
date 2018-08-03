<template>
  <div class="function">
    <div class="head"><span><slot name="identifier"></slot></span>&nbsp;<span class="text-amber-9"><slot name="name"></slot></span><span class="text-primary">()</span> {</div>
    <div class="text font-condensed-roboto text-grey-8 q-pa-sm">
      <slot></slot>
    </div>
    <div class="end">}</div>
  </div>
</template>
<style lang="stylus" scoped>
@import '~variables'
.function
  font-family Consolas, Cochin, Georgia, Times, "Times New Roman", serif
  .head
    padding-bottom 1rem
  .head, .end
    font-size 2rem
    +respond-max($breakpoint-xxs)
      font-size 1.5rem
.text
  text-indent 2rem
</style>
