import compose from "lodash/fp/compose";
import curry from "lodash/fp/curry";
import map from "lodash/fp/map";

const _bind = (fn, cxt) => fn.bind(cxt);
const { parse, stringify } = JSON;
const getItem = _bind(localStorage.getItem, localStorage);
const setItem = curry(_bind(localStorage.setItem, localStorage));
const _delete = key => delete localStorage[key];

const storage = {
  get: async key =>
    await compose(
      parse,
      getItem
    )(key),
  set: async (key, value) =>
    await compose(
      setItem(key),
      stringify
    )(value),
  delete: async key => await compose(_delete)(key)
  //setItem(key, stringify(value))
};
