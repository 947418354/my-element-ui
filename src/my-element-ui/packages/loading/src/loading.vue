<template>
  <transition name="el-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="el-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]"
    >
      <div class="el-loading-spinner">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" />
        </svg>
        <!-- 八圆变换加载 -->
        <div v-else-if="spinner === 'eight-circle'" style="position:relative;height:120px;">
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(0deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(45deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(90deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(135deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(180deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(225deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(270deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
          <div
            class="test-container"
            style="background:transparent;transform: translateX(-50%) rotate(315deg);"
          >
            <div
              class="test-item"
              style="background:blue;border-radius:50%;"
            ></div>
          </div>
        </div>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="el-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ""
    };
  },

  methods: {
    handleAfterLeave() {
      this.$emit("after-leave");
    },
    setText(text) {
      this.text = text;
    }
  }
};
</script>

<style lang="less">
@keyframes scale-color {
  from {
  }
  to {
    width: 30px;
    height: 30px;
    background: #888;
  }
}
.test-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100px;
  height: 100px;
}
.test-item {
  width: 0;
  height: 0;
}
.test-container:nth-child(1) {
  .test-item {
    animation: scale-color 1.6s linear 0.2s infinite reverse;
  }
}
.test-container:nth-child(2) {
  .test-item {
    animation: scale-color 1.6s linear 0.4s infinite reverse;
  }
}
.test-container:nth-child(3) {
  .test-item {
    animation: scale-color 1.6s linear 0.6s infinite reverse;
  }
}
.test-container:nth-child(4) {
  .test-item {
    animation: scale-color 1.6s linear 0.8s infinite reverse;
  }
}
.test-container:nth-child(5) {
  .test-item {
    animation: scale-color 1.6s linear 1s infinite reverse;
  }
}
.test-container:nth-child(6) {
  .test-item {
    animation: scale-color 1.6s linear 1.2s infinite reverse;
  }
}
.test-container:nth-child(7) {
  .test-item {
    animation: scale-color 1.6s linear 1.4s infinite reverse;
  }
}
.test-container:nth-child(8) {
  .test-item {
    animation: scale-color 1.6s linear 1.6s infinite reverse ;
  }
}
</style>