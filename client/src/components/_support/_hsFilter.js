export const _hsFilter = {
  data () {
    return {
      originalList: [],
      currentListFilter: [],
      currentListSearch: []
    }
  },

  methods: {
    filterData (data) {
      this.updateDataList(this.originalList.slice(0))

      this.$busForm.$emit('hsFilter_resetOrder')
      this.$busForm.$emit('hsFilter_searchText', {mode: 'cleaner'})
      this.currentListSearch = []

      this.updateDataList(this.getDataList().filter(element => {
        return data.data.includes(element[data.filter])
      }))

      this.currentListFilter = this.getDataList().slice(0)
    },

    textData (data) {
      if (this.currentListFilter.length) this.updateDataList(this.currentListFilter.slice(0))
      else this.updateDataList(this.originalList.slice(0))

      this.$busForm.$emit('hsFilter_resetOrder')

      let dataList = []

      for (let search of data.text) {
        dataList.push(this.getDataList().filter(element => {
          let regExp = new RegExp('.*' + data.data + '.*')
          return regExp.test(element[search])
        }))
      }

      let dataListMerge = []

      dataList.forEach(element => {
        element.forEach(child => {
          dataListMerge.push(child)
        })
      })

      let dataListDuplicated = []

      dataListDuplicated = dataListMerge.filter((element, index, array) => {
        return index === array.findIndex(ele => {
          return ele.id === element.id
        })
      })

      this.updateDataList(dataListDuplicated.slice(0))

      this.currentListSearch = this.getDataList().slice(0)
    },

    textDataButton (data) {
      switch (data) {
        case 'cleaner':
          this.updateDataList(this.originalList.slice(0))
          this.resetFilter()
          break
      }
    },

    orderData (data) {
      if (this.currentListSearch.length) this.updateDataList(this.currentListSearch.slice(0))
      else if (this.currentListFilter.length) this.updateDataList(this.currentListFilter.slice(0))
      else this.updateDataList(this.originalList.slice(0))

      if (!this.currentListSearch.length) this.$busForm.$emit('hsFilter_searchText', {mode: 'cleaner'})

      switch (data.type) {
        case 'date':
          if (data.mode === 'normal') {
            this.getDataList().sort((a, b) => {
              return Date.parse(a[data.order]) - Date.parse(b[data.order])
            })
          } else if (data.mode === 'reverse') {
            this.getDataList().sort((a, b) => {
              return Date.parse(a[data.order]) + Date.parse(b[data.order])
            })
          }
          break
        case 'string':
          if (data.mode === 'normal') {
            this.getDataList().sort((a, b) => {
              return a[data.order] > b[data.order]
            })
          } else if (data.mode === 'reverse') {
            this.getDataList().sort((a, b) => {
              return a[data.order] < b[data.order]
            })
          }
          break
      }
    },

    resetFilter () {
      this.currentListFilter = []
      this.currentListSearch = []
      this.$busForm.$emit('hsFilter_resetOrder')
      this.$busForm.$emit('hsFilter_chosenFilters', {mode: 'cleaner'})
      this.$busForm.$emit('hsFilter_searchText', {mode: 'cleaner'})
    }
  }
}
