export const planetsData = [
  {
    id: "mercury",
    name: "Mercury",
    tagline: "Closest & Fastest",
    type: "Terrestrial",
    distanceFromSun: "57.9M km (0.39 AU)",
    moons: 0,
    diameter: "4,879 km",
    gravity: "3.70 m/s²",
    temperature: "-180°C to 430°C",
    atmosphere: "Minimal (exosphere of oxygen, sodium, hydrogen)",
    color: "from-gray-600 to-gray-400",
    accentColor: "#9ca3af",
    brief: "The closest planet to the Sun and the smallest in our solar system. It experiences extreme temperature swings.",
    funFacts: [
      "A year on Mercury is just 88 Earth days, but a single solar day takes 176 Earth days.",
      "Despite being closest to the Sun, it is not the hottest planet; Venus holds that record.",
      "Mercury is slowly shrinking as its massive iron core cools down."
    ],
    features: ["Closest planet to Sun", "Fastest orbit in Solar System", "Extreme temperature fluctuations"]
  },
  {
    id: "venus",
    name: "Venus",
    tagline: "Earth's Toxic Twin",
    type: "Terrestrial",
    distanceFromSun: "108.2M km (0.72 AU)",
    moons: 0,
    diameter: "12,104 km",
    gravity: "8.87 m/s²",
    temperature: "462°C (Average)",
    atmosphere: "Thick, CO2 (96%), Nitrogen (3.5%)",
    color: "from-amber-600 to-orange-400",
    accentColor: "#f59e0b",
    brief: "The hottest planet in our solar system, shrouded in thick, toxic clouds that trap heat in a runaway greenhouse effect.",
    funFacts: [
      "Venus rotates backwards on its axis (retrograde rotation) compared to most other planets.",
      "A day on Venus (rotation) is longer than its year (orbit). It takes 243 Earth days to rotate once.",
      "The atmospheric pressure on the surface is 90 times that of Earth—equivalent to being 1 km underwater."
    ],
    features: ["Hottest planet in solar system", "Thick toxic atmosphere", "Similar size and mass to Earth"]
  },
  {
    id: "earth",
    name: "Earth",
    tagline: "Our Blue Oasis",
    type: "Terrestrial",
    distanceFromSun: "149.6M km (1.00 AU)",
    moons: 1,
    diameter: "12,742 km",
    gravity: "9.81 m/s²",
    temperature: "-89°C to 58°C",
    atmosphere: "Nitrogen (78%), Oxygen (21%), Argon (0.9%)",
    color: "from-blue-600 to-emerald-400",
    accentColor: "#3b82f6",
    brief: "Our home planet is the only place in the universe known to harbor life. It is covered in liquid water and rich ecosystems.",
    funFacts: [
      "Earth is the only planet in the solar system not named after a mythological god or goddess.",
      "Our atmosphere shields us from incoming meteoroids, most of which disintegrate before reaching the ground.",
      "The Earth's powerful magnetic field protects the planet from harmful solar radiation."
    ],
    features: ["Supports diverse life forms", "71% of surface covered in liquid water", "One natural satellite (The Moon)"]
  },
  {
    id: "mars",
    name: "Mars",
    tagline: "The Red Frontier",
    type: "Terrestrial",
    distanceFromSun: "227.9M km (1.52 AU)",
    moons: 2,
    diameter: "6,779 km",
    gravity: "3.71 m/s²",
    temperature: "-153°C to 20°C",
    atmosphere: "Thin, Carbon Dioxide (95%), Nitrogen (2.8%)",
    color: "from-red-600 to-orange-500",
    accentColor: "#ef4444",
    brief: "A dusty, cold, desert world with a very thin atmosphere. It is the most explored planet and target for human colonization.",
    funFacts: [
      "Mars is home to Olympus Mons, the tallest volcano in the solar system. It is three times taller than Mount Everest.",
      "The red color of Mars is due to iron oxide, or rust, covering its rocky surface.",
      "Liquid water cannot exist on Mars' surface for long because the atmosphere is too thin."
    ],
    features: ["Red rusty color from iron oxide", "Home of Olympus Mons (tallest volcano)", "Primary future human exploration target"]
  },
  {
    id: "jupiter",
    name: "Jupiter",
    tagline: "King of the Giants",
    type: "Gas Giant",
    distanceFromSun: "778.5M km (5.20 AU)",
    moons: 95,
    diameter: "139,820 km",
    gravity: "24.79 m/s²",
    temperature: "-108°C (Average)",
    atmosphere: "Hydrogen (90%), Helium (10%)",
    color: "from-orange-500 to-amber-700",
    accentColor: "#f97316",
    brief: "The largest planet in our solar system, a massive gas ball with a strong magnetic field and dozens of orbiting moons.",
    funFacts: [
      "The Great Red Spot is a colossal storm wider than Earth that has been active for at least 300 years.",
      "Jupiter rotates faster than any other planet, completing a rotation in just 9.9 Earth hours.",
      "Its moon Europa has a subsurface ocean beneath an icy crust, which could potentially harbor life."
    ],
    features: ["Largest planet in the solar system", "Great Red Spot super-storm", "More than 90 moons (largest moon system)"]
  },
  {
    id: "saturn",
    name: "Saturn",
    tagline: "Jewel of the Solar System",
    type: "Gas Giant",
    distanceFromSun: "1.4B km (9.58 AU)",
    moons: 146,
    diameter: "116,460 km",
    gravity: "10.44 m/s²",
    temperature: "-139°C (Average)",
    atmosphere: "Hydrogen (96%), Helium (3%)",
    color: "from-yellow-600 to-amber-500",
    accentColor: "#eab308",
    brief: "Famous for its spectacular, complex ring system, Saturn is a gas giant with a dense core and gaseous envelope.",
    funFacts: [
      "Saturn has the lowest density of all planets; it could float in water if there were a tub large enough.",
      "The rings are not solid; they are composed of billions of pieces of water ice, rocky debris, and dust.",
      "Saturn's moon Titan is larger than Mercury and is the only moon with a thick, dense atmosphere."
    ],
    features: ["Most beautiful and extensive ring system", "Gas giant structure with low density", "Many fascinating moons like Titan and Enceladus"]
  },
  {
    id: "uranus",
    name: "Uranus",
    tagline: "The Sideways Ice Giant",
    type: "Ice Giant",
    distanceFromSun: "2.9B km (19.2 AU)",
    moons: 28,
    diameter: "50,724 km",
    gravity: "8.69 m/s²",
    temperature: "-197°C (Average)",
    atmosphere: "Hydrogen (82.5%), Helium (15.2%), Methane (2.3%)",
    color: "from-teal-500 to-cyan-400",
    accentColor: "#0d9488",
    brief: "A cold, pale-blue ice giant that rotates on a horizontal axis, causing extreme seasonal variations.",
    funFacts: [
      "Uranus rotates on its side at an extreme 98-degree tilt. It essentially rolls around the Sun.",
      "It was the first planet discovered with a telescope (by William Herschel in 1781).",
      "Uranus has 13 faint, narrow rings that are believed to be relatively young."
    ],
    features: ["Rotates horizontally on its side", "Ice giant composed of water, ammonia, methane", "Distinct pale blue-green appearance"]
  },
  {
    id: "neptune",
    name: "Neptune",
    tagline: "The Windy Abyss",
    type: "Ice Giant",
    distanceFromSun: "4.5B km (30.1 AU)",
    moons: 16,
    diameter: "49,244 km",
    gravity: "11.15 m/s²",
    temperature: "-201°C (Average)",
    atmosphere: "Hydrogen (80%), Helium (19%), Methane (1.5%)",
    color: "from-blue-700 to-indigo-500",
    accentColor: "#1d4ed8",
    brief: "A cold, dark, and wind-whipped ice giant, the farthest planet from the Sun. It is rich in ice and methane gas.",
    funFacts: [
      "Neptune's winds are the fastest in the solar system, reaching speeds up to 2,100 km/h.",
      "It was the first planet found by mathematical calculations rather than direct observation.",
      "Its largest moon, Triton, orbits the planet in a direction opposite to Neptune's rotation."
    ],
    features: ["Strongest winds in the solar system", "Deep cobalt blue color from methane", "Farthest planet from the Sun"]
  }
];

