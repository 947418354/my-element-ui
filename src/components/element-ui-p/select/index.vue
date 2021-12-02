<template>
  <div class="el-select-p">
    <label class="label" for="">{{ label }}</label>
    <el-select v-bind="$attrs" v-on="$listeners" :value="value">
      <template v-for="item of options">
        <el-option-group
          v-if="item.children && item.children.length > 0"
          :key="item.id"
          v-bind="item"
        >
          <el-option
            v-for="item1 of item.children"
            :key="item1.id"
            v-bind="item1"
          ></el-option>
        </el-option-group>
        <el-option
          v-if="!item.children"
          :key="item.id"
          v-bind="item"
        ></el-option>
      </template>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "ElSlectP",
  props: {
    value: "",
    options: Array,
    label: "",
  },
  watch: {
    options(n) {},
  },
  created() {},
};
</script>

<style lang="scss">
.el-select-p {
  display: inline-block;
  .label {
    margin-right: 10px;
  }
}
</style>