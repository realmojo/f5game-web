import { PageHeader, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <PageHeader
      className="site-page-header"
      title={
        <div>
          {/* <Image
            style={{ width: 26, height: 26, marginRight: 4 }}
            src="https://f5game.s3.ap-northeast-2.amazonaws.com/f5game.png"
            alt="logo"
            preview={false}
          /> */}
          <img
            style={{
              width: 26,
              height: 26,
              marginRight: 10,
              display: "inline-block",
            }}
            src="https://f5game.s3.ap-northeast-2.amazonaws.com/f5game.png"
          />
          <h1
            style={{ cursor: "pointer", display: "inline-block" }}
            onClick={() => goHome()}
          >
            F5 HTML Games
          </h1>
        </div>
      }
    />
  );
};
