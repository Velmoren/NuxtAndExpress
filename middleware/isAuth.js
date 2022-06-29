export default function ({ $cookiz, redirect, store }) {
  if (!$cookiz.get("auth")) {
    store.dispatch("auth/setAuthResetUser");
  } else {
    store.dispatch("auth/setAuthUser", $cookiz.get("auth"));
  }
}
