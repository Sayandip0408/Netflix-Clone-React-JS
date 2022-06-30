import React, { Fragment } from "react";
import Header from "./Header";
import ComponentEnd from "./ComponentEnd";
import ComponentTI from "./ComponentTI";
import ComponentIT from "./ComponentIT";
import data from "./TextImage";
import tv from "./tv.png";
import img from "./img.png";
import device from "./devices.png";
import mobile from "./mobile.jpg";


function App() {
  return (
    <Fragment>
      <Header />
      <ComponentTI h1={data[1].h1} p={data[1].p} img={tv} />
      <ComponentIT h1={data[2].h1} p={data[2].p} img={mobile} />
      <ComponentTI h1={data[3].h1} p={data[3].p} img={device} />
      <ComponentIT h1={data[4].h1} p={data[4].p} img={img} />
      <ComponentEnd />
    </Fragment>
  );
}

export default App;
