import { HttpTransportType, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { appConfig } from './appConfig';

var hubConnection = new HubConnectionBuilder()
  .withUrl(`${appConfig.smsApiUrl}/chat`, { skipNegotiation: true, transport: HttpTransportType.WebSockets })
  .withAutomaticReconnect()
  .configureLogging(LogLevel.Error)
  .build();

export default hubConnection;
