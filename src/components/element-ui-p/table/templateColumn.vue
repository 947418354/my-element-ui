<template>
    <el-table-column
      :prop="item.key"
      :fixed="item.fixed"
      :label="item.label"
      :title="item.label"
      :class-name="item.className"
      :width="item.width"
      :formatter="item.formatter"
      v-bind="item"
    >
      <template slot-scope="scope">
        <templateCol :col="item" :row="scope.row"></templateCol>
      </template>
    </el-table-column>
</template>

<script>
import loopColumn from "./loopColumn.vue";
import templateCol from './templateCol'

export default {
  name: "loopColumn",
  props: {
    item: Object,
  },
  components: {
    loopColumn,
    templateCol,
  },
  created() {
  },
  method: {
    theadRender(h, { column, $index }) {
      return h(
        "span",
        {
          attrs: {
            title: column.label,
          },
        },
        [column.label]
      );
    },
  },
};
</script>

<style>
</style>