import React, { useState } from "react";
import "./Footer.css";
import amazonlogo from "../../assets/footer/amazon-logo.png";
import indianflag from "../../assets/footer/indianflag.png";
import { CiGlobe } from "react-icons/ci";
import { PiCaretUpDownDuotone } from "react-icons/pi";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="footer-main-container">
      {/* 1st Div-Container */}

      <div className="first-main-container">
        <div className="first-sub-container">
          <div className="see-personalized-recommendations">
            See personalized recommendations
          </div>
          <span>
            <button className="signin-btn">Sign in</button>
          </span>
          <div className="new-customer">
            New customer? <span className="start-here">Start here</span>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="back">Back to top</div>

      <div className="connect-main-container">
        <div className="connect-sub-container">
          {/* 1st div */}
          <div className="get-to-know-us common-div">
            <div className="title">Get to Know Us</div>
            <ul className="footer-ul">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          {/* 2nd div */}
          <div className="connect-with-us common-div">
            <div className="title">Connect with Us</div>
            <ul className="footer-ul">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          {/* 3rd div */}
          <div className="make-money-with-us common-div">
            <div className="title">Make Money with Us</div>
            <ul className="footer-ul">
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>
          {/* 4th div */}
          <div className="let-us-help-you common-div  ">
            <div className="title">Let Us Help You</div>
            <ul className="footer-ul">
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Protect and Build Your Brand</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        {/* Country */}
        <div className="counter-name-container">
          <div className="logo-lan-container">
            <div className="logo-container">
              <img src={amazonlogo} alt="amazon-logo" className="amazon-logo" />
            </div>
            <div
              className="lan-container"
              onMouseEnter={() => setVisible(true)}
              // onMouseOut={() => setVisible(false)}
            >
              <span className="globe-icon">
                <CiGlobe />
              </span>
              <label
                onMouseEnter={() => setVisible(true)}
                onMouseOut={() => setVisible(false)}
              >
                English
              </label>
              <div className="language-container">
                {visible && (
                  <div
                    className="lang-sub-container "
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                  >
                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">English</span>-
                      <span className="two-word-span">EN</span>
                    </div>
                    <div className="divider"></div>
                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">हिन्दी</span>-
                      <span className="two-word-span">Hi</span>
                    </div>
                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">தமிழ்</span>-
                      <span className="two-word-span">TA</span>
                    </div>

                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">తెలుగు</span>-
                      <span className="two-word-span">TE</span>
                    </div>
                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">ಕನ್ನಡ</span>-
                      <span className="two-word-span">KN</span>
                    </div>
                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">മലയാളം</span>-
                      <span className="two-word-span">ML</span>
                    </div>
                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">বাংলা</span>-
                      <span className="two-word-span">BN</span>
                    </div>
                    <div className="lang-text">
                      <input type="radio" className="radio" />
                      <span className="language-span-text">मराठी</span>-
                      <span className="two-word-span">MR</span>
                    </div>
                    <p className="learn-more">Learn more</p>
                    <div className="divider divider-second"></div>

                    <span className="text-indian-flag">
                      <img
                        src={indianflag}
                        alt="Flag"
                        className="indian-flag"
                      />
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
              <span
                onMouseEnter={() => setVisible(true)}
                // onMouseOut={() => setVisible(false)}
                className="top-bottom-arrow"
              >
                <PiCaretUpDownDuotone />
              </span>
            </div>
          </div>
          <div className="country-container">
            <ul className="country-ul">
              <div className="united-fifteen">
                <li>Australia</li>
                <li>Brazil</li>
                <li>Canada</li>
                <li>China</li>
                <li>France</li>
                <li>Germany</li>
                <li>Italy</li>
                <li>Japan</li>
                <li>Mexico</li>
                <li>Netherlands</li>
                <li>Poland</li>
                <li>Singapore</li>
                <li>Spain</li>
                <li>Turkey</li>
                <li>United Arab Emirates</li>
              </div>
              <div className="united-two">
                <li>United Kingdom</li>
                <li>United States</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer-Bottom-Container */}
      <div className="footer-bottom-container">
        <div className="footer-link-container">
          <table className="table">
            <tbody>
              <tr className="tr-1">
                <td className="td-1">
                  <h4>AbeBooks</h4>
                  <span>
                    Books, art & <br />
                    collectibles
                  </span>
                </td>
                <td className="td-1">
                  <h4>Amazon Web Services</h4>
                  <span>
                    Scalable Cloud <br /> Computing Services
                  </span>
                </td>
                <td className="td-1">
                  <h4> Audible</h4>
                  <span>
                    Download <br /> Audio Books
                  </span>
                </td>
                <td className="td-1">
                  <h4>IMDb</h4>
                  <span>
                    Movies, TV <br />& Celebrities
                  </span>
                </td>
              </tr>
              <tr className="tr-2">
                <td className="td-2">
                  <h4>Shopbop</h4>
                  <span>
                    Designer <br /> Fashion Brands
                  </span>
                </td>
                <td className="td-2">
                  <h4>Amazon Business</h4>
                  <span>
                    Everything For <br /> Your Business
                  </span>
                </td>
                <td className="td-2">
                  <h4> Prime Now</h4>
                  <span>
                    2-Hour Delivery <br /> on Everyday Items
                  </span>
                </td>
                <td className="td-2">
                  <h4>Amazon Prime Music</h4>
                  <span>
                    100 million songs, ad-free <br /> Over 15 million podcast
                    episodes
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Conditions */}

        <div className="conditions-container">
          <div className="conditions-sub-con">
            <ul className="conditions-ul">
              <li>Conditions of Use & Sale</li>
              <li>Privacy Notice</li>
              <li>Interest-Based Ads</li>
            </ul>
          </div>
          <div className="copyright">
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
