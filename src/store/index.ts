import Vuex from "vuex";

export interface IRootState {
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});