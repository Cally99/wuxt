<template>
  <transition name="nav">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#"> Home </b-navbar-item>
        <b-navbar-item href="#"> Documentation </b-navbar-item>
        <transition name="dd">
          <b-navbar-dropdown label="Info" collapsible>
            <b-navbar-item href="#"> About </b-navbar-item>
            <b-navbar-item href="#"> Contact </b-navbar-item>
          </b-navbar-dropdown>
        </transition>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </transition>
</template>

<style scoped>
.nav-enter-active,
.nav-leave-active {
  opacity: 1;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.nav-enter,
.nav-leave-to {
  opacity: 0;
}
.dd-enter-active,
.dd-leave-active {
  opacity: 1;
  transition-duration: 2s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.dd-enter,
.dd-leave-to {
  opacity: 0;
}
</style>