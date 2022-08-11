import React, { useState } from "react";
import { Col, Divider, Row } from "antd";
import MyImage from '../../../src/ss.png'

const Header = ({selectedBox, parentCallBack}) => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row " span={24}>
          <div className="eden">
              <div className="imageClass">
                <img src={MyImage} className="image" alt="logo" />
              </div>
              <div className="heading">
                <b><h1>Eden</h1></b>
              </div>
            </div>
          </Col>
        </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <div className="container">
            <div className="pagination">
              <div className="stepper-box">
                <div className="step-box" onClick={()=> parentCallBack(1)}>
                  <div className={`circle ${selectedBox.includes(1) ? "activeCircle" : ""}`} >1</div>
                  <div className="line">
                    <div className={`line-adj ${selectedBox.includes(1) ? "activeLine" : ""}`}></div>
                  </div>
                </div>
                <div className="step-box" onClick={()=> parentCallBack(2)}>
                  <div className="line">
                    <div className={`line-adj ${selectedBox.includes(2) ? "activeLine" : ""}`}></div>
                  </div>
                  <div className={`circle ${selectedBox.includes(2) ? "activeCircle" : ""}`}>2</div>
                  <div className="line">
                    <div className={`line-adj ${selectedBox.includes(2) ? "activeLine" : ""}`}></div>
                  </div>
                </div>
                <div className="step-box" onClick={()=> parentCallBack(3)}>
                  <div className="line">
                    <div className={`line-adj ${selectedBox.includes(3) ? "activeLine" : ""}`}></div>
                  </div>
                  <div className={`circle ${selectedBox.includes(3) ? "activeCircle" : ""}`}>3</div>
                  <div className="line">
                    <div className={`line-adj ${selectedBox.includes(3) ? "activeLine" : ""}`}></div>
                  </div>
                </div>
                <div className="step-box" onClick={()=> parentCallBack(4)}>
                  <div className="line">
                    <div className={`line-adj ${selectedBox.includes(4) ? "activeLine" : ""}`}></div>
                  </div>
                  <div className={`circle ${selectedBox.includes(4) ? "activeCircle" : ""}`}>4</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      

      {/* <div>
          {pageNumber.map(page => {page})};
      </div> */}
    </>
  );
};

export default Header;
