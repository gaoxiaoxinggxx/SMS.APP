import { VuexModule, Module, Action, Mutation, getModule } from "vuex-module-decorators";
import { _API } from "../../api";
import { CurrentUserResponse, UserAuthRequest, UserAuthResponse } from "../../api/smsClient";
import store from "../index";

export interface IUserState {
  userInfo: CurrentUserResponse | undefined;
  token: string | undefined;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements IUserState {
    userInfo: CurrentUserResponse | undefined;
    token: string | undefined;

  @Mutation
  private async SET_USER_DETAIL(userInfo: CurrentUserResponse) {
    this.userInfo = userInfo;
    localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
  }

  @Mutation
  private CLEAR_User_DETAIL() {
    this.userInfo = undefined;
    localStorage.removeItem("userInfo");
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  @Mutation
  private CLEAR_TOKEN() {
    this.token = undefined;
    localStorage.removeItem("token");
  }

  @Action
  public async logOut() {
    localStorage.clear();
    this.CLEAR_User_DETAIL();
    this.CLEAR_TOKEN();
  }

  @Action
  public async login(request: UserAuthRequest): Promise<UserAuthResponse | undefined> {
    let res = await _API.sms.authClient.auth(request);
    this.SET_TOKEN(<string>res.token);
    return res;
  }

  @Action
  public async setUserDetail() {
    let userDetail = await _API.sms.userClient.getCurrentInfo();
    await this.SET_USER_DETAIL(userDetail);
  }

  public get getUserInfo() {
    if (!this.userInfo) {
      let storageUserInfo = localStorage.getItem("userInfo");
      if (storageUserInfo) {
        let jsonItem = JSON.parse(storageUserInfo);
        UserModule.SET_USER_DETAIL(jsonItem);
        // this.examinerDetail = jsonItem;
      }
    }
    return this.userInfo;
  }

  public get getToken() {
    if (!this.token) {
      let storageToken = localStorage.getItem("token");
      if (storageToken) {
        UserModule.SET_TOKEN(storageToken);
        // this.token = <string>storageToken;
      }
    }
    return this.token;
  }
}

export const UserModule = getModule(User);
