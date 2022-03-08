<template>
  <div class="main">
    <div class="top">
      <div class="title">Online Marking Test Day Operation Portal</div>
    </div>
    <div class="card">
      <div class="title">Log in</div>
      <a-form ref="formRef" layout="vertical">
        <a-form-item label="User">
          <a-input />
        </a-form-item>
        <a-form-item label="Password">
          <a-input  type="password" />
        </a-form-item>
        <a-form-item>
          <a-button  type="primary" block @click="">Log in</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useForm } from "ant-design-vue/lib/form";
import { useRouter } from "vue-router";
</script>
<style lang="scss">
.main {
  margin-top: 100px;
  .top {
    text-align: center;
    .logo {
      width: 200px;
    }
    .title {
      margin-top: 30px;
      color: #444444;
      font-size: 21px;
      text-align: center;
    }
  }
  .card {
    width: 470px;
    border-radius: 5px;
    border: 1px solid #c8c8c8;
    margin: 30px auto;
    padding: 50px;
    .title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
  }
}
</style>



