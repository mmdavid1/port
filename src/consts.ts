import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Matt's Site",
  DESCRIPTION: "Matt's Site",
  EMAIL: "mmdavid@ucsd.edu",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Matt's Site",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/mmdavid1",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/matthewdavidd",
  },
];
