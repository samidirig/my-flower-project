import { paths } from "@/routes/paths";

export const myFlowerPageLinks = [
  {
    order: "0",
    subheader: "Components",
    items: [
      { title: "Slider", path: paths.myFlowerEn.components.slider },
      { title: "Graphs", path: paths.myFlowerEn.components.graphs },
    ],
  },
];

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "Login", path: paths.login },
  { title: "Register", path: paths.register },
  { title: "About", path: paths.myFlowerEn.about },
  { title: "Contact", path: paths.myFlowerEn.contact },
  {
    title: "Components",
    path: paths.myFlowerEn.components.root,
    children: [myFlowerPageLinks[0]],
  },
];
