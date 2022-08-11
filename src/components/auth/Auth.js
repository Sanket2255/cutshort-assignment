import React, { useCallback, useState } from "react";
import Header from "./Header";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const Auth = (props) => {
  const [first, setfirst] = useState([1]);
  const [page, setPage] = useState(1);

  const activation = useCallback((number) => {
    switch (true) {
      case number == 1:
        console.log(" First Here>>>>>>");
        setPage(1);
        setfirst([1]);
        return;

      case number == 2:
        console.log(" Second Here>>>>>>");
        setPage(2);
        setfirst([1, 2]);
        console.log(first);
        return;

      case number == 3:
        setPage(3);
        setfirst([1, 2, 3]);
        return;

      case number == 4:
        setPage(4);
        setfirst([1, 2, 3, 4]);
        return;

      default:
        return <h1>No Pages found</h1>;
    }
  }, []);

  return (
    <>
      <Header selectedBox={first} parentCallBack={activation} />
      {page == 1 ? <Page1 parentCallBack={activation}></Page1> : <></>}
      {page == 2 ? <Page2 parentCallBack={activation}></Page2> : <></>}
      {page == 3 ? <Page3 parentCallBack={activation}></Page3> : <></>}
      {page == 4 ? <Page4 parentCallBack={activation}></Page4> : <></>}
    </>
  );
};

export default Auth;
