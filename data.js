// Snapshot of the family planning sheet ("Randy & Karen Family Cruise - 2027").
// The sheet is the source of truth. Update this file from it, then commit and push.

window.CRUISE = {
  updated: "September 27, 2026",

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
      ["7a to 11a", "Church at the local ward"],
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
    ["📱", "Download the app first", "Everyone should download the Royal Caribbean app and create an account at royalcaribbean.com <em>before</em> the cruise. It has the daily schedule, competitions, reminders, and updates."],
    ["🍽️", "Meals", "Breakfast 6:30 to 10:30 am. Lunch 11:00 am to 3:30 pm. <strong>Dinner is at 5:00 pm, and all 64 of us eat together</strong> in the same area of the dining room."],
    ["🎟️", "Boarding", "About 60 days out, the cruise line will ask for our boarding time. Boarding usually starts around 11:30 am, and everyone must be on board by 2:30 pm. Rooms typically open between 1:00 and 2:00 pm."],
    ["🔑", "Room keys", "You get a room key only (no lanyard or paper map)."],
    ["💵", "Gratuities", "About $17 per person per day. Know which credit card is linked to which room."],
    ["🗺️", "Extras and excursions", "Book ahead on royalcaribbean.com under <em>Manage My Cruise</em>, then <em>Plan My Cruise</em>, or book on the ship."],
    ["🎢", "On the ship", "Zipline, rock climbing wall, water slides, the Ultimate Abyss (a dry slide down 10 decks), mini golf, carousel, and the FlowRider."],
    ["🏖️", "CocoCay", "Five free beaches with loungers and umbrellas, free towels and lockers, and five free food spots (two buffets and three Snack Shacks). Water, lemonade, and juice are free. Bring your own toys and snorkel gear. <strong>South Beach</strong> could be a good family gathering spot. The Thrill Waterpark is extra (about $100)."],
    ["🐬", "Nassau", "Options include beaches, waterparks, snorkeling, dolphin encounters, historical tours, food tours, and boat trips, or just explore town or stay on the ship. <a href=\"https://www.royalcaribbean.com/inspire/caribbean-nassau-bahamas-shore-excursions\" target=\"_blank\" rel=\"noopener\">See Nassau excursions</a>."]
  ],

  hotel: {
    name: "Comfort Inn and Suites (Miami)",
    status: "Working on a group rate for a block of 16 to 17 rooms",
    perks: [
      "Free airport shuttle, 6:00 am to 11:00 pm",
      "Free one-way shuttle to the cruise terminal on a large bus, so we can all ride together (sign up the night before)",
      "Free breakfast",
      "Conference room available ($250 for up to 10 hours)"
    ]
  },

  // [family, arrival, departure, rooms Saturday night, rooms Sunday night]
  // Blank arrival and departure means we still need their plans.
  travel: [
    ["Randy & Karen", "SLC to Miami, Sat Feb 13, arrives 5:23 pm", "Miami to SLC, Sat Feb 20, departs 6:50 am", 1, 1],
    ["Andrew & Courtenay", "SLC to Miami, Sat Feb 13, arrives 10:28 pm", "Miami to SLC, Sat Feb 20, departs 7:30 am", 2, 2],
    ["Derek & Sarah", "", "", null, null],
    ["Josh & Franci", "IDA to Miami, Sun Feb 14, arrives 6:27 pm", "Miami to IDA, Fri Feb 19, departs 1:58 pm", null, 2],
    ["Nate & Emily", "", "", null, 2],
    ["Ty & Amanda", "IDA to Fort Lauderdale, Sun Feb 14, arrives 11:52 pm", "Fri Feb 19, departs 3:20 pm", 0, 2],
    ["Jon & Lindsey", "", "", 2, 2],
    ["Scott & Katie", "Driving, leaving Sat Feb 13", "Driving home Fri Feb 19", 2, 2],
    ["Steven", "", "", 0, 0],
    ["Ben & Melissa", "", "", 0, 1]
  ],

  // [who, task, due, notes-in?]
  tasks: [
    ["Katie", "Talent show outline", "", false],
    ["Mom", "Book a room on the ship and find out boarding times", "August", true],
    ["Emily and Karen", "Find the hotel and transit to the port", "August", true],
    ["Andrew", "Find a local church with a cultural hall", "", false],
    ["Mom", "Meal times", "August", true],
    ["Mom", "What the ship gives for room keys and required items", "August", true],
    ["Mom", "Can all 64 of us eat at the same time and place?", "August", true],
    ["Mom", "Schedule of ship activities and competitions", "August", true],
    ["Mom", "Excursion options on port days", "August", true],
    ["Courtenay", "What's available at CocoCay", "August", true],
    ["Courtenay", "Excursion options in Nassau", "September", true],
    ["Amanda", "Find lanyards or bracelets", "", false],
    ["Eric", "Draft the punchcard activities and buddy list", "", false],
    ["Unassigned", "Rewards for punchcards and extra prizes", "", false],
    ["Amanda and Courtenay", "Shared photo album for after the cruise", "", false],
    ["Everyone", "Think about slogans and mottos", "August", false],
    ["Courtenay", "Music video", "", false],
    ["Mom", "Gratuity protocols", "August", true],
    ["Mom", "Paying for extras", "August", true],
    ["Mom", "Activities aboard the ship", "August", true]
  ],

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
