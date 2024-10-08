import testifier1 from '@/images/raj.svg'
import testifier2 from '@/images/cattoni.svg'
import imageProject1 from "@/images/work1.svg";
import imageProject2 from "@/images/work2.svg";
import imageProject3 from "@/images/work3.svg";
import imageProject4 from "@/images/work4.png";
import imageProject5 from "@/images/work5.png";
import imageProject6 from "@/images/work6.svg";
import imageProject7 from "@/images/work7.svg";
import imageProject8 from "@/images/work8.png";
import imageProject9 from "@/images/work9.png";

const RECENT_WORKS: Project[] = [
  {
    name: "Decodable.co",
    roles: ["Brand Design", "Webflow Development", "Web Design"],
    link: "https://decodable.co",
  },
  {
    name: "Gofirefly.io",
    roles: ["Brand Design", "Webflow Development", "Web Design"],
    link: "https://gofirefly.io",
  },
  {
    name: "Blinkops.com",
    roles: ["Brand Design", "Webflow Development", "Web Design"],
    link: "https://Blinkops.com",
  },
  {
    name: "Withkanvas.com",
    roles: ["Brand Design", "Webflow Development", "Web Design"],
    link: "https://Withkanvas.com",
  },
];

const CAROUSEL_1: ProjectPhoto[] = [
  {
    thumbnail: imageProject1,
    link: "https://www.glean.com/",
  },
  {
    thumbnail: imageProject2,
    link: "https://www.decodable.co/",
  },
  {
    thumbnail: imageProject3,
    link: "https://nocknock.io/",
  },
  {
    thumbnail: imageProject4,
    link: "https://www.pixielabs.io/",
  },
];

const CAROUSEL_2: ProjectPhoto[] = [
  {
    thumbnail: imageProject5,
    link: "https://google.com",
  },
  {
    thumbnail: imageProject6,
    link: "https://google.com",
  },
  {
    thumbnail: imageProject7,
    link: "https://google.com",
  },
  {
    thumbnail: imageProject8,
    link: "https://google.com",
  },
  {
    thumbnail: imageProject9,
    link: "https://google.com",
  },
];

const TESTIMONIALS: Testimony[] = [
  {
    name: "Ayush Raj",
    photo: testifier1,
    role: "VP of Marketing",
    at: "Webflow",
    testimony:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
  },
  {
    name: "Alex Cattoni",
    photo: testifier2,
    role: "Founder",
    at: "CopyPossy",
    testimony:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
  },
];

export { RECENT_WORKS, CAROUSEL_1, CAROUSEL_2, TESTIMONIALS };
  