<template lang="pug">
  header(class="header")
    div(class="header__links")

      div(
        v-if="!$store.state.login"
        v-for="link in links.logoutLinks")
        router-link(
          :to="{name: link.page}"
          class="header__links__link") {{link.name}}

      div(
        v-if="$store.state.login"
        v-for="link in links.loginLinks")
        router-link(
          :to="{name: link.page}"
          class="header__links__link") {{link.name}}

      button(
          type="buttons"
          @click="changeLang") Idioma

    div(class="header__central")
      div(class="header__central__text") loremId Lorem sunt commodo deserunt amet ad. Ea ipsum eiusmod officia cupidatat officia labore est sint occaecat velit anim eu ea ea. Reprehenderit cillum anim sunt nostrud pariatur dolore commodo mollit nostrud qui enim.

    div(class="header__logo")
      router-link(
        :to="{name: links.mainLink.page}"
        class="header__logo__main") {{links.mainLink.name}}
</template>

<script>
export default {
  props: [
    'links'
  ],
  methods: {
    changeLang () {
      if (this.$store.state.lang === 'es') this.$store.dispatch('saveLang', 'en')
      else if (this.$store.state.lang === 'en') this.$store.dispatch('saveLang', 'es')
      location.reload()
    }
  }
}
</script>

