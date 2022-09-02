import { HeaderLink } from "../types/Header";

export const homeInternalLinks: HeaderLink[] = [
  {
    name: "latest"
  },
  {
    name: "team"
  },
];

export const homeExternalLinks: HeaderLink[] = [
  {
    name: "Posts",
    to: "/posts"
  }
];

export const blogExternalLinks: HeaderLink[] = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Posts",
    to: "/posts"
  }
];
