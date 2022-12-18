import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => ({
    country:"",
    flag: "",
    capital:"",
    area: "",
    borders: []
  }),
  actions:{

  }
});
