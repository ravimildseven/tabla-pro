# Tablafy — Tabla Discovery Workshop

This repository contains the **public** Tablafy workshop site. It deliberately does not contain the student curriculum, play-alongs, teaching guide, or practice library.

## The offer

**Tablafy** is a four-week discovery workshop for children aged 7 and above:

- one in-person hour each Friday evening;
- one shared Irving-area group of up to eight children;
- no exam, certification, or advanced-training claim;
- instruments are used only at the workshop venue;
- no tabla purchase or at-home practice is expected.

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
