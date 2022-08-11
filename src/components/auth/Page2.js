import React from "react";
import "antd/dist/antd.variable.min.css";
import { Form, Input, Button } from "antd";
import Pagecss from "./Pagecss.css";
import { Col, Divider, Row } from 'antd';

const Page2 = ({parentCallBack}) => {

  const onFinish = (values) => {
    console.log(values);
      parentCallBack(3);
  };

  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={24}>
          <div className="headline">
            <h1>Let's set up a home for all your work</h1>
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={24}>
          <div className="subheading">
            you can always create another workspace later.
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={24}>
          <div className="container">
            <Form layout="vertical" 
                  onFinish={onFinish}>
              <Form.Item  label="Workspace Name"  name="workspace name">
                <Input className="input" placeholder="Eden" />
              </Form.Item>
              <Form.Item label="Workspace URL (optional)"  name="workspace url (optional)">
                <Input
                  className="input"
                  addonBefore="www.eden.com/"
                  placeholder="Example"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  className="button"
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

export default Page2;
