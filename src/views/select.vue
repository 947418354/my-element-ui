<template>
  <div>
    <ElSlectP v-model="value" :options="options"></ElSlectP>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [
        {
          id: 'a',
          label: 'a组',
          children: [
            {
              value: 'a1',
              label: 'a1'
            },
            {
              value: 'a2',
              label: 'a2'
            },
          ]
        },
      ],
    }
  },
  watch: {
    value(n) {
      // console.log(n)
    }
  }
}
</script>

<style>
</style>