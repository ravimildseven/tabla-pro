/* ============ TABLA PRO — TEACHING DATA ============
   A 20-week beginner curriculum for teaching Tabla to kids.
   All YouTube video ids below were verified playable via the
   oEmbed endpoint on 2026-07-19 — none are invented.

   TEACHING PATH: bols (letters) → varnas (words) → thekas (sentences).
   The bol-group level exists so that a theka is never memorised beat by
   beat; it is assembled from small groups the hands already own.

   HOW TO EDIT:
   - VIDEOS: add/change videos here; every other section refers to them by key.
   - BOLS: the tabla "alphabet" reference (each row is playable in the app).
   - VARNAS: the bol-groups, with `buildsInto` pointing at the taal they form.
   - TAALS: notation in English with clap/wave marks + play-along support.
   - LEVELS + WEEKS: the lesson plan. Weeks 17-20 are the optional level.
   - GUIDE: riyaaz routine, troubleshooting, laya, parent notes (Teach tab).
*/

const VIDEOS = {
  /* -- Basics & first sounds -- */
  parts:      { id: 'zlljHJtVaPw', t: 'Basics of Tabla — Parts & Important Bols', by: 'Indian Music ART',   tag: 'lesson' },
  lesson1:    { id: 'asx3wwdO178', t: 'Tabla Lesson 1 for Beginners',              by: 'Tabla Works',        tag: 'lesson' },
  fullCourse: { id: '6BhxtiV2R5Y', t: 'Tabla for Beginners — Full Course',         by: 'Pete Lockett',       tag: 'lesson' },
  allBols:    { id: 'A1Tp5HsuKW8', t: 'All Basic Bols of Tabla',                   by: 'Anooj Lodhi',        tag: 'lesson' },
  bolsKids:   { id: 'HwY9kKSsQSs', t: 'Basic Bols of Tabla — Lesson #1',           by: 'Chhote Ustad',       tag: 'lesson' },
  bolsPractice:{id: '9mBTttlf6DM', t: 'Basic Bols & Practice Lesson',              by: 'Creativity Adda',    tag: 'lesson' },
  bolsAlpha:  { id: 'K-iyvKf20a0', t: 'Bols and Alphabets — How to Play Tabla',    by: 'Geethanjali Academy',tag: 'lesson' },

  /* -- Hand-strength & first compositions -- */
  geGheTete:  { id: '6oEfTI4Tgp4', t: 'Ge Ghe Te Te — Hand-Practice Kaida',        by: 'SharmiMon',          tag: 'lesson' },
  kaidaTite:  { id: 'jjtiSYUY22o', t: 'Kaida #1 — Exercise for Ti Te',             by: 'OctavesOnline',      tag: 'lesson' },
  kayda1:     { id: '5l2N8uVKA4k', t: '50 Lessons for Tabla — Kayda 1',            by: 'tabaliya',           tag: 'lesson' },
  tirakita:   { id: 'cW9B_ZLqyM0', t: 'Delhi Gharana — TiRaKiTa Kaida',            by: 'Bandish Projekt',    tag: 'listen' },

  /* -- Taal lessons -- */
  teentaalLesson:{ id: '7hIC9K9FK_Q', t: 'How to Play Teentaal — Basic Theka',     by: 'Rhythm Studio',      tag: 'lesson' },
  keherwaLesson: { id: 'XnwGfOr-20I', t: 'Keherwa Taal for Beginners — Lesson #1', by: 'Prasad Golipkar',    tag: 'lesson' },
  keherwaDas:    { id: 's3Xf_qvZKpM', t: 'Keherwa Taal (8 Beats) — How to Play',   by: 'Sandeep Das',        tag: 'lesson' },
  keherwaFast:   { id: 'WwEAonijTYw', t: 'Keherwa Theka — Dugun / Fast Style',     by: 'Rajvinder Singh',    tag: 'lesson' },
  dadraLesson:   { id: 'vECF2w8SJsQ', t: 'Dadra Theka & Laggi — Lesson #4',        by: 'Prasad Golipkar',    tag: 'lesson' },
  dadraTheka:    { id: 'XWd9If-vFlA', t: '10 Lessons for Dadra — Theka 1',         by: 'tabaliya',           tag: 'lesson' },
  dadraFull:     { id: '6Ck1OlgIZSA', t: 'Dadra — Theka, Fillers, Laggi & Variations', by: 'Tablagram',      tag: 'lesson' },
  jhaptaalLesson:{ id: 'GGAKfBNT8oA', t: 'Jhaptaal for Beginners — On Hands & Tabla', by: 'Prasad Golipkar', tag: 'lesson' },
  rupakLesson:   { id: '363A-tiyXhE', t: 'Rupak Taal for Beginners — Lesson #1',   by: 'Prasad Golipkar',    tag: 'lesson' },
  rupakDetail:   { id: 'WYhkvMa1UVE', t: 'Rupak Taal in Detail — Ekgun / Dugun',   by: 'Indian Music ART',   tag: 'lesson' },
  ektaalLesson:  { id: '7EkYMPjSBco', t: 'Ektaal for Beginners — Lesson #1',       by: 'Prasad Golipkar',    tag: 'lesson' },

  /* -- Advanced / reference taals -- */
  tilwadaTheka:  { id: 'd9Br8KrnmyY', t: 'Tilwada — Vilambit Theka with Tanpura', by: 'Tabla & Tanpura',     tag: 'listen' },
  punjabiTheka:  { id: 'wrBgwkq_iM8', t: 'Sitarkhani (Punjabi) — Basic Theka',    by: 'Tabla Theka Binay',   tag: 'lesson' },
  deepchandiThumri:{ id: 'CBSQzZATyqM', t: 'Deepchandi — Thumri "Raat Piya Bin"', by: 'Shruti Sadolikar',    tag: 'listen' },
  jhumraTheka:   { id: 'cG9cAKJZHCU', t: 'Jhumra — Vilambit Theka (14 Beats)',    by: 'Tabla Theka Binay',   tag: 'lesson' },
  dhamarPakhawaj:{ id: '9PaUA0t0HMw', t: 'Dhamar on Pakhawaj — Anuja Borude',     by: 'Swarmanttra',         tag: 'listen' },
  chautalPakhawaj:{id: 'BzzxJ125_1M', t: 'Chautal on Pakhawaj — Ankit Parikh',    by: 'Ankit Parikh',        tag: 'listen' },
  adaChautalTheka:{id: 'CkYKLnW8sgE', t: 'Ada Chautal — Basic Theka (14 Beats)',  by: 'Tabla Theka Binay',   tag: 'lesson' },
  sultaalRela:   { id: 'pGZ3g08OWkA', t: 'Sultaal Rela on Pakhawaj',              by: 'Anuja Pakhawaj',      tag: 'listen' },
  tivraPakhawaj: { id: 'Y5z061GvMhI', t: 'Tivra Taal on Pakhawaj',                by: 'Vitthal Rajpura',     tag: 'listen' },

  /* -- Beyond basics -- */
  tihaiLesson:   { id: 'IB6XwX4U2xk', t: 'Tihai — How to Make a Tihai (Teentaal)', by: 'Tabla Tutorial with Debraj', tag: 'lesson' },
  tihaiKayda:    { id: 'oyaXAa8cTcM', t: 'Tihai of a Kayda — Teentaal',            by: 'Suraj Nirwan',       tag: 'lesson' },
  relaPalta:     { id: '0Sy_h0GgSEg', t: 'Keherwa Rela, Palta & Tihai',            by: 'Rhythm Lessons',     tag: 'lesson' },

  /* -- Listening (inspiration) -- */
  zakirTeentaal: { id: 'ZtRPB8xHP8M', t: 'Ustad Zakir Hussain — Teentaal Solo',    by: 'tablameister',       tag: 'listen' },
  zakirJhaptaal: { id: 'EYRC5erRhH8', t: 'Zakir Hussain — Jhaptaal Solo (10 Beats)', by: 'Shastriya Sangeet',tag: 'listen' },
  ishaanRupak:   { id: 'FttXEzNnUO0', t: 'Ishaan Ghosh — Rupak Tabla Solo',        by: 'Ishaan Ghosh',       tag: 'listen' },
  dadraLaggi:    { id: 'l9rP9X9_vFo', t: 'Dadra Taal Laggi — Fast (6 Beats)',      by: 'Pavittar Sangeet Academy', tag: 'listen' },

  /* -- For the teacher -- */
  tunePete:   { id: 'MFFG2qcQABg', t: 'Easy Steps to Tune Tabla',                  by: 'Pete Lockett',       tag: 'teacher' },
  tuneSulekh: { id: 'r0CI2DQLI8U', t: 'How to Tune Tabla',                         by: 'Tabla Works',        tag: 'teacher' }
};

/* ============ THE TABLA ALPHABET (BOLS) ============
   `syn` is the sound the app plays for the row (see the 🥁 Play tab). */
