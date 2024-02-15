import { paths } from "@/routes/paths";

export const myPortfolioPageLinks = [
  {
    order: "0",
    subheader: "Components",
    items: [
      { title: "Slider", path: paths.myPortfolioEn.components.slider },
      { title: "Graphs", path: paths.myPortfolioEn.components.graphs },
    ],
  },
];

export const navLinks = [
  { title: "Home", path: paths.myPortfolioEn.root },
  { title: "Login", path: paths.login },
  { title: "Register", path: paths.register },
  { title: "About", path: paths.myPortfolioEn.about },
  { title: "Contact", path: paths.myPortfolioEn.contact },
  // {
  //   title: "Components",
  //   path: paths.myPortfolioEn.components.root,
  //   children: [myPortfolioPageLinks[0]],
  // },
];

export const authLinks = [
  { title: "Home", path: paths.myPortfolioEn.root },
  { title: "Login", path: paths.login },
  { title: "Register", path: paths.register },
];
