import React, { useState } from "react";
import "../NavFlyOut/NavFlyOut.css";
import { HiMenu } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";
import fresh from "../../assets/navflyout/fresh.png";
import freshmeat from "../../assets/navflyout/freshmeat.png";
import NewLaunches from "../../assets/navflyout/NewLaunches.jpg";
import SideNavBar from "../SideNavBar/SideNavBar";

const NavFlyOut = () => {
  const [isVisible, setIsVisible] = useState(false);

  // for SideNavBar
  const [open, setOpen] = useState(false);

  const openSlider = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navfly-main-container">
        <div className="menu-icon">
          <HiMenu size="24px" className="himenu-icon" onClick={openSlider} />
          {open && <SideNavBar />}
          <span className="all-text">All</span>
        </div>

        {/* Fresh */}

        <div
          className="fresh-container"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <div className="fresh-sub-container">
            <p className="fresh-text">Fresh</p>
            <IoMdArrowDropdown size="16px" className="fresh-icon" />
          </div>
          {isVisible && (
            <div
              className="shop-groceries"
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              <span className="fresh-up-arrow">
                <TiArrowSortedUp size="30px" />
              </span>
              <div className="shop-grocerie-container">
                <div className="shop-groceries-heading">
                  <p className="shop-gro-text">Shop groceries</p>
                </div>
                <div className="fresh-img">
                  <div className="fresh-img1">
                    <img
                      src={fresh}
                      alt="fresh"
                      height="80vh"
                      width="80%"
                      className="img1"
                    />
                  </div>
                  <div className="fresh-img2">
                    <img
                      src={freshmeat}
                      alt="freshmeat-img"
                      height="30%"
                      width="80%"
                      className="img2"
                    />
                  </div>
                </div>
                <div className="shop-grocerie-divider"></div>
                <div className="all-grocerie">Shop all groceries on Amazon</div>
              </div>
            </div>
          )}
        </div>

        {/* Amazon miniTV */}
        <div className="amazon-minitv-main-container">
          <p>Amazon miniTV</p>
        </div>

        {/* Sell */}
        <div className="sell">
          <p>Sell</p>
        </div>

        {/* BestSeller */}
        <div className="bestseller">
          <p>Best Sellers</p>
        </div>

        {/* Mobile */}

        <div className="mobile">
          <p>Mobiles</p>
        </div>

        {/* Today's Deals */}

        <div className="today-deal">
          <p>Today's Deals</p>
        </div>

        {/* Electronics */}

        <div className="electronics">
          <p>Electronics</p>
        </div>

        {/* Customer Services */}

        <div className="customer-services">
          <p> Customer Services</p>
        </div>

        {/* New Launches */}

        <div className="new-launches">
          <img
            src={NewLaunches}
            alt="NewLaunches"
            height="99%"
            className="img1"
          />
        </div>
      </div>
    </>
  );
};

export default NavFlyOut;
