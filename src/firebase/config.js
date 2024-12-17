import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDejVsgMN4CyUxt7kJDYcUPW2x0mc4wrhc",
  authDomain: "fhj-db.firebaseapp.com",
  projectId: "fhj-db",
  storageBucket: "fhj-db.firebasestorage.app",
  messagingSenderId: "262107373606",
  appId: "1:262107373606:web:531bdec877239d29d286e7"
}

export const app = initializeApp(firebaseConfig)