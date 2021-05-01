import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <h3 className="text-xl m-4">
        Made with{" "}
        <img
          className="inline-block w-6"
          src="https://static.djangoproject.com/img/fundraising-heart.cd6bb84ffd33.svg"
          alt=""
        />{" "}
        by Karan
      </h3>
    </div>
  );
};

export default Footer;
