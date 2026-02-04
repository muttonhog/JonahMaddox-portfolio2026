export type MediaBlock = {
  youtubeIds?: string[]
  vimeoIds?: string[]
  spotifyEmbed?: boolean
}

export type InlineEmbedAfter = "context" | "challenge" | "approach" | "outcome" | "learnings"

export type InlineEmbedBlock = MediaBlock & {
  after: InlineEmbedAfter
}

export type ProjectLink = {
  label: string
  url: string
}

export type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

/**
 * OPTION B: ordered content blocks for "article-style" pages
 * You can mix text, embeds, gallery, and links in any order.
 */
export type ContentBlock =
  | { type: "text"; value: string }
  | { type: "youtube"; ids: string[] }
  | { type: "vimeo"; ids: string[] }
  | { type: "spotify" }
  | { type: "gallery"; images: GalleryImage[] }
  | { type: "links"; links: ProjectLink[] }

export interface Project {
  title: string
  slug: string
  year: string
  org: string
  role: string
  featured: boolean
  thumbnail: string
  description: string

  // Keep your current system (fallback renderer can use this)
  sections: {
    context?: string
    challenge?: string
    approach?: string
    outcome?: string
    learnings?: string
  }

  // Existing two-block media support (featured pages)
  embeds?: {
    primary?: MediaBlock
    secondary?: MediaBlock
  }

  // (Option A) Inline embeds after a named section
  inlineEmbeds?: InlineEmbedBlock[]

  // Existing fields used by your page
  links?: ProjectLink[]
  gallery?: GalleryImage[]

