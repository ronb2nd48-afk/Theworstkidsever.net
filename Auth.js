// auth.js
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";

export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}
