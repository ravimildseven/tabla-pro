# Tablafy — teacher-led tabla learning

Tablafy is now both a public enrolment site and a practice studio. The public experience is designed to turn a curious parent or adult learner into a **trial-class request**; the 32-week studio makes the live class easier to practise between sessions.

## What changed

- A focused public home page for child, adult and online learners.
- Trial-class calls to action throughout the site, with a short enrolment form.
- Clear positioning: live teaching first; Tablafy is the practice system, not a replacement for the teacher.
- A Cloud Run-ready Node server and a Firestore-backed `POST /api/leads` endpoint.

No pricing, teacher biography, class times, location, or testimonials have been invented. Add those only when they are real—those four details are the highest-value next content changes.

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080). The site works locally; lead submission returns a clear configuration message until Firestore is connected.

## Google Cloud deployment

Use **Cloud Run + Firestore** first. This retains the simple single-page studio while giving you a reliable home for trial leads. It is deliberately smaller than building logins, payments, AI feedback, and a parent portal before classes are validated.

1. Select a Google Cloud project and enable Cloud Run, Cloud Build and Firestore.
2. Create a Firestore Native database in a region close to your learners. The application stores each submitted trial request as a `trialLeads` document, with its status initially set to `new`.
3. Create a dedicated Cloud Run service account with the Firestore Datastore User role.
4. Deploy directly from this source directory:

```bash
PROJECT_ID="your-project-id"
REGION="us-central1"
SERVICE_ACCOUNT="tablafy-web@${PROJECT_ID}.iam.gserviceaccount.com"

gcloud config set project "$PROJECT_ID"
gcloud services enable run.googleapis.com cloudbuild.googleapis.com firestore.googleapis.com
gcloud firestore databases create --location=nam5 --edition=standard --type=firestore-native
gcloud iam service-accounts create tablafy-web
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/datastore.user"
gcloud run deploy tablafy --source . --region="$REGION" \
  --service-account="$SERVICE_ACCOUNT" --allow-unauthenticated
```

Cloud Run supplies `GOOGLE_CLOUD_PROJECT`, so no service-account key or secret is placed in the site. If the public site remains on GitHub Pages instead, set `window.TABLAFY_LEADS_URL` before the page script to the Cloud Run URL plus `/api/leads`, and add a narrowly scoped CORS policy before enabling it.

After the first paid cohort validates the offer, the sensible next Cloud additions are: Firebase Authentication for student/parent accounts, Firestore-backed cross-device practice history, Cloud Storage for short practice-video uploads, and a small teacher dashboard. Payment and AI performance feedback should wait until the teaching workflow has repeat demand.

