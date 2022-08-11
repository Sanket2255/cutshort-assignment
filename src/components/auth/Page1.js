import React, { useState } from "react";
import "antd/dist/antd.variable.min.css";
import { Form, Input, Button, Radio } from "antd";
import Pagecss from "./Pagecss.css";
import { Col, Row } from "antd";

const Page1 = (props) => {
  
  const onFinish = (values) => {
    console.log(values);
    props.parentCallBack(2);
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="headline">
            <h1>Welcome! First things first...</h1>
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="subheading">you can always change them later.</div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="container">
            <Form
            layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item label="Username"  name="username">
                <Input
                  className="input"
                  placeholder="Steve Jobs"
                />
              </Form.Item>
              <Form.Item label="Displayname"  name="displayname">
                <Input
                  className="input"
                  placeholder="Steve"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  className="button"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Create Workspace
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Page1;
