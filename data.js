// Harlyn Unofficial - weekly data. Update this file each Friday from the printed What's On guide.
// Opening "late" = open till late. Times are 24h "HH:MM", UK local. Use null where unknown. "TBC" = Marc to check.
const HARLYN = {
  guideWeekCommencing: "2026-10-16", // printed "Week commencing October 16th"
  lastUpdated: "2026-10-23",
  location: { name: "Harlyn Sands, Trevose Head, Padstow", postcode: "PL28 8SQ", lat: 50.539, lon: -4.998 },
  venuesNote: "All activities take place in JR's or The Crows Nest Club",

  // Regular opening times. Partly from the back page of the guide (photo not available to transcribe again) - CHECK.
  openingTimes: {
    shopReception: { label: "Shop", daily: [["08:00", "18:00"]], note: "Check reception hours separately" },
    jrs:          { label: "JR's bar & food", daily: [["16:00", "late"]], note: "Food served from 17:00" },
    crowsNest:    { label: "Crows Nest Club", daily: [[null, "late"]], note: "Opening time: check at reception. No entry after 22:30. Club card required" },
    fishAndChips: { label: "Fish & chip shop", daily: null, closedSeason: true, note: "Closed out of season" },
    pool:         { label: "Pool", daily: [["10:00", "11:30"], ["16:00", "17:30"]], note: "Sessions; check if booking needed" }
  },

  // Food specials by weekday (mon..sun). Only those known so far.
  food: {
    fri: ["Steak night (JR's)"],
    sun: ["Carvery 12:00-14:00 - book via the app or reception"],
    mon: [], tue: [], wed: [], thu: [], sat: []
  },

  // Recurring daytime activities (midweek, from the "Showtime" page)
  daytime: {
    mon: [{ time: "11:00", title: "Muppet Monday - Sandcastle competition / crab racing", note: "Judging 11am, register at reception" }],
    tue: [{ time: null,   title: "Twisted Tuesday - Scavenger hunt", note: "Collect your hunt from reception" }],
    wed: [{ time: "12:00", title: "Wobbly Wednesday - Pebble art", note: "Judging 12pm, register at reception" }],
    thu: [{ time: "20:00", title: "Thirsty Thursday - Quiz night" }],
    fri: [{ time: null,   title: "Colouring competition", note: "Any day from reception" }],
    sat: [{ time: "10:00", title: "Circus workshop" }],
    sun: [{ time: "11:00", title: "Harstars" }]
  },
  midweekNote: "For midweek evening entertainment please enquire at reception",

  // Dated events. Add new weeks here; app shows today / tomorrow / rest of week / coming up.
  events: [
    // Fri 23 Oct
    { date: "2026-10-23", time: "18:30", title: "Tots Time & Fancy Dress Competition", who: "Ollie, Billy or Suzie" },
    { date: "2026-10-23", time: "19:00", title: "Adult Bingo", note: "Bingo sales open 18:45" },
    { date: "2026-10-23", time: "19:30", title: "Harlyn Krew Party Time" },
    { date: "2026-10-23", time: "20:30", title: "Harlyn Krew Fun Time" },
    { date: "2026-10-23", time: "21:00", title: "Late Night Bingo" },
    // Sat 24 Oct
    { date: "2026-10-24", time: "10:00", title: "Circus Workshop" },
    { date: "2026-10-24", time: "18:30", title: "Tots Time & Balloon Modelling", who: "Ollie, Billy or Suzie" },
    { date: "2026-10-24", time: "19:00", title: "Adult Bingo", note: "Bingo sales open 18:45" },
    { date: "2026-10-24", time: "19:30", title: "Harlyn Krew Party Time" },
    { date: "2026-10-24", time: "20:30", title: "Harlyn Krew Fun Time" },
    { date: "2026-10-24", time: "21:30", title: "Cover Up (live act)", headline: true },
    // Sun 25 Oct
    { date: "2026-10-25", time: "11:00", title: "Harstars" },
    { date: "2026-10-25", time: "12:00", title: "Sunday Carvery (12-2pm)", note: "Book via app or reception" },
    { date: "2026-10-25", time: "18:30", title: "Tots Time & Balloon Modelling", who: "Ollie, Billy or Suzie" },
    { date: "2026-10-25", time: "19:00", title: "Adult Bingo", note: "Bingo sales open 18:45" },
    { date: "2026-10-25", time: "19:30", title: "Krazy Kev's Dinky Disco" },
    { date: "2026-10-25", time: "20:30", title: "Harlyn Krew Fun Time" },
    { date: "2026-10-25", time: "21:30", title: "Ultra 90s V2000", headline: true },
    // Mon 26 - Thu 29 Oct (midweek)
    { date: "2026-10-26", time: "11:00", title: "Sandcastle competition / crab racing judging" },
    { date: "2026-10-27", time: null,    title: "Scavenger hunt (collect from reception)" },
    { date: "2026-10-28", time: "12:00", title: "Pebble art judging" },
    { date: "2026-10-29", time: "20:00", title: "Quiz Night" }
  ],

  comingUp: [
    // Halloween week: fill in from the guide photo. Example: { when: "Sat 31 Oct", title: "...", note: "..." }
    { when: "Halloween week", title: "Line-up coming soon", note: "Check at reception" }
  ],

  // Last week, for reference only (Showtime page): Sat 17 Oct 88 Miles An Hour; Sun 18 Oct Bar Games 18:30, Pool & Darts 19:30, Music & Chill 20:30.

  extras: {
    characterVisits: "Book a Billy, Suzie or Ollie visit: book on app or reception by 2pm for visits 3-5pm (first come, first served)",
    preOwnedForSale: [["Europa Mulberry", 25000], ["Swift Loire", 27950], ["Willerby Grassmere", 29000], ["Swift Ardennes", 39999], ["Atlas Florida", 37500], ["Willerby Winchester", 40000]]
  },

  rules: [
    "Club membership card must be carried for entry to the clubhouse",
    "Under 18s must be accompanied by an adult; shoes at all times",
    "No entry to the clubhouse after 10:30pm",
    "No standing on furniture; no drinks on the dance floor",
    "Strobe and flashing lights in use",
    "Kids clubs are for 3-12 year olds and are not a babysitting service"
  ],

  numbers: [
    { label: "Reception", tel: "01841520720" },
    { label: "Padstow Surgery", tel: "01841532346" },
    { label: "Minor Injuries, Bodmin", tel: "01208251577" },
    { label: "Taxi - O'Neills", tel: "07548195652" },
    { label: "Taxi - Bob", tel: "07707859825" },
    { label: "Dentist", tel: null, note: "On back page - re-check" },
    { label: "Vet", tel: null, note: "On back page - re-check" },
    { label: "A&E - Treliske (Royal Cornwall Hospital)", tel: null },
    { label: "Emergency 999 - then tell reception. Site postcode PL28 8SQ", tel: "999" }
  ],

  // Owner QR is personal: NEVER put it in this file or the repo. The "My owner card" screen stores it on-device only.
  ownerCard: { enabled: true }
};

if (typeof module !== "undefined") module.exports = HARLYN;
