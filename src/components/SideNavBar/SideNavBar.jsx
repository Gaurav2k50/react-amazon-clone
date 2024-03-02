import React, { useState } from "react";
import "./SideNavBar.css";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNavigateNext, MdOutlineExpandLess } from "react-icons/md";

const SideNavBar = () => {
  const [close, setClose] = useState(false);

  const closeBar = () => {
    setClose(!close);
  };

  return (
    <>
      {!close && (
        <div className="sidenav-main-container">
          <span className="close-sign">
            <RxCross1 size="26.3px" className="close-icon" onClick={closeBar} />
          </span>

          {/* NavBar */}

          <div className="hlw-signin">
            <div className="hlw-icon-container">
              <span className="profile-icon">
                <CgProfile size="32px" className="pro-icon" />
              </span>
              <span className="icon-text">Hello, sign in</span>
            </div>
          </div>

          {/* Trending */}
          <ul>
            <li className="hmenu-title">Trending</li>
            <li className="hmenu-item">Best Sellers</li>
            <li className="hmenu-item">New Releases</li>
            <li className="hmenu-item">Movers and Shakers</li>
            <li className="hmenu-separator"></li>
            <li>
              <div className="hmenu-item-div hmenu-title">
                Digital Content and Devices
              </div>
            </li>

            <li className="hmenu-item">
              <div className="hmenu-item-div">Echo & Alexa</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Fire TV</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Kindle E-Readers & eBooks</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Audible Audiobooks</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Amazon Prime Video</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Amazon Prime Music</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>

            <li className="hmenu-separator"></li>

            <li>
              <div className="hmenu-item-div hmenu-title">Shop by Category</div>
            </li>

            <li className="hmenu-item">
              <div className="hmenu-item-div">Mobiles, Computers</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">TV, Appliances, Electronics</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Men's Fashion</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Women's Fashion</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>

            <li className="hmenu-separator"></li>

            <li className="hmenu-item">
              <div className="hmenu-item-div">Home, Kitchen, Pets</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Beauty, Health, Grocery</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">
                Sports, Fitness, Bags, Luggage
              </div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">
                Toys, Baby Products, Kids' Fashion
              </div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Car, Motorbike, Industrial</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Books</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div">Movies, Music & Video Games</div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">
              <div className="hmenu-item-div ">See all</div>
              <MdOutlineExpandLess className="hmenu-arrow-next" />
            </li>

            <li>
              <div className="hmenu-item-div hmenu-title">
                Programs & Features
              </div>
            </li>
            <li className="hmenu-item">Today's Deals</li>

            <li className="hmenu-item">
              <div className="hmenu-item-div">
                Gift Cards & Mobile Recharges
              </div>
              <MdOutlineNavigateNext className="hmenu-arrow-next" />
            </li>
            <li className="hmenu-item">Amazon Launchpad</li>
            <li className="hmenu-item">Handloom and Handicrafts</li>

            <li className="hmenu-separator"></li>

            <li className="hmenu-item">Amazon Custom</li>
            <li className="hmenu-item">Flight Tickets</li>
            <li className="hmenu-item">Buy more, Save more</li>
            <li className="hmenu-item">Clearance store</li>
            <li className="hmenu-item">International Brands</li>
            <li className="hmenu-item">
              <div className="hmenu-item-div ">See all</div>
              <MdOutlineExpandLess className="hmenu-arrow-next" />
            </li>

            <li className="hmenu-separator"></li>

            <li>
              <div className="hmenu-item-div hmenu-title">Help & Sittings</div>
            </li>

            <li className="hmenu-item">Your Account</li>
            <li className="hmenu-item">Customer Service</li>
            <li className="hmenu-item">Sign in</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideNavBar;
