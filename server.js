const express = require('express');
const path = require('path');
const { Firestore, FieldValue } = require('@google-cloud/firestore');

const app = express();
const port = process.env.PORT || 8080;
const projectId = process.env.GOOGLE_CLOUD_PROJECT;
const db = projectId ? new Firestore({ projectId }) : null;

app.disable('x-powered-by');
app.use(express.json({ limit: '16kb' }));

const clean = (value, max) => String(value || '').trim().slice(0, max);
const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, leads: db ? 'configured' : 'not-configured' });
});

app.post('/api/leads', async (req, res) => {
  const lead = {
    name: clean(req.body.name, 120),
    email: clean(req.body.email, 254).toLowerCase(),
    age: clean(req.body.age, 60),
    format: clean(req.body.format, 40),
    audience: clean(req.body.audience, 40),
    note: clean(req.body.note, 1000),
    source: clean(req.body.source, 80) || 'tablafy-website'
  };

  if (!lead.name || !emailIsValid(lead.email)) {
    return res.status(400).json({ error: 'Please provide a name and valid email address.' });
  }
  if (!db) {
    return res.status(503).json({ error: 'Lead storage has not been configured.' });
  }

  try {
    const ref = await db.collection('trialLeads').add({
      ...lead,
      status: 'new',
      createdAt: FieldValue.serverTimestamp()
    });
    return res.status(201).json({ ok: true, id: ref.id });
  } catch (error) {
    console.error('Unable to save a trial lead', error);
    return res.status(500).json({ error: 'We could not save your request. Please try again.' });
  }
});

app.use(express.static(path.join(__dirname), { index: 'index.html' }));

app.listen(port, () => console.log(`Tablafy listening on ${port}`));