export const timelineData = [
  {
    year: "1957",
    title: "Sputnik 1 Launch",
    description: "The Soviet Union launches Sputnik 1, the first artificial satellite, initiating the Space Age and space race.",
    icon: "Satellite"
  },
  {
    year: "1961",
    title: "First Human in Space",
    description: "Yuri Gagarin orbits the Earth in Vostok 1, becoming the first human in space and cementing Soviet leadership.",
    icon: "User"
  },
  {
    year: "1969",
    title: "Apollo 11 Moon Landing",
    description: "NASA's Apollo 11 lands Neil Armstrong and Buzz Aldrin on the Moon, fulfilling President Kennedy's lunar goal.",
    icon: "Footprints"
  },
  {
    year: "1977",
    title: "Voyager Probes Launched",
    description: "Voyager 1 and 2 are launched to study the outer solar system, eventually entering interstellar space.",
    icon: "Navigation"
  },
  {
    year: "1990",
    title: "Hubble Telescope Deployed",
    description: "The Hubble Space Telescope is launched into orbit, revolutionizing astronomy with deep space images.",
    icon: "Eye"
  },
  {
    year: "2012",
    title: "Curiosity Rover Lands",
    description: "NASA's car-sized Curiosity rover lands in Gale Crater on Mars to search for past habitable conditions.",
    icon: "Cpu"
  },
  {
    year: "2021",
    title: "JWST Launch",
    description: "The James Webb Space Telescope launches, utilizing infrared technology to image the universe's first stars.",
    icon: "Sun"
  },
  {
    year: "2022",
    title: "Artemis I Success",
    description: "NASA successfully launches Artemis I, an uncrewed lunar flight, testing systems to return humans to the Moon.",
    icon: "Rocket"
  }
];

