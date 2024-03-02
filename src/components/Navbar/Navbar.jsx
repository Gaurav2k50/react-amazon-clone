import "./Navbar.css";
import React, { useState } from "react";
import { BiSolidCart } from "react-icons/bi";
import { TiArrowSortedUp } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import indianflag from "../../assets/navbar/indianflag.png";
import amazonLogo from "../../assets/navbar/amazon-logo.png";

const Navbar = () => {
  // for hiding the Language box
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  return (
    <div className="nav-container">
      {/* Nev Left*/}
      <div className="logo-img border-line">
        <img src={amazonLogo} alt="Amazon-Logo" className="logo-png" />
        <span className="logo-in">.in</span>
      </div>
      {/* Location */}
      <div className="location-box ">
        <span className="location-icon">
          <HiOutlineLocationMarker size="19px" />
        </span>
        <div className="location-text">
          <p className="loc-pin">Delivering to Delhi 201310</p>
          <p className="loc-update">Update location</p>
        </div>
      </div>

      {/* Nav Fill */}
      <div className="input-field">
        <select className="input-select">
          <option value="DEFAULT" disabled></option>
          <option value="search-alias=aps">All Categories</option>
          <option value="search-alias=alexa-skills">Alexa Skills</option>
          <option value="search-alias=amazon-devices">Amazon Devices</option>
          <option value="search-alias=fashion">Amazon Fashion</option>
          <option value="search-alias=nowstore">Amazon Fresh</option>
          <option value="search-alias=freshmeat">Amazon Fresh Meat</option>
          <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
          <option value="search-alias=appliances">Appliances</option>
          <option value="search-alias=mobile-apps">Apps &amp; Games</option>
          <option value="search-alias=audible">Audible Audiobooks</option>
          <option value="search-alias=baby">Baby</option>
          <option value="search-alias=beauty">Beauty</option>
          <option value="search-alias=stripbooks">Books</option>
          <option value="search-alias=automotive">Car &amp; Motorbike</option>
          <option value="search-alias=apparel">
            Clothing &amp; Accessories
          </option>
          <option value="search-alias=collectibles">Collectibles</option>
          <option value="search-alias=computers">
            Computers &amp; Accessories
          </option>
          <option value="search-alias=todays-deals">Deals</option>
          <option value="search-alias=electronics">Electronics</option>
          <option value="search-alias=furniture">Furniture</option>
          <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
          <option value="search-alias=gift-cards">Gift Cards</option>
          <option value="search-alias=grocery">
            Grocery &amp; Gourmet Foods
          </option>
          <option value="search-alias=hpc">Health &amp; Personal Care</option>
          <option value="search-alias=kitchen">Home &amp; Kitchen</option>
          <option value="search-alias=industrial">
            Industrial &amp; Scientific
          </option>
          <option value="search-alias=jewelry">Jewellery</option>
          <option value="search-alias=digital-text">Kindle Store</option>
          <option value="search-alias=luggage">Luggage &amp; Bags</option>
          <option value="search-alias=luxury-beauty">Luxury Beauty</option>
          <option value="search-alias=dvd">Movies &amp; TV Shows</option>
          <option value="search-alias=digital-music">MP3 Music</option>
          <option value="search-alias=popular">Music</option>
          <option value="search-alias=mi">Musical Instruments</option>
          <option value="search-alias=office-products">Office Products</option>
          <option value="search-alias=pets">Pet Supplies</option>
          <option value="search-alias=instant-video">Prime Video</option>
          <option value="search-alias=shoes">Shoes &amp; Handbags</option>
          <option value="search-alias=software">Software</option>
          <option value="search-alias=sporting">
            Sports, Fitness &amp; Outdoors
          </option>
          <option value="search-alias=specialty-aps-sns">
            Subscribe &amp; Save
          </option>
          <option value="search-alias=home-improvement">
            Tools &amp; Home Improvement
          </option>
          <option value="search-alias=toys">Toys &amp; Games</option>
          <option value="search-alias=under-ten-dollars">Under ₹500</option>
          <option value="search-alias=videogames">Video Games</option>
          <option value="search-alias=watches">Watches</option>
        </select>
        <input
          type="text"
          className="input-input-first"
          placeholder="Search Amazon.in"
        />
        <button className="search-btn">
          <AiOutlineSearch size="26px" />
        </button>
      </div>

      {/* Right-Side-Container-Start */}

      <div className="Language-Container">
        <div
          className="flag-icon-con"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <img src={indianflag} alt="Flag" className="flag" />
          <span className="en">EN</span>
          <RiArrowDropDownFill className="dropdown-icon" />
        </div>
        {/* here is hide and show */}
        {isVisible && (
          <div
            className="lang-sub-container "
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <span className="uparrow1">
              <TiArrowSortedUp size="2.2rem" />
            </span>
            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">English</span>-
              <span className="two-word-span">EN</span>
            </div>
            <div className="divider"></div>
            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">हिन्दी</span>-
              <span className="two-word-span">Hi</span>
            </div>
            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">தமிழ்</span>-
              <span className="two-word-span">TA</span>
            </div>

            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">తెలుగు</span>-
              <span className="two-word-span">TE</span>
            </div>
            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">ಕನ್ನಡ</span>-
              <span className="two-word-span">KN</span>
            </div>
            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">മലയാളം</span>-
              <span className="two-word-span">ML</span>
            </div>
            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">বাংলা</span>-
              <span className="two-word-span">BN</span>
            </div>
            <div className="lang-text">
              <input type="radio" />
              <span className="language-span-text">मराठी</span>-
              <span className="two-word-span">MR</span>
            </div>
            <p className="learn-more">Learn more</p>
            <div className="divider divider-second"></div>

            <span className="text-indian-flag">
              <img src={indianflag} alt="Flag" className="indian-flag" />
              <span className="language-bottom">
                You are shopping on <br />
                <span className="language-amazon">Amazon.in</span>
              </span>
            </span>

            <div className="language-region">
              <p>Change country/region.</p>
            </div>
          </div>
        )}
      </div>

      {/* Account & List  */}

      <div className="Account-List">
        <div
          className="signin-container"
          onMouseEnter={() => setIsVisible2(true)}
          onMouseLeave={() => setIsVisible2(false)}
        >
          <span className="hlw-span">Hello, sign in</span>
          <span className="account-span">
            Account & Lists
            <span className="DropDown-span">
              <RiArrowDropDownFill />
            </span>
          </span>
        </div>

        {isVisible2 && (
          <div
            className="account-main-div"
            onMouseEnter={() => setIsVisible2(true)}
            onMouseLeave={() => setIsVisible2(false)}
          >
            <div className="account-signin-div">
              <div className="up-arrow">
                <TiArrowSortedUp size="15px" />
              </div>
              <button className="account-signin-btn">Sign in</button>
              <p className="account-new-customer">New customer? Start here.</p>
              <div className="account-divider"></div>
            </div>
            <div className="account-items">
              <div className="account-item-left-side">
                <h2 className="account-your-list">Your Lists</h2>
                <span className="account-five">
                  <p>Create a Wish List</p>
                  <p>Wish from Any Website</p>
                  <p>Baby Wishlist</p>
                  <p>Discover Your Style</p>
                  <p>Explore Showroom</p>
                </span>
              </div>
              <span className="account-item-divider"></span>
              <div className="account-item-right-side">
                <h2 className="account-you-list-h2">Your Account</h2>
                <span className="account-eleven">
                  <p>Your Account</p>
                  <p>Your Orders</p>
                  <p>Your Wish List</p>
                  <p>Your Recommendations</p>
                  <p>Your Prime Membership</p>
                  <p>Your Prime Video</p>
                  <p>Your Subscribe & Save Items</p>
                  <p>Memberships & Subscriptions</p>
                  <p>Your Seller Account</p>
                  <p>
                    Manage Your Content and <br />
                    <span className="device">Devices</span>
                  </p>
                  <p>
                    Your Free Amazon Business <br />{" "}
                    <span className="device">Account</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Return & Order */}

      <div className="Return-Order">
        <div className="return-container">
          <span className="return-text">Returns</span>
          <span className="order-text">& Orders</span>
        </div>
      </div>

      {/* Cart Container */}

      <div className="Cart-container">
        <span className="cart-count">0</span>
        <span className="cart-icon">
          <BiSolidCart />
        </span>
        <span className="cart-text">Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
