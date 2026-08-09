import dotenv from 'dotenv';
dotenv.config();

const app = express();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/user.routes';
import webhookRoutes from './routes/webhook.routes';

const PORT = process.env.PORT || 3001;

// ─── Security Middleware ─────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

// ─── Webhook Route (raw body — must be before express.json()) ────────────────
// Svix signature verification requires the raw request body string.
app.use('/api/webhooks', express.raw({ type: 'application/json' }), webhookRoutes);

// ─── Standard JSON Middleware ────────────────────────────────────────────────
app.use(express.json());

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
