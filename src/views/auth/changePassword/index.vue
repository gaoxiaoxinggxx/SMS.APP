<template>
    <a-button type="primary" @click="onClickButton">Primary Button</a-button>
</template>
<script lang="ts" setup>
import {onMounted,onUnmounted} from 'vue'
import { HubConnectionState } from '@microsoft/signalr';
import hubConnection from '../../../util/signalRUitl';
import { _API } from '../../../api';
onMounted(async ()=>{
   if(hubConnection.state != HubConnectionState.Connected){
    await hubConnection.start();
    console.info('started signalR...');
  }
  hubConnection.on('candidateDisconnected', async (name:string) => {
      console.log('candidateDisconnected 触发了',name);
  });
})

onUnmounted(()=>{
  hubConnection?.off('candidateDisconnected');
  console.info('off candidateDisconnected event.');
})

const onClickButton = async ()=>{
  var userInfo = await _API.sms.userClient.getCurrentInfo();
  console.log(userInfo);

 
}
</script>