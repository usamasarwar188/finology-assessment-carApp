import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

function DetailTabs({ defaultKey, tabList }) {
  const [key, setKey] = useState(defaultKey);
  return (
    <div className="d-flex mt-3 justify-content-center">
      <div className="col-sm-8">
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          {tabList.map((tabItem) => (
            <Tab eventKey={tabItem.key} title={tabItem.title}>
              {<tabItem.component {...tabItem.componentProps} />}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default DetailTabs;