const BOLS = [
  { bol: 'Na',  syn: 'na',  drum: 'Dayan (right)', how: 'Index finger strikes the edge (chaat) sharply, ring finger rests lightly on the syahi. Bright ringing sound.', say: 'naa' },
  { bol: 'Ta',  syn: 'ta',  drum: 'Dayan (right)', how: 'Same family as Na — a crisp open stroke on the edge. In many thekas Na and Ta are used interchangeably.', say: 'taa' },
  { bol: 'Tin', syn: 'tin', drum: 'Dayan (right)', how: 'Index finger gently on the maidan (between edge and black spot), other fingers lifted. Soft bell-like ring.', say: 'teen' },
  { bol: 'Tun', syn: 'tun', drum: 'Dayan (right)', how: 'Index finger strikes the middle of the syahi and lifts off — the most open, resonant dayan sound. Written "Tu" in Dadra and Ektaal thekas.', say: 'toon' },
  { bol: 'Te',  syn: 'te',  drum: 'Dayan (right)', how: 'Flat closed slap with middle+ring fingers (or palm) on the syahi. No ring — a dry "tak" sound.', say: 'tay' },
  { bol: 'Ti',  syn: 'ti',  drum: 'Dayan (right)', how: 'Closed stroke with one finger (usually middle) on the syahi. Pairs with Te as Ti-Te.', say: 'tee' },
  { bol: 'Ge',  syn: 'ge',  drum: 'Bayan (left)',  how: 'Middle + ring fingers strike the maidan with wrist resting on the drum. Deep bass "goom". Also called Ga / Ghe.', say: 'gay' },
  { bol: 'Ka',  syn: 'ka',  drum: 'Bayan (left)',  how: 'Flat closed slap with the full palm/fingers. Dry sound, no bass. Also called Ke.', say: 'kaa' },
  { bol: 'Kat', syn: 'kat', drum: 'Bayan (left)',  how: 'A sharper, fuller Ka — the whole hand falls flat on the bayan. Heard in Ektaal ("Kat Ta").', say: 'kutt' },
  { bol: 'Dha', syn: 'dha', drum: 'Both together', how: 'Na + Ge at the same instant. The most important combined bol — the sound of the sam!', say: 'dhaa' },
  { bol: 'Dhin',syn: 'dhin',drum: 'Both together', how: 'Tin + Ge together. Ringing dayan over a bass hum. Written "Dhi" in Jhaptaal and Ektaal.', say: 'dheen' },
  { bol: 'TiRaKiTa', syn: 'tirakita', drum: 'Both (pattern)', how: 'Fast 4-stroke pattern: Ti-Ra on dayan, Ki (bayan Ka) then Ta. Learn slowly, one syllable per beat first.', say: 'ti-ra-ki-ta' }
];

/* ============ VARNAS — BOL-GROUPS ============
   The missing rung between single bols and full taals. A child drills these
   little "words" until the hands own them; a theka is then just words joined
   into a sentence. `buildsInto` names the exact place each group reappears in
   a real taal — that is the moment the whole system clicks.
   `bols` are played by the app; `count` is the syllables per group.          */
const VARNAS = [
  {
    group: 'Two-syllable groups — the first words', jaati: 'Dvi (2)',
    intro: 'Two strokes, one movement. The goal is not speed but evenness: both syllables equally loud, equally spaced.',
    items: [
      { id:'dhage', name:'Dha Ge', bols:['Dha','Ge'], bpm:70,
        trains:'The combined right+left hand (Dha) followed by pure bass (Ge) — the core bass motion of tabla.',
        how:'Drop both hands together for Dha, then the left alone for Ge. The left wrist never leaves the bayan.',
        tip:'Say "DHA-ge, DHA-ge" like a heartbeat. This pair is the engine of Ektaal.',
        buildsInto:[{taal:'ektaal',what:'beats 3 and 9'},{taal:'keherwa',what:'beats 1–2'}] },
      { id:'tite', name:'Ti Te', bols:['Ti','Te'], bpm:70,
        trains:'Finger independence on the dayan — the closed pair that powers every kaida.',
        how:'Middle finger (Ti), then index+ring (Te). Both closed and dry, no ring at all.',
        tip:'This is the hardest small thing in tabla. Two minutes daily beats twenty minutes weekly.',
        buildsInto:[{taal:'teentaal',what:'the kaida taught in Week 11'}] },
      { id:'dhinna', name:'Dhin Na', bols:['Dhin','Na'], bpm:70,
        trains:'Moving from a two-hand stroke to a single ringing right-hand stroke.',
        how:'Dhin (Tin+Ge together), then Na on the edge. Let both ring — no damping.',
        tip:'The most reused pair in all of tabla. Learn it once, use it forever.',
        buildsInto:[{taal:'jhaptaal',what:'beats 1–2'},{taal:'rupak',what:'beats 4–5 and 6–7'},{taal:'ektaal',what:'beats 11–12'}] },
      { id:'naka', name:'Na Ka', bols:['Na','Ka'], bpm:70,
        trains:'Alternating hands — right rings, left answers dry.',
        how:'Na on the dayan edge, then a flat closed Ka on the bayan.',
        tip:'Open then closed, bright then dull. Kids hear this contrast instantly.',
        buildsInto:[{taal:'keherwa',what:'beats 5–6'}] },
      { id:'katta', name:'Kat Ta', bols:['Kat','Ta'], bpm:70,
        trains:'A full flat bayan slap followed by a crisp dayan stroke.',
        how:'Whole left hand falls flat (Kat), then the right index snaps the edge (Ta).',
        tip:'The "knock-knock" pair — it makes Ektaal sound grand.',
        buildsInto:[{taal:'ektaal',what:'beats 7–8'}] }
    ]
  },
  {
    group: 'Three-syllable groups — the tisra feel', jaati: 'Tisra (3)',
    intro: 'Groups of three feel like a waltz or a swing. Say them in one breath: "TA-ki-ta", never "ta-ki-TA".',
    items: [
      { id:'takita', name:'Ta Ki Ta', bols:['Ta','Ki','Ta'], bpm:70,
        trains:'The classic three-stroke group — right, left, right. The foundation of all 3-beat feel.',
        how:'Ta (dayan edge), Ki (closed bayan slap), Ta again. Alternate hands: R–L–R.',
        tip:'The single most useful exercise for a beginner. Chant it while walking, cycling, anywhere — the hands learn later.',
        buildsInto:[{taal:'dadra',what:'the 3-beat shape of each half'}] },
      { id:'dhikita', name:'Dhi Ki Ta', bols:['Dhin','Ki','Ta'], bpm:70,
        trains:'The voiced twin of Ta Ki Ta — the same shape, now opening with bass.',
        how:'Dhi (Tin+Ge together), Ki (closed bayan), Ta (dayan edge).',
        tip:'Play Ta Ki Ta and Dhi Ki Ta back to back — same movement, one bright and one deep. This pairing teaches bhari/khali before the words are ever used.',
        buildsInto:[{taal:'teentaal',what:'kaida variations'},{taal:'dadra',what:'the filled first half'}] },
      { id:'dhadhinna', name:'Dha Dhin Na', bols:['Dha','Dhin','Na'], bpm:70,
        trains:'A complete musical phrase in three beats — and literally half a taal.',
        how:'Dha (both hands), Dhin (both hands), Na (right alone).',
        tip:'Play this six times in a row and you have just played Dadra\'s first half twice. Tell the child that — watch their face.',
        buildsInto:[{taal:'dadra',what:'beats 1–3 (exactly)'}] },
      { id:'dhatunna', name:'Dha Tun Na', bols:['Dha','Tun','Na'], bpm:70,
        trains:'The answering phrase — the same shape with an open ringing middle stroke.',
        how:'Dha, then Tun (open on the syahi), then Na.',
        tip:'Join it to Dha Dhin Na and the child has played a whole taal without being told it was one.',
        buildsInto:[{taal:'dadra',what:'beats 4–6 (exactly)'}] },
      { id:'tintinna', name:'Tin Tin Na', bols:['Tin','Tin','Na'], bpm:70,
        trains:'A group with no bass at all — the sound of khali.',
        how:'Two soft Tins on the maidan, then Na. The left hand rests in the lap.',
        tip:'This is what "empty" sounds like. Play it after Dha Dhin Na so the ear hears the difference.',
        buildsInto:[{taal:'rupak',what:'beats 1–3 (exactly)'}] }
    ]
  },
  {
    group: 'Four-syllable groups — the chatusra feel', jaati: 'Chatusra (4)',
    intro: 'Groups of four are the backbone of Hindustani rhythm. Four even syllables per beat-group, no syllable rushed.',
    items: [
      { id:'tirakita', name:'Ti Ra Ki Ta', bols:['Ti','Ra','Ki','Ta'], bpm:60,
        trains:'The most important four-stroke group in tabla — R, R, L, R.',
        how:'Ti and Ra with two fingers of the right hand, Ki as a closed left slap, Ta on the dayan edge.',
        tip:'Learn it at a crawl. One syllable per beat for a whole week is not too slow. Speed is a side effect of evenness.',
        buildsInto:[{taal:'ektaal',what:'beats 4 and 10'},{taal:'tilwada',what:'beat 2'},{taal:'jhumra',what:'the filler in every vibhag'}] },
      { id:'dhagenati', name:'Dha Ge Na Ti', bols:['Dha','Ge','Na','Ti'], bpm:65,
        trains:'A full four-beat sentence mixing both hands — and half of Keherwa.',
        how:'Dha (both), Ge (left), Na (right), Ti (right closed).',
        tip:'Loud, deep, bright, dry — four different colours in four beats. A great listening exercise.',
        buildsInto:[{taal:'keherwa',what:'beats 1–4 (exactly)'}] },
      { id:'nakadhinna', name:'Na Ka Dhin Na', bols:['Na','Ka','Dhin','Na'], bpm:65,
        trains:'The answering half — and the second half of Keherwa.',
        how:'Na (right), Ka (left closed), Dhin (both), Na (right).',
        tip:'Join this to Dha Ge Na Ti and the child has played all of Keherwa. Do not tell them until after they succeed!',
        buildsInto:[{taal:'keherwa',what:'beats 5–8 (exactly)'}] },
      { id:'dhadhindhindha', name:'Dha Dhin Dhin Dha', bols:['Dha','Dhin','Dhin','Dha'], bpm:65,
        trains:'The single most famous four-beat group in Indian music.',
        how:'All four are two-hand strokes. Keep the left wrist planted throughout.',
        tip:'Most Indian children already recognise this sound. Playing it for the first time feels like magic.',
        buildsInto:[{taal:'teentaal',what:'beats 1–4, 5–8 and 13–16'}] },
      { id:'dhatintinta', name:'Dha Tin Tin Ta', bols:['Dha','Tin','Tin','Ta'], bpm:65,
        trains:'The khali answer — the same shape with the bass removed.',
        how:'Only the first Dha uses the left hand; then the bayan rests.',
        tip:'Alternate it with Dha Dhin Dhin Dha. That alternation IS Teentaal.',
        buildsInto:[{taal:'teentaal',what:'beats 9–12 (the khali vibhag)'}] },
      { id:'dhindhinna', name:'Dhin Dhin Na', bols:['Dhin','Dhin','Na'], bpm:70,
        trains:'A three-stroke group used in a two-beat frame — first taste of uneven grouping.',
        how:'Two Dhins, then Na, evenly spaced.',
        tip:'Feels lopsided on purpose. It is the reason Jhaptaal limps so beautifully.',
        buildsInto:[{taal:'jhaptaal',what:'beats 3–5 and 8–10 (exactly)'}] }
    ]
  },
  {
    group: 'Long groups — words become sentences', jaati: 'Combined',
    intro: 'Now the reveal. Chain the small groups and complete taals appear — the child has been playing them all along.',
    items: [
      { id:'dadrafull', name:'Dha Dhin Na · Dha Tun Na', bols:['Dha','Dhin','Na','Dha','Tun','Na'], bpm:80,
        trains:'Two three-syllable groups joined = a complete 6-beat taal.',
        how:'Play the filled group, then the empty-ish answer. Clap on the first of each group.',
        tip:'Announce it after they play it: "You just played Dadra." Six beats, learned as two words.',
        buildsInto:[{taal:'dadra',what:'the complete theka'}] },
      { id:'keherwafull', name:'Dha Ge Na Ti · Na Ka Dhin Na', bols:['Dha','Ge','Na','Ti','Na','Ka','Dhin','Na'], bpm:85,
        trains:'Two four-syllable groups joined = a complete 8-beat taal.',
        how:'Clap on beat 1, wave on beat 5 — exactly where the second word begins.',
        tip:'The clap and wave land on the word boundaries. Structure stops being abstract.',
        buildsInto:[{taal:'keherwa',what:'the complete theka'}] },
      { id:'teentaalfull', name:'Four fours — the Teentaal sentence', bols:['Dha','Dhin','Dhin','Dha','Dha','Dhin','Dhin','Dha','Dha','Tin','Tin','Ta','Ta','Dhin','Dhin','Dha'], bpm:80,
        trains:'Four four-syllable groups = the 16-beat king of taals.',
        how:'Group 1 and 2 are identical; group 3 is the khali version; group 4 returns home.',
        tip:'By now the child knows every word in this sentence. Teentaal stops being 16 things to memorise and becomes 4.',
        buildsInto:[{taal:'teentaal',what:'the complete theka'}] },
      { id:'takitachain', name:'Ta Ki Ta ×2 (tisra chain)', bols:['Ta','Ki','Ta','Ta','Ki','Ta'], bpm:90,
        trains:'Endurance and evenness in threes — the classic warm-up.',
        how:'Six strokes in one breath, no accent except on the first.',
        tip:'Use as the daily warm-up for the whole course. Two minutes, every single day.',
        buildsInto:[] }
    ]
  }
];

