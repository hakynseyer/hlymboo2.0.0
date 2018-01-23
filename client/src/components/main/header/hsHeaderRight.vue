<template lang="pug">
  div(class="header__logo")
    router-link(
      :to="{name: lang.hsHeaderRight.mainLink.page}"
      class="header__logo__main") {{lang.hsHeaderRight.mainLink.name}}
</template>

<script>
import {components} from '../../../../../lang/client'

export default {
  mixins: [components('hsHeaderRight')]
}
</script>