export const astronautsData = [
  {
    name: "Neil Armstrong",
    role: "Apollo 11 Commander",
    achievement: "First Human on the Moon",
    period: "1962 - 1971",
    bio: "Commander of the Apollo 11 mission, Armstrong took the historic 'one small step for man, one giant leap for mankind' on July 20, 1969.",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Yuri Gagarin",
    role: "Soviet Cosmonaut",
    achievement: "First Human in Space",
    period: "1960 - 1968",
    bio: "Gagarin completed a single orbit of Earth in 108 minutes on April 12, 1961, proving that humans can survive in space.",
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Sally Ride",
    role: "Mission Specialist",
    achievement: "First American Woman in Space",
    period: "1978 - 1987",
    bio: "Ride joined NASA in 1978 and became the first American woman in space in 1983, later working on space education.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Mae Jemison",
    role: "Science Specialist",
    achievement: "First African American Woman in Space",
    period: "1987 - 1993",
    bio: "Jemison is a physician and NASA astronaut who flew aboard the Space Shuttle Endeavour in 1992, conducting bone cell research.",
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e1?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Chris Hadfield",
    role: "ISS Expedition 35 Commander",
    achievement: "First Canadian to Walk in Space",
    period: "1992 - 2013",
    bio: "Hadfield gained global popularity for sharing videos of daily life and playing guitar on the International Space Station.",
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Peggy Whitson",
    role: "NASA Chief Astronaut",
    achievement: "Most Days in Space by a US Astronaut",
    period: "1996 - Present",
    bio: "Whitson has spent a total of 675 days in space, making her the most experienced US astronaut, commanding the ISS twice.",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600"
  }
];

export const nasaStatsData = [
  { value: "8", label: "Solar Planets", suffix: "" },
  { value: "30", label: "Active Missions", suffix: "+" },
  { value: "5,600", label: "Confirmed Exoplanets", suffix: "+" },
  { value: "24.4", label: "Voyager 1 Distance", suffix: "B km" },
  { value: "6", label: "Crewed Moon Landings", suffix: "" },
  { value: "290", label: "ISS Spacewalks", suffix: "+" }
];
