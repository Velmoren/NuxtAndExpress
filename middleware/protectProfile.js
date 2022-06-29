export default function ({ $cookiz, redirect, store }) {
  if (!$cookiz.get("auth")) {
    store.dispatch("auth/setAuthResetUser");
    return redirect("/login");
  } else {
    store.dispatch("auth/setAuthUser", $cookiz.get("auth"));
  }
}