/* ============ TAALS — ENGLISH NOTATION ============
   sym: '+' = sam (clap, beat 1) · 'C' = tali (clap) · 'O' = khali (wave) · '.' = middle beat
   Rupak is special: its sam itself is khali (wave on beat 1).
   Every taal is playable in the app (▶ button) — `bpm` is the starting speed.       */
const TAALS = [
  {
    id: 'teentaal', name: 'Teentaal', beats: 16, vibhag: '4 + 4 + 4 + 4', week: 10, bpm: 80,
    clap: 'Clap – Clap – Wave – Clap', mnemonic: 'The king of taals — almost every classical song fits it.',
    rows: [
      { bols: ['Dha','Dhin','Dhin','Dha'], marks: ['+','.','.','.'] },
      { bols: ['Dha','Dhin','Dhin','Dha'], marks: ['C','.','.','.'] },
      { bols: ['Dha','Tin','Tin','Ta'],    marks: ['O','.','.','.'] },
      { bols: ['Ta','Dhin','Dhin','Dha'],  marks: ['C','.','.','.'] }
    ],
    kidTip: 'Say it out loud while clapping the pattern: clap–clap–wave–clap. Notice the third group goes quiet (Tin Tin Ta) — that is the khali telling your ears where you are in the cycle.',
    videos: ['teentaalLesson','zakirTeentaal']
  },
  {
    id: 'keherwa', name: 'Keherwa', beats: 8, vibhag: '4 + 4', week: 12, bpm: 100,
    clap: 'Clap – Wave', mnemonic: 'The taal of bhajans, film songs and folk — kids hear it everywhere.',
    rows: [
      { bols: ['Dha','Ge','Na','Ti'], marks: ['+','.','.','.'] },
      { bols: ['Na','Ka','Dhin','Na'], marks: ['O','.','.','.'] }
    ],
    kidTip: 'Sing any birthday-party bhajan over it — Keherwa fits! First half has the bass (Dha, Ge), second half is lighter (Na, Ka).',
    videos: ['keherwaLesson','keherwaDas','keherwaFast']
  },
  {
    id: 'dadra', name: 'Dadra', beats: 6, vibhag: '3 + 3', week: 13, bpm: 90,
    clap: 'Clap – Wave', mnemonic: 'The gentle swaying 6-beat — think of a slow lullaby.',
    rows: [
      { bols: ['Dha','Dhin','Na'], marks: ['+','.','.'] },
      { bols: ['Dha','Tun','Na'],  marks: ['O','.','.'] }
    ],
    kidTip: 'Sway left for the first three beats, right for the next three. Dadra should feel like a swing, not a march.',
    videos: ['dadraLesson','dadraTheka','dadraFull','dadraLaggi']
  },
  {
    id: 'jhaptaal', name: 'Jhaptaal', beats: 10, vibhag: '2 + 3 + 2 + 3', week: 14, bpm: 85,
    clap: 'Clap – Clap – Wave – Clap', mnemonic: 'Ten beats in a limping 2-3-2-3 walk — fun to march to!',
    rows: [
      { bols: ['Dhin','Na'],        marks: ['+','.'] },
      { bols: ['Dhin','Dhin','Na'], marks: ['C','.','.'] },
      { bols: ['Tin','Na'],         marks: ['O','.'] },
      { bols: ['Dhin','Dhin','Na'], marks: ['C','.','.'] }
    ],
    kidTip: 'Walk it: two steps, three steps, two steps, three steps. The quiet "Tin Na" group is the khali — whisper those two beats.',
    videos: ['jhaptaalLesson','zakirJhaptaal']
  },
  {
    id: 'rupak', name: 'Rupak', beats: 7, vibhag: '3 + 2 + 2', week: 15, bpm: 85,
    clap: 'Wave – Clap – Clap', mnemonic: 'The upside-down taal — it starts with a WAVE, not a clap!',
    rows: [
      { bols: ['Tin','Tin','Na'], marks: ['O','.','.'] },
      { bols: ['Dhin','Na'],      marks: ['C','.'] },
      { bols: ['Dhin','Na'],      marks: ['C','.'] }
    ],
    kidTip: 'Rupak is the only common taal whose first beat (sam) is a khali — wave on 1! Kids love being told this is the "opposite-day" taal.',
    videos: ['rupakLesson','rupakDetail','ishaanRupak']
  },
  {
    id: 'ektaal', name: 'Ektaal', beats: 12, vibhag: '2 + 2 + 2 + 2 + 2 + 2', week: 16, bpm: 75,
    clap: 'Clap – Wave – Clap – Wave – Clap – Clap', mnemonic: 'Twelve beats in six pairs — the graduation taal with the famous TiRaKiTa.',
    rows: [
      { bols: ['Dhin','Dhin'],         marks: ['+','.'] },
      { bols: ['DhaGe','TiRaKiTa'],    marks: ['O','.'] },
      { bols: ['Tun','Na'],            marks: ['C','.'] },
      { bols: ['Kat','Ta'],            marks: ['O','.'] },
      { bols: ['DhaGe','TiRaKiTa'],    marks: ['C','.'] },
      { bols: ['Dhin','Na'],           marks: ['C','.'] }
    ],
    kidTip: 'Speak "DhaGe TiRaKiTa" slowly like a tongue-twister game before ever touching the drum. When the mouth can say it, the hands can play it.',
    videos: ['ektaalLesson']
  },

  /* ---- Reference taals (beyond the 16-week course) ----
     `family` groups them on the Taals page; `–` is a rest (silent beat). */
  {
    id: 'tilwada', name: 'Tilwada', beats: 16, vibhag: '4 + 4 + 4 + 4', family: 'Vilambit (slow khyal)', bpm: 45,
    clap: 'Clap – Clap – Wave – Clap', mnemonic: 'Teentaal\'s slow, dignified cousin — the taal of vilambit khyal.',
    rows: [
      { bols: ['Dha','TiRaKiTa','Dhin','Dhin'], marks: ['+','.','.','.'] },
      { bols: ['Dha','Dha','Tin','Tin'],        marks: ['C','.','.','.'] },
      { bols: ['Ta','TiRaKiTa','Dhin','Dhin'],  marks: ['O','.','.','.'] },
      { bols: ['Dha','Dha','Dhin','Dhin'],      marks: ['C','.','.','.'] }
    ],
    kidTip: 'Same 16-beat skeleton as Teentaal, but played very slowly with TiRaKiTa fillers. Compare them side by side — same claps, different soul.',
    videos: ['tilwadaTheka']
  },
  {
    id: 'punjabi', name: 'Punjabi / Sitarkhani', beats: 16, vibhag: '4 + 4 + 4 + 4', family: 'Khyal & semi-classical', bpm: 70,
    clap: 'Clap – Clap – Wave – Clap', mnemonic: 'Teentaal with a swing — the "–" rests give it a lilting, laid-back gait.',
    rows: [
      { bols: ['Dha','–','Dhin','Dha'], marks: ['+','.','.','.'] },
      { bols: ['Dha','–','Dhin','Dha'], marks: ['C','.','.','.'] },
      { bols: ['Dha','–','Tin','Ta'],   marks: ['O','.','.','.'] },
      { bols: ['Ta','–','Dhin','Dha'],  marks: ['C','.','.','.'] }
    ],
    kidTip: 'The dash means silence — let the beat breathe! Feel how the gap after each Dha makes the theka sway like a slow horse-ride.',
    videos: ['punjabiTheka']
  },
  {
    id: 'deepchandi', name: 'Deepchandi', beats: 14, vibhag: '3 + 4 + 3 + 4', family: 'Thumri & light classical', bpm: 60,
    clap: 'Clap – Clap – Wave – Clap', mnemonic: 'The taal of thumri — 14 beats that amble gracefully with built-in pauses.',
    rows: [
      { bols: ['Dha','Dhin','–'],       marks: ['+','.','.'] },
      { bols: ['Dha','Dha','Tin','–'],  marks: ['C','.','.','.'] },
      { bols: ['Ta','Tin','–'],         marks: ['O','.','.'] },
      { bols: ['Dha','Dha','Dhin','–'], marks: ['C','.','.','.'] }
    ],
    kidTip: 'Count 3-4-3-4 on your fingers. The rest at the end of each group is where a thumri singer takes their little breath.',
    videos: ['deepchandiThumri']
  },
  {
    id: 'jhumra', name: 'Jhumra', beats: 14, vibhag: '3 + 4 + 3 + 4', family: 'Vilambit (slow khyal)', bpm: 40,
    clap: 'Clap – Clap – Wave – Clap', mnemonic: 'The ocean-slow 14-beat of deep vilambit khyal — every beat filled with TiRaKiTa waves.',
    rows: [
      { bols: ['Dhin','Dha','TiRaKiTa'],          marks: ['+','.','.'] },
      { bols: ['Dhin','Dhin','DhaGe','TiRaKiTa'], marks: ['C','.','.','.'] },
      { bols: ['Tin','Ta','TiRaKiTa'],            marks: ['O','.','.'] },
      { bols: ['Dhin','Dhin','DhaGe','TiRaKiTa'], marks: ['C','.','.','.'] }
    ],
    kidTip: 'Same 3-4-3-4 shape as Deepchandi but far slower and fuller. Great masters make one Jhumra cycle last half a minute!',
    videos: ['jhumraTheka']
  },
  {
    id: 'dhamar', name: 'Dhamar', beats: 14, vibhag: '5 + 2 + 3 + 4', family: 'Pakhawaj & dhrupad', bpm: 60,
    clap: 'Clap – Clap – Wave – Clap', mnemonic: 'The 5-2-3-4 taal of Holi dhrupad songs, played on the pakhawaj.',
    rows: [
      { bols: ['Ka','Dhin','Ta','Dhin','Ta'], marks: ['+','.','.','.','.'] },
      { bols: ['Dha','–'],                    marks: ['C','.'] },
      { bols: ['Ga','Ti','Ta'],               marks: ['O','.','.'] },
      { bols: ['Ti','Ta','Ta','–'],           marks: ['C','.','.','.'] }
    ],
    kidTip: 'Count it as 5+2+3+4 = 14. The lopsided groups are what give Dhamar its majestic, leaping character.',
    videos: ['dhamarPakhawaj']
  },
  {
    id: 'chautal', name: 'Chautal', beats: 12, vibhag: '2 + 2 + 2 + 2 + 2 + 2', family: 'Pakhawaj & dhrupad', bpm: 70,
    clap: 'Clap – Wave – Clap – Wave – Clap – Clap', mnemonic: 'The grand 12-beat of dhrupad — Ektaal\'s pakhawaj ancestor.',
    rows: [
      { bols: ['Dha','Dha'],   marks: ['+','.'] },
      { bols: ['Din','Ta'],    marks: ['O','.'] },
      { bols: ['KiTe','Dha'],  marks: ['C','.'] },
      { bols: ['Din','Ta'],    marks: ['O','.'] },
      { bols: ['TiTe','KaTa'], marks: ['C','.'] },
      { bols: ['GaDi','GeNe'], marks: ['C','.'] }
    ],
    kidTip: 'Twelve beats like Ektaal, but with powerful open pakhawaj bols. Compare the two and hear how the same cycle wears different clothes.',
    videos: ['chautalPakhawaj']
  },
  {
    id: 'adachautal', name: 'Ada Chautal', beats: 14, vibhag: '2 × 7', family: 'Khyal & semi-classical', bpm: 65,
    clap: 'Clap – Clap – Wave – Clap – Wave – Clap – Wave', mnemonic: 'Fourteen beats in seven pairs — a zig-zag of claps and waves.',
    rows: [
      { bols: ['Dhin','TiRaKa'], marks: ['+','.'] },
      { bols: ['Dhin','Dhin'],   marks: ['C','.'] },
      { bols: ['Ta','TiRaKa'],   marks: ['O','.'] },
      { bols: ['Tin','Tin'],     marks: ['C','.'] },
      { bols: ['Ta','TiRaKa'],   marks: ['O','.'] },
      { bols: ['Dhin','Dhin'],   marks: ['C','.'] },
      { bols: ['Dha','TiRaKa'],  marks: ['O','.'] }
    ],
    kidTip: 'The clap-wave pattern zig-zags: clap, clap, wave, clap, wave, clap, wave. Trace it on the notation with a finger before trying to play.',
    videos: ['adaChautalTheka']
  },
  {
    id: 'sultaal', name: 'Sultaal', beats: 10, vibhag: '2 + 2 + 2 + 2 + 2', family: 'Pakhawaj & dhrupad', bpm: 70,
    clap: 'Clap – Wave – Clap – Clap – Clap', mnemonic: 'Jhaptaal\'s pakhawaj sibling — ten beats in five muscular pairs.',
    rows: [
      { bols: ['Dha','Dha'],   marks: ['+','.'] },
      { bols: ['Din','Ta'],    marks: ['O','.'] },
      { bols: ['KiTe','Dha'],  marks: ['C','.'] },
      { bols: ['TiTe','KaTa'], marks: ['C','.'] },
      { bols: ['GaDi','GeNe'], marks: ['C','.'] }
    ],
    kidTip: 'Ten beats like Jhaptaal but grouped 2-2-2-2-2 instead of 2-3-2-3 — count both aloud and feel the difference.',
    videos: ['sultaalRela']
  },
  {
    id: 'tivra', name: 'Tivra', beats: 7, vibhag: '3 + 2 + 2', family: 'Pakhawaj & dhrupad', bpm: 75,
    clap: 'Clap – Clap – Clap', mnemonic: 'Rupak\'s bold pakhawaj cousin — seven beats, but every group gets a clap (no khali at all!).',
    rows: [
      { bols: ['Dha','Din','Ta'],  marks: ['+','.','.'] },
      { bols: ['TiTe','KaTa'],     marks: ['C','.'] },
      { bols: ['GaDi','GeNe'],     marks: ['C','.'] }
    ],
    kidTip: 'Same 3+2+2 shape as Rupak — but where Rupak whispers its first beat, Tivra thunders it. Opposite personalities, same skeleton!',
    videos: ['tivraPakhawaj']
  }
];

