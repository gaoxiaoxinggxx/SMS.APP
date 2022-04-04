import { notification } from "ant-design-vue";
import { router } from "../router";

export class FetchInterceptor {
  public interceptors: any[] = [];
  public interceptor(fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>, options: { input: RequestInfo; init?: RequestInit | undefined }) {
    const reversedInterceptors = this.interceptors.reduce((array, interceptor) => [...[interceptor], array]);
    let promise = Promise.resolve(options);
    reversedInterceptors.forEach(({ request, requestError }: any) => {
      if (request || requestError) {
        promise = promise.then((opt) => request(opt.input, opt.init), requestError);
      }
    });

    let responsePromise = promise.then((opt) => fetch(opt.input, opt.init));
    reversedInterceptors.forEach(({ response, responseError }: any) => {
      if (response || responseError) {
        responsePromise = responsePromise.then((resp: Response) => {
          return response(resp);
        });
      }
    });
    return responsePromise;
  }
}

export const fetchInterceptor = new FetchInterceptor();
fetchInterceptor.interceptors.push(
  {
    request: (input: string, init: RequestInit) => {
      let headers = new Headers(init.headers);
      headers.append("authorization", `Bearer ${localStorage.getItem("token")}`);
      init.headers = headers;
      return { input, init };
    },
  },
  {
    response: async (response: Response) => {
      if (response.status == 503) {
        notification.warning({ message: "Service unavailable" });
      }
      if (response.status == 400 || response.status == 500) {
        notification.warning({ message: "Service Error" });
        //notification.warning({ message: JSON.parse(await response.text()).message });
      }
      if (response.status == 401) {
        router.push({ name: "login" });
      }
      return response;
    },
  }
);
window.fetch = ((fetch) => {
  return (input: RequestInfo, init?: RequestInit | undefined) => {
    init = Object.assign({}, init, { credentials: "include" });
    return fetchInterceptor.interceptor(fetch, { input, init });
  };
})(window.fetch);
