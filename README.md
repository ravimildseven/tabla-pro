# Tabla Pro — Tabla Basics for Kids

A complete beginner curriculum for teaching Tabla to first-timers (designed for kids),
built as a single shareable web page. Companion project to [laya-kosh](https://github.com/ravimildseven/laya-kosh).

## What's inside

**Teaching path: bols (letters) → bol-groups (words) → taals (sentences).** A theka is never
memorised beat by beat; it is assembled from small groups the hands already own.

- **📅 Weekly Plan** — 20 expandable week cards in 5 levels (Hands & Sounds → Bol-Groups →
  The Language of Rhythm → Taal Toolkit → optional Beyond Basics: dugun, tihai, rela,
  accompaniment). Each card has a goal, concepts, a class plan, measurable drills, homework,
  a teacher tip, its bol-groups and that week's reference videos.
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
- **🎓 Graduation checklist** — 17 level-tagged tick boxes (saved in the browser);
  Levels 1–4 ticked = knows the basics.
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
3. Use the daily riyaaz routine in the **Teach** tab as the shape of home practice.
4. Weeks 5–8 are the ones not to rush: bol-groups are what make Weeks 10–16 easy.
5. Week 16 ends with a mini recital and the graduation checklist; Weeks 17–20 are optional.

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
