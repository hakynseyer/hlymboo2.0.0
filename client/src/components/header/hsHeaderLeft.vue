<template lang="pug">
  div(class="hs-hdr__left")
    div(
      v-if="!$store.state.login"
      v-for="link in lang.hsHeaderLeft.links.logout")
      router-link(
        v-if="link.page === 'login'"
        :to="{name: link.page}"
        class="hs-link")
        icon(
          name="sign-in"
          scale="1.5"
          class="hs-link--hr")
      router-link(
        v-else
        :to="{name: link.page}"
        class="hs-link hs-link--hb-violet-L1") {{link.name}}

    div(
      v-if="$store.state.login"
      v-for="link in lang.hsHeaderLeft.links.login")
      router-link(
        :to="{name: link.page}"
        class="hs-link hs-link--hb-violet-L1") {{link.name}}

    div(v-for="link in lang.hsHeaderLeft.links.allways")
      router-link(
        :to="{name: link.page}"
        class="hs-link hs-link--hb-violet-L1") {{link.name}}
    //- button(
    //-     type="button"
    //-     @click="a"
    //-     class="button__darken-color--purple") Idioma
</template>

<script>
import {components} from '../../../../lang/client'

export default {
  mixins: [components('Header', 'hsHeaderLeft')],

  methods: {
    changeLang () {
      if (this.$store.state.lang === 'es') this.$store.dispatch('saveLang', 'en')
      else if (this.$store.state.lang === 'en') this.$store.dispatch('saveLang', 'es')
      location.reload()
    }
  }
}
</script>

