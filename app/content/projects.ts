export interface Project {
  title: string
  slug: string
  year: string
  org: string
  role: string
  featured: boolean
  thumbnail: string
  description: string

  sections: {
    context?: string
    challenge?: string
    approach?: string
    outcome?: string
    learnings?: string
  }

  embeds?: {
    primary?: {
      youtubeIds?: string[]
      vimeoIds?: string[]
      spotifyEmbed?: boolean
    }
    secondary?: {
      youtubeIds?: string[]
      vimeoIds?: string[]
      spotifyEmbed?: boolean
    }
  }

  links?: {
    label: string
    url: string
  }[]

  tags?: string[]
}


export const projects: Project[] = [
  {
    title: "Too Long Didn’t Read",
    slug: "too-long-didnt-read",
    year: "2022–2024",
    org: "The Alan Turing Institute",
    role: "Creator & Producer",
    featured: true,
    thumbnail: "/thumbnails/tldr.jpg",
    description:
      "A public engagement podcast offering calm, accessible conversations about AI and data science, created at The Alan Turing Institute.",
    sections: {
      context: `
Too Long Didn’t Read is a public engagement podcast I developed at The Alan Turing Institute in response to the growing noise and hyperbole around Large Language Models (LLMs) such as ChatGPT, and other AI developments in the press.

Existing communications serving the public were largely event based, reactive or press-led, leaving little space for calm, accessible discussion aimed at a general science interested audience.
      `.trim(),

      challenge: `
The challenge was to create an in-house engaging podcast, with a repeatable, small-footprint format.

The podcast needed to:
• Be credible and accurate without feeling too academic
• Address current, evolving AI stories in accessible language
• Build public trust and grow an audience of listeners, not simply chase clicks
• Sit comfortably alongside existing institutional communications while reaching wider public audiences

As the idea originated outside the formal content plan, it also required internal buy-in, a strategic editorial rationale and a scalable production approach.
      `.trim(),

      approach: `
I developed the podcast concept independently and produced a pilot episode to test tone and format.
The initial structure paired a curious, non-expert host (myself) with an AI ethics researcher, Smera Jayadeva, creating a conversational dynamic that encouraged simple questions and thoughtful answers.

After the pilot was commissioned, I became the project lead for the series. My role included:
• Developing the editorial format and episode structure
• Researching topics and writing scripts
• Interviewing researchers and external guests
• Editing audio and producing accompanying video content
• Expanding the format for live recording at events

In the second series, the podcast moved to a monthly release and introduced guest contributors. Each episode looked into three current news stories covering one story with the expert guest in more detail. Our topics ranged from digital death and online remains, to AI-generated politicians, misinformation and the “dead internet” theory.
      `.trim(),

      outcome: `
Over two series, Too Long Didn’t Read grew an audience of more than 5,000 listeners and viewers, and became one of the Institute’s most recognisable public-facing formats.

The project helped establish new ways of working within the organisation, including:
• Using YouTube Shorts, Podcasts and Community posts for audience engagement
• Integrating podcast content into wider campaigns and live events
• Building relationships with external partners, universities and media organisations, including the BBC

The podcast also expanded the Institute’s public engagement toolkit, demonstrating how long-form conversation can support trust, understanding and more nuanced discussion of emerging technologies.

Leading Too Long Didn’t Read strengthened my skills in editorial judgement, interviewing and science-accurate storytelling. It also reinforced the value of slow, considered content in fast-moving news cycles — and the role digital content can play in helping people feel informed rather than overwhelmed.
      `.trim(),
    },
    embeds: {
      primary: {
        spotifyEmbed: true,
      },
      secondary: {
        youtubeIds: ["xf7NfV5cNLM", "WjSy8frfOe8"],
      },
    },
    tags: ["Podcast", "Public Engagement", "AI", "Digital Content"],
  },

  {
  title: "AI UK",
  slug: "ai-uk",
  year: "2023–2025",
  org: "The Alan Turing Institute",
  role: "Video & Live Production Lead",
  featured: true,
  thumbnail: "/thumbnails/ai-uk.jpg",
  description:
    "Leading video content and live production for the UK's national showcase of data science and artificial intelligence.",

  sections: {
    context: `
AI UK is the Turing's flagship event, bringing together researchers, policymakers and industry leaders.
Hosted at the QEII Centre in London, the conference is one of the most visible and high-profile events the Institute delivers, with a strong emphasis on public trust, responsible communication and accessibility. The video output plays a central role in how the event is experienced — both live and long after the conference has ended.
    `.trim(),

    challenge: `
The challenge was to deliver a coherent, high-quality body of video content across a complex, multi-day live event, while working with senior stakeholders, sensitive subject matter and a live audience.

Video content was required across multiple screens on stage and throughout the venue, alongside photography and event capture running continuously during the conference. High-profile guests, including ministers and policymakers, often required coverage at short notice, meaning flexibility and rapid decision-making were essential.

In parallel, we operated an in-event studio to capture non-session footage, taking advantage of the rare concentration of senior stakeholders to produce institutional content for use long after the event. All sessions were live streamed, with over 100 recordings needing to be edited and published to YouTube shortly after the exhibition concluded.
    `.trim(),

    approach: `
I led all video content for AI UK, working closely with the events team, marketing colleagues and an external event partner to plan and deliver the full video strategy.

My role covered the entire lifecycle of delivery, from early-stage planning through to post-event publication. This included budgeting and technical specification; booking and managing external film crews and photographers; overseeing safety checks, risk assessments and on-site regulations; and providing creative and editorial direction for all event video output.

During the conference, I directed live streams and on-site crews, problem-solving in real time when speakers were unavailable or schedules changed. I also oversaw and mentored junior team members, ensuring consistency and quality across a high-pressure delivery environment.

Alongside core event coverage, I recorded interviews on the conference floor with speakers and guests for future marketing use, as well as producing a special Too Long Didn’t Read AI UK episode. Editorial decisions consistently prioritised inclusivity, accessibility, tone and audience trust — including careful handling of sensitive topics and ensuring members of the defence community were not filmed for security reasons.
    `.trim(),

    outcome: `
Across AI UK 2023, 2024 and 2025, the video output supported thousands of attendees on site and online, extending the reach and lifespan of the exhibition well beyond the live event.

The work ensured that complex research and policy discussions were presented clearly and responsibly, while creating a substantial, reusable library of content for ongoing communications, promotion and ecosystem engagement. Video content throughout the venue brought the event screens to life, giving the conference a more premium feel and enabling clearer messaging through elements such as animated maps and floor plans.

The programme also provided a platform to introduce new brand touchpoints, including the launch of Turing 2.0, strengthening visibility and coherence across the event. More broadly, the work reinforced the Turing's position as a trusted convener and thought leader within the science and AI ecosystem, reflecting the diversity of its audiences and contributors. The approach helped establish repeatable workflows for delivering large-scale hybrid events across the organisation.
    `.trim(),
  },

  embeds: {
    primary: {
      youtubeIds: ["ZH4JsZDrRRc"],
    },
    secondary: {
        youtubeIds: ["4t8Po6cWFm4", "Dr1MghBqBFo", "U-xwkcuTCT0"],
      },
  },

  tags: ["Event Coverage", "Live Production", "Research Communication"],
},

 {
  title: "BBC Digital",
  slug: "bbc-digital-storytelling",
  year: "2018–2021",
  org: "BBC",
  role: "Content Producer & Strategist",
  featured: true,
  thumbnail: "/thumbnails/bbc.jpg",
  description:
    "Developing social-first storytelling for BBC factual programming, translating broadcast content for younger digital audiences.",

  sections: {
    context: `
I joined the BBC as a digital content producer, initially creating supporting content for major BBC One and BBC Two programmes including Troy, Pitch Battle and the Grenfell documentary.

Alongside broadcast work, the BBC was actively exploring how to reach younger audiences on social platforms, particularly 16–35 year olds, while still serving distinct channel identities — from the humour-led tone of BBC Three to the more global audience of iPlayer.

Following this initial work, I was asked to stay on to work directly with the BBC’s Digital Factual Commissioner, the most senior editorial role in the digital factual space, to explore new ways of bringing established BBC programming into social-first environments.
    `.trim(),

    challenge: `
The challenge was to translate daily, long-running BBC programmes, previously untouched by social teams, into compelling, responsible social content for younger audiences.

This meant finding emotionally resonant, human stories within large archives of factual and entertainment programming, while maintaining the BBC’s editorial standards and sensitivity around complex or traumatic subject matters. The work needed to attract attention in fast-moving social feeds without reducing stories to spectacle or losing their context and meaning.

At the same time, the role itself was exploratory: there was no existing model for turning daily programming into social content at scale, and part of the challenge was to assess whether this could become a sustainable, long-term approach for the organisation.
    `.trim(),

    approach: `
Working closely with the Digital Factual Commissioner, I was the first producer tasked with systematically exploring BBC archives and daily programming for social-first storytelling opportunities.

I reviewed content across a wide range of formats, including quiz shows, human-interest documentaries and restoration programmes, identifying moments with strong emotional or narrative pull. This included programmes such as Pointless, Reported Missing, Antiques Roadshow and The Repair Shop.

Editorial decisions focused on empathy, clarity and audience connection. We chose to create content that was longer than the usual social-first formats at the time, allowing greater scope for emotional engagement. Highlights included the restoration of a violin played as an act of resistance at Auschwitz on The Repair Shop, and a story from Reported Missing about a vulnerable man who disappeared after believing he was a burden to his family due to alcoholism, later found sleeping rough.

Alongside this work, I led digital content to accompany Blue Planet II, contributing to the launch of the BBC’s Plastic Watch campaign — encouraging recycling, beach cleans and community action — and producing content presented by David Attenborough.

I was also seconded by BBC News to create “The Big Day in a Small Film”, a Royal Wedding short conceived and edited live from the broadcast feed of the wedding of Prince Harry and Meghan Markle, released moments after the broadcast concluded.
    `.trim(),

    outcome: `
The Royal Wedding film became the BBC’s most viewed clip of the year, reaching over 18 million views and demonstrating the power of fast, editorially sound social storytelling built directly from live broadcast.

More broadly, the work proved that daily BBC programming could be reinterpreted for social audiences in a way that respected both the content and the viewer.

Following this work, the BBC recommended me directly to Netflix, where I went on to support the development of its UK digital content strategy the following year.
    `.trim(),
  },
embeds: {
    primary: {
      youtubeIds: ["IhF9FKxx6AM", "g83gdwEzmlU"],
    },
    secondary: {
        youtubeIds: ["v74HcB6_o6c", "IW3jEIYBFzg", "4UkZt5ek4Js", "T8c1eYwp-yc"],
      },

  tags: ["Public Service Media", "Digital Storytelling", "Factual", "Social Video"],
},
 },

  // ---- Non-featured work (thumb wall) ----

  {
    title: "Wildlife Trust",
    slug: "wildlife-trust",
    year: "2021",
    org: "Wildlife Trust",
    role: "Director & Producer",
    featured: false,
    thumbnail: "/thumbnails/wildlife-trust.jpg",
    description:
      "Campaign films designed to drive action on environmental issues, balancing emotional impact with clear calls to action.",
sections: {
  context: `
During the COVID lockdowns, Herts and Middlesex Wildlife Trust received funding to support public engagement at a time when access to nature was severely restricted.

I pitched and led a campaign designed to align with government guidance encouraging outdoor activity, while also offering a calm reminder of what would be waiting for people when they could return to local nature reserves.
  `.trim(),

  challenge: `
The challenge was to deliver a coherent series of films across multiple reserves during a period of uncertainty, limited access and tight budgets.

The work needed to reflect seasonal ecological differences, operate within COVID restrictions, and remain useful both during lockdown and as long-term engagement content for the Trust.
  `.trim(),

  approach: `
I took ownership of the full £15k budget and worked closely with reserve managers to develop a year-long filming strategy, matching each location to its optimal season.

This approach maximised the impact of the funding while respecting wildlife cycles and operational constraints. Editorial decisions prioritised calm, accessibility and emotional connection, ensuring the work felt supportive rather than promotional.
  `.trim(),

  outcome: `
The films were used as flagship content to launch the Trust’s Wilder Futures programme and became a repeatable format for future campaigns and fundraising.

They supported public engagement during lockdown and beyond, with one primary school using the films daily as a calming start to the school day, reflecting the project’s wider social value.
  `.trim(),
},

   embeds: {
    primary: {
      youtubeIds: [],
    },
    secondary: {
        youtubeIds: ["dnRiErwWqqc", "-30Muk3AZW4", "-Ad1qbcd7v0", "DX9dVavTIWU", "qt1_cO8lFDs"],
      },
    tags: ["Campaign", "Environmental", "Social Impact"],
  },
  },
  {
    title: "Disney",
    slug: "disney-content",
    year: "2015-2019",
    org: "Disney",
    role: "Camera & Editor",
    featured: false,
    thumbnail: "/thumbnails/disney.jpg",
    description:
      "Editing work supporting family-friendly content with broad appeal.",
    sections: {
  context: `
I worked with Disney and Grand Visual on a series of large-scale live stunts designed to translate real-world brand experiences into highly shareable social films.
  `.trim(),

  approach: `
My initial role was as a camera operator and on-set edit advisor on Disney Side: Shadows, a live augmented-reality activation in New York filmed across more than 15 cameras. As the project developed, I took on responsibility for directing the edit, shaping footage captured in real time into an emotionally balanced social film.

Following its success, I was invited back to deliver further work for Disney, including cinema adverts, the launch of Disney+ in London and Singapore, and a live international stunt for Marvel, creating a real-time video portal between London and Los Angeles. I filmed in London before travelling to LA to edit and deliver the final film.
  `.trim(),

  outcome: `
The Disney Side: Shadows film became one of Disney’s most successful social campaigns, reaching over 300 million views worldwide and ranking as the second most shared advert of 2015.

These projects required directing narrative and emotion from complex, multi-camera live setups, often with no opportunity for retakes. Editorial decisions had to balance scale and spectacle with genuine human reaction, as pushing too far into sentimentality would undermine the authenticity of the experience.

The repeated commissions across markets reflected a high level of trust in my ability to deliver under pressure, adapt quickly to live conditions, and turn ambitious experiential work into social films that performed at global scale.
  `.trim(),
},

embeds: {
   primary: {
      youtubeIds: [],
    },
    secondary: {
      youtubeIds: ["Hd_2Y29_FLU", "0HtJYMh-3wM", "xne8KcDbLs4"],
},
tags: ["Experiential", "Live Stunts", "Social Film"],
  },
  },
  {
    title: "Music videos",
    slug: "music-videos",
    year: "2020",
    org: "Various",
    role: "Director / Editor",
    featured: false,
    thumbnail: "/thumbnails/music.jpg",
    description:
      "A selection of music video work across different artists and styles.",
    sections: {
      challenge:
        "Create distinctive visuals that serve the track and artist identity while staying achievable within constraints.",
      approach:
        "Built each piece around a clear visual concept and a rhythm-led edit approach, prioritising pace and mood.",
      outcome:
        "Delivered a range of music videos with strong identity and repeat client relationships.",
    },
    embeds: {},
    tags: ["Music Video", "Direction", "Editing"],
  },

  {
    title: "Netflix",
    slug: "netflix",
    year: "2019",
    org: "Netflix",
    role: "Content Producer",
    featured: false,
    thumbnail: "/thumbnails/netflix.jpg",
    description:
      "Editorial and production work supporting streaming content delivery.",
    sections: {
      challenge:
        "Support high volume delivery while keeping storytelling, pacing and quality consistent.",
      approach:
        "Worked to clear briefs quickly, maintain clean edit decision-making, and hit delivery requirements without losing story craft.",
      outcome:
        "Contributed to projects reaching global audiences on the platform.",
    },
    embeds: {},
    tags: ["Streaming", "Editorial", "Production"],
  },

  {
  title: "Data Study Group",
  slug: "dsg",
  year: "2024",
  org: "The Alan Turing Institute",
  role: "Director",
  featured: false,
  thumbnail: "/thumbnails/dsg.jpg",
  description:
    "Content supporting the Institute’s collaborative research programme with external partners.",

  sections: {
    context: `
The Data Study Group (DSG) is a core programme at the Alan Turing Institute, bringing together organisations and multidisciplinary researchers to tackle real-world data science challenges.

Despite its importance, the process and value of the DSG were not widely understood outside those directly involved.
    `.trim(),

    challenge: `
The challenge was to explain a complex, fast-paced research programme in a way that was accessible, accurate and useful to different audiences, while creating content with a long shelf life beyond a single event.
    `.trim(),

    approach: `
I proposed a fly-on-the-wall documentary approach and led the creation of a short, three-part film following researchers before and during the Data Study Group.

Alongside the core films, I oversaw the development of targeted cut-downs for researchers, academics and industry partners.
    `.trim(),

    outcome: `
The films helped demystify the Data Study Group, supporting researcher recruitment, internal understanding and engagement from potential challenge owners.

The approach established a lightweight model for documenting internal programmes in a way that supports public engagement and institutional goals.
    `.trim(),
  },

  embeds: {
    primary: {
      youtubeIds: [],
    },
    secondary: {
      youtubeIds: ["o1HZy9WeIss", "W7I3EC9gX9Y", "XkVziGKlKwo"],
    },
  },

  tags: ["Campaign", "Research Programmes", "Public Engagement"],
},

  
  {
    title: "Commercials",
    slug: "commercials",
    year: "2008–2019",
    org: "Various",
    role: "Editor",
    featured: false,
    thumbnail: "/thumbnails/ads.jpg",
    description:
      "A selection of commercial edits across agencies and brands.",
    sections: {
      challenge:
        "Deliver sharp, message-forward storytelling under tight timelines and feedback cycles.",
      approach:
        "Worked fast, kept decisions clear, and focused on pace, structure and brand tone.",
      outcome:
        "Delivered broadcast and social cuts across multiple campaigns.",
    },
    embeds: {},
    tags: ["Commercial", "Editing", "Branded Content"],
  },

  {
  title: "Branded Content",
  slug: "branded",
  year: "2008–2019",
  org: "Various",
  role: "Director & Editor",
  featured: false,
  thumbnail: "/thumbnails/branded.jpg",
  description:
    "A selection of commercial edits across agencies and brands.",
  sections: {
    challenge:
      "Deliver sharp, message-forward storytelling under tight timelines and feedback cycles.",
    approach:
      "Worked fast, kept decisions clear, and focused on pace, structure and brand tone.",
    outcome:
      "Delivered broadcast and social cuts across multiple campaigns.",
  },
  embeds: {
    secondary: {
      youtubeIds: [
        "YOUTUBE_VIDEO_ID_HERE",
      ],
      vimeoIds: [
        "VIMEO_VIDEO_ID_HERE",
      ],
    },
  },
  tags: ["Commercial", "Editing", "Branded Content"],
},

{
  title: "Tell Moi",
  slug: "tell-moi",
  year: "2026",
  org: "Personal project",
  role: "Creator",
  featured: false,
  thumbnail: "/thumbnails/tell-moi.jpg",
  description:
    "A speedy, argument making shout-out-loud game for all the family.",
  sections: {
    challenge:
      "Design a simple, engaging game that works equally well for small groups and casual play.",
    approach:
      "Built a lightweight ruleset and interface that prioritised flow over complexity, with careful attention to tone and pacing.",
    outcome:
      "Released on the App Store as a free download, with strong qualitative feedback from early users.",
  },

  gallery: [
    {
      src: "/projects/tell-moi/screen-1.jpg",
      alt: "Tell Moi app – home screen",
      caption: "Home screen",
    },
    {
      src: "/projects/tell-moi/screen-2.jpg",
      alt: "Tell Moi app – question prompt",
      caption: "Question prompt",
    },
    {
      src: "/projects/tell-moi/screen-3.jpg",
      alt: "Tell Moi app – results or scoring screen",
      caption: "Results screen",
    },
  ],

  links: [
    {
      label: "View on the App Store",
      url: "https://apps.apple.com/gb/app/tell-moi/id6758162695",
    },
  ],

  embeds: {},
  tags: ["App", "Game Design", "Personal"],
},
{
  title: "Get Better - A Film About Frank Turner",
  slug: "get-better",
  year: "2016",
  org: "Canal+",
  role: "Editor & Co-writer",
  featured: false,
  thumbnail: "/thumbnails/get-better.jpg",
  description:
    "A short one-line description of the project.",

  sections: {
    challenge:
      "What needed to be made or solved.",
    approach:
      "How you approached it and what you focused on.",
    outcome:
      "What was delivered or achieved.",
  },

  gallery: [
    {
      src: "/projects/project-slug/image-1.jpg",
      alt: "Describe the image",
      caption: "Optional caption",
    },
    {
      src: "/projects/project-slug/image-2.jpg",
      alt: "Describe the image",
      caption: "Optional caption",
    },
  ],

  links: [
    {
      label: "External link label",
      url: "https://example.com",
    },
  ],

  embeds: {
    secondary: {
      youtubeIds: ["YOUTUBE_ID_HERE"],
      vimeoIds: ["VIMEO_ID_HERE"],
    },
  },

  tags: ["Tag one", "Tag two"],
},
{
  title: "Child Of Our Time",
  slug: "coot",
  year: "2001",
  org: "BBC",
  role: "Editor",
  featured: false,
  thumbnail: "/thumbnails/coot.jpg",
  description:
    "A short one-line description of the project.",

  sections: {
    challenge:
      "What needed to be made or solved.",
    approach:
      "How you approached it and what you focused on.",
    outcome:
      "What was delivered or achieved.",
  },

  gallery: [
    {
      src: "/projects/project-slug/image-1.jpg",
      alt: "Describe the image",
      caption: "Optional caption",
    },
    {
      src: "/projects/project-slug/image-2.jpg",
      alt: "Describe the image",
      caption: "Optional caption",
    },
  ],

  links: [
    {
      label: "External link label",
      url: "https://example.com",
    },
  ],

  embeds: {
    secondary: {
      youtubeIds: ["YOUTUBE_ID_HERE"],
      vimeoIds: ["VIMEO_ID_HERE"],
    },
  },

  tags: ["Tag one", "Tag two"],
},
{
  title: "Science Comms",
  slug: "science",
  year: "2022-2026",
  org: "Various",
  role: "Various",
  featured: false,
  thumbnail: "/thumbnails/science.jpg",
  description:
    "A short one-line description of the project.",

  sections: {
    challenge:
      "What needed to be made or solved.",
    approach:
      "How you approached it and what you focused on.",
    outcome:
      "What was delivered or achieved.",
  },

  gallery: [
    {
      src: "/projects/project-slug/image-1.jpg",
      alt: "Describe the image",
      caption: "Optional caption",
    },
    {
      src: "/projects/project-slug/image-2.jpg",
      alt: "Describe the image",
      caption: "Optional caption",
    },
  ],

  links: [
    {
      label: "External link label",
      url: "https://example.com",
    },
  ],

  embeds: {
    secondary: {
      youtubeIds: ["YOUTUBE_ID_HERE"],
      vimeoIds: ["VIMEO_ID_HERE"],
    },
  },

  tags: ["Tag one", "Tag two"],
},

]

// --- Helpers used across the site ---

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getMoreProjects(): Project[] {
  return projects.filter((p) => !p.featured)
}
