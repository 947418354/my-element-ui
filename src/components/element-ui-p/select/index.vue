<template>
  <el-select v-bind="$attrs" v-on="$listeners" :value="value">
    <template v-for="item of options">
      <el-option-group v-if="item.children && item.children.length > 0" :key="item.id" v-bind="item">
        <el-option v-for="item1 of item.children" :key="item1.id" v-bind="item1"></el-option>
      </el-option-group>
      <el-option v-if="!item.children" :key="item.id" v-bind="item"></el-option>
    </template>
  </el-select>
</template>

<script>
export default {
  name: "ElSlectP",
  props: {
    value: '',
    options: Array,
  },
  watch: {
    options(n) {
    }
  },
  created() {
  },
};
</script>

<style>
</style>