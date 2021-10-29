<template>
  <el-table
    v-if="tableVisible"
    class="table-template-common"
    border
    :height="height"
    :max-height="height ? height : maxHeight"
    :show-header="showHeader"
    :data="tableData"
    :span-method="spanMethod"
  >
    <loopColumn v-for="(item, idx) in labelMap" :key="idx" :item="item"> </loopColumn>
  </el-table>
</template>

<script>
import _ from "lodash";
import loopColumn from "./loopColumn.vue";

export default {
  // isGlobal: true, //是否全局注册
  name: 'ElTableP',  //全局组件首驼峰
  props: {
    tableVisible: {
      type: Boolean,
      default: true, //默认显示
    },
    labelMap: Array,
    tableData: Array,
    fixedLabelKeys: Array,
    isReturnIndicator: {
      type: Boolean,
      default: false,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    returnIndicator: Array,
    maxHeight: {
      type: [String, Number],
      default: "340",
    },
    height: [String, Number],
    maxRow: Number,
    spanMethod: Function,
  },
  data() {
    return {
      watchLocked: false,
    };
  },
  components: {
    loopColumn,
  },
  mounted() {
    this.checkTableData();
  },
  methods: {
    checkTableData() {
      if (this.maxRow) {
        this.tableData.splice(this.maxRow);
      }
    },
    getClass(val, config) {
      let returnIndicatorClass = this.getReturnIndicatorClass(val, config);
      // let textAliginClass = this.getTextAliginClass(config.textAlign)
      return `${returnIndicatorClass}`;
    },
    getReturnIndicatorClass(val, config) {
      let className = +val > 0 ? "positive" : +val < 0 ? "negative" : "";
      if (config.isNaN) {
        return "";
      }
      if (this.isReturnIndicator) {
        return className;
      } else if (_.indexOf(this.returnIndicator, config.key) > -1) {
        return className;
      } else {
        return "";
      }
    },
    // getTextAliginClass (textAlign) {
    //   return textAlign ? `text-align-${textAlign}` : 'text-align-right'
    // },
    isFixed(key) {
      if (this.fixedLabelKeys && this.fixedLabelKeys.length) {
        return this.fixedLabelKeys.indexOf(key) > -1;
      } else {
        return false;
      }
    },
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
    getQuartileIcon(q) {
      return `quartile-icons quartile-${q}`;
    },
  },
  watch: {
    tableData() {
      if (!this.watchLocked) {
        this.watchLocked = true;
        this.checkTableData();
        this.$nextTick(() => {
          this.watchLocked = false;
        });
      }
    },
  },
  filters: {
    fixed: function (val, num) {
      if (_.isNaN(+val) || num === 0) return val;
      if (val === "--") {
        return "--";
      } else {
        return Number(val).toFixed(num || 2);
      }
    },
    empty: function (val) {
      if (!val && val !== 0) {
        return "--";
      }
      return val;
    },
  },
};
</script>

<style lang="less">
.table-template-common {
  width: 100%;
  // max-width: 960px;
  line-height: 30px;
}
.table-no-hover {
  .el-table__body tr:hover {
    td {
      background-color: transparent !important;
    }
  }
}

.quartile-icons {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;

  &.quartile-4 {
    background-position: 0 0;
  }

  &.quartile-3 {
    background-position: -21px 0;
  }

  &.quartile-2 {
    background-position: -42px 0;
  }

  &.quartile-1 {
    background-position: -63px 0;
  }
}
</style>
