import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "firebase-admin";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });
}

const db = admin.firestore();
const resend = new Resend(process.env.RESEND_API_KEY);

const logEmailEvent = async (payload) => {
  await db.collection("emailLogs").add({
    ...payload,
    createdAt: new Date().toISOString()
  });
};

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/bookings", async (req, res) => {
  const booking = req.body;
  const ref = await db.collection("bookings").add({
    ...booking,
    status: "pending",
    createdAt: new Date().toISOString()
  });
  res.status(201).json({ id: ref.id });
});

app.post("/api/sos", async (req, res) => {
  const sos = req.body;
  const ref = await db.collection("sosAlerts").add({
    ...sos,
    status: "open",
    createdAt: new Date().toISOString()
  });
  res.status(201).json({ id: ref.id });
});

app.post("/api/maintenance", async (req, res) => {
  const ticket = req.body;
  const ref = await db.collection("maintenanceTickets").add({
    ...ticket,
    status: "new",
    createdAt: new Date().toISOString()
  });
  res.status(201).json({ id: ref.id });
});

app.post("/api/email", async (req, res) => {
  const { to, subject, html, text, metadata } = req.body;
  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
      text
    });
    await logEmailEvent({
      to,
      subject,
      status: "sent",
      providerId: result.data?.id,
      metadata
    });
    res.json({ status: "sent" });
  } catch (error) {
    await logEmailEvent({
      to,
      subject,
      status: "failed",
      error: error.message,
      metadata
    });
    res.status(500).json({ status: "failed" });
  }
});

export default app;
