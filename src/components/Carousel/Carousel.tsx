import React from "react";
import Slider, { Settings } from "react-slick";
import withLogger from "@/components/WithNameLogging/WithNameLogging";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Carousel: React.FC<Props> = ({ children }) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div
      className={`
        min-h-1 
        min-w-1 
        [&_.slick-track]:flex
        [&_.slick-list]:overflow-hidden
    `}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default withLogger(Carousel);
