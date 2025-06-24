const quizDataFromFile = [
  {
    "question": "automatisch",
    "correct": "automatically",
    "choices": [
      "automatically",
      "careful",
      "typical",
      "hurried"
    ]
  },
  {
    "question": "Bahnsteig",
    "correct": "platform",
    "choices": [
      "platform",
      "automatically",
      "foggy",
      "diligent / busy / hard-working"
    ]
  },
  {
    "question": "bar",
    "correct": "in cash",
    "choices": [
      "natural / of course / certainly",
      "in cash",
      "meat",
      "sad"
    ]
  },
  {
    "question": "billig",
    "correct": "cheap",
    "choices": [
      "cheap",
      "table",
      "friendly",
      "hurried"
    ]
  },
  {
    "question": "deutlich",
    "correct": "clear",
    "choices": [
      "awful",
      "clear",
      "sad",
      "finally / at last"
    ]
  },
  {
    "question": "eigentlich",
    "correct": "actually",
    "choices": [
      "awful / dreadful",
      "actually",
      "dirty",
      "calm"
    ]
  },
  {
    "question": "eilig",
    "correct": "hurried",
    "choices": [
      "platform",
      "clear",
      "free",
      "hurried"
    ]
  },
  {
    "question": "endlich",
    "correct": "finally / at last",
    "choices": [
      "landscape",
      "natural / of course / certainly",
      "typical",
      "finally / at last"
    ]
  },
  {
    "question": "fantastisch",
    "correct": "fantastic",
    "choices": [
      "fantastic",
      "sad",
      "probably",
      "cheap"
    ]
  },
  {
    "question": "Fisch",
    "correct": "fish",
    "choices": [
      "sunny",
      "fish",
      "necessary",
      "warmly"
    ]
  },
  {
    "question": "Fleisch",
    "correct": "meat",
    "choices": [
      "correct",
      "meat",
      "likeable / friendly",
      "actually"
    ]
  },
  {
    "question": "fleißig",
    "correct": "diligent / busy / hard-working",
    "choices": [
      "diligent / busy / hard-working",
      "funny",
      "awful",
      "voluntary"
    ]
  },
  {
    "question": "furchtbar",
    "correct": "awful",
    "choices": [
      "stressful",
      "free",
      "likeable / friendly",
      "awful"
    ]
  },
  {
    "question": "frei",
    "correct": "free",
    "choices": [
      "fantastic",
      "free",
      "male neighbor",
      "on time"
    ]
  },
  {
    "question": "freiwillig",
    "correct": "voluntary",
    "choices": [
      "funny",
      "hopefully",
      "team",
      "voluntary"
    ]
  },
  {
    "question": "freundlich",
    "correct": "friendly",
    "choices": [
      "friendly",
      "dirty",
      "on time",
      "clear"
    ]
  },
  {
    "question": "gefährlich",
    "correct": "dangerous",
    "choices": [
      "fresh",
      "funny",
      "hopefully",
      "dangerous"
    ]
  },
  {
    "question": "frisch",
    "correct": "fresh",
    "choices": [
      "boring",
      "foggy",
      "fresh",
      "dirty"
    ]
  },
  {
    "question": "glücklich",
    "correct": "happy",
    "choices": [
      "boring",
      "male neighbor",
      "happy",
      "athletic"
    ]
  },
  {
    "question": "günstig",
    "correct": "Cheap",
    "choices": [
      "fresh",
      "difficult",
      "typical",
      "Cheap"
    ]
  },
  {
    "question": "herzlich",
    "correct": "warmly",
    "choices": [
      "team",
      "male",
      "warmly",
      "hurried"
    ]
  },
  {
    "question": "hässlich",
    "correct": "ugly",
    "choices": [
      "natural / of course / certainly",
      "ugly",
      "sad",
      "warmly"
    ]
  },
  {
    "question": "hoffentlich",
    "correct": "hopefully",
    "choices": [
      "for real",
      "stressful",
      "on time",
      "hopefully"
    ]
  },
  {
    "question": "komisch",
    "correct": "funny",
    "choices": [
      "boring",
      "funny",
      "awful / dreadful",
      "harmful"
    ]
  },
  {
    "question": "Landschaft",
    "correct": "landscape",
    "choices": [
      "landscape",
      "harmful",
      "free",
      "awful"
    ]
  },
  {
    "question": "langweilig",
    "correct": "boring",
    "choices": [
      "boring",
      "correct",
      "clear",
      "calm"
    ]
  },
  {
    "question": "lustig",
    "correct": "funny",
    "choices": [
      "funny",
      "hopefully",
      "ugly",
      "harmful"
    ]
  },
  {
    "question": "männlich",
    "correct": "male",
    "choices": [
      "natural / of course / certainly",
      "male",
      "stressful",
      "voluntary"
    ]
  },
  {
    "question": "Mannschaft",
    "correct": "team",
    "choices": [
      "table",
      "foggy",
      "team",
      "voluntary"
    ]
  },
  {
    "question": "Nachbar",
    "correct": "male neighbor",
    "choices": [
      "fantastic",
      "male neighbor",
      "Cheap",
      "written / in written form"
    ]
  },
  {
    "question": "natürlich",
    "correct": "natural / of course / certainly",
    "choices": [
      "natural / of course / certainly",
      "practically",
      "little",
      "dangerous"
    ]
  },
  {
    "question": "neblig",
    "correct": "foggy",
    "choices": [
      "foggy",
      "male",
      "sad",
      "athletic"
    ]
  },
  {
    "question": "möglich",
    "correct": "possible",
    "choices": [
      "possible",
      "windy",
      "fresh",
      "voluntary"
    ]
  },
  {
    "question": "notwendig",
    "correct": "necessary",
    "choices": [
      "for real",
      "friendly",
      "natural / of course / certainly",
      "necessary"
    ]
  },
  {
    "question": "nützlich",
    "correct": "useful",
    "choices": [
      "automatically",
      "little",
      "useful",
      "possible"
    ]
  },
  {
    "question": "pünktlich",
    "correct": "on time",
    "choices": [
      "natural / of course / certainly",
      "on time",
      "dirty",
      "warmly"
    ]
  },
  {
    "question": "plötzlich",
    "correct": "suddenly",
    "choices": [
      "in cash",
      "male neighbor",
      "finally / at last",
      "suddenly"
    ]
  },
  {
    "question": "praktisch",
    "correct": "practically",
    "choices": [
      "practically",
      "meat",
      "dangerous",
      "harmful"
    ]
  },
  {
    "question": "schädlich",
    "correct": "harmful",
    "choices": [
      "harmful",
      "athletic",
      "wonderful",
      "awful"
    ]
  },
  {
    "question": "richtig",
    "correct": "correct",
    "choices": [
      "correct",
      "possible",
      "foggy",
      "voluntary"
    ]
  },
  {
    "question": "romantisch",
    "correct": "romantic",
    "choices": [
      "team",
      "romantic",
      "stressful",
      "probably"
    ]
  },
  {
    "question": "ruhig",
    "correct": "calm",
    "choices": [
      "awful / dreadful",
      "calm",
      "fish",
      "sunny"
    ]
  },
  {
    "question": "schwierig",
    "correct": "difficult",
    "choices": [
      "in cash",
      "difficult",
      "windy",
      "wonderful"
    ]
  },
  {
    "question": "schmutzig",
    "correct": "dirty",
    "choices": [
      "automatically",
      "little",
      "stressful",
      "dirty"
    ]
  },
  {
    "question": "schrecklich",
    "correct": "awful / dreadful",
    "choices": [
      "awful / dreadful",
      "useful",
      "sad",
      "finally / at last"
    ]
  },
  {
    "question": "schriftlich",
    "correct": "written / in written form",
    "choices": [
      "awful / dreadful",
      "voluntary",
      "fresh",
      "written / in written form"
    ]
  },
  {
    "question": "sportlich",
    "correct": "athletic",
    "choices": [
      "table",
      "automatically",
      "athletic",
      "suddenly"
    ]
  },
  {
    "question": "sonnig",
    "correct": "sunny",
    "choices": [
      "table",
      "sunny",
      "funny",
      "happy"
    ]
  },
  {
    "question": "stressig",
    "correct": "stressful",
    "choices": [
      "practically",
      "free",
      "stressful",
      "dirty"
    ]
  },
  {
    "question": "Tisch",
    "correct": "table",
    "choices": [
      "table",
      "ugly",
      "suddenly",
      "actually"
    ]
  },
  {
    "question": "sympathisch",
    "correct": "likeable / friendly",
    "choices": [
      "meat",
      "likeable / friendly",
      "team",
      "voluntary"
    ]
  },
  {
    "question": "traurig",
    "correct": "sad",
    "choices": [
      "awful",
      "romantic",
      "sad",
      "possible"
    ]
  },
  {
    "question": "typisch",
    "correct": "typical",
    "choices": [
      "funny",
      "careful",
      "typical",
      "ugly"
    ]
  },
  {
    "question": "vorsichtig",
    "correct": "careful",
    "choices": [
      "funny",
      "careful",
      "romantic",
      "correct"
    ]
  },
  {
    "question": "wahrscheinlich",
    "correct": "probably",
    "choices": [
      "boring",
      "clear",
      "hopefully",
      "probably"
    ]
  },
  {
    "question": "wichtig",
    "correct": "important",
    "choices": [
      "practically",
      "friendly",
      "typical",
      "important"
    ]
  },
  {
    "question": "weiblich",
    "correct": "female",
    "choices": [
      "dangerous",
      "meat",
      "female",
      "hopefully"
    ]
  },
  {
    "question": "windig",
    "correct": "windy",
    "choices": [
      "careful",
      "difficult",
      "windy",
      "male"
    ]
  },
  {
    "question": "wirklich",
    "correct": "for real",
    "choices": [
      "for real",
      "difficult",
      "necessary",
      "cheap"
    ]
  },
  {
    "question": "witzig",
    "correct": "funny",
    "choices": [
      "fantastic",
      "funny",
      "friendly",
      "voluntary"
    ]
  },
  {
    "question": "wenig",
    "correct": "little",
    "choices": [
      "difficult",
      "little",
      "Cheap",
      "sad"
    ]
  },
  {
    "question": "wunderbar",
    "correct": "wonderful",
    "choices": [
      "for real",
      "difficult",
      "male neighbor",
      "wonderful"
    ]
  }
];