/* ============ LEHRA / NAGMA ============
   A lehra is the short melodic loop (traditionally sarangi or harmonium) that
   repeats exactly one cycle of the taal, so a tabla player always knows where
   sam is. This is how tabla is actually practised — not to a metronome.

   Numbers are semitones above the tonic Sa, one per beat. The scale is
   Bhupali (S R G P D = 0 2 4 7 9), pentatonic so nothing can clash.
   Beat 1 is high Sa (12) so sam is unmistakable. Taals not listed here get a
   generated line of the same character.                                      */
const LEHRAS = {
  teentaal: [12,9,7,9, 12,14,12,9, 7,4,2,4, 7,9,7,9],
  keherwa:  [12,9,7,9, 7,4,7,9],
  dadra:    [12,9,7, 4,7,9],
  jhaptaal: [12,9, 7,9,12, 9,7, 4,7,9],
  rupak:    [12,14,12, 9,7, 4,9],
  ektaal:   [12,9, 7,9, 12,14, 12,9, 7,4, 7,9]
};

/* ============ LEVELS ============ */
const LEVELS = [
  { n: 1, name: 'Hands & Sounds',            weeks: [1,4],   color: 'saffron', desc: 'Meet the instrument and learn every basic stroke, one hand at a time.' },
  { n: 2, name: 'Bol-Groups (Varnas)',       weeks: [5,8],   color: 'plum',    desc: 'The bridge: drill little words like Ta Ki Ta and Dhi Ki Ta until the hands own them.' },
  { n: 3, name: 'The Language of Rhythm',    weeks: [9,11],  color: 'teal',    desc: 'Matra, sam, tali, khali — then the first theka, assembled from words already known.' },
  { n: 4, name: 'Taal Toolkit',              weeks: [12,16], color: 'saffron', desc: 'One new taal each week: Keherwa, Dadra, Jhaptaal, Rupak, Ektaal.' },
  { n: 5, name: 'Beyond Basics (optional)',  weeks: [17,20], color: 'gold',    desc: 'For kids who finish early or want more: dugun, tihai, rela and real accompaniment.' }
];

