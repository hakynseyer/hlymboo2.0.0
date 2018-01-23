const hiddenMessage = {
  mounted () {
    this.$busForm.$on('formMixins_successIcon', (data) => {
      if (typeof (data.id) !== 'undefined' && typeof (data.state) !== 'undefined') {
        if (typeof (this.$refs[data.id]) !== 'undefined') this.successIcon = data.state
      }
    })
  },
  beforeDestroy () {
    this.$busForm.$off('formMixins_successIcon')
  },
  data () {
    return {
      successIcon: false,
      showHiddenMessage: {
        status: false,
        timer: null
      }
    }
  },
  methods: {
    enableHiddenMessage () {
      this.showHiddenMessage.timer = setTimeout(() => {
        this.showHiddenMessage.status = true
      }, 500)
    },
    disableHiddenMessage () {
      if (this.showHiddenMessage.status) this.showHiddenMessage.status = false
      clearTimeout(this.showHiddenMessage.timer)
    }
  }
}

export {hiddenMessage}
