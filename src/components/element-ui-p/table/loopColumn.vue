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
    <template v-if="item.children && item.children.length > 0">
      <template v-for="(item, idx) in item.children">
        <templateColumn
          v-if="item.cellRender"
          :key="idx"
          :item="item"
        ></templateColumn>
        <loopColumn v-else :key="idx" :item="item"> </loopColumn>
      </template>
      <!-- <loopColumn v-for="(item1, idx1) in item.children" :key="idx1" :item="item1"></loopColumn> -->
    </template>
  </el-table-column>
</template>

<script>
import loopColumn from "./loopColumn.vue";
import templateCol from "./templateCol";
import templateColumn from "./templateColumn.vue";

export default {
  name: "loopColumn",
  props: {
    item: Object,
  },
  components: {
    loopColumn,
    templateCol,
    templateColumn,
  },
  created() {},
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