/* ============ 16-WEEK LESSON PLAN ============ */
const WEEKS = [
  {
    n: 1, title: 'Meet the Tabla', emoji: '🥁', level: 1,
    goal: 'Know the parts of both drums, sit correctly, and fall in love with the sound.',
    learn: ['Dayan (right/treble) & Bayan (left/bass)', 'Parts: syahi (black spot), maidan, chaat (edge), gajra, gatta', 'Sitting posture & hand position'],
    plan: [
      'Show a real tabla (or video) — let the child tap freely for 2 minutes first. Curiosity before discipline!',
      'Name the parts together; quiz with "point to the syahi!" games.',
      'Teach sitting: cross-legged, dayan slightly tilted away, back straight, shoulders loose.',
      'Play the Zakir Hussain solo clip — "this is where we are going".'
    ],
    drills: ['Point-and-name quiz: 6 parts, 3 rounds', 'Posture hold: sit correctly for 1 full minute', 'Explore the 🥁 Play tab — find the three zones of the dayan'],
    homework: 'Sit at the tabla 5 minutes a day and just tap — get comfortable. Tell a family member the names of 3 parts of the tabla.',
    tip: 'For kids, week 1 is about wonder, not technique. If they leave excited, the week succeeded.',
    videos: ['parts','lesson1','zakirTeentaal']
  },
  {
    n: 2, title: 'First Sounds — the Dayan', emoji: '👉', level: 1,
    goal: 'Produce clean Na, Ta, Tin and Tun on the right drum.',
    learn: ['Na / Ta — crisp edge strokes', 'Tin — soft ring on the maidan', 'Tun — open sound on the syahi'],
    plan: [
      'Demonstrate Na slowly: index finger snaps the edge, ring finger resting lightly.',
      'Call-and-response: teacher plays 4 Na, student copies. Then Tin, then Tun.',
      'Game: "sound detective" — teacher plays one bol behind their back, child names it.',
      'End every class playing 8 slow Na together in a steady pulse.'
    ],
    drills: ['Na ×20 at 60 BPM, every stroke ringing', 'Na–Tin–Na–Tin alternation ×10', 'Sound detective: 5 rounds (use the app zones to check answers)'],
    homework: 'Practice 20 Na + 20 Tin + 20 Tun daily, slow and clean. Clean beats messy-fast, always.',
    tip: 'A common kid mistake: hitting with the whole hand. Keep reminding — "one finger, like a little hammer".',
    videos: ['allBols','bolsKids','bolsAlpha']
  },
  {
    n: 3, title: 'The Bass Drum — Bayan', emoji: '👈', level: 1,
    goal: 'Produce Ge (bass) and Ka (closed) on the left drum.',
    learn: ['Ge / Ga — deep bass with wrist resting', 'Ka / Ke — flat palm slap', 'Wrist pressure = pitch bending (just for fun!)'],
    plan: [
      'Teach Ge: wrist stays ON the drum, middle+ring fingers strike. Listen for the "goom".',
      'Teach Ka: whole palm, dry slap. Contrast game: Ge = elephant, Ka = mouse.',
      'Show the fun part: press the wrist and slide while playing Ge — the pitch talks!',
      'Combine hands loosely: right plays Na while left plays Ge, not yet together.'
    ],
    drills: ['Ge ×20 + Ka ×20, wrist anchored', 'Ge–Ka–Ge–Ka ×10 slow', 'Elephant/mouse contrast: 5 pairs as quiet/loud as possible'],
    homework: 'Daily: 20 Ge + 20 Ka. Then alternate Ge-Ka-Ge-Ka slowly 10 times.',
    tip: 'Small hands tire fast on the bayan. Two minutes at a time, several times a day, beats one long session.',
    videos: ['bolsPractice','geGheTete']
  },
  {
    n: 4, title: 'Two Hands Together', emoji: '🙌', level: 1,
    goal: 'Play the combined bols Dha and Dhin — the heart of every theka.',
    learn: ['Dha = Na + Ge together', 'Dhin = Tin + Ge together', 'Ti-Te — the closed pair'],
    plan: [
      'Slow-motion Dha: hands hover, drop together. Celebrate the first clean one loudly!',
      'Drill: Dha _ _ _ Dha _ _ _ (one Dha every 4 counts), then every 2, then every count.',
      'Same for Dhin. Then the pattern Dha Dhin Dha Dhin.',
      'Introduce Ti-Te on the dayan as a "closed" contrast.'
    ],
    drills: ['Dha every 4 counts ×8, then every 2 counts ×8', 'Dha–Dhin–Dha–Dhin ×10', 'Ti-Te ×20 keeping both strokes equal'],
    homework: 'Daily: 20 slow Dha, 20 slow Dhin, then Dha-Dhin-Dha-Dhin ×10. Say each bol aloud while playing.',
    tip: 'If Dha sounds like two separate hits, slow down more. Together-ness matters more than speed for the whole first year.',
    videos: ['allBols','kaidaTite']
  },
  {
    n: 5, title: 'Two-Syllable Words', emoji: '🧱', level: 2,
    goal: 'Turn single bols into the first little words: Dha Ge, Ti Te, Dhin Na, Na Ka.',
    learn: ['A bol-group ("varna") is a word — bols are only letters', 'Evenness matters more than speed', 'Dha Ge · Ti Te · Dhin Na · Na Ka · Kat Ta'],
    plan: [
      'Explain the idea: "You know the letters. Now we learn words. Later, words make sentences — and a sentence is a taal."',
      'Teach Dha Ge first: both hands, then left alone. Loop it 20 times slowly.',
      'Add Ti Te — the hardest pair. Two minutes only, then move on before frustration.',
      'Finish with Dhin Na and Na Ka. Say every group aloud while playing (padhant from day one).'
    ],
    drills: ['Each group ×20 at 60 BPM, both syllables equally loud', 'Ti Te ×30 — the finger-independence builder', 'Chain two different groups back to back ×10'],
    homework: 'Two minutes per group, every day. Say them out loud — in the car, walking, anywhere.',
    tip: 'This is the rung most beginners skip, and it is why their thekas sound like separate strokes instead of music. Words first, always.',
    videos: ['bolsPractice','geGheTete','kaidaTite'],
    varnas: ['dhage','tite','dhinna','naka','katta']
  },
  {
    n: 6, title: 'Three-Syllable Words — Ta Ki Ta', emoji: '🔺', level: 2,
    goal: 'Own the tisra (3-syllable) groups: Ta Ki Ta, Dhi Ki Ta, Dha Dhin Na, Tin Tin Na.',
    learn: ['Ta Ki Ta — the classic R–L–R group', 'Dhi Ki Ta — the same shape, voiced with bass', 'Groups of three feel like a swing'],
    plan: [
      'Chant "TA-ki-ta" as a class before touching the drums — accent only the first syllable.',
      'Play Ta Ki Ta slowly, alternating hands R–L–R. Loop until it rolls.',
      'Introduce Dhi Ki Ta immediately after — identical movement, deeper voice. Alternate the two: this teaches bhari/khali before those words are ever used.',
      'Teach Dha Dhin Na and Dha Tun Na. Do not yet mention that together they are a taal.'
    ],
    drills: ['Ta Ki Ta ×30 in one unbroken flow', 'Ta Ki Ta / Dhi Ki Ta alternating ×10 pairs', 'Dha Dhin Na ×20, then Dha Tun Na ×20'],
    homework: 'Ta Ki Ta for two minutes and Dhi Ki Ta for two minutes, daily. Chant them away from the tabla too.',
    tip: 'Ta Ki Ta is the single highest-value exercise you can give a beginner. It builds hand alternation, evenness and the 3-feel all at once.',
    videos: ['bolsKids','allBols','kaidaTite'],
    varnas: ['takita','dhikita','dhadhinna','dhatunna','tintinna']
  },
  {
    n: 7, title: 'Four-Syllable Words — Ti Ra Ki Ta', emoji: '🟦', level: 2,
    goal: 'Own the chatusra (4-syllable) groups, including the famous Ti Ra Ki Ta.',
    learn: ['Ti Ra Ki Ta — R, R, L, R', 'Dha Ge Na Ti · Na Ka Dhin Na', 'Dha Dhin Dhin Dha · Dha Tin Tin Ta'],
    plan: [
      'Mouth first: chant Ti Ra Ki Ta for a full minute before any playing.',
      'Play it at a crawl — one syllable per beat is not too slow for this week.',
      'Teach Dha Dhin Dhin Dha. Most Indian kids recognise the sound instantly — let them enjoy that.',
      'Add its khali twin Dha Tin Tin Ta and alternate the two.'
    ],
    drills: ['Ti Ra Ki Ta ×20 at 50 BPM, perfectly even', 'Dha Dhin Dhin Dha / Dha Tin Tin Ta alternating ×10', 'Dha Ge Na Ti ×20 hearing all four colours'],
    homework: 'Ti Ra Ki Ta slowly every day — never faster than it is clean. Plus one four-syllable group of choice ×20.',
    tip: 'Kids will want Ti Ra Ki Ta fast immediately. Hold the line: this week is about evenness. Speed arrives on its own in Level 5.',
    videos: ['tirakita','geGheTete','kayda1'],
    varnas: ['tirakita','dhagenati','nakadhinna','dhadhindhindha','dhatintinta','dhindhinna']
  },
  {
    n: 8, title: 'Words into Sentences — the Reveal', emoji: '🔓', level: 2,
    goal: 'Chain the groups and discover the child has been playing real taals all along.',
    learn: ['Two 3-groups joined = a 6-beat taal', 'Two 4-groups joined = an 8-beat taal', 'Four 4-groups joined = the 16-beat king'],
    plan: [
      'Ask for Dha Dhin Na, then straight into Dha Tun Na, looped. Let it settle. Then announce: "That is Dadra. You just played a taal."',
      'Repeat the trick with Dha Ge Na Ti + Na Ka Dhin Na → Keherwa.',
      'Finally chain four four-groups → Teentaal. Sixteen beats, but only four words.',
      'Land the big idea: a theka is never memorised beat by beat. It is spoken as words.'
    ],
    drills: ['Dadra chain ×8 cycles unbroken', 'Keherwa chain ×8 cycles unbroken', 'Teentaal chain ×4 cycles, naming each word aloud'],
    homework: 'Play each chained sentence 10 times daily. Tell a family member which words make which taal.',
    tip: 'This is the payoff week for the whole level, and the moment the system clicks. Save the reveal — do not spoil it in Weeks 5–7.',
    videos: ['teentaalLesson','keherwaLesson','dadraTheka'],
    varnas: ['dadrafull','keherwafull','teentaalfull','takitachain']
  },
  {
    n: 9, title: 'What is a Taal?', emoji: '👏', level: 3,
    goal: 'Understand matra, vibhag, sam, tali and khali — with clapping, no drums needed.',
    learn: ['Matra = beat · Vibhag = group of beats', 'Sam (+) = beat 1, the home beat', 'Tali = clap · Khali = wave (the silent signpost)'],
    plan: [
      'Whole class away from the drums: count 1-16 aloud in groups of 4.',
      'Add hands: clap on 1, clap on 5, WAVE on 9, clap on 13. That IS Teentaal structure.',
      'Game: teacher counts and randomly stops — child must say if the next beat is clap or wave.',
      'Explain sam as "home base" — every journey on the tabla leaves home and comes back to it.'
    ],
    drills: ['Clap Teentaal structure ×5 cycles while counting aloud', 'Count 1–16 accenting the first beat of each vibhag', 'Clap-or-wave quiz: 8 surprise stops'],
    homework: 'Clap the Teentaal pattern (clap-clap-wave-clap, 4 counts each) along with any slow song, 5 minutes daily.',
    tip: 'Khali confuses every beginner. The trick for kids: "the wave is a secret signal — only tabla players know the cycle went quiet on purpose".',
    videos: ['teentaalLesson'],
    taal: 'teentaal'
  },
  {
    n: 10, title: 'Teentaal — Your First Theka', emoji: '⭐', level: 3,
    goal: 'Play the full 16-beat Teentaal theka slowly and evenly.',
    learn: ['The theka: Dha Dhin Dhin Dha ×2, Dha Tin Tin Ta, Ta Dhin Dhin Dha', 'Speaking the theka (padhant) before playing'],
    plan: [
      'Start from the words, not the beats: "Dha Dhin Dhin Dha" is already yours from Week 7. Teentaal is only four such words.',
      'Speak the whole theka rhythmically until memorised — this is padhant, a real tradition.',
      'Play 4 beats at a time. Loop each vibhag until easy, then chain two, then all four.',
      'Point out the khali vibhag: the bayan goes silent (Tin Tin Ta has no Ge!). Ears + hands agree.',
      'Play the full cycle together at ~60 BPM. Ten clean cycles = victory.'
    ],
    drills: ['Padhant ×5 from memory', 'Theka at 60 BPM ×10 cycles (play along with the ▶ button in the Taals tab)', 'Khali vibhag alone ×5 — bayan hand in the lap'],
    homework: 'Speak the theka 5 times, play it 10 times daily at one slow, steady speed. Use the play-along in the Taals tab to stay steady.',
    tip: 'Use the built-in theka player or a metronome. Kids speed up when excited — the teacher is the brake.',
    videos: ['teentaalLesson','zakirTeentaal'],
    taal: 'teentaal',
    horizon: { text: 'Teentaal has famous 16-beat cousins — show them off for a minute of wonder:', taals: ['tilwada','punjabi'] }
  },
  {
    n: 11, title: 'First Kaida', emoji: '🧩', level: 3,
    goal: 'Learn a simple kaida (Dha Dha Ti Te) and the idea of theme-and-variation.',
    learn: ['Kaida = a small theme you can grow variations from', 'Dha Dha Ti Te | Dha Dha Tin Na and its khali answer Ta Ta Ti Te | Dha Dha Dhin Na', 'Playing the same thing loud (bhari) and quiet (khali)'],
    plan: [
      'Speak the kaida line, then play it slowly on a loop.',
      'Show the khali version (bayan drops out) — same tune, different color.',
      'Make ONE variation together (e.g., double the first pair). Compose, don\'t just copy!',
      'Revise Teentaal theka — begin the habit of starting every class with the theka.'
    ],
    drills: ['Kaida ×10 at 60 BPM', 'Khali version ×10', 'Invent one variation and play it 5 times the same way'],
    homework: 'Kaida ×10 slow, khali version ×10, plus daily Teentaal theka ×5.',
    tip: 'Kaidas teach kids that tabla is a language — same sentence, new words. Let them invent silly variations; correctness can wait a week.',
    videos: ['kayda1','kaidaTite','geGheTete']
  },
  {
    n: 12, title: 'Keherwa — the Song Taal', emoji: '🎶', level: 4,
    goal: 'Play 8-beat Keherwa and accompany a simple song.',
    learn: ['Theka: Dha Ge Na Ti | Na Ka Dhin Na', 'Clap on 1, wave on 5', 'Playing along with singing'],
    plan: [
      'Speak, then play the theka. It is short — most kids get it the same day.',
      'Sing a familiar bhajan/film song in class while playing Keherwa underneath.',
      'Show the fast/dugun feel from the Rajvinder Singh video — where Keherwa "grooves".',
      'Keep revising Teentaal + kaida (5 minutes each class).'
    ],
    drills: ['Keherwa ×10 with the play-along', 'Accompany one full song without stopping', 'Dugun peek: 4 cycles at double speed on "ta" syllables only'],
    homework: 'Play Keherwa along with one favourite song every day. Family singalong strongly encouraged!',
    tip: 'Keherwa is the payoff week — the child suddenly accompanies real music. Record a video; parents melt.',
    videos: ['keherwaLesson','keherwaDas','keherwaFast'],
    taal: 'keherwa'
  },
  {
    n: 13, title: 'Dadra — the Swaying Six', emoji: '🌙', level: 4,
    goal: 'Play 6-beat Dadra and feel the difference between 6 and 8.',
    learn: ['Theka: Dha Dhin Na | Dha Tun Na', 'Clap on 1, wave on 4', '6-beat vs 8-beat feel'],
    plan: [
      'Sway game: rock left-right in threes before touching the drum.',
      'Speak and play the theka; contrast with Keherwa back-to-back.',
      'Quiz: teacher plays Keherwa or Dadra, child guesses which. Sharpens the ear!',
      'Peek at the laggi video: "this is Dadra all grown up".'
    ],
    drills: ['Dadra ×10 with the play-along', 'Keherwa↔Dadra switching ×5 without pausing', 'Guess-the-taal quiz: 5 rounds'],
    homework: 'Dadra ×10, Keherwa ×10 daily and name one song at home that uses each.',
    tip: 'Slow ghazals and lullabies are usually Dadra. Ask the child to find one — ownership beats assignment.',
    videos: ['dadraLesson','dadraTheka','dadraFull','dadraLaggi'],
    taal: 'dadra',
    horizon: { text: 'When Dadra grows up it accompanies thumri — play the Deepchandi reference and listen together:', taals: ['deepchandi'] }
  },
  {
    n: 14, title: 'Jhaptaal — Ten That Limps', emoji: '🚶', level: 4,
    goal: 'Play 10-beat Jhaptaal with its uneven 2-3-2-3 walk.',
    learn: ['Theka: Dhin Na | Dhin Dhin Na | Tin Na | Dhin Dhin Na', 'Clap 1, clap 3, wave 6, clap 8', 'First taste of asymmetric rhythm'],
    plan: [
      'March it first: 2 steps + 3 steps, repeat. Bodies understand before hands do.',
      'Clap the pattern with counting, then speak the theka, then play.',
      'The khali group (Tin Na) is a whisper — exaggerate the contrast at first.',
      'Listen to the Zakir Jhaptaal solo opening — count the 10 together while it plays.'
    ],
    drills: ['March 2-3-2-3 ×10', 'Jhaptaal ×10 at 60 BPM', 'Whisper-khali drill: exaggerate the quiet vibhag ×5'],
    homework: 'Jhaptaal ×10 daily plus one older taal of the child\'s choice ×5.',
    tip: 'Asymmetric taals are where real rhythmic maturity starts. Expect a wobbly week — that is normal and worth saying out loud.',
    videos: ['jhaptaalLesson','zakirJhaptaal'],
    taal: 'jhaptaal',
    horizon: { text: 'Ten beats can also march evenly — compare Jhaptaal\'s 2-3-2-3 with Sultaal\'s 2-2-2-2-2:', taals: ['sultaal'] }
  },
  {
    n: 15, title: 'Rupak — the Upside-Down Taal', emoji: '🙃', level: 4,
    goal: 'Play 7-beat Rupak, the taal that begins with a wave.',
    learn: ['Theka: Tin Tin Na | Dhin Na | Dhin Na', 'WAVE on 1 (khali sam!), claps on 4 and 6', '3+2+2 grouping'],
    plan: [
      'Tell the secret first: "Rupak breaks the biggest rule — its home beat is silent". Kids love rebels.',
      'Clap-wave drill: wave-2-3, clap-2, clap-2.',
      'Speak and play; keep the Tin Tin Na light and the Dhin Na warm.',
      'Revision circuit: play every taal learned so far, 2 cycles each.'
    ],
    drills: ['Wave-clap-clap drill ×10', 'Rupak ×10 with the play-along', 'Full circuit: every taal so far, 2 cycles each'],
    homework: 'Rupak ×10 daily plus the revision circuit (all taals, 2 cycles each).',
    tip: 'If a child ever accompanies a singer, remembering "Rupak starts khali" earns them adult-level respect. Plant that pride now.',
    videos: ['rupakLesson','rupakDetail','ishaanRupak'],
    taal: 'rupak',
    horizon: { text: 'Rupak\'s opposite twin: Tivra also counts 3+2+2 but claps everywhere — play both and spot the difference:', taals: ['tivra'] }
  },
  {
    n: 16, title: 'Ektaal & Graduation', emoji: '🎓', level: 4,
    goal: 'Learn 12-beat Ektaal, revise everything, and perform!',
    learn: ['Theka: Dhin Dhin | DhaGe TiRaKiTa | Tun Na | Kat Ta | DhaGe TiRaKiTa | Dhin Na', 'TiRaKiTa as a tongue-twister game', 'Performing for family'],
    plan: [
      'TiRaKiTa on the mouth first, hands second, drum third.',
      'Build Ektaal two beats at a time — six little bricks.',
      'Mini recital: each child plays one taal of their choice + Teentaal with the kaida.',
      'Hand out the "Tabla Basics Graduate" certificate — and show them the road ahead (Level 4!).'
    ],
    drills: ['TiRaKiTa spoken ×10 slow, ×10 fast', 'Ektaal built as six 2-beat bricks, then chained', 'Full recital run-through, start to finish, no stopping'],
    homework: 'Keep the daily habit: theka warm-up + one taal + one kaida. The curriculum ends; the riyaaz never does.',
    tip: 'A performance, however tiny, converts 12 weeks of lessons into an identity: "I am a tabla player". Never skip graduation day.',
    videos: ['ektaalLesson','tirakita'],
    taal: 'ektaal',
    horizon: { text: 'Ektaal\'s ancestors live on the pakhawaj — hear the same 12 beats thunder in Chautal:', taals: ['chautal','adachautal'] }
  },
  {
    n: 17, title: 'Dugun — Double Speed', emoji: '⏩', level: 5,
    goal: 'Play any theka in dugun (double speed) while the claps stay the same.',
    learn: ['Ekgun = 1 bol per beat · Dugun = 2 bols per beat', 'Counting stays the same, hands go twice as fast', 'Layakari — playing with speed relationships'],
    plan: [
      'Clap Teentaal while SPEAKING the theka twice as fast — mouth first, always.',
      'Play Keherwa in dugun over a slow clap: the classic "groove switch".',
      'Watch the Rupak ekgun/dugun video and copy the switches.',
      'Game: teacher calls "ekgun!" or "dugun!" mid-cycle; child switches without stopping.'
    ],
    drills: ['Speak any theka in dugun ×5', 'Keherwa dugun ×8 cycles over a steady clap', 'Switch-on-command game: 10 switches without stopping'],
    homework: 'Daily: one taal in ekgun ×5 then dugun ×5, same clap speed throughout.',
    tip: 'Dugun is the first taste of layakari — the maths-magic of tabla. Kids who "get" dugun suddenly hear it in every film song.',
    videos: ['rupakDetail','keherwaFast','fullCourse']
  },
  {
    n: 18, title: 'Tihai — the Magic Ending', emoji: '✨', level: 5,
    goal: 'Play a simple tihai — a phrase repeated 3 times that lands exactly on sam.',
    learn: ['Tihai = same phrase ×3, landing on sam', 'The classic: Dha TiRaKiTa ×3 into sam', 'Why musicians smile when a tihai lands'],
    plan: [
      'Explain with words first: say "co-co-nut co-co-nut co-co-NUT" landing the last syllable on a clap.',
      'Teach the phrase Dha TiRaKiTa slowly; then chain it three times.',
      'Count backwards from sam to find where the tihai must start — puzzle-solving!',
      'Play theka → tihai → land on sam → back to theka. The full loop of real performance.'
    ],
    drills: ['Speak the tihai ×5 landing on a clap', 'Play Dha TiRaKiTa ×3 into sam, 5 clean landings', 'Theka → tihai → theka loop ×5'],
    homework: 'Five clean tihai landings a day. A landed tihai deserves a family "wah!"',
    tip: 'The tihai is tabla\'s exclamation mark. When a kid lands their first one on sam, you will see the exact moment they fall in love with rhythm maths.',
    videos: ['tihaiLesson','tihaiKayda'],
    taal: 'teentaal'
  },
  {
    n: 19, title: 'Rela — Rolling Speed', emoji: '🌊', level: 5,
    goal: 'Build speed with a simple rela and keep it even.',
    learn: ['Rela = a fast "flowing" composition built from small cells', 'Cell: Dha TiRaKiTa Dhin Na', 'Speed comes from relaxation, not force'],
    plan: [
      'Speak the cell in a loop until it rolls off the tongue.',
      'Play it at 60 BPM ×10 — boringly slow on purpose. Then 70, 80, 90…',
      'Watch the Keherwa rela video; copy the build-up structure.',
      'Rule of the week: the moment it gets messy, drop 20 BPM. Clean is king.'
    ],
    drills: ['Cell ×10 at 60/70/80 BPM (move up only when perfect)', 'One-minute endurance loop without tension', 'Record & listen back: is every stroke equal?'],
    homework: 'Daily ladder: 60→70→80 BPM, 2 minutes each. Stop while it still sounds good.',
    tip: 'Speed is the least important and most requested thing. The ladder ritual channels the craving for "fast" into discipline.',
    videos: ['relaPalta','tirakita','geGheTete']
  },
  {
    n: 20, title: 'The Little Accompanist', emoji: '🤝', level: 5,
    goal: 'Accompany real music confidently — the true job of a tabla player.',
    learn: ['Choosing the right taal for a song', 'Following a singer: volume, tempo, respect', 'The final showcase'],
    plan: [
      'Play "name that taal": 5 songs, child picks Keherwa/Dadra/Teentaal and proves it by playing along.',
      'Practice starting AFTER the singer and ending with a small tihai.',
      'Tour the full Taals reference together: clap the structure of one unfamiliar taal (Deepchandi or Dhamar) straight from the notation.',
      'Full showcase: theka medley → kaida with variation → dugun switch → tihai finish.',
      'Certificate ceremony #2: "Tabla Accompanist". Discuss what comes next: gharanas, solos, real concerts.'
    ],
    drills: ['Name-that-taal: 5 songs correctly matched and played', 'Song + tihai ending ×3', 'Showcase run-through ×2, performance-ready'],
    homework: 'Accompany one family singing session per week from now on. That is the habit that makes a musician.',
    tip: 'End the course pointing forward: a kid who can hold Keherwa steady behind a singer is already useful at every family gathering — instant motivation for years of riyaaz.',
    videos: ['fullCourse','keherwaDas','zakirTeentaal'],
    horizon: { text: 'The road ahead — the vilambit and dhrupad giants waiting in the reference:', taals: ['jhumra','dhamar','deepchandi'] }
  }
];

