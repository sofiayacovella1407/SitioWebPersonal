// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuración de Firebase (reemplaza con tus credenciales reales)
const firebaseConfig = {
    apiKey: "AIzaSyB76GiY7p42Cg-yilYq_aTyMQX1E-9GuKM",
    authDomain: "sitiowebpersonal-c111d.firebaseapp.com",
    projectId: "sitiowebpersonal-c111d",
    storageBucket: "sitiowebpersonal-c111d.firebasestorage.app",
    messagingSenderId: "364044729452",
    appId: "1:364044729452:web:66c256f71a5029194cac49",
    measurementId: "G-S4JJD5XBRJ"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };