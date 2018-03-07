<template lang="pug">
  div(class="hs-hdr__right")
    router-link(
      :to="{name: lang.hsHeaderRight.main.page}"
      class="hs-link hs-link--big") {{lang.hsHeaderRight.main.name}}
</template>

<script>
import {components} from '../../../../lang/client'

export default {
  mixins: [components('Header', 'hsHeaderRight')]
}
</script>

