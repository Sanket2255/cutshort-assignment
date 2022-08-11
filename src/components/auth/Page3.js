import React from "react";
import "antd/dist/antd.variable.min.css";
import {  Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TeamOutlined } from "@ant-design/icons";
import Pagecss from "./Pagecss.css";
import { Col, Row } from "antd";

const Page3 = ({parentCallBack}) => {

  const onClick = (values) => {
      console.log(values);
      parentCallBack(4);
  };

  const clickMe = () => {
    console.log("For Myself Clicked!");
  };

  const click = () => {
    console.log("With my team Clicked!");
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="headline">
            <h1>How are you planning to use Eden?</h1>
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="subheading">
            We'll streamline your setup experience accordingly.
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row " span={24}>
          <div className="container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row-pl-0" span={12}>
                <div className="content" onClick={clickMe}>
                  <UserOutlined className="innercontent" />
                  <h4 className="innercontent font-face-gm2 ">For Myself</h4>
                  <h5 className="innercontent">Write better. Think more clearly. Stay organized.</h5>
                </div>
              </Col>
              <Col className="gutter-row-pl-0" span={12}>
                <div className="content" onClick={click}>
                  <TeamOutlined className="innercontent" />
                  <h4 className="innercontent font-face-gm2 ">With my team</h4>
                  <h5 className="innercontent">Write better. Think more clearly. Stay organized.</h5>
                </div>
              </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={24}>
                <Button className="pg-btn" onClick={onClick}>
                  Create Workspace
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Page3;
