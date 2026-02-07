# Deployment Guide

## Firebase
1. Create a Firebase project and enable Authentication (Email/Password, Google, Phone).
2. Create Firestore in production mode and apply rules.
3. Create a web app and copy the config into `.env`.
4. Enable Firebase Cloud Messaging and set `NEXT_PUBLIC_FIREBASE_VAPID_KEY`.

## API (Vercel)
1. Create a new Vercel project and set the root directory to `apps/api`.
2. Add environment variables from `.env.example` (especially `GOOGLE_APPLICATION_CREDENTIALS`, `RESEND_API_KEY`, and `EMAIL_FROM`).
3. Ensure `vercel.json` is present so Vercel routes all traffic to `api/index.js`.
4. Deploy and note the API URL for frontend calls.

## Frontend (Vercel)
1. Create a new Vercel project and set the root directory to `apps/web`.
2. Add the Firebase environment variables.
3. Set `NEXT_PUBLIC_API_BASE_URL` to the deployed API URL (optional if calling Firebase directly).
4. Deploy and verify that `/`, `/student`, `/owner`, and `/admin` routes load.

## Email Templates
- Store HTML templates in Firestore or a storage bucket.
- Use dynamic variables when calling `/api/email`.
- Log all events in `emailLogs`.
