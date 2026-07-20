/* ============ TABLA PRO — TEACHING DATA ============
   A 16-week beginner curriculum for teaching Tabla to kids.
   All YouTube video ids below were verified playable via the
   oEmbed endpoint on 2026-07-19 — none are invented.

   HOW TO EDIT:
   - VIDEOS: add/change videos here; every other section refers to them by key.
   - BOLS: the tabla "alphabet" reference (each row is playable in the app).
   - TAALS: notation in English with clap/wave marks + play-along support.
   - LEVELS + WEEKS: the lesson plan. Weeks 13-16 are the optional "Beyond Basics" level.
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

/* ============ TAALS — ENGLISH NOTATION ============
   sym: '+' = sam (clap, beat 1) · 'C' = tali (clap) · 'O' = khali (wave) · '.' = middle beat
   Rupak is special: its sam itself is khali (wave on beat 1).
   Every taal is playable in the app (▶ button) — `bpm` is the starting speed.       */
const TAALS = [
  {
    id: 'teentaal', name: 'Teentaal', beats: 16, vibhag: '4 + 4 + 4 + 4', week: 6, bpm: 80,
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
    id: 'keherwa', name: 'Keherwa', beats: 8, vibhag: '4 + 4', week: 8, bpm: 100,
    clap: 'Clap – Wave', mnemonic: 'The taal of bhajans, film songs and folk — kids hear it everywhere.',
    rows: [
      { bols: ['Dha','Ge','Na','Ti'], marks: ['+','.','.','.'] },
      { bols: ['Na','Ka','Dhin','Na'], marks: ['O','.','.','.'] }
    ],
    kidTip: 'Sing any birthday-party bhajan over it — Keherwa fits! First half has the bass (Dha, Ge), second half is lighter (Na, Ka).',
    videos: ['keherwaLesson','keherwaDas','keherwaFast']
  },
  {
    id: 'dadra', name: 'Dadra', beats: 6, vibhag: '3 + 3', week: 9, bpm: 90,
    clap: 'Clap – Wave', mnemonic: 'The gentle swaying 6-beat — think of a slow lullaby.',
    rows: [
      { bols: ['Dha','Dhin','Na'], marks: ['+','.','.'] },
      { bols: ['Dha','Tun','Na'],  marks: ['O','.','.'] }
    ],
    kidTip: 'Sway left for the first three beats, right for the next three. Dadra should feel like a swing, not a march.',
    videos: ['dadraLesson','dadraTheka','dadraFull','dadraLaggi']
  },
  {
    id: 'jhaptaal', name: 'Jhaptaal', beats: 10, vibhag: '2 + 3 + 2 + 3', week: 10, bpm: 85,
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
    id: 'rupak', name: 'Rupak', beats: 7, vibhag: '3 + 2 + 2', week: 11, bpm: 85,
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
    id: 'ektaal', name: 'Ektaal', beats: 12, vibhag: '2 + 2 + 2 + 2 + 2 + 2', week: 12, bpm: 75,
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

/* ============ LEVELS ============ */
const LEVELS = [
  { n: 1, name: 'Hands & Sounds',            weeks: [1,4],   color: 'saffron', desc: 'Meet the instrument and learn every basic stroke, one hand at a time.' },
  { n: 2, name: 'The Language of Rhythm',    weeks: [5,7],   color: 'teal',    desc: 'Matra, sam, tali, khali — then the first theka and the first kaida.' },
  { n: 3, name: 'Taal Toolkit',              weeks: [8,12],  color: 'plum',    desc: 'One new taal each week: Keherwa, Dadra, Jhaptaal, Rupak, Ektaal.' },
  { n: 4, name: 'Beyond Basics (optional)',  weeks: [13,16], color: 'gold',    desc: 'For kids who finish early or want more: dugun, tihai, rela and real accompaniment.' }
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
    n: 5, title: 'What is a Taal?', emoji: '👏', level: 2,
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
    n: 6, title: 'Teentaal — Your First Theka', emoji: '⭐', level: 2,
    goal: 'Play the full 16-beat Teentaal theka slowly and evenly.',
    learn: ['The theka: Dha Dhin Dhin Dha ×2, Dha Tin Tin Ta, Ta Dhin Dhin Dha', 'Speaking the theka (padhant) before playing'],
    plan: [
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
    n: 7, title: 'First Kaida', emoji: '🧩', level: 2,
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
    n: 8, title: 'Keherwa — the Song Taal', emoji: '🎶', level: 3,
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
    n: 9, title: 'Dadra — the Swaying Six', emoji: '🌙', level: 3,
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
    n: 10, title: 'Jhaptaal — Ten That Limps', emoji: '🚶', level: 3,
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
    n: 11, title: 'Rupak — the Upside-Down Taal', emoji: '🙃', level: 3,
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
    n: 12, title: 'Ektaal & Graduation', emoji: '🎓', level: 3,
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
    n: 13, title: 'Dugun — Double Speed', emoji: '⏩', level: 4,
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
    n: 14, title: 'Tihai — the Magic Ending', emoji: '✨', level: 4,
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
    n: 15, title: 'Rela — Rolling Speed', emoji: '🌊', level: 4,
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
    n: 16, title: 'The Little Accompanist', emoji: '🤝', level: 4,
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
  { text: 'Explain matra, vibhag, sam, tali and khali in their own words', level: 2 },
  { text: 'Clap the structure of any learned taal while counting aloud', level: 2 },
  { text: 'Play one kaida with its khali version', level: 2 },
  { text: 'Play the thekas of Teentaal, Keherwa, Dadra, Jhaptaal, Rupak and Ektaal from memory', level: 3 },
  { text: 'Accompany a simple song in Keherwa or Dadra', level: 3 },
  { text: 'Perform one taal confidently in front of others', level: 3 },
  { text: 'Switch any theka between ekgun and dugun without stopping', level: 4 },
  { text: 'Land a simple tihai on sam', level: 4 },
  { text: 'Play a rela cell evenly at 80+ BPM', level: 4 },
  { text: 'Clap the structure of an unfamiliar taal straight from the reference notation', level: 4 }
];
