import { AuthClient, UserClient } from './smsClient';
import { appConfig } from '../util/appConfig';

export const _API = {
  sms: {
    authClient: new AuthClient(appConfig.smsApiUrl),
    userClient: new UserClient(appConfig.smsApiUrl)
  },
};
