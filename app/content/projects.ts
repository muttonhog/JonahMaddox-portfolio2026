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
I developed a lightweight production workflow and a consistent editorial structure that could be repeated episode-to-episode.

Episodes were planned around a clear narrative arc (what’s the question, why does it matter, what does the research actually say), with accessible language, careful signposting, and enough room for researchers to speak naturally rather than “perform” expertise.

I handled planning, recording, editing, and distribution in a way that kept the format sustainable while maintaining a high standard of audio and story craft.
      `.trim(),

      outcome: `
Across two series, over twenty episodes were produced, covering topics from AI in politics to misinformation, digital death and the so-called “dead internet”.

The podcast reached new audiences, helped establish new public engagement formats at the Institute, and gave researchers a trusted platform to discuss their work in an accessible, public-facing way.
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
    year: "2024",
    org: "The Alan Turing Institute",
    role: "Video & Live Production Lead",
    featured: true,
    thumbnail: "/thumbnails/ai-uk.jpg",
    description:
      "Leading video content and live production for the UK's national showcase of data science and artificial intelligence research.",
    sections: {
      context:
        "AI UK is the Institute’s flagship event bringing together researchers, policymakers and industry leaders.",
      challenge:
        "The challenge was creating coverage that served multiple audiences across different platforms, while maintaining quality under tight timelines.",
      approach:
        "I planned a modular capture and edit workflow so sessions could be recorded efficiently and repurposed into social-first clips, highlights, and longer edits. This included camera planning, graphics coordination and a post workflow that kept turnaround realistic.",
      outcome:
        "Delivered comprehensive coverage for on-demand viewing and social distribution, and established a repeatable approach for future events.",
    },
    embeds: {
      primary: {
        youtubeIds: ["dQw4w9WgXcQ"],
      },
    },
    tags: ["Event Coverage", "Live Production", "Research Communication"],
  },

  {
    title: "BBC Digital Storytelling",
    slug: "bbc-digital-storytelling",
    year: "2018–2021",
    org: "BBC",
    role: "Editor & Producer",
    featured: true,
    thumbnail: "/thumbnails/bbc.jpg",
    description:
      "Shaping story and structure for digital content across BBC platforms, working on documentary and factual programming.",
    sections: {
      context:
        "Working across BBC digital platforms on factual and documentary-led content with fast-moving editorial needs.",
      challenge:
        "Digital audiences consume content differently than broadcast viewers. The challenge was adapting traditional documentary storytelling to formats where attention is earned moment by moment.",
      approach:
        "I focused on front-loading value and sharpening narrative clarity, while keeping editorial integrity. This meant rethinking openings, pacing, and structure to suit platform behaviour.",
      outcome:
        "Contributed to digital projects that reached new audiences for BBC content and supported approaches balancing editorial integrity with platform requirements.",
    },
    embeds: {
      primary: {
        vimeoIds: ["76979871"],
      },
    },
    tags: ["Documentary", "Digital Content", "Broadcast"],
  },

  // ---- Non-featured work (thumb wall) ----

  {
    title: "Wildlife Trust",
    slug: "wildlife-trust",
    year: "2021",
    org: "Wildlife Trust",
    role: "Director",
    featured: false,
    thumbnail: "/thumbnails/wildlife-trust.jpg",
    description:
      "Campaign films designed to drive action on environmental issues, balancing emotional impact with clear calls to action.",
    sections: {
      challenge:
        "Campaign content needs to move people to action, not just inform them. The challenge was creating films that combined emotional storytelling with clear, actionable messaging.",
      approach:
        "I worked closely with the campaigns team to define the action we wanted viewers to take, then structured the edit to build emotional momentum toward those moments.",
      outcome:
        "Delivered campaign films supporting advocacy efforts and reaching large social audiences.",
      learnings:
        "Effective campaign work respects the audience’s intelligence while recognising that emotion drives action.",
    },
    embeds: {},
    tags: ["Campaign", "Environmental", "Social Impact"],
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
      challenge:
        "Capture complex work in a format that feels accessible and human, without oversimplifying.",
      approach:
        "Focused on clarity, short narrative beats, and strong visual structure to make the work understandable quickly.",
      outcome:
        "Created assets supporting partner communications and Institute visibility.",
    },
    embeds: {},
    tags: ["Research", "Event", "Comms"],
  },

  {
    title: "Disney",
    slug: "disney-content",
    year: "2021",
    org: "Disney",
    role: "Editor",
    featured: false,
    thumbnail: "/thumbnails/disney.jpg",
    description:
      "Editing work supporting family-friendly content with broad appeal.",
    sections: {
      challenge:
        "Balance accessibility with sophistication while meeting brand quality standards.",
      approach:
        "Prioritised clarity and pacing, ensuring content landed for younger viewers without flattening tone for older audiences.",
      outcome:
        "Contributed to projects reaching a broad audience while maintaining brand expectations.",
    },
    embeds: {},
    tags: ["Entertainment", "Family", "Editing"],
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
