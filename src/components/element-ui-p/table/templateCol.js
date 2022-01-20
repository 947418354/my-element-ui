export default {
  props: {
    col: Object,  // 列对象
    row: {} // 行对象
  },
  render(h) {
    return this.col.cellRender(h, this.row)
  }
}