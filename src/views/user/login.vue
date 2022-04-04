<template>
  <div class="main">
    <div class="card">
      <a-tabs v-model:activeKey="activeKey" style="text-align: center;">
        <a-tab-pane key="1" tab="用户密码登录">
          <a-form ref="formRef">
            <a-form-item v-bind="validateInfos.name">
              <a-input placeholder="账 户" size="large" v-model:value="authInfo.name">
                <template #prefix>
                  <user-outlined type="user" style="color: rgba(0, 0, 0, 0.45)" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item v-bind="validateInfos.password">
              <a-input placeholder="密 码" type="password" size="large" v-model:value="authInfo.password">
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

      <div class="check-box-login">
        <span>
           <a-checkbox v-model:checked="isChecked">自动登录</a-checkbox>
           <a href="" style="float: right;">忘记密码?</a>
        </span>
      </div>

      <a-button size="large" :loading="loginLoading" type="primary" class="login-btn" @click="login"  block>登 录</a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { UserOutlined, LockOutlined, TabletOutlined, MailOutlined } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";
import { _API } from '../../api';
import { UserAuthRequest } from '../../api/smsClient';
import useForm from 'ant-design-vue/lib/form/useForm';
import {UserModule} from '../../store/modules/user'

const router = useRouter();
const activeKey = ref('1');
const loginLoading = ref<boolean>(false);
const isChecked = ref<boolean>(false);
const authInfo = ref<UserAuthRequest>(new UserAuthRequest());
const rulesRef = ref({
  name:[{required:true,message:'请输入用户名密码'},{min:6,max:20,message:'用户账号长度为6-12位',trigger:'blur'}],
  password:[{required:true,message:'请输入用户名密码'},{min:6,max:12,message:'用户密码长度为6-12位',trigger:'blur'}]
  });
const { validate, validateInfos } = useForm(authInfo.value, rulesRef.value);

const login = async ()=>{
  const req = await validate<UserAuthRequest>();
  try{
    loginLoading.value = true;
   
    UserModule.login(req);
    UserModule.setUserDetail();

    router.push({name:"changePassword"});
  }finally{
    loginLoading.value = false;
  }
}


</script>
<style lang="scss">
body{
  background: #f0f2f5 url(../../assets/background.svg) no-repeat 50%;
}
.main {
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
    border-radius: 5px;
    margin: 0px auto;
    .title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
    .login-btn{
      margin-top: 25px;
    }
  }
}
</style>



