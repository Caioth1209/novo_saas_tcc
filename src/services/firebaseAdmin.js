// firebaseAdmin.mjs (ou firebaseAdmin.js se "type": "module" estiver configurado)

import admin from "firebase-admin";

const adminApp = admin.initializeApp({
  credential: admin.credential.cert({
    "type": process.env.FIREBASE_ADMIN_TYPE,
    "project_id": process.env.FIREBASE_ADMIN_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_ADMIN_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_ADMIN_AUTH_URI,
    "token_uri": process.env.FIREBASE_ADMIN_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
    "universe_domain": process.env.FIREBASE_ADMIN_UNIVERSE_DOMAIN,
  }
  ),
  databaseURL: "https://tcc-turbo-389af-default-rtdb.firebaseio.com"
});

export { adminApp }; // Exportando o adminApp
