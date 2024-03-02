import React from "react";
import "./SectionMain.css";
import Section from "./Section/Section";

import cart1a from "../../assets/section/cart1a.jpg";
import cart1b from "../../assets/section/cart1b.jpg";
import cart1c from "../../assets/section/cart1c.jpg";
import cart1d from "../../assets/section/cart1d.jpg";

import cart2a from "../../assets/section/cart2a.jpg";
import cart2b from "../../assets/section/cart2b.jpg";
import cart2c from "../../assets/section/cart2c.jpg";
import cart2d from "../../assets/section/cart2d.jpg";

import cart3a from "../../assets/section/cart3a.jpg";
import cart3b from "../../assets/section/cart3b.jpg";
import cart3c from "../../assets/section/cart3c.jpg";
import cart3d from "../../assets/section/cart3d.jpg";

import cart4a from "../../assets/section/cart4a.jpg";
import cart4b from "../../assets/section/cart4b.jpg";
import cart4c from "../../assets/section/cart4c.jpg";
import cart4d from "../../assets/section/cart4d.jpg";

import cart5a from "../../assets/section/cart5a.jpg";
import cart5b from "../../assets/section/cart5b.jpg";
import cart5c from "../../assets/section/cart5c.jpg";
import cart5d from "../../assets/section/cart5d.jpg";

import cart6a from "../../assets/section/cart6a.jpg";
import cart6b from "../../assets/section/cart6b.jpg";
import cart6c from "../../assets/section/cart6c.jpg";
import cart6d from "../../assets/section/cart6d.jpg";

import cart7a from "../../assets/section/cart7a.jpg";
import cart7b from "../../assets/section/cart7b.jpg";
import cart7c from "../../assets/section/cart7c.jpg";
import cart7d from "../../assets/section/cart7d.jpg";

import cart8a from "../../assets/section/cart8a.jpg";
import cart8b from "../../assets/section/cart8b.jpg";
import cart8c from "../../assets/section/cart8c.jpg";
import cart8d from "../../assets/section/cart8d.jpg";

const SectionMain = () => {
  // Define the content for reusability
  const sectionData = {
    headerText: "Revamp your home in style",
    images: [
      { image: cart1a, text: "Cushion covers, bedsheets & more" },
      { image: cart1b, text: "Figurines, vases and more" },
      { image: cart1c, text: "Home storage" },
      { image: cart1d, text: "Lighting solutions" },
    ],
    footerText: "Explore all",
  };

  const sectionData2 = {
    headerText: "Up to 75% off | Headphones",
    images: [
      { image: cart2a, text: "Up to 75% off | boAt" },
      { image: cart2b, text: "Up to 75% off | boult" },
      { image: cart2c, text: "Up to 75% off | Noise" },
      { image: cart2d, text: "Up to 75% off | Zebronics" },
    ],
    footerText: "See all offers",
  };

  const sectionData3 = {
    headerText: "Starting ₹99 | All your home improvement...",
    images: [
      { image: cart3a, text: "Spin mops, wipes & more" },
      { image: cart3b, text: "Bathroom hardware & accessories" },
      { image: cart3c, text: "Hammers, screwdrivers & more" },
      { image: cart3d, text: "Extension boards, plugs & more" },
    ],
    footerText: "Explore all",
  };

  const sectionData4 = {
    headerText: "Appliances for your home | Up to 55% off",
    images: [
      { image: cart4a, text: "Air conditioners" },
      { image: cart4b, text: "Refrigerators" },
      { image: cart4c, text: "Microwaves" },
      { image: cart4d, text: "Washing machines" },
    ],
    footerText: "See more",
  };

  const sectionData5 = {
    headerText: "Up to 60% off | Styles for women",
    images: [
      { image: cart5a, text: "Women's Clothing" },
      { image: cart5b, text: "Footwear+Handbags" },
      { image: cart5c, text: "Watches" },
      { image: cart5d, text: "Fashion jewellery" },
    ],
    footerText: "End of season sale",
  };

  const sectionData6 = {
    headerText: "Up to 60% off | Styles for men",
    images: [
      { image: cart6a, text: "Clothing" },
      { image: cart6b, text: "Footwear" },
      { image: cart6c, text: "Watches" },
      { image: cart6d, text: "Bags & wallets" },
    ],
    footerText: "End of season sale",
  };

  const sectionData7 = {
    headerText: "Baby care & fun games | Amazon Brands & more",
    images: [
      { image: cart7a, text: "Minimum 50% off | Diapers & wipes" },
      { image: cart7b, text: "Minimum 40% off | Baby cardels & more" },
      { image: cart7c, text: "Minimum 40% off | Soft toys & Indoor games" },
      { image: cart7d, text: "Minimum 40% off | Outdoor games" },
    ],
    footerText: "See more",
  };

  const sectionData8 = {
    headerText: "Amazon Fresh | Great prices | Fruits & vegetables",
    images: [
      { image: cart8a, text: "Fruits" },
      { image: cart8b, text: "Vegetables" },
      { image: cart8c, text: "Season’s special" },
      { image: cart8d, text: "Premium & exotic" },
    ],
    footerText: "See all offers",
  };

  return (
    <div className="section-main-container">
      {/* Pass the sectionData as props */}

      <Section
        className="section-item"
        headerText={sectionData.headerText}
        images={sectionData.images}
        footerText={sectionData.footerText}
      />

      <Section
        className="section-item"
        headerText={sectionData2.headerText}
        images={sectionData2.images}
        footerText={sectionData2.footerText}
      />

      <Section
        className="section-item"
        headerText={sectionData3.headerText}
        images={sectionData3.images}
        footerText={sectionData3.footerText}
      />
      <Section
        className="section-item"
        headerText={sectionData4.headerText}
        images={sectionData4.images}
        footerText={sectionData4.footerText}
      />
      <Section
        className="section-item"
        headerText={sectionData5.headerText}
        images={sectionData5.images}
        footerText={sectionData5.footerText}
      />
      <Section
        className="section-item"
        headerText={sectionData6.headerText}
        images={sectionData6.images}
        footerText={sectionData6.footerText}
      />
      <Section
        className="section-item"
        headerText={sectionData7.headerText}
        images={sectionData7.images}
        footerText={sectionData7.footerText}
      />
      <Section
        className="section-item"
        headerText={sectionData8.headerText}
        images={sectionData8.images}
        footerText={sectionData8.footerText}
      />
    </div>
  );
};

export default SectionMain;