Google’s current deployment guidance supports source deployment to Cloud Run with `gcloud run deploy --source .`; Firestore’s current CLI supports creating a Native database with `gcloud firestore databases create`. See [Cloud Run’s Node deployment guide](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service) and [Firestore database setup](https://docs.cloud.google.com/firestore/native/docs/manage-databases).

A complete beginner curriculum for teaching Tabla to first-timers (designed for kids),
built as a single shareable web page. Companion project to [laya-kosh](https://github.com/ravimildseven/laya-kosh).

> Named **Tablafy** — the earlier working title "Tabla Pro" collides with the
> established iOS app *iTabla Pro*.

## What's inside

**Teaching path: bols (letters) → bol-groups (words) → taals (sentences) → repertoire.**
A theka is never memorised beat by beat; it is assembled from small groups the hands already own.

- **🏠 Home** — a bento-tile dashboard: where the class currently is, the practice streak,
  one-tap play, and counts across the whole course. A week tracker moves the class forward.
- **📅 Weekly Plan** — 32 expandable week cards in 6 levels (Hands & Sounds → Bol-Groups →
  The Language of Rhythm → Taal Toolkit → optional Beyond Basics → **Year Two: The Soloist's
  Path**). Each card has a goal, concepts, a class plan, measurable drills, homework, a
  teacher tip, its bol-groups and forms, and that week's reference videos.
- **📜 Repertoire** — the 13 forms a tabla player actually learns, grouped by the stage of a
  solo: theka, kaida, palta, tihai, rela, mukhda, tukda, chakradar, peshkar, uthan, gat,
  paran and laggi. Each is playable, with what it trains and a teaching note. Plus
  **layakari** (ekgun → chaugun and aad), the five **jaati** divisions, and the arc of a
  full solo from uthan to closing chakradar.
- **🗣️ Bol-Groups (Varnas)** — 20 groups in four families (2-, 3-, 4-syllable and long
  chains), all playable, each naming what it trains, how to play it, and — crucially — a
  **builds into** link to the exact beats of the taal it forms (e.g. `Dha Dhin Na` → Dadra
  beats 1–3). Week 8 chains groups into complete Dadra, Keherwa and Teentaal as a reveal.
- **📖 Teach** — the teacher's guide: daily riyaaz routine, troubleshooting the eight
  problems every beginner hits, laya (vilambit/madhya/drut, ekgun/dugun), counting a cycle
  on the hand, guidance for parents, instrument care and tuning, and the six gharanas.
- **👏 Taals** — a complete 15-taal reference, all fully notated in English with beat
  numbers, vibhag boxes, sam/tali/khali (clap/wave) marks, rests, and a **▶ play-along**
  on every taal (theka plays aloud at any BPM with the current beat highlighted).
  Each taal also plays a **🎻 lehra** — the one-cycle melodic loop a sarangi or harmonium
  player provides, over a soft drone, so the student practises knowing where *sam* is
  rather than just where the beat is. Modes: theka, lehra only, or both.
  The 6 course taals (Teentaal, Keherwa, Dadra, Jhaptaal, Rupak, Ektaal) come first in
  teaching order; the reference adds Tilwada, Punjabi/Sitarkhani, Deepchandi, Jhumra,
  Dhamar, Chautal, Ada Chautal, Sultaal and Tivra, grouped by family (vilambit khyal,
  thumri, pakhawaj/dhrupad). Week cards link to related reference taals via
  "🔭 Taal horizon" buttons.
- **📈 Practice Log** — one tap logs a session; tracks current and best streak, days
  practised and total hours, with a 12-week heatmap and milestone badges (3 days → 100
  days). Practising yesterday but not yet today keeps the streak alive, so a day is not
  "lost" until it actually ends. Stored in `localStorage` only — nothing is uploaded.
- **📤 Share cards** — every week, taal and bol-group has a Share button that paints a
  PNG card (notation, goal, homework, branding) and pushes it into the native share sheet,
  so it lands in a WhatsApp group as an image. On desktop it saves the PNG and opens
  WhatsApp Web with the caption prefilled. Every card carries a deep link
  (`#week-6`, `#taal-teentaal`, `#varna-takita`) that opens the app straight to that lesson.
- **🎓 Graduation checklist** — 26 level-tagged tick boxes (saved in the browser);
  Levels 1–4 ticked = knows the basics, Level 6 = performs a solo.
- **🔤 Bols** — the tabla alphabet reference; press ▶ on any row to hear the stroke.
- **🥁 Play** — a practice tabla simulator: tap the drawn drums (chaat/maidan/syahi zones
  each make their real stroke), or use pads / keyboard keys. Volume and dayan-pitch controls.
- **🎬 All Videos** — every reference video in one place, tagged *lesson / listen / teacher*.
  All 40 YouTube ids verified playable via the oEmbed endpoint on 2026-07-19.

## Sound engine

Strokes are synthesised live with the Web Audio API (modal synthesis + noise transients),
so the page works offline with no downloads. For recordings of a real tabla, put files named
`na.mp3, ta.mp3, tin.mp3, tun.mp3, te.mp3, ti.mp3, ge.mp3, ka.mp3, kat.mp3, dha.mp3, dhin.mp3`
in a `samples/` folder next to `index.html` — they are detected and used automatically
(requires hosting over http, e.g. GitHub Pages; `file://` always uses synthesis).

## How to use it as a teacher

1. Open the page, expand the week you are teaching.
2. Share the link with parents and say "we are on Week N" — that week's videos and
   bol-groups are the practice reference.
3. After each class, hit **📤 Share** on that week's card and send it to the class
   WhatsApp group — the image carries the goal and homework, the link reopens the lesson.
4. Use the daily riyaaz routine in the **Teach** tab as the shape of home practice.
5. Weeks 5–8 are the ones not to rush: bol-groups are what make Weeks 10–16 easy.
6. Week 16 ends with a mini recital and the graduation checklist; Weeks 17–20 are optional.
7. Weeks 21–32 are Year Two — kaida and paltas, tihai types, rela, tukda, chakradar,
   peshkar, layakari, jaati, laggi, and finally assembling a complete solo.

## Static-only local preview

`/opt/homebrew/bin/python3 -m http.server 8000` also works for a static preview, but trial
requests cannot be stored from that server. Use `npm start` for the Cloud Run-compatible local flow.

## Files

- `index.html` — the renderer (no build step, open directly in a browser).
- `data.js` — all content: videos, bols, varnas, taals, weeks, checklist, teacher's guide.
  **Edit this file** to add videos or tweak lessons; the page renders whatever is here.

## Live site

Hosted from this repo via GitHub Pages: **https://ravimildseven.github.io/tabla-pro/**

To reproduce the setup elsewhere:

```bash
git init && git add . && git commit -m "Tabla basics curriculum"
gh repo create tabla-pro --public --source=. --push
gh api repos/{owner}/tabla-pro/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```
