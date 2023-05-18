import React from 'react';
import './SectionTabs.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SectionTabs = () => {
    const tabData = [
      {
        id: 1,
        title: "The Simpsons",
        nestedTabs: [
          {
            id: 11,
            title: "Homer Simpson",
            content: "Husband of Marge; father of Bart, Lisa, and Maggie.",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png",
          },
          {
            id: 12,
            title: "Marge Simpson",
            content: "Wife of Homer; mother of Bart, Lisa, and Maggie.",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png",
          },
          // Add more nested tabs for The Simpsons as needed
        ],
      },
      {
        id: 2,
        title: "Futurama",
        nestedTabs: [
          {
            id: 21,
            title: "Philip J. Fry",
            content:
              "Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png",
          },
          {
            id: 22,
            title: "Turanga Leela",
            content:
              "Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png",
          },
          // Add more nested tabs for Futurama as needed
        ],
      },
      // Add more top-level tabs as needed
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto my-5">
            <Tabs forceRenderTabPanel defaultIndex={1}>
              <TabList>
                {tabData.map((tab) => (
                  <Tab key={tab.id}>
                    {tab.title}
                  </Tab>
                ))}
              </TabList>

              {tabData.map((tab) => (
                <TabPanel key={tab.id}>
                  <Tabs forceRenderTabPanel>
                    <TabList>
                      {tab.nestedTabs.map((nestedTab) => (
                        <Tab key={nestedTab.id}>{nestedTab.title}</Tab>
                      ))}
                    </TabList>

                    {tab.nestedTabs.map((nestedTab) => (
                      <TabPanel key={nestedTab.id}>
                        <div className="d-flex justify-content-center">
                          <img src={nestedTab.imageUrl} alt={nestedTab.title} />
                          <p>{nestedTab.content}</p>
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    );
};

export default SectionTabs;