<template>
  <div>
    <div class="example-title">自定义列模板</div>
    <div>自定义列的显示内容，可组合其他组件使用</div>
    <div class="ui">
      <ElTableP :tableData="tableData" :labelMap="labelMap"></ElTableP>
    </div>
    <button @click="isShow1 = !isShow1">显示/隐藏代码</button>
    <div v-show="isShow1">
      <pre>
        <code class="html hljs xml" v-text='`<ElTableP :tableData="tableData" :labelMap="labelMap"></ElTableP>`'>
        </code>
      </pre>
      <pre>
        <code class="language-html language-javascript" v-html='hljs.highlight(codeScript1, {language: "html"}).value'>
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import preCode from './table/preCode'
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
          cellRender(h, row) {
            return (
              <div>
                <button>{row.a}</button>
              </div>
            );
          },
        },
        {
          label: "列名2",
          // key: 'b',
          children: [
            {
              label: "列名2 1",
              key: "b",
              cellRender(h, row) {
                return (
                  <div>
                    <button>{row.b}</button>
                  </div>
                );
              },
            },
            {
              label: "列名2 2",
              key: "c",
            },
          ],
        },
      ],
      codeScript1: preCode.codeScript1,
      isShow1: false,
      hljs: window.hljs,
    };
  },
  updated() {
    hljs.highlightAll()
  },
};
</script>

<style>
</style>