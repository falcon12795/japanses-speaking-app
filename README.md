# Japanese Speaking App

## Firebase Authentication + Cloud Firestore

Authentication is handled by Firebase Authentication (Email/Password). Each signed-in Firebase UID owns one Firestore progress document:

- `userProfiles/{uid}` — display name and account metadata.
- `userProgress/{uid}` — vocabulary, dialogue, kana, and quiz progress.

The client uses Firebase's public web configuration. Firestore security rules enforce per-user access; do not put Admin SDK credentials or service-account keys in `VITE_*` variables.

### Firebase setup

1. Create/select a Firebase project and register a Web App.
2. In **Authentication → Sign-in method**, enable **Email/Password**.
3. Create a **Cloud Firestore** database.
4. Publish the rules from `firestore.rules` in Firebase Console → Firestore Database → Rules.
5. Copy the Web App configuration into a local `.env` file based on `.env.example`.
6. Add the same six `VITE_FIREBASE_*` variables to the Vercel project's Environment Variables for Production (and Preview if needed), then redeploy.
7. In Firebase Authentication settings, add the deployed Vercel hostname under **Authorized domains**.

The Firebase web API key is intended to be present in the browser. Security comes from Firebase Authentication and Firestore rules, not from hiding this key.

### Data and account migration

The current client-side `users.json`/password-hash accounts are not automatically migrated. Create Firebase Auth accounts for users (the login form now uses email), then transfer each legacy progress record to Firestore document `userProgress/{Firebase UID}`. Do not copy legacy password hashes into Firestore or try to use them as Firebase passwords. Existing legacy progress remains in `src/data/userProgress.json` as a source for a one-time migration; it is no longer used by the production app.

### Development

Run `npm install` and `npm run dev`. Without a configured `.env`, Firebase features will report that the Firebase environment variables are missing. See `.env.example` for required keys.
