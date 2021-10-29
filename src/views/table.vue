<template>
  <div>
    <ElTableP :tableData="tableData" :labelMap="labelMap"></ElTableP>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          a: 1,
          b: 2,
          c: 3,
        },
      ],
      labelMap: [
        {
          label: "列名1",
          key: "a",
        },
        {
          label: "列名2",
          // key: 'b',
          children: [
            {
              label: "列名2 1",
              key: "b",
            },
            {
              label: "列名2 2",
              key: "c",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>