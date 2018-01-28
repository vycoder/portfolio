<template>
<div>
  <div class="nav hide-on-small-only">
    <ul>
      <transition appear enter-active-class="animated bounceIn">
        <li><router-link to="/" tag="a" active-class="active" class="nav-btn" exact>Hm</router-link></li>
      </transition>
      <transition appear enter-active-class="animated bounceIn">
        <li><router-link to="/projects" tag="a" active-class="active" class="nav-btn">Pr</router-link></li>
      </transition>
      <transition appear enter-active-class="animated bounceIn">
        <li><a href="https://medium.com/@yhev/" target="_blank" class="nav-btn">Nt</a></li>
      </transition>
    </ul>
  </div>
  <nav class="bluegreen navmobile hide-on-med-and-up">
    <a href="/" class="brand-logo left"><img src="/static/favicon.ico"></a>
    <ul class="right">
      <li><router-link to="/" tag="a" active-class="active" exact><i class="material-icons left">dashboard</i>Home</router-link></li>
      <li><router-link to="/projects" tag="a" active-class="active"><i class="material-icons left">computer</i>Projects</router-link></li>
      <li><a href="https://medium.com/@yhev/" target="_blank"><i class="material-icons left">import_contacts</i>Notes</a></li>
    </ul>
  </nav>
</div>
</template>
<style scoped>
.nav {
  position: fixed;
  top: 35vh;
  left: 0.5vw;
  z-index: 999;
}
.navmobile {
  position: fixed;
  z-index: 999;
  max-width: 100%;
}
.btn-floating {
  border: solid;
  border-width: 2px;
  border-radius: 0;
  margin: 2px;
  border-color: #72ABBC;
  color: #72ABBC;
  background-color: transparent;
  text-align: center;
 
}
.nav-btn {
  font-size: 1.2rem;
  background-color: #f8f8f8;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  border-radius: 0;
  color: #72BAAC;
  border: #72BAAC 2px solid;
  width: 50px;
  height: 50px;
  display: inline-block;
  margin: 1px;
  cursor: pointer;
}
.nav-btn:hover {
  color: white;
  background-color: #72BAAC;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3);
}
.nav-btn.active {
  color: white;
  background-color: #72BAAC;
}
.active {
  background-color: rgba(0,0,0,0.1);
}
img {
  position: fixed;
  width: 30px;
  top: 0.7rem;
  left: 0.5rem;
}

</style>
