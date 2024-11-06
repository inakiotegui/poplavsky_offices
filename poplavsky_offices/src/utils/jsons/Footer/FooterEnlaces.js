const footerLinks = [
    {
        title: "Home",
        links: [
            { text: "Hero", section: "heroRef", path: "/" },
            { text: "Prensa", section: "prensaRef", path: "/" },
            { text: "FAQ´s", section: "faqsRef", path: "/" },
        ],
    },
    {
        title: "About Us",
        links: [
            { text: "Home", section: "bannerRef", path: "/about-us" },
            { text: "Who We Are", section: "infoRef", path: "/about-us" },
            { text: "More Information", section: "finalRef", path: "/about-us" },
            { text: "Our Team", section: "teamRef", path: "/about-us" },
        ],
    },
    {
        title: "Services",
        links: [
            { text: "Banner", section: "banner", path: "/services" },
            { text: "Services Overview", section: "serviceOverview", path: "/services" },
            { text: "Detail Description", section: "detailDescription", path: "/services" },
            { text: "List Of Services", section: "listOfServices", path: "/services" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { text: "Contact Form", section: "contactFormRef", path: "/contact" },
            { text: "Our Offices", section: "ourOfficesRef", path: "/contact" },
        ],
    },
];
export default footerLinks;