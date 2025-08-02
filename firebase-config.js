// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDszio4z1mu-IXBbYB7Cw95ahKvrswfyr4",
  authDomain: "nxona-code-runner.firebaseapp.com",
  projectId: "nxona-code-runner",
  storageBucket: "nxona-code-runner.appspot.com",
  messagingSenderId: "322692098432",
  appId: "1:322692098432:web:f168678c0e2469784db965"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
