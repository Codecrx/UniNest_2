# Deployment Guide

## Firebase
1. Create a Firebase project and enable Authentication (Email/Password, Google, Phone).
2. Create Firestore in production mode and apply rules.
3. Create a web app and copy the config into `.env`.
4. Enable Firebase Cloud Messaging and set `NEXT_PUBLIC_FIREBASE_VAPID_KEY`.

## API (Vercel/Render)
1. Provision a Node runtime and set environment variables from `.env.example`.
2. Provide `GOOGLE_APPLICATION_CREDENTIALS` for the Firebase Admin SDK.
3. Set `RESEND_API_KEY` and `EMAIL_FROM` (or update provider logic).
4. Deploy `apps/api` and expose port `5050`.

## Frontend (Vercel/Firebase Hosting)
1. Deploy `apps/web` as a Next.js app.
2. Add the Firebase environment variables.
3. Configure `NEXT_PUBLIC_API_BASE_URL` if routing to the API.

## Email Templates
- Store HTML templates in Firestore or a storage bucket.
- Use dynamic variables when calling `/api/email`.
- Log all events in `emailLogs`.
