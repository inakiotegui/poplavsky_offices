import React from "react";
import "./NewsComponent.css";

import CustomDivider from "../../../../utils/Divider/CustomDivider/CustomDivider";
import { Carousel } from "primereact/carousel";
import noticias from "../../../../utils/jsons/News/news-data";

export default function NewsComponent() {
  const handleNavigate = (link) => {
    window.open(link, "_blank");
  };

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1300px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const noticiaTemplate = (item) => {
    return (
      <div>
        <div
          className="card-news grid grid-nogutter nested-grid gap-3 bg-trl-blue border-round m-3 p-3 border-1 border-gray-500 hover:shadow-2 cursor-pointer"
          style={{ height: "100%" }}
          onClick={() => handleNavigate(item.link_noticia)}
        >
          <div className="col-12 h-2rem  border-round flex align-items-center gap-3 px-2">
            <span
              className="custom-badge w-1rem h-1rem bg-gray-500"
              style={{ borderRadius: "100%" }}
            ></span>
            <p className="card-title m-0 text-xs text-gray-500">
              {" "}
              Poplavsky International Offices
            </p>
          </div>

          <div
            className="col-12 h-7rem border-round"
            style={{
              backgroundImage: `url(${item.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="col-12 h-12rem  border-round text-white">
            <h4 className="my-3 mx-2 text-sm">{item.titulo}</h4>
            <p className="description m-0 mx-2 text-xs font-light">
              {item.descripcion}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const noticiaMobileTemplate = (item) => {
    return (
      <div>
        <div
          className="card-news grid grid-nogutter nested-grid gap-3 bg-trl-blue border-round m-3 p-3 border-1 border-js-yellow hover:shadow-2 cursor-pointer"
          style={{ height: "100%" }}
          onClick={() => handleNavigate(item.link_noticia)}
        >
          <div className="col-12 h-2rem  border-round flex align-items-center gap-3 px-2">
            <span
              className="custom-badge w-1rem h-1rem bg-js-yellow"
              style={{ borderRadius: "100%" }}
            ></span>
            <p className="card-title m-0 text-xs text-gray-500">
              {" "}
              Poplavsky International Offices
            </p>
          </div>

          <div
            className="col-12 h-7rem border-round"
            style={{
              backgroundImage: `url(${item.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="col-12 h-12rem  border-round text-white">
            <h4 className="my-3 mx-2 text-sm">{item.titulo}</h4>
            <p className="description m-0 mx-2 text-xs font-light">
              {item.descripcion}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="NewsComponent grid grid-nogutter nested-grid  border-round gap-3 p-3 relative fadein animation-duration-1000 animation-iteration-1 animation-ease-in-out">
      <div className="col-12 grid grid-nogutter nested-grid justify-content-start align-items-center  border-round pb-2">
        <div className="col-12 px-4 md:px-6">
          <CustomDivider />
          <h2 className="text-white text-2xl md:text-4xl m m-2">News</h2>
          <h4 className="m-0 text-xs md:text-lg w-full font-normal text-gray-500">
            Explore the latest updates and success stories from our clients.
            Discover how Poplavsky is helping businesses thrive and grow in the
            United Arab Emirates.
          </h4>
        </div>
      </div>

      <div
        className="col-12 grid grid-nogutter nested-grid justify-content-center align-items-center  border-round gap-3 px-2 md:p-4 md:px-8"
        style={{ minHeight: "30rem" }}
      >
        <Carousel
          value={noticias}
          numVisible={4}
          numScroll={4}
          responsiveOptions={responsiveOptions}
          className="hidden md:block w-full"
          circular
          autoplayInterval={10000}
          itemTemplate={noticiaTemplate}
        />
        <Carousel
          value={noticias}
          numVisible={4}
          numScroll={4}
          responsiveOptions={responsiveOptions}
          className="block md:hidden w-full"
          circular
          autoplayInterval={10000}
          itemTemplate={noticiaMobileTemplate}
          showNavigators={false}
        />
      </div>
    </div>
  );
}
