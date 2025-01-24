import { defineStore, type StoreDefinition } from "pinia";
import tokenApi from "@/api/token";
import type { TokenRequest } from "@/api/types";
type AppState = {
  token: string,
}
export const useAppStore: StoreDefinition<string, AppState> = defineStore("app", {
  state: () => {
    return {
      token: ''
    }
  },
  persist:true,
  actions: {
    async login(loginForm: TokenRequest): Promise<void> {
      this.token = await tokenApi.createToken(loginForm);
    }
  }
})
