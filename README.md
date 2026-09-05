# Tablafy — Tabla Foundations Workshop

This repository contains the **public** Tablafy workshop site. It deliberately does not contain the student curriculum, play-alongs, teaching guide, or practice library.

## The offer

**Tabla Foundations** is a four-week workshop for absolute beginners:

- one live hour each week;
- small groups of five to eight learners;
- child and adult groups are kept separate;
- no exam, certification, or advanced-training claim;
- focused student practice material is shared after enrolment.

## Private student library

The complete existing Tablafy library has been preserved in a separate private repository. Never copy the library, data.js, or student practice pages into this public repository.

## Run locally

~~~
npm install
npm start
~~~

Open http://localhost:8080.

## Lead capture and Cloud Run

The form posts to /api/leads. The included Node server saves validated requests to a Firestore trialLeads collection when it runs on Cloud Run with a configured Firestore database.

Before publishing lead capture:

1. Create a Firestore Native database.
2. Give the Cloud Run service account roles/datastore.user.
3. Deploy this repository to Cloud Run.
4. Submit a test request and verify it appears in Firestore.

For a separate static host, set window.TABLAFY_LEADS_URL to the Cloud Run URL plus /api/leads and add an explicit CORS allowlist to the server.

Cloud Run source deployments are supported with gcloud run deploy --source . See the [official Node.js guide](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service).
