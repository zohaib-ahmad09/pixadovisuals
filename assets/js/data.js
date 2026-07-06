/* ============================================================
   PIXADO — EDIT THIS FILE TO UPDATE YOUR SITE
   ------------------------------------------------------------
   You do NOT need to touch any other file.
   1) Fill in SITE with your real links + email.
   2) Add your thumbnails to the WORK list.
   3) Drop image files into  assets/work/
   ============================================================ */

const SITE = {
  brand:    "PIXADO",
  tagline:  "YouTube Thumbnail Designer",
  subhead:  "Scroll-stopping, high-CTR YouTube thumbnails that turn viewers into subscribers.",

  email:     "pixadovisuals@gmail.com",
  instagram: "https://www.instagram.com/pixadovisuals",
  linkedin:  "https://www.linkedin.com/in/pixado-visuals-082298368",
  igHandle:  "@pixadovisuals",
  whatsapp:  "",                               // optional "https://wa.me/91XXXXXXXXXX"

  stats: [
    { value: "50+",  label: "Thumbnails delivered" },
    { value: "30+",  label: "Creators served" },
    { value: "100%", label: "On-time delivery" },
    { value: "48h",  label: "Avg. turnaround" },
  ],
};

/* ------------------------------------------------------------
   WORK SAMPLES  (Portfolio grid)
   img    : path to your thumbnail image
   link  : (optional) the YouTube video it was made for
------------------------------------------------------------ */
const WORK = [
  // ---------- THUMBNAILS (15) ----------
  { type:"thumbnail", title:"Dark Crime Documentary", tag:"True Crime",
    img:"assets/work/dark-crime.jpg", link:"#" },
  { type:"thumbnail", title:"The Epstein Files", tag:"Documentary",
    img:"assets/work/epstein-files.jpg", link:"#" },
  { type:"thumbnail", title:"USA's Real Agenda", tag:"Politics",
    img:"assets/work/usa-real-agenda.jpg", link:"#" },
  { type:"thumbnail", title:"Is India Safe?", tag:"Commentary",
    img:"assets/work/is-india-safe.jpg", link:"#" },
  { type:"thumbnail", title:"The Kolkata Case", tag:"News",
    img:"assets/work/kolkata-case.jpg", link:"#" },
  { type:"thumbnail", title:"Dropshipping Guide", tag:"Business",
    img:"assets/work/dropshipping.jpg", link:"#" },
  { type:"thumbnail", title:"TikTok Viral Breakdown", tag:"Social",
    img:"assets/work/tiktok-viral.jpg", link:"#" },
  { type:"thumbnail", title:"Editing School \u2014 Vol. 1", tag:"Education",
    img:"assets/work/editing-school-1.jpg", link:"#" },
  { type:"thumbnail", title:"Editing School \u2014 Vol. 2", tag:"Education",
    img:"assets/work/editing-school-2.jpg", link:"#" },
  { type:"thumbnail", title:"See No Evil", tag:"Documentary",
    img:"assets/work/see-hear-speak.jpg", link:"#" },
  { type:"thumbnail", title:"Snow \u2014 Cinematic", tag:"Cinematic",
    img:"assets/work/snow.jpg", link:"#" },
  { type:"thumbnail", title:"Pinboards", tag:"Design",
    img:"assets/work/pinboards.jpg", link:"#" },
  { type:"thumbnail", title:"Earn \u20b920k/Hour with AI", tag:"AI / Finance",
    img:"assets/work/earn-20k.jpg", link:"#" },
  { type:"thumbnail", title:"Concept Design \u2014 A", tag:"Concept",
    img:"assets/work/concept-1.jpg", link:"#" },
  { type:"thumbnail", title:"Concept Design \u2014 B", tag:"Concept",
    img:"assets/work/concept-2.jpg", link:"#" },
];


/* Services shown on the homepage */
const SERVICES = [
  { icon:"thumb", title:"YouTube Thumbnails",
    desc:"Custom, high-CTR thumbnails designed to win the click in a crowded feed." },
  { icon:"brand", title:"Channel Branding",
    desc:"Consistent thumbnail templates and a visual identity across your content." },
  { icon:"bolt", title:"Rush Delivery",
    desc:"Same-day and 48-hour turnaround options when you need it live now." },
  { icon:"reel", title:"A/B Test Variants",
    desc:"Multiple thumbnail concepts so you can test which one drives the highest click-through." },
];