  // ✅ NEW (Option B): if present, your page can render this instead of sections
  content?: ContentBlock[]

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
    },
    tags: ["Public Service Media", "Digital Storytelling", "Factual", "Social Video"],
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
      secondary: {
        youtubeIds: ["dnRiErwWqqc", "-30Muk3AZW4", "-Ad1qbcd7v0", "DX9dVavTIWU", "qt1_cO8lFDs"],
      },
    },
    tags: ["Campaign", "Environmental", "Social Impact"],
  },

  {
  title: "Disney",
  slug: "disney-content",
  year: "2015–2019",
  org: "Disney",
  role: "Camera & Editor",
  featured: false,
  thumbnail: "/thumbnails/disney.jpg",
  description:
    "Editing work supporting family-friendly content with broad appeal.",

  // Keep sections empty so nothing else renders accidentally
  sections: {},

  content: [
    {
      type: "text",
      value: `
I worked with Disney and Grand Visual on a series of large-scale live stunts designed to translate real-world brand experiences into highly shareable social films.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["Hd_2Y29_FLU"], // Disney Side: Shadows
    },

    {
      type: "text",
      value: `
My initial role was as a camera operator and on-set edit advisor on Disney Side: Shadows, a live augmented-reality activation in New York filmed across more than 15 cameras. As the project developed, I took on responsibility for directing the edit, shaping footage captured in real time into an emotionally balanced social film.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["0HtJYMh-3wM"], // follow-up / alternate cut
    },

    {
      type: "text",
      value: `
Following its success, I was invited back to deliver further work for Disney, including cinema adverts, the launch of Disney+ in London and Singapore, and a live international stunt for Marvel, creating a real-time video portal between London and Los Angeles. I filmed in London before travelling to LA to edit and deliver the final film.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["xne8KcDbLs4"], // later Disney / Marvel work
    },

    {
      type: "text",
      value: `
The Disney Side: Shadows film became one of Disney’s most successful social campaigns, reaching over 300 million views worldwide and ranking as the second most shared advert of 2015.

These projects required directing narrative and emotion from complex, multi-camera live setups, often with no opportunity for retakes. Editorial decisions had to balance scale and spectacle with genuine human reaction, as pushing too far into sentimentality would undermine the authenticity of the experience.

The repeated commissions across markets reflected a high level of trust in my ability to deliver under pressure, adapt quickly to live conditions, and turn ambitious experiential work into social films that performed at global scale.
      `.trim(),
    },
  ],

  tags: ["Experiential", "Live Stunts", "Social Film"],
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

  // Keep sections for backwards compatibility (can be empty)
  sections: {},

  // Option B: article-style flow (text -> video -> text -> video...)
  content: [
    {
      type: "text",
      value: `
Music video work has been a constant thread throughout my career, both as a director and editor. As a musician, it’s a medium where I value direct collaboration with artists and the freedom to experiment with tone, rhythm and visual language.
      `.trim(),
    },
    { type: "youtube", ids: ["F5VRAsN4VH0"] },

    {
      type: "text",
      value: `
I see music projects as a space to take creative risks and sharpen instincts that carry into other work — pacing, emotional clarity, performance and atmosphere — while maintaining a strong sense of authorship and audience connection.
      `.trim(),
    },
    // Add a second video here if you want one between paragraph 2 and 3
    { type: "youtube", ids: ["kPGnG9KX7xc"] },

    {
      type: "text",
      value: `
Highlights include directing ‘Dismantle’ for Ramona Flowers, where my winning pitch reimagined the city at night as a space slowly reclaimed by nature. Shot almost entirely after dark, the film explored urban texture, colour and negative space, and was later nominated for a Van d'Or Independent Film Award, and featured on Channel 4 and PromoNews.
      `.trim(),
    },
    // You already used the Dismantle ID above; swap this if you prefer Dismantle to sit here instead
    { type: "youtube", ids: ["9S0ONyRctyE"] },

    {
      type: "text",
      value: `
I also directed a second video for Ramona Flowers and Young Kato’s breakout single ‘Drink, Dance, Play’, delivering a large-scale house party set involving over 40 performers inside a purpose-built cardboard house, designed to be danced in and destroyed.
      `.trim(),
    },
    { type: "youtube", ids: ["wrNTOo4KH8c"] },

    {
      type: "text",
      value: `
Alongside directing, I’ve edited music videos for artists including Bloc Party, Frank Carter & The Rattlesnakes, Hot Chip, Public Service Broadcasting, Glasvegas, George Ezra, Ellie Goulding, Pitbull and Enrique Iglesias.
      `.trim(),
    },
    {
      type: "youtube",
      ids: ["VVPulAbfAj0", "WFJPYi3JXw4", "DDgekKQ8nLc"],
    },

    {
      type: "text",
      value: `
Across both roles, music video work remains an important creative outlet — a place to stay close to visual culture, work directly with artists, and continually refine my storytelling instincts.
      `.trim(),
    },
    // Optional final embed after the closing paragraph
    { type: "youtube", ids: ["LiEMLOk9BwU", "zwGOHnTJAec", "l884wKofd54"] },
  ],

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

  // Leave sections empty – we’re using content blocks instead
  sections: {},

  content: [
    {
      type: "text",
      value: `
I spent a year working with Netflix to help bring structure and consistency to its in-house content production and social output.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["rj7pD7Q8BcM"],
    },

    {
      type: "text",
      value: `
My role focused on establishing clearer workflows for how external production partners delivered marketing materials, including press junket footage, interviews and exclusive content. I developed best-practice guidance to improve quality, consistency and usability across teams, helping ensure content could be repurposed efficiently across platforms.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["nYsPSUtlOJs"],
    },

    {
      type: "text",
      value: `
Alongside this, I joined the social media team during a period of growth, supporting its evolution into a more strategic content function. The focus was on foregrounding British television and film across Netflix’s digital channels, shaping editorial approaches that balanced promotion with audience value.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["4HlhlClb0is"],
    },

    {
      type: "text",
      value: `
I was particularly drawn to factual and hybrid content, producing behind-the-scenes films, explainers and deeper editorial pieces that helped audiences engage more meaningfully with scripted titles.

This included work around shows such as Black Mirror and The Dark Crystal, where the aim was to bridge fiction and non-fiction storytelling in a way that felt informative, considered and culturally relevant.
      `.trim(),
    },

    {
      type: "youtube",
      ids: [
        "Ll4ecuvHDq0",
        "VEeH7mPWvUI",
        "omc-5zj70M0",
        "MhAQbevgngo",
        "gn-R-vBODR0",
        "atOvR0h6xrw",
        "XJLmiWzbnBg",
        "oJ2cPYsvxAg",
      ],
    },
  ],

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
    "Editing television, cinema and digital commercials across agencies and global brands.",

  sections: {
    approach: `
I spent several years editing television, cinema and digital commercials, working across music-led spots, brand films and large-scale campaigns.

My commercial work grew out of music videos and live sessions, leading to early projects on music TV advertising for artists including Beyoncé, Mumford & Sons and Led Zeppelin while at Fold7. During this period, I also worked on major brand campaigns such as the Carlsberg rebrand, helping translate musical energy and performance-led storytelling into commercial formats.

After moving freelance, I edited campaigns for a wide range of brands at agencies including Karmarama, Ogilvy, Iris, Mother, Havas and Imagination.

Across this work, I focused on clarity, pacing and tone — shaping films that could cut through in short formats while still serving brand strategy and creative intent.
    `.trim(),
  },

  embeds: {
    secondary: {
      youtubeIds: [
        "IVekZisN_1w",
        "bYnVyA06TCI",
        "ToBDOLgcEls",
        "QzPDfnkxvJA",
        "Vtb8cG3gcaw",
        "DX2nuvjhMjk",
        "djqapLuyIaA",
        "QzUWLk_fWZU",
        "pMSCeHHPbjQ",
        "vlOcgnwYCyY",
        "iZZ7cdoXkLk",
        "z98FXaYu0Po",
        "J96HwwcKMQs",
        "8Bucn8DJtJI",
        "47RG21QALwA",
      ],
    },
  },

  tags: ["Commercial", "Editing", "Advertising"],
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
    "Story-led branded films created for agencies and global brands, focused on audience-first engagement rather than direct advertising.",

  // Leave sections empty – we’re using content blocks instead
  sections: {},

  content: [
    {
      type: "text",
      value: `
I approach branded content as a form of storytelling rather than advertising. The most effective brand work, in my experience, earns attention by entertaining, informing or surprising an audience — allowing the brand to build credibility and affinity without relying on direct sales messaging.
      `.trim(),
    },

    {
      type: "text",
      value: `
Across this work, I’ve operated primarily as an editor, with selected projects also directed by me. In both roles, I work closely with agencies, directors and brand teams to shape material that aligns with brand strategy while remaining culturally aware, engaging and platform-appropriate.
      `.trim(),
    },

    // Director-led branded work
    {
      type: "text",
      value: `
As a director, I’ve worked with brands including Rolls-Royce, Maille Mustard, Greenpeace and Curvy Kate. This included creating upbeat, confidence-led fashion content and launching *Star in a Bra* — a campaign that invited customers to become models for the brand. The focus was on representation and empowerment, helping the brand connect with its audience in an authentic and inclusive way.
      `.trim(),
    },
    {
      type: "youtube",
      ids: ["Ttf_IcVfbcA"], // Curvy Kate / Star in a Bra
    },

    // Shell – Everyday Experts
    {
      type: "text",
      value: `
As an editor, I worked on Shell’s *Everyday Experts* series, directed by Paul Berczeller, using humour and character to translate complex technical processes into accessible, shareable content.
      `.trim(),
    },
    {
      type: "youtube",
      ids: ["Hf_nds6e84A", "R2PS00fEbJ8"],
    },

    // British Army branded films
    {
      type: "text",
      value: `
I’ve also edited action-led branded films for the British Army, where tone, clarity and pacing were critical to maintaining credibility and trust.
      `.trim(),
    },
    {
      type: "youtube",
      ids: ["lstn3wOEO08", "JdHkElXZePE"],
    },

    // Sony / DGK / Nyjah Huston
    {
      type: "text",
      value: `
In addition, I edited branded content for Sony, including a collaboration with DGG and professional skateboarder Neen Williams, bringing cultural awareness and editorial precision to work aimed at highly engaged niche audiences.
      `.trim(),
    },
    {
      type: "youtube",
      ids: ["kqTpgOtKbPE"],
    },

    // Wrap / additional work
    {
      type: "text",
      value: `
Across all branded projects, my focus is on shaping content that audiences choose to engage with — ensuring brands are represented with clarity, consistency and intent. The goal is work that performs because it resonates, not because it interrupts.
      `.trim(),
    },
    {
      type: "youtube",
      ids: ["y77S-baMITQ", "NeQuER6GO2s", "qwL1-zZ7-jI", "ziP37-P4hw4"],
    },
  ],


  tags: ["Branded Content", "Direction", "Editing", "Commercial Storytelling"],
},


  {
    title: "Tell Moi",
    slug: "tell-moi",
    year: "2026",
    org: "Personal project",
    role: "Creator",
    featured: false,
    thumbnail: "/thumbnails/tell-moi.jpg",
    description: "A speedy, argument making shout-out-loud game for all the family.",
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
    tags: ["App", "Game Design", "Personal"],
  },

  {
  title: "Get Better – A Film About Frank Turner",
  slug: "get-better",
  year: "2016",
  org: "Canal+",
  role: "Editor & Co-writer",
  featured: false,
  thumbnail: "/thumbnails/get-better.jpg",
  description:
    "A feature-length documentary exploring Frank Turner’s life, touring and creative process.",

  sections: {},

  content: [
    {
      type: "text",
      value: `
Get Better is my first feature-length documentary, edited in collaboration with Kode and director Ben Morse.
      `.trim(),
    },

    {
      type: "text",
      value: `
I was brought onto the project to edit a substantial and largely unstructured body of material: over fifteen hours of in-depth interviews, alongside extensive live performance and tour footage gathered over several years.

The material had not been captured with a fixed narrative in mind, and a core part of my role was to break the interviews down, identify themes and shape a coherent story from a large volume of raw content.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["7QrKOXbwb0o"],
    },

    {
      type: "text",
      value: `
Working closely with the director, I helped define the emotional and narrative arc of the film, advising on additional pick-ups needed to strengthen clarity and cohesion.

We tied the live performance material directly into the storytelling, using it to reinforce key emotional beats rather than treating it as standalone spectacle. This contribution led to a co-writing credit on the film.
      `.trim(),
    },

    {
      type: "text",
      value: `
The finished documentary was released by Canal+, premiered in Leicester Square, and featured a nationwide satellite-linked Q&A following the screening.

It was subsequently released on Amazon Prime Video.
      `.trim(),
    },

    {
      type: "text",
      value: `
The project reflects my ability to find structure and meaning within complex, imperfect material, and to take on a leadership role when a clear story has yet to emerge.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["jAI3R_CBZTk"],
    },
  ],

  tags: [
    "Documentary",
    "Long-form Editing",
    "Music Film",
    "Narrative Development",
  ],
},


