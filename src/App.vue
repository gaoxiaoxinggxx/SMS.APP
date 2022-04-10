<template>
  <router-view />
</template>
<script lang="ts" setup>
import {onMounted,onUnmounted} from 'vue'
import { HubConnectionState } from '@microsoft/signalr';
import hubConnection from '../src/util/signalRUitl';

onMounted(async ()=>{
  if(hubConnection.state != HubConnectionState.Connected){
    await hubConnection.start();
    console.info('started signalR...');
  }
  hubConnection.on('candidateDisconnected', async () => {
      console.log('candidateDisconnected 触发了');
  });

  onUnmounted(()=>{
    hubConnection?.off('candidateDisconnected');
    console.info('off candidateDisconnected event.');
  })

})
</script>

