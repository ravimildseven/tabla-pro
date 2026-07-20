# Tabla Pro — Tabla Basics for Kids

A complete beginner curriculum for teaching Tabla to first-timers (designed for kids),
built as a single shareable web page. Companion project to [laya-kosh](https://github.com/ravimildseven/laya-kosh).

## What's inside

- **📅 Weekly Plan** — 16 expandable week cards in 4 levels (Hands & Sounds → The Language
  of Rhythm → Taal Toolkit → optional Beyond Basics: dugun, tihai, rela, accompaniment).
  Each card has a goal, concepts, a class plan, measurable drills, homework, a teacher tip
  and that week's reference videos. Weeks 1–12 are the core "basics" course.
- **👏 Taals** — a complete 15-taal reference, all fully notated in English with beat
  numbers, vibhag boxes, sam/tali/khali (clap/wave) marks, rests, and a **▶ play-along**
  on every taal (theka plays aloud at any BPM with the current beat highlighted).
  The 6 course taals (Teentaal, Keherwa, Dadra, Jhaptaal, Rupak, Ektaal) come first in
  teaching order; the reference adds Tilwada, Punjabi/Sitarkhani, Deepchandi, Jhumra,
  Dhamar, Chautal, Ada Chautal, Sultaal and Tivra, grouped by family (vilambit khyal,
  thumri, pakhawaj/dhrupad). Week cards link to related reference taals via
  "🔭 Taal horizon" buttons.
- **🔤 Bols** — the tabla alphabet reference; press ▶ on any row to hear the stroke.
- **🥁 Play** — a practice tabla simulator: tap the drawn drums (chaat/maidan/syahi zones
  each make their real stroke), or use pads / keyboard keys. Volume and dayan-pitch controls.
- **🎬 All Videos** — every reference video in one place, tagged *lesson / listen / teacher*.
  All 40 YouTube ids verified playable via the oEmbed endpoint on 2026-07-19.
- **🎓 Graduation checklist** — level-tagged tick boxes (saved in the browser); Levels 1–3
  ticked = knows the basics.

## Sound engine

Strokes are synthesised live with the Web Audio API (modal synthesis + noise transients),
so the page works offline with no downloads. For recordings of a real tabla, put files named
`na.mp3, ta.mp3, tin.mp3, tun.mp3, te.mp3, ti.mp3, ge.mp3, ka.mp3, kat.mp3, dha.mp3, dhin.mp3`
in a `samples/` folder next to `index.html` — they are detected and used automatically
(requires hosting over http, e.g. GitHub Pages; `file://` always uses synthesis).

## How to use it as a teacher

1. Open the page, expand the week you are teaching.
2. Share the page link with parents and say "we are on Week N" — the videos for that
   week are the practice reference.
3. Start every class with the theka revision habit (built into the plans from Week 6).
4. Week 12 ends with a mini recital and the graduation checklist.

## Files

- `index.html` — the renderer (no build step, open directly in a browser).
- `data.js` — all content: videos, bols, taals, weeks, checklist. **Edit this file** to
  add videos or tweak lessons; the page renders whatever is here.

## Hosting on GitHub Pages

```bash
git init && git add . && git commit -m "Tabla basics curriculum"
gh repo create tabla-pro --public --source=. --push
gh api repos/{owner}/tabla-pro/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

Then share `https://<your-username>.github.io/tabla-pro/`.
