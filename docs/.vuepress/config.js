import { defaultTheme } from "vuepress";

export default {
  lang: "en-CA",
  title: "FnwngPhotography",
  description: "Hello, I am a photographer",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Services",
        link: "/services",
      },
      {
        text: "Contact",
        link: "/contact",
      },
    ],
  }),
};