/* ============ CHECKLIST — "CAN THE CHILD…" ============
   The graduation bar: Levels 1-3 boxes = "knows the basics".
   Level 4 boxes are the bonus tier.                          */
const CHECKLIST = [
  { text: 'Name the parts of both drums and sit with correct posture', level: 1 },
  { text: 'Play clean Na, Ta, Tin, Tun, Te, Ge, Ka', level: 1 },
  { text: 'Play Dha and Dhin with both hands truly together', level: 1 },
  { text: 'Play Ta Ki Ta and Dhi Ki Ta evenly, without looking at the hands', level: 2 },
  { text: 'Play Ti Ra Ki Ta slowly and perfectly evenly', level: 2 },
  { text: 'Recite (padhant) any learned bol-group while playing it', level: 2 },
  { text: 'Name which taal a given bol-group belongs to', level: 2 },
  { text: 'Explain matra, vibhag, sam, tali and khali in their own words', level: 3 },
  { text: 'Clap the structure of any learned taal while counting aloud', level: 3 },
  { text: 'Play one kaida with its khali version', level: 3 },
  { text: 'Play the thekas of Teentaal, Keherwa, Dadra, Jhaptaal, Rupak and Ektaal from memory', level: 4 },
  { text: 'Accompany a simple song in Keherwa or Dadra', level: 4 },
  { text: 'Perform one taal confidently in front of others', level: 4 },
  { text: 'Switch any theka between ekgun and dugun without stopping', level: 5 },
  { text: 'Land a simple tihai on sam', level: 5 },
  { text: 'Play a rela cell evenly at 80+ BPM', level: 5 },
  { text: 'Clap the structure of an unfamiliar taal straight from the reference notation', level: 5 }
];

