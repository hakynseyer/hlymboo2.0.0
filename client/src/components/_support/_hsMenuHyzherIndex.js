export const _hsMenuHyzherIndex = {
  beforeRouteLeave (to, from, next) {
    let r = to.name

    if (r !== 'image' && r !== 'images' && r !== 'imagess') {
      this.$busForm.$emit('hsMenuHyzher_clearActives', {ranks: false, pages: true})
    }

    next()
  }
}
