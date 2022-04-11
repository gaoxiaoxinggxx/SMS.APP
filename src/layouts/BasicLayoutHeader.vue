<template>
<div class="header">
  <div class="left">
     <a-button type="primary" @click="onToggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
   
  </div>
  <div class="right">
     <a-dropdown>
         <a-avatar style="background-color: #f56a00">K</a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item>
             <user-outlined />
              <span> 个人中心</span>
            </a-menu-item>
            <a-menu-item>
              <setting-outlined />
              <span>个人设置</span>
            </a-menu-item>
            <a-menu-item>
             <poweroff-outlined />
             <span>退出登录</span>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <span>{{userInfo?.name}}</span>
  </div>
</div>

</template>
<script lang="ts" setup>
import { UserOutlined, SettingOutlined, PoweroffOutlined,MenuUnfoldOutlined,MenuFoldOutlined } from '@ant-design/icons-vue';
import { ref,defineProps,computed } from 'vue';
import {UserModule} from '../store/modules/user'
//变量
const collapsed = ref<boolean>(false);
//props
const props = defineProps<{
  toggleCollapsed:()=>void
}>();
//计算属性
const userInfo = computed(()=>{
   return UserModule.getUserInfo;
})



const onToggleCollapsed = ()=>{
    collapsed.value = !collapsed.value;
    props.toggleCollapsed();
}

</script>
<style lang="scss" scoped>
   .header{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     .left{
       margin-left: 30px;
     }
     .right{
       margin-right: 60px;
       span{
         margin-left: 20px;
       }
     }
   }
</style>