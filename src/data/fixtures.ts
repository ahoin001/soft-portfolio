export default {
  author: "Alexander Hoinville",
  hero: {
    subtitle: "Web Developer For Hire",
    description:
      "Seeking a Front End or React developer role where I can contribute to a company and continue to learn and sharpen my skills",
    cta: "My Projects",
  },
  products: {
    featured: [
      {
        name: "Subtitle Hero",
        medium: "React · Tailwind · Express · PostgreSQL",
        summary: "Subtitlers Secret Weapon ",
        copy: [
          "Easily add subtitles to videos with friendly UI and professionally ready to use vtt file",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Check It Out",
            url: "https://subtitle-hero.herokuapp.com/",
          },
        },
        images: ["/subtitle/Subtitle-1.png", "/subtitle/Subtitle-2.png"],
      },
      {
        name: "NBA Heatcheck",
        medium: "Next.js · reChart · ChakraUI ",
        summary: "Visual Analytics At Your Fingers ",
        copy: [
          "Check out how your favorite players are performing and compare stats.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Check It Out",
            url: "https://nba-heatcheck.vercel.app/",
          },
        },
        images: ["/nbadashboard/NBA-1.png", "/nbadashboard/NBA-2.png"],
      },
    ],
    // Only supports 0-3 at the moment
    // minor: [
    //   {
    //     name: "Volunteer Portal",
    //     description: "Portal for tracking volunteering opportunities.",
    //     link: {
    //       name: "Github",
    //       url: "https://github.com/zendesk/volunteer_portal",
    //     },
    //   },
    //   {
    //     name: "Final Slash VR",
    //     description: "Short survival experience on an abandoned planet.",
    //     link: {
    //       name: "Download",
    //       url: "https://samzx.itch.io/final-slash-vr",
    //     },
    //   },
    //   {
    //     name: "MPH Watch",
    //     description: "Stats for miners mining on Mining Pool Hub.",
    //     link: {
    //       name: "Demo",
    //       url: "https://mphwatch.samxie.net/demo",
    //     },
    //   },
    // ],
  },
  logoSection: {
    title: "Proud Part Of",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/IronHack.webp",
        url: "https://www.ironhack.com/en",
      },
      {
        src: "/logos/UPE.png",
        url: "https://upe.cs.fiu.edu/membership/",
      },
      {
        src: "/logos/SparkDev.png",
        url: "https://upe.cs.fiu.edu/sparkdev/",
      },
    ],
  },
  footer: {
    tagline: "Alexander Hoinville — Miami, Florida",
    links: [
      {
        name: "Twitter",
        url: "https://twitter.com/alexcodestheweb",
        fa: "fab fa-twitter", // Code from: https://fontawesome.com/v5/icons/twitter?s=brands
      },
      {
        name: "Github",
        url: "https://github.com/ahoin001",
        fa: "fab fa-github",
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/alexanderhoinville/",
        fa: "fab fa-linkedin",
      },
      {
        name: "Email",
        url: "mailto:ahoin001@gmail.com",
        fa: "fa fa-envelope",
      },
    ],
  },
};
