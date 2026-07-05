// Placeholder firebase setup. Replace with your config and enable auth/firestore.
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME",
  projectId: "REPLACE_ME"
}

export const app = initializeApp(firebaseConfig)
