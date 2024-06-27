import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Eventos Castros",
    paragraph: "Todo lo que necesita para su fiesta.",
    image: "/images/blog/party1.jpg",
    author: {
      name: "Rodrigo Castro",
      image: "/images/blog/author-01.png",
      designation: "Organizador de boda",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Event 360",
    paragraph: "Cubrimos todo lo necesario para tu planeacion de eventos",
    image: "/images/blog/party2.jpg",
    author: {
      name: "Lucia Cass",
      image: "/images/blog/author-02.png",
      designation: "Organizadora de eventos",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Peloteros Fest",
    paragraph: "Las soluciones que brindamos para que todos puedan divertirse",
    image: "/images/blog/party1.jpg",
    author: {
      name: "Rodrigo Gonzalez",
      image: "/images/blog/author-03.png",
      designation: "Organizador de Peloteros fest",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
