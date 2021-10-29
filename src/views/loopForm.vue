<template>
  <div>
    <LoopForm :formData="formData" :formItems="formItems"></LoopForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        a: '',
        b: '',
      },
      formItems: [
        {
          type: 'text',
          key: 'a',
          label: '字段标签a',
        },
        {
          type: 'select',
          key: 'b',
          label: '字段标签b',
        }
      ]
    }
  }
}
</script>

<style>

</style>