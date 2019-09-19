<template>
  <div class="my-loading">
    <button @click="handleClick()">上传提交</button>
  </div>
</template>

<script>
  export default {
    name:'',
    props:{},
    data () {
      return {

      };
    },

    watch: {},
    methods: {
      handleClick(){
        let loading = this.$myLoading({
          lock: true,
          text: 'Loading',
          spinner: 'eight-circle',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
    },
    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},



  }

</script>
<style lang='less'>
.my-loading {
    // position: relative;
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        width: 1px;
        height: 100%;
        background: green;
    }
}
</style>