import React from "react";
import {
  FaMailBulk,
  FaPhoneAlt,
  FaChevronDown,
  FaUserAlt,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
//styling
import "./TopBar.css";
import { Text } from "./TopBar.styles";

//component
// import Logo from "../Logo";

const TopBar = () => (
  <nav className="navbar fixed-top navbar-light top-bar-bg">
    <div className="container ">
      <div className="d-flex justify-content-between p-2">
        <div>
          <Text>
            <FaMailBulk className="me-2" />
            mhhasanul@gmail.com
          </Text>
        </div>
        <div>
          <Text>
            <FaPhoneAlt className="me-2" />
            (12345)67890
          </Text>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <Text>
            English
            <FaChevronDown className="ms-2" />
          </Text>
        </div>
        <div>
          <Text>
            USD
            <FaChevronDown className="ms-2" />
          </Text>
        </div>
        <div>
          <Text>
            Login
            <FaUserAlt className="ms-2" />
          </Text>
        </div>
        <div>
          <Text>
            Wishlist
            <FaHeart className="ms-2" />
          </Text>
        </div>
        <div>
          <Text>
            <FaShoppingCart className="ms-2" />
          </Text>
        </div>
      </div>
    </div>
  </nav>
);

export default TopBar;
