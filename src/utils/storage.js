import compose from "lodash/fp/compose";

const _bind = (fn, context) => fn.bind(context);

const resolve = _bind(Promise.resolve, Promise);
const { parse, stringify } = JSON;
const getItem = _bind(localStorage.getItem, localStorage);
const setItem = _bind(localStorage.setItem, localStorage);

const _delete = key => delete localStorage[key];

const storage = {
  get: compose(
    resolve,
    parse,
    getItem
  ),
  set: compose(
    resolve,
    setItem,
    stringify
  ),
  delete: compose(
    resolve,
    _delete
  )
};

localStorage["1"] = "12";
storage.delete("1").then(console.log);
console.log(localStorage);
export default storage;
