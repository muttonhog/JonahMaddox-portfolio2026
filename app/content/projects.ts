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
    challenge: string
    decisions: string
    outcome: string
    learnings: string
  }
  embeds: {
    youtubeIds?: string[]
    vimeoIds?: string[]
    spotifyEmbed?: boolean
  }
  tags?: string[]
}

export const projects: Project[] = [
  {
    title: "Too Long Didn't Read",
    slug: "too-long-didnt-read",
    year: "2023",
    org: "The Alan Turing Institute",
    role: "Creator & Producer",
    featured: true,
    thumbnail: "/thumbnails/tldr.jpg",
    description:
      "A public engagement podcast exploring how AI and data science intersect with everyday life, featuring researchers in conversation on topics from digital death to communicating with animals.",
    sections: {
      challenge:
        "How do you make complex AI research accessible and engaging to a general audience without dumbing it down? The challenge was to create a format that respected the depth of the research while making it genuinely enjoyable to listen to.",
      decisions:
        "I chose a conversational format that allowed researchers to speak naturally about their work. Each episode was carefully structured to build understanding gradually, using storytelling techniques to maintain engagement throughout technical explanations.",
      outcome:
        "Over twenty episodes produced, covering topics from AI in politics to misinformation. The podcast successfully reached new audiences and provided researchers with a platform to share their work in an accessible way.",
      learnings:
        "The most important lesson was that clarity doesn't mean simplicity. Audiences appreciate being trusted with complexity when it's presented with care and context.",
    },
    embeds: {
      spotifyEmbed: true,
    },
    tags: ["Podcast", "Public Engagement", "AI Research"],
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
      challenge:
        "AI UK is a flagship event bringing together researchers, policymakers, and industry leaders. The challenge was creating video content that could serve multiple audiences across different platforms while maintaining production quality under tight timelines.",
      decisions:
        "I developed a modular content strategy that allowed us to capture sessions efficiently and repurpose footage for different formats—from full session recordings to social-first clips. This required careful planning of camera positions, graphics, and post-production workflows.",
      outcome:
        "Successfully delivered comprehensive video coverage of the event, with content reaching audiences across social media, the institute's website, and partner channels. The approach has since become a template for future events.",
      learnings:
        "Large-scale event coverage requires balancing perfectionism with pragmatism. Having clear priorities and a flexible team makes all the difference when things don't go to plan.",
    },
    embeds: {
      youtubeIds: ["dQw4w9WgXcQ"],
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
      challenge:
        "Digital audiences consume content differently than broadcast viewers. The challenge was adapting traditional documentary storytelling for platforms where attention is earned moment by moment.",
      decisions:
        "I focused on front-loading value—ensuring every piece opened with something compelling while still serving the broader narrative. This meant rethinking traditional documentary structures and finding new ways to build engagement.",
      outcome:
        "Contributed to multiple successful digital projects that reached new audiences for BBC content. The work helped establish approaches that balanced editorial integrity with platform-specific requirements.",
      learnings:
        "Good storytelling principles remain constant even as platforms change. The fundamentals of clarity, pacing, and emotional resonance matter regardless of where content lives.",
    },
    embeds: {
      vimeoIds: ["76979871"],
    },
    tags: ["Documentary", "Digital Content", "Broadcast"],
  },
  {
    title: "Wildlife Trust",
    slug: "wildlife-trust",
    year: "2021",
    org: "Wildlife Trust",
    role: "Director",
    featured: false,
    thumbnail: "/thumbnails/wildlife-trust.jpg",
    description:
      "Editing campaign films designed to drive action on environmental issues, balancing emotional impact with clear calls to action.",
    sections: {
      challenge:
        "Campaign content needs to move people to action, not just inform them. The challenge was creating films that combined emotional storytelling with clear, actionable messaging.",
      decisions:
        "I worked closely with the campaigns team to understand the specific actions they wanted audiences to take, then structured the edit to build emotional momentum toward those moments.",
      outcome:
        "Delivered multiple campaign films that supported successful advocacy efforts, reaching millions of viewers across social platforms.",
      learnings:
        "Effective campaign content respects the audience's intelligence while acknowledging that emotion drives action. The best advocacy storytelling does both.",
    },
    embeds: {},
    tags: ["Campaign", "Environmental", "Social Impact"],
  },
  {
    title: "Music videos",
    slug: "music-videos",
    year: "2020",
    org: "Various",
    role: "Director / editor",
    featured: false,
    thumbnail: "/thumbnails/music.jpg",
    description:
      "Contributing to documentary projects for streaming, working on story structure and pacing for long-form content.",
    sections: {
      challenge:
        "Streaming documentaries compete for attention in a crowded landscape. The challenge was helping create content that rewarded sustained viewing while remaining accessible to casual viewers.",
      decisions:
        "Focused on creating clear narrative throughlines that could sustain viewer interest across longer runtimes, while ensuring individual sequences could stand on their own.",
      outcome:
        "Contributed to projects that reached global audiences through the Netflix platform, helping establish storytelling approaches suited to streaming consumption.",
      learnings:
        "Long-form content requires different pacing than short-form, but the same principles of clarity and engagement apply. Every moment should earn its place.",
    },
    embeds: {},
    tags: ["Documentary", "Streaming", "Long-form"],
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
      "Editorial work for Disney+ original content, focusing on family-friendly storytelling with broad appeal.",
    sections: {
      challenge:
        "Disney content needs to work for diverse audiences while maintaining the quality standards associated with the brand. The challenge was balancing accessibility with sophistication.",
      decisions:
        "Approached each project with attention to how different audience segments would experience the content, ensuring clarity for younger viewers without condescending to older ones.",
      outcome:
        "Contributed to projects that successfully reached Disney+'s global audience, maintaining the brand's reputation for quality family entertainment.",
      learnings:
        "Content that works for all ages often requires more craft, not less. Simplicity in presentation often demands complexity in execution.",
    },
    embeds: {},
    tags: ["Entertainment", "Family", "Streaming"],
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
      "Editorial work for Disney+ original content, focusing on family-friendly storytelling with broad appeal.",
    sections: {
      challenge:
        "Disney content needs to work for diverse audiences while maintaining the quality standards associated with the brand. The challenge was balancing accessibility with sophistication.",
      decisions:
        "Approached each project with attention to how different audience segments would experience the content, ensuring clarity for younger viewers without condescending to older ones.",
      outcome:
        "Contributed to projects that successfully reached Disney+'s global audience, maintaining the brand's reputation for quality family entertainment.",
      learnings:
        "Content that works for all ages often requires more craft, not less. Simplicity in presentation often demands complexity in execution.",
    },
    embeds: {},
    tags: ["Entertainment", "Family", "Streaming"],
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
      "Editorial work for Disney+ original content, focusing on family-friendly storytelling with broad appeal.",
    sections: {
      challenge:
        "Disney content needs to work for diverse audiences while maintaining the quality standards associated with the brand. The challenge was balancing accessibility with sophistication.",
      decisions:
        "Approached each project with attention to how different audience segments would experience the content, ensuring clarity for younger viewers without condescending to older ones.",
      outcome:
        "Contributed to projects that successfully reached Disney+'s global audience, maintaining the brand's reputation for quality family entertainment.",
      learnings:
        "Content that works for all ages often requires more craft, not less. Simplicity in presentation often demands complexity in execution.",
    },
    embeds: {},
    tags: ["Entertainment", "Family", "Streaming"],
  },
    {
    title: "Commercials",
    slug: "commercials",
    year: "2008-2019",
    org: "Various",
    role: "Editor",
    featured: false,
    thumbnail: "/thumbnails/ads.jpg",
    description:
      "Editorial work for Disney+ original content, focusing on family-friendly storytelling with broad appeal.",
    sections: {
      challenge:
        "Disney content needs to work for diverse audiences while maintaining the quality standards associated with the brand. The challenge was balancing accessibility with sophistication.",
      decisions:
        "Approached each project with attention to how different audience segments would experience the content, ensuring clarity for younger viewers without condescending to older ones.",
      outcome:
        "Contributed to projects that successfully reached Disney+'s global audience, maintaining the brand's reputation for quality family entertainment.",
      learnings:
        "Content that works for all ages often requires more craft, not less. Simplicity in presentation often demands complexity in execution.",
    },
    embeds: {},
    tags: ["Entertainment", "Family", "Streaming"],
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getMoreProjects(): Project[] {
  return projects.filter((project) => !project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
