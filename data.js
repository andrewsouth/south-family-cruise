// Snapshot of the family planning sheet ("Randy & Karen Family Cruise - 2027").
// The sheet is the source of truth. Update this file from it, then commit and push.

window.CRUISE = {
  updated: "October 25, 2026",

  trip: {
    title: "The South Family Cruise",
    subtitle: "Celebrating 50 years of Randy and Karen",
    departs: "2027-02-15T16:00:00-05:00",
    facts: [
      ["Cruise line", "Royal Caribbean"],
      ["Ship", "Wonder of the Seas"],
      ["Sailing", "4 nights, Monday Feb 15 to Friday Feb 19, 2027"],
      ["Port", "Miami"],
      ["Destination", "Nassau and Perfect Day at CocoCay, Bahamas"],
      ["Booked through", "Get Away Today"],
      ["Group size", "About 64 people"]
    ]
  },

  // One entry per day. `blocks` follow the sheet's time slots.
  days: [
    { date: "Sat, Feb 13", icon: "✈️", label: "Travel day", note: "Early arrivals come in to Miami", blocks: [] },
    { date: "Sun, Feb 14", icon: "🌴", label: "Together in Miami", note: "Optional activities", blocks: [
      ["11a to 3p", "Church at 11:30 am, Flagler Ward (English), 9900 West Flagler Street"],
      ["11a to 3p", "Lunch (box lunches brought in)"]
    ]},
    { date: "Mon, Feb 15", icon: "🚢", ship: true, label: "Sail away", note: "Departs Miami at 4:00 pm", blocks: [
      ["7a to 11a", "Group breakfast"],
      ["11a to 3p", "Travel to the dock"],
      ["3p to 7p", "4:00 pm departure"]
    ]},
    { date: "Tue, Feb 16", icon: "🏝️", ship: true, label: "Nassau, Bahamas", note: "In port 8:00 am to 5:00 pm", blocks: [] },
    { date: "Wed, Feb 17", icon: "🌊", ship: true, label: "At sea", note: "Family meeting room booked", blocks: [
      ["11a to 3p", "Family gathering, West Dining Room, noon to 2:00 pm"]
    ]},
    { date: "Thu, Feb 18", icon: "🏖️", ship: true, label: "Perfect Day at CocoCay", note: "In port 7:00 am to 5:00 pm", blocks: [] },
    { date: "Fri, Feb 19", icon: "⚓", ship: true, label: "Disembark", note: "Back in Miami at 6:00 am", blocks: [
      ["7a to 11a", "Ship arrives at 6:00 am"]
    ]},
    { date: "Sat, Feb 20", icon: "🏠", label: "Travel home", note: "", blocks: [] }
  ],

  // Things already figured out (from the task list notes).
  // [icon, heading, text]
  goodToKnow: [
    ["⛪", "Church on Sunday, Feb 14", "The English ward for the hotel's area is the <strong>Flagler Ward</strong>, which meets at <strong>11:30 am</strong> at <strong>9900 West Flagler Street, Miami, FL 33174</strong> (about 6 miles from the hotel). Ward times often change in January, so we'll confirm closer to the trip. <a href=\"https://www.google.com/maps/search/?api=1&query=9900+West+Flagler+Street+Miami+FL+33174\" target=\"_blank\" rel=\"noopener\">Open in Maps</a>."],
    ["📱", "Download the app first", "Everyone should download the Royal Caribbean app and create an account at royalcaribbean.com <em>before</em> the cruise. It has the daily schedule, competitions, reminders, and updates."],
    ["🍽️", "Meals", "Breakfast 6:30 to 10:30 am. Lunch 11:00 am to 3:30 pm. <strong>Dinner is at 5:00 pm, and all 64 of us eat together</strong> in the same area of the dining room."],
    ["🎟️", "Boarding", "About 60 days out, the cruise line will ask for our boarding time. Boarding usually starts around 11:30 am, and everyone must be on board by 2:30 pm. Rooms typically open between 1:00 and 2:00 pm."],
    ["🔑", "Room keys", "You get a room key only (no lanyard or paper map)."],
    ["💵", "Gratuities", "About $17 per person per day. Know which credit card is linked to which room."],
    ["🗺️", "Extras and excursions", "Book ahead on royalcaribbean.com under <em>Manage My Cruise</em>, then <em>Plan My Cruise</em>, or book on the ship."],
    ["🎢", "On the ship", "Zipline, rock climbing wall, water slides, the Ultimate Abyss (a dry slide down 10 decks), mini golf, carousel, and the FlowRider."],
    ["🏖️", "CocoCay", "Five free beaches with loungers and umbrellas, free towels and lockers, and five free food spots (two buffets and three Snack Shacks). Water, lemonade, and juice are free. Bring your own toys and snorkel gear. <strong>South Beach</strong> could be our family gathering spot. It's a big swimming beach with basketball, beach volleyball, cornhole, and a free Snack Shack nearby, and it's close to Cove Beach. The Thrill Waterpark is extra (about $100)."],
    ["🐬", "Nassau", "Options include beaches, waterparks, snorkeling, dolphin encounters, historical tours, food tours, and boat trips, or just explore town or stay on the ship. <a href=\"https://www.royalcaribbean.com/inspire/caribbean-nassau-bahamas-shore-excursions\" target=\"_blank\" rel=\"noopener\">See Nassau excursions</a>."]
  ],

  hotel: {
    name: "Comfort Inn & Suites Miami International Airport",
    address: "665 Mokena Drive, Miami Springs, FL 33166",
    status: "Working on a group rate for a block of 16 to 17 rooms",
    perks: [
      "Free airport shuttle, 6:00 am to 11:00 pm",
      "Free one-way shuttle to the cruise terminal on a large bus, so we can all ride together (sign up the night before)",
      "Free breakfast",
      "Conference room available ($250 for up to 10 hours). Still deciding: the evening of the 14th or the morning of the 15th?"
    ]
  },

  // [family, arrival, departure, rooms Sat night, rooms Sun night, rooms Fri night after the cruise]
  // Blank arrival and departure means we still need their plans. null means not filled in yet.
  travel: [
    ["Randy & Karen", "SLC to Miami, Sat Feb 13, arrives 5:23 pm", "Miami to SLC, Sat Feb 20, departs 6:50 am", 1, 1, 1],
    ["Andrew & Courtenay", "SLC to Miami, Sat Feb 13, arrives 10:28 pm", "Miami to SLC, Sat Feb 20, departs 7:30 am", 2, 2, 2],
    ["Derek & Sarah", "Arriving Sunday night", "Leaving Friday afternoon", 0, 2, 0],
    ["Josh & Franci", "IDA to Miami, Sun Feb 14, arrives 6:27 pm", "Miami to IDA, Fri Feb 19, departs 1:58 pm", 0, 2, 0],
    ["Nate & Emily", "IDA to Miami, Sat Feb 13", "Miami to IDA, Sat Feb 20", 2, 2, 2],
    ["Ty & Amanda", "IDA to Fort Lauderdale, Sun Feb 14, arrives 11:52 pm", "Fri Feb 19, departs 3:20 pm", 0, 2, 0],
    ["Jon & Lindsey", "", "", 2, 2, null],
    ["Scott & Katie", "Driving, leaving Sat Feb 13", "Driving home Fri Feb 19", 2, 2, 0],
    ["Steven", "", "", 0, 0, null],
    ["Ben & Melissa", "SLC to Miami, Sat Feb 13, arrives 5:23 pm", "Fri Feb 19, departs 6:43", 1, 1, 0]
  ],

  // Nassau tab: [family, plan]. Blank means not decided yet.
  nassau: [
    ["Randy & Karen", ""],
    ["Andrew & Courtenay", "Sailing or snorkeling (not through Royal Caribbean)"],
    ["Derek & Sarah", ""],
    ["Josh & Franci", "No excursion"],
    ["Nate & Emily", "Pearl Island or Blue Lagoon"],
    ["Ty & Amanda", "No excursion"],
    ["Jon & Lindsey", ""],
    ["Scott & Katie", "No excursion"],
    ["Steven", ""],
    ["Ben & Melissa", ""]
  ],
  nassauIdeas: ["Stay on the boat", "The Straw Market", "Walk through a church"],

  // [who, idea]
  ideas: [
    ["Mom", "Everyone stays at the same hotel Sunday night, with breakfast together Monday morning"],
    ["Mom", "Scheduled \"dates\" to spend time with each other"],
    ["Mom", "One or two group meetings on the ship"],
    ["Mom", "A talent show (Grandpa's request)"],
    ["Amanda", "Group meetings for games, a devotional, and more"],
    ["Amanda", "Matching swag, like bracelets with a family motto"],
    ["Amanda", "Go places together and spend time together"],
    ["Amanda", "Each family presents itself, one minute per kid"],
    ["Katie", "Send out a packing list"],
    ["Katie", "A lanyard with the schedule (not fully scheduled)"],
    ["Katie", "Scheduled group activities, balanced with free time"],
    ["Eric", "Do things on the boat you can't do off it (and vice versa)"],
    ["Eric", "A daily spiritual thought and the day's plan, planned around meals"],
    ["Eric", "Key locations and times printed on the lanyard"],
    ["Eric", "Help people join the age-group events the cruise runs"],
    ["Courtenay", "A list of \"required\" and optional activities"],
    ["Courtenay", "Reserve tickets for ship events in advance, with assignments"],
    ["Courtenay", "Identify excursion options"],
    ["Steve", "Play Senior Assassin on the cruise"]
  ]
};
