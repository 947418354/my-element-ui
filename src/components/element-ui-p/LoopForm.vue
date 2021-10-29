<template>
  <el-form v-bind="$attrs" :model="formData">
    <el-row
      style="
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid #dfe6ec;
        border-top: 1px solid #dfe6ec;
      "
    >
      <el-col
        v-for="(formItem, index) of formItems"
        :span="8"
        :key="index"
        style="
          display: flex;
          border-right: 1px solid #dfe6ec;
          border-bottom: 1px solid #dfe6ec;
          border-radius: 0;
          padding-right: 5px;
        "
      >
        <!-- 标签div -->
        <div style="width: 15%; display: flex; align-items: center">
          <div style="text-align: right; width: 100%; padding-right: 10px">
            <span v-show="formItem.required" style="color: #f00">*</span
            ><span>{{formItem.label}}</span>
          </div>
        </div>
        <div
          style="
            flex-grow: 1;
            flex-shrink: 1;
            overflow-x: hidden;
            border-left: 1px solid #dfe6ec;
            padding-left: 5px;
          "
        >
          <el-form-item
            :prop="formItem.key"
            style="margin-bottom: 0; width: 100%"
          >
            <el-input
              v-if="formItem.type === 'text'"
              v-model="formData[formItem.key]"
            ></el-input>
            <el-input
              v-if="formItem.type === 'textarea'"
              type="textarea"
            ></el-input>
            <el-select v-if="formItem.type === 'select'" v-model="formData[formItem.key]" style="width: 100%">
              <el-option
                v-for="(option, oi) of formItem.options"
                :key="oi"
                :value="option.value"
                :label="option.label"
              ></el-option>
            </el-select>
            <el-select v-if="formItem.type === 'mulSelect'" multiple>
              <el-option
                v-for="(option, oi) of formItem.options"
                :key="oi"
                :value="option.value"
                :label="option.label"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "LoopForm",
  props: {
    formData: Object,
    formItems: Array,
  },
};
</script>
