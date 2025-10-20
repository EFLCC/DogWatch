// Import Firebase SDKs directly from Google's CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQw_rKOhRDHQXPtfEB6IezSvpzBsNwaDE",
  authDomain: "dogwatch-appl.firebaseapp.com",
  projectId: "dogwatch-appl",
  storageBucket: "dogwatch-appl.firebasestorage.app",
  messagingSenderId: "156057665289",
  appId: "1:156057665289:web:905c226b732d299b4f1dd8",
  measurementId: "G-0GSXV8QXRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export for use in other scripts
export { app, analytics, auth };
