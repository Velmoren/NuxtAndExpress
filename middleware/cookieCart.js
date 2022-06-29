export default function ({ store, $storage }) {
  if ($storage.getLocalStorage("cart")) {
    store.dispatch("cart/setCartData", $storage.getLocalStorage("cart"));
  }
}
