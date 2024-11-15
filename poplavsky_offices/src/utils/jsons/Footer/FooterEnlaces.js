const footerLinks = [
  {
    title: "Home",
    links: [
      { text: "News", section: "prensaRef", path: "/" },
      { text: "FAQ´s", section: "faqsRef", path: "/" },
    ],
  },
  {
    title: "About Us",
    links: [
      { text: "Who We Are", section: "infoRef", path: "/about-us" },
      { text: "Our Team", section: "teamRef", path: "/about-us" },
      { text: "More Information", section: "finalRef", path: "/about-us" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        text: "Services Overview",
        section: "serviceOverview",
        path: "/services",
      },
      {
        text: "Detail Description",
        section: "detailDescription",
        path: "/services",
      },
      {
        text: "List Of Services",
        section: "listOfServices",
        path: "/services",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { text: "Contact Form", section: "contactFormRef", path: "/contact-us" },
      { text: "Our Offices", section: "mapRef", path: "/contact-us" },
    ],
  },
];
export default footerLinks;