{
  title: "Child Of Our Time",
  slug: "coot",
  year: "2001–2020",
  org: "BBC",
  role: "Editor",
  featured: false,
  thumbnail: "/thumbnails/coot.jpg",
  description:
    "Character-led films created to accompany the final episode of Child of Our Time, reflecting on twenty years of growing up in the UK.",

  sections: {},

  content: [
    {
      type: "text",
      value: `
I edited a series of fifteen character-led films to accompany the final episode of Child of Our Time, marking the conclusion of a project that followed a group of children born in 2000 through to adulthood in 2020.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["uR5og8ICPQ0"],
    },

    {
      type: "text",
      value: `
The material spanned two decades: archive programmes, extensive additional footage, user-generated content captured by the contributors themselves, and a final reflective interview with each individual.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["jcrjArQLYS0"],
    },

    {
      type: "text",
      value: `
Rather than relying on a purely chronological structure, the editorial approach focused on shaping each person’s emotional journey — their growth, setbacks and defining moments — across twenty years of change.

This allowed each film to reflect the individuality of the contributor, avoiding a one-size-fits-all narrative and giving space to the very different experiences of growing up at the start of the millennium in the UK.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["SmKWDNw8pow"],
    },

    {
      type: "text",
      value: `
The aim was to honour the contributors’ stories with care and clarity, balancing editorial craft with sensitivity to how these lives had been lived and shared over time.

The project reflects my approach to factual storytelling: finding the human story within complexity, questioning default formats, and shaping narratives that serve both the audience and the people at the centre of the film.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["YOUTUBE_ID_PLACEHOLDER_1", "YOUTUBE_ID_PLACEHOLDER_2"],
    },
  ],

  tags: [
    "Factual",
    "Long-form Editing",
    "Character-led Storytelling",
    "Public Service Broadcasting",
  ],
},


 {
  title: "Science Communications",
  slug: "science-communications",
  year: "2022–2026",
  org: "Various",
  role: "Content Lead / Producer",
  featured: false,
  thumbnail: "/thumbnails/science.jpg",
  description:
    "Translating complex scientific research into clear, engaging content for public, professional and policy-facing audiences.",

  sections: {},

  content: [
    {
      type: "text",
      value: `
I specialise in translating complex scientific and technical research into clear, engaging content for public, professional and policy-facing audiences.

My work sits at the intersection of science, storytelling and strategy: helping organisations identify what truly matters in their research, and shaping that into content people can understand, trust and act on.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["Kq6mVEqDje0"],
    },

    {
      type: "text",
      value: `
I spent a year working with Abcam, supporting the development of an on-brand digital output that balanced scientific credibility with accessibility.

This included podcast cutdowns, visual assets, in-event materials and thought-leader films, all designed to strengthen Abcam’s voice and presence across digital channels.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["DU9NmK7O-UY"],
    },

    {
      type: "text",
      value: `
At The Alan Turing Institute, science communication has been a central part of my role.

I’ve led a range of projects focused on public engagement and strategic narrative, including the public-facing podcast Too Long Didn’t Read, documentary content around the Data Study Group programme, and the launch of Turing 2.0 — the Institute’s shift towards a mission-led approach to research and implementation.
      `.trim(),
    },

    {
      type: "youtube",
      ids: ["KO9awcYxH9s"],
    },

    {
      type: "text",
      value: `
For Turing 2.0, I directed senior stakeholder shoots and developed visual and animated treatments to help articulate a complex organisational strategy in a way that felt coherent, human and forward-looking.

The work aimed to clarify not just what the Institute does, but why it matters.
      `.trim(),
    },

    {
      type: "text",
      value: `
I’ve also led the video output for major events including AI UK and the Turing Lectures, overseeing on-screen content, livestream delivery and event capture.

Post-event, I shape the material into strategic content designed to extend reach, support engagement and serve long-term communications goals.
      `.trim(),
    },

    {
      type: "text",
      value: `
Alongside this, I worked with the Public Engagement team to develop Talk Data To Me, an original YouTube series where researchers explain key ideas in AI and data science in a clear, accessible way for non-specialist audiences.
      `.trim(),
    },

    {
      type: "text",
      value: `
Across all of this work, my focus is consistent: finding the story within the science, respecting complexity without amplifying jargon, and creating content that brings out the best of research for the audiences it is meant to serve.
      `.trim(),
    },

    {
      type: "youtube",
      ids: [
        "va-FiHqBM9w",
        "Ug8uvqKMRqg",
        "7iX-wiKvYHs",
        "2kSl0xkq2lM",
        "Xy3jLgwKQqI",
      ],
    },
  ],

  tags: [
    "Science Communication",
    "Public Engagement",
    "Research Storytelling",
    "Strategy",
  ],
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
