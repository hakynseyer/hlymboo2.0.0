<template lang="pug">
  div(class="header__logo")
    router-link(
      :to="{name: lang.hsHeaderRight.main.page}"
      class="header__logo__main") {{lang.hsHeaderRight.main.name}}
</template>

<script>
import {components} from '../../../../lang/client'

export default {
  mixins: [components('Header', 'hsHeaderRight')]
}
</script>

