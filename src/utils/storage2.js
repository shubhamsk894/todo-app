import compose from "lodash/fp/compose";
import curry from "lodash/fp/curry";

const _bind = (fn, context) => fn.bind(context);
const resolve = _bind(Promise.resolve, Promise);
const { parse, stringify } = JSON;
const getItem = _bind(localStorage.getItem, localStorage);
const setItem = curry(_bind(localStorage.setItem, localStorage));

const storage = {
  get: async key => {
    let result = await getItem(key);
    return result;
  },
  set: async (key, value) => {
    let result = await setItem(key, stringify(value));
    return result;
  }
};
localStorage["1"] = "a";
storage.get("1").then(console.log);
storage.set("2", "b");
storage.get("2").then(console.log);
