import React from "react";
import "antd/dist/antd.variable.min.css";
import { Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Pagecss from "./Pagecss.css";
import { Col, Row } from "antd";

const Page4 = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="check">
            <CheckCircleFilled style={{color:"#664de5"}}/>
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="headline-pg4">
            <h1>Congratulations, Eren!</h1>
          </div>
        </Col>
      </Row>


      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="subheading">
          You have completed onboarding, you can start using the Eden!
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="container">
            <Button className="pg-btn" >Launch Eden</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Page4;
