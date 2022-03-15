<template>
  <div class="main">
    <div class="top">
      <div class="title">Online Marking Test Day Operation Portal</div>
    </div>
    <div class="card">
      <div class="title">S M S</div>

      <a-tabs v-model:activeKey="activeKey" style="text-align: center;">
        <a-tab-pane key="1" tab="用户密码登录">
          <a-form ref="formRef">
            <a-form-item>
              <a-input placeholder="账 户" size="large">
                <template #prefix>
                  <user-outlined type="user" style="color: rgba(0, 0, 0, 0.45)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="密 码" type="password" size="large">
                <template #prefix>
                  <lock-outlined type="password" style="color: rgba(0, 0, 0, 0.45)" />
                </template>
              </a-input>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        
        <a-tab-pane key="2" tab="手机号登录" force-render>
            <a-form ref="formRef">
            <a-form-item>
              <a-input placeholder="手机号" size="large">
                <template #prefix>
                  <tablet-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input placeholder="验证码" size="large">
                <template #prefix>
                  <mail-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </template>
              </a-input>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
      <a-button size="large" type="primary" block>登 录</a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { UserOutlined, LockOutlined, TabletOutlined,MailOutlined  } from '@ant-design/icons-vue';

const activeKey = ref('1');
</script>
<style lang="scss">
.main {
  margin-top: 200px;
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



