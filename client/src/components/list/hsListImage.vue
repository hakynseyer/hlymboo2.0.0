<template lang="pug">
  div
    hs-filter(
      :configFilter="lang.hsFilter.image.configFilter"
      @filterData="filterData"
      @textData="textData"
      @textDataButton="textDataButton"
      @orderData="orderData")

    hs-list(:configList="lang.hsList.image.configList")
      template(slot="labelCard" slot-scope="props")
        div(class="list__label")
          div(class="list__label__title") {{props.data.title | cutTitle}}
      template(slot="contentCard" slot-scope="props")
        div(class="list__content")
          div(class="list__content__preview")
            div(class="list__content__preview__author") {{props.data.User.alias}}
            img(
              :src="fixImage(props.data.User, props.data.route)"
              class="list__content__preview__picture")
          div(class="list__content__information")
            div(class="list__content__information__text list__content__information__text--title") {{props.data.chest}}
            div(class="list__content__information__text list__content__information__text--paragraph") {{props.data.copyright | cutCopyright}}
            div(class="list__content__information__text list__content__information__text--bold") {{props.data.updatedAt | fixDate}}

    hs-pagination(
      :configPagination="lang.hsPagination.image.configPagination"
      @currentPage="updatePage")
</template>

<script>
import {boards} from '../../../../lang/client'

import hsList from '@/components/list/hsList'
import hsFilter from '@/components/filter/hsFilter'
import hsPagination from '@/components/pagination/hsPagination'

import imageRequest from '@/pages/image/tools/imageRequest'
import {_date, _text, _image} from '@/pages/tools/customizedTools'

import {_hsFilter} from '@/components/_support/_hsFilter'

export default {
  components: {
    hsList,
    hsFilter,
    hsPagination
  },

  mixins: [boards('image', 'search'), _hsFilter],

  created () {
    this.listImages()
  },

  data () {
    return {

    }
  },

  filters: {
    cutCopyright (value) {
      return _text.cutText(value, 50)
    },

    cutTitle (value) {
      return _text.cutText(value, 20)
    },

    fixDate (value) {
      return _date.fixDate()(value, 'longDate')
    }
  },

  methods: {
    async listImages () {
      try {
        const listImages = await imageRequest.imageRequest_post_limit({
          pagination: {
            limitImages: this.lang.hsPagination.image.configPagination.information.limitImages,
            currentPage: this.lang.hsPagination.image.configPagination.buttons.currentPage
          }
        })
        this.lang.hsPagination.image.configPagination.information.total = listImages.data.total
        this.lang.hsPagination.image.configPagination.buttons.pages = listImages.data.pages

        this.originalList = listImages.data.images.slice(0)
        this.lang.hsList.image.configList.dataList = listImages.data.images

        let listChest = this.originalList.map(element => element.chest)

        this.lang.hsFilter.image.configFilter.select.forEach(select => {
          switch (select.key) {
            case 'chest':
              select.optionData = listChest.filter((element, index, array) => {
                return array.indexOf(element) === index
              })
              break
          }
        })

        this.resetFilter()
      } catch (error) {
        console.error(error)
      }
    },

    getDataList () {
      return this.lang.hsList.image.configList.dataList
    },

    updateDataList (newData) {
      this.lang.hsList.image.configList.dataList = newData
    },

    updatePage (page) {
      if (typeof (page) === 'number') {
        this.lang.hsPagination.image.configPagination.buttons.currentPage = page

        this.listImages()
      }
    },

    fixImage (user, image) {
      let route = _image.hyzherFolder(user.id, user.alias, image, 'myImages')
      return require(`@/assets/img/${route}`)
    }
  }
}
</script>

