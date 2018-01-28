<template>
  <div id="app">
    <vue-particles
        color="#79f2f2"
        :particleOpacity="0.7"
        :particlesNumber="150"
        shapeType="circle"
        :particleSize="4"
        linesColor="#79f2f2"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
      />
    <app-navigation />
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation'
export default {
  name: 'App',
  components: {
    appNavigation: Navigation
  }
}
</script>
<style>
  html {
    font-family: "Roboto Condensed";
  }
  body {
    color: #333;
    background: #DFDFDF url('./assets/bg.png') repeat-x fixed center;
  }
  .bluegreen-text {
    color: #72BAAC;
  }
  .bluegreen {
    background-color: #72BAAC;
  }
  .darkgrey-text {
	  color: #5A5A5A;
  }
  .vutton {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .vutton-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }
  .vutton-default:hover, .vutton-default:focus {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
    z-index: 2;
  }
  .vutton-group-vertical>.vutton, .vutton-group>.vutton {
    position: relative;
  }
  .vutton-group>.vutton:first-child:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .vutton-group>.vutton:not(:first-child):not(:last-child):not(.dropdown-toggle) {
    border-radius: 0;
  }
  .vutton-group .vutton+.vutton, .vutton-group .vutton+.vutton-group, .vutton-group .vutton-group+.vutton, .vutton-group .vutton-group+.vutton-group {
    margin-left: -5px;
  }
  .vutton-group>.vutton:last-child:not(:first-child), .vutton-group>.dropdown-toggle:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  canvas.particles-js-canvas-el {
    position: fixed;
    z-index: -1;
  }
</style>
