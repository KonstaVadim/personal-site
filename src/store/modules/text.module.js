import RU_TEXT from "@assets/text/ru-text";
import ENG_TEXT from "@assets/text/eng-text";

const state = {
  activeLanguage: "ru",
};

const getters = {
  TEXT: (state) => {
    if (state.activeLanguage === "ru") {
      return RU_TEXT;
    }
    return ENG_TEXT;
  },

  HEADER_TEXT: (state, getters) => getters.TEXT.header,

  MAIN_TEXT: (state, getters) => getters.TEXT.main,

  QUOTE_TEXT: (state, getters) => getters.TEXT.quote,

  SERVICES_TEXT: (state, getters) => getters.TEXT.services,

  PORTFOLIO_TEXT: (state, getters) => getters.TEXT.portfolio,

  ABOUT_ME_TEXT: (state, getters) => getters.TEXT.aboutMe,

  CONTACT_TEXT: (state, getters) => getters.TEXT.contact,
};

const mutations = {
  setActiveLanguage(state, lang) {
    state.activeLanguage = lang;
  },
};

const actions = {
  setActiveLanguage({ commit }, lang) {
    commit("setActiveLanguage", lang);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
