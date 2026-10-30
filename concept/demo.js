// DEMO data for the concept. Everything here is invented and shown with a "Demo" label in the app.
const DEMO = {
  poolSessions: ["10:00","11:00","12:00","14:00","15:00","16:00","17:00"], // invented
  poolNote: "Session times invented for the demo",
  activities: [
    { id:"circus", name:"Circus workshop", emoji:"🤹", price:"£5", age:"Ages 5+", slots:["10:00","11:00"] },
    { id:"character", name:"Character visit (Billy, Suzie or Ollie)", emoji:"🧸", price:"£10", age:"To your caravan", slots:["15:00","15:30","16:00","16:30"], note:"Real rule: book by 2pm for 3–5pm visits" },
    { id:"carvery", name:"Sunday carvery table", emoji:"🍖", price:"Pay on the day", age:"Any", slots:["12:00","12:30","13:00","13:30"] },
    { id:"crab", name:"Crab racing kit", emoji:"🦀", price:"£3", age:"Kids", slots:["10:30","11:00"] }
  ],
  notices: [
    { date:"Demo", title:"Water off Tues 10–12 (rows A–C)", body:"Example notice: planned maintenance. Fill a kettle!" },
    { date:"Demo", title:"Winter close-down dates", body:"Example notice: check your caravan is drained before the park closes." },
    { date:"Demo", title:"Site fees reminder", body:"Example notice: invoices go out next month." }
  ],
  local: [
    { e:"🏖️", t:"Harlyn Bay", d:"Wide sandy family beach a short walk east. Rock pools at low tide." },
    { e:"🏄", t:"Constantine & Booby's Bay", d:"Surf beaches round the headland. Watch the tide on the rocks." },
    { e:"🗼", t:"Trevose Head", d:"Lighthouse, clifftop walks and the South West Coast Path right on the doorstep." },
    { e:"⚓", t:"Padstow", d:"Harbour town about 3 miles away: pasties, boat trips, the Camel Trail." },
    { e:"🚲", t:"Camel Trail", d:"Flat traffic-free cycle path from Padstow to Wadebridge. Bike hire in Padstow." }
  ]
};
// Venues + hours: names from the park guide; hours are DEMO (based loosely on the Oct guide).
DEMO.venues = [
  { id:"shop", short:"Shop", e:"🛒", name:"Park shop", hours:[["08:00","18:00"]], where:[62,30] },
  { id:"jrs", short:"JRrrs", e:"☕", name:"JRrrs café & bar", hours:[["09:00","23:00"]], note:"Breakfast 9–2", where:[40,48] },
  { id:"fryer", short:"Jolly Fryer", e:"🍟", name:"Jolly Fryer", hours:[["17:00","21:00"]], note:"Fish & chips", where:[52,62] },
  { id:"club", short:"Crow's Nest", e:"🎤", name:"Crow's Nest Club", hours:[["12:00","23:30"]], note:"No entry after 22:30 · club card", where:[30,66] },
  { id:"pool", short:"Splash pool", e:"🏊", name:"Super Splash pool", hours:[["10:00","18:00"]], note:"Book a session", where:[70,52] },
  { id:"rec", short:"Reception", e:"🛎️", name:"Reception", hours:[["09:00","17:00"]], note:"Tickets sold here", where:[60,18] }
];
// Weekly pattern taken from the real guide week (Fri 23 – Thu 29 Oct), reused as a sample week.
DEMO.menu = { // DEMO menu
  "Breakfast (JRrrs)": [["Full Cornish","£9.50"],["Bacon bap","£4.50"],["Kids pancakes","£4"]],
  "Evenings (JRrrs)": [["Beer-battered fish & chips","£13"],["Burger & fries","£12"],["Steak night (Fri)","£18"]],
  "Jolly Fryer": [["Cod & chips","£10"],["Sausage & chips","£6"],["Chips","£3"]]
};
DEMO.food = { fri:"Steak night at JRrrs", sun:"Sunday carvery 12–2 (book a table)", mon:"Kids eat for £3 (demo)", tue:"Pie night (demo)", wed:"Curry night (demo)", thu:"Burger & a pint (demo)", sat:"Chippy tea deal (demo)" };
