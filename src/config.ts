export const SITE = {
  website: "https://andykrchnk.com/",
  author: "Andy Kyrychenko",
  profile: "https://github.com/andykrchnk",
  desc: `I'm Andy — a 20-year-old developer from Bratislava. \n
   Building a software studio, build startups, and spend way too much time at hackathons.`,
  title: "Andy Kyrychenko",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    disabled: true, // disable "suggest edit" button
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