/* ============ TEACHER'S GUIDE ============
   The things a curriculum of videos and notation does not cover, but that
   decide whether a child actually progresses.                              */
const GUIDE = [
  {
    id: 'riyaaz', icon: '⏱️', title: 'The daily riyaaz routine',
    intro: 'Twenty minutes with this shape beats an hour of unstructured banging. Keep the order — it warms the hands before demanding anything of them.',
    items: [
      { h: '1 · Warm-up (3 min)', p: 'Ta Ki Ta slowly, then Ti Ra Ki Ta. Never start cold with a theka — small hands strain easily.' },
      { h: '2 · Bol-groups (5 min)', p: 'Two or three varnas from the current week, spoken aloud while played. This is where technique is actually built.' },
      { h: '3 · Theka (5 min)', p: 'The current taal at one steady speed with the play-along. Ten clean cycles, not twenty messy ones.' },
      { h: '4 · Kaida / composition (5 min)', p: 'From Week 11 onward. Theme, then one variation, then the khali version.' },
      { h: '5 · Free play (2 min)', p: 'Anything they like. End on enjoyment so they come back tomorrow.' },
      { h: 'Practise to a lehra, not a metronome', p: 'In the Taals tab set the dropdown to "Lehra only" — a melodic loop one cycle long, exactly what a sarangi or harmonium player provides. A metronome tells you where the beat is; a lehra tells you where sam is, which is the thing that actually matters.' },
      { h: 'Log it', p: 'Tap the button in the Practice Log tab afterwards. The streak, not the hour count, is what keeps a child coming back.' }
    ]
  },
  {
    id: 'trouble', icon: '🔧', title: 'Troubleshooting — what has gone wrong',
    intro: 'The problems every teacher meets in the first year, and the fix that actually works.',
    items: [
      { h: 'Dha sounds like two separate hits', p: 'The hands are not landing together. Slow right down and drop both hands from the same height — the fix is tempo, never effort.' },
      { h: 'Na has no ring — it sounds dead', p: 'The ring finger is pressing the syahi, or the index is landing flat. Strike the edge and lift off immediately; the finger must bounce, not stay.' },
      { h: 'Bayan has no boom', p: 'The wrist is lifting off. It must stay planted on the drum. Also check tuning — a slack bayan cannot resonate.' },
      { h: 'Ti Te is uneven and clumsy', p: 'Normal for months. Two minutes daily, no more. Fingers gain independence slowly and cannot be forced.' },
      { h: 'The child speeds up through the cycle', p: 'Almost universal. Use the play-along in the Taals tab rather than correcting by voice — an external pulse teaches what nagging cannot.' },
      { h: 'They lose their place mid-taal', p: 'They are counting beats instead of speaking words. Go back to padhant: recite the theka as bol-groups, not numbers.' },
      { h: 'Wrist or forearm hurts', p: 'Stop immediately. Tabla is played with fingers and a relaxed wrist, never the arm. Check posture: shoulders down, elbows loose, drums at the right height.' },
      { h: 'They can play alone but fall apart with a singer', p: 'Expected. Accompaniment is a separate skill — practise starting after someone else and holding volume down (Week 20).' }
    ]
  },
  {
    id: 'laya', icon: '🎚️', title: 'Laya — the three speeds',
    intro: 'Laya means tempo. Naming the speeds gives a child language for what their hands are doing.',
    items: [
      { h: 'Vilambit (slow)', p: 'Roughly 30–60 BPM. Space between beats; used for serious khyal. Tilwada and Jhumra live here.' },
      { h: 'Madhya (medium)', p: 'Roughly 60–120 BPM. Where all teaching happens and most songs sit.' },
      { h: 'Drut (fast)', p: 'Above 120 BPM. Earned, never rushed — and always the last thing to arrive.' },
      { h: 'Ekgun · Dugun · Chaugun', p: 'One, two, or four bols per beat while the clapping stays identical. This is layakari, taught in Week 17 and the real intellectual heart of tabla.' }
    ]
  },
  {
    id: 'counting', icon: '🖐️', title: 'Counting a taal on the hand',
    intro: 'The traditional way to keep a cycle without a metronome — and how audiences follow a concert.',
    items: [
      { h: 'Tali (clap)', p: 'A clap of both hands marks the filled sections. Sam — beat 1 — is the biggest of them.' },
      { h: 'Khali (wave)', p: 'A sideways wave of the open palm, no sound. It marks the emptied section, where the bayan drops out.' },
      { h: 'Counting the beats between', p: 'Touch thumb to each fingertip for the beats after each clap. Teentaal: clap, 3 fingers, clap, 3 fingers, wave, 3 fingers, clap, 3 fingers.' },
      { h: 'Why it matters', p: 'A child who can keep the cycle on their hand can rejoin the music after a mistake. That single skill separates a player from a learner.' }
    ]
  },
  {
    id: 'parent', icon: '👨‍👩‍👧', title: 'For parents — how to help',
    intro: 'You do not need to know any music to make a child progress. These five things matter more than talent.',
    items: [
      { h: 'Protect the ten minutes', p: 'A short daily practice beats a long weekend one. Same time each day, so it becomes a habit rather than a decision.' },
      { h: 'Ask them to teach you', p: 'Explaining a bol-group forces real understanding, and children love being the expert for a change.' },
      { h: 'Praise evenness, not speed', p: 'Say "that sounded really steady" instead of "that was fast". You will shape what they aim for.' },
      { h: 'Sing while they play', p: 'From Week 12 they can accompany. A family singalong is the strongest motivation that exists.' },
      { h: 'Do not correct the technique', p: 'Leave that to the teacher — mixed instructions confuse. Your job is encouragement and the routine.' }
    ]
  },
  {
    id: 'care', icon: '🧰', title: 'Care of the instrument',
    intro: 'A neglected tabla sounds bad, and a child blames themselves for the sound.',
    items: [
      { h: 'Tuning', p: 'Tap the gatta (wooden blocks) down to raise pitch, up to lower it. Move opposite blocks in turn, small taps only. See the two tuning videos in the Videos tab.' },
      { h: 'Pitch to match', p: 'The dayan is tuned to the singer\'s Sa. For solo practice, C or C# suits most children\'s instruments.' },
      { h: 'Storage', p: 'Cover both drums and keep them out of direct sun and away from radiators. Heat and dryness kill the skin.' },
      { h: 'The syahi', p: 'Never pick at the black spot, and never let it get wet. A cracked syahi means a re-skin.' },
      { h: 'Carrying', p: 'Lift by the wooden shell, never by the ropes or the rim.' }
    ]
  },
  {
    id: 'gharana', icon: '🏛️', title: 'Gharanas — where the styles come from',
    intro: 'Cultural literacy, worth five minutes of a class. Tabla has six traditional schools, each with its own hand and repertoire.',
    items: [
      { h: 'Delhi', p: 'The oldest. Delicate two-finger (band bol) playing, the source of most beginner kaidas.' },
      { h: 'Ajrada', p: 'An offshoot of Delhi, known for complex, mathematical variations.' },
      { h: 'Lucknow', p: 'Open, resonant playing developed for kathak dance accompaniment.' },
      { h: 'Farukhabad', p: 'Rich compositions and powerful gats; a favourite for solo playing.' },
      { h: 'Benares', p: 'Bold, open-handed and dramatic — grew out of the dhrupad and pakhawaj world.' },
      { h: 'Punjab', p: 'Descended from pakhawaj; the tradition Ustad Zakir Hussain\'s family belongs to.' }
    ]
  }
];
