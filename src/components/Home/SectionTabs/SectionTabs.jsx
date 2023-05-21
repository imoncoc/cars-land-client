import React, {  useEffect, useState } from 'react';
import './SectionTabs.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleToy from '../../AllAboutToys/SingleToy/SingleToy'

const SectionTabs = () => {
    const [selectedTab, setSelectedTab] = useState("police");
    const [subToys, setSubToys] = useState([]);
    // console.log(subToys)
    // console.log(selectedTab)
    // const titles = ["police", "regular", "sports", "truck", "mini fire truck"];
    const tabPanel = ["police", "regular", "sports", "truck", "mini fire truck"];
    
    const handleTabs = (title) => {
      setSelectedTab(title)
      // console.log(title)
    }
    useEffect(() => {
      fetch(
        `https://cars-land-assignment-11-imoncoc.vercel.app/category/${selectedTab}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSubToys(data);
          // console.log(selectedTab);
        })
        .catch((error) => console.log(error));
    }, [selectedTab]);
    



    return (
      <>
        <div
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="container">
            <div className="row" style={{ marginTop: "10rem" }}>
              <div className="col d-flex flex-wrap text-uppercase justify-content-center my-0">
                <h1 className="fw-bold align-self-center mx-1">Shop By</h1>
                <h1 className="section-title--special">Category</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row my-5">
              <Tabs>
                <TabList>
                  <Tab onClick={() => handleTabs("police")}>Police</Tab>
                  <Tab onClick={() => handleTabs("regular")}>Regular</Tab>
                  <Tab onClick={() => handleTabs("sports")}>Sports</Tab>
                  <Tab onClick={() => handleTabs("truck")}>Truck</Tab>
                  <Tab onClick={() => handleTabs("mini fire truck")}>
                    Mini fire truck
                  </Tab>
                </TabList>

                {tabPanel &&
                  tabPanel.map((toy, index) => (
                    <TabPanel key={index}>
                      <div className="row my-5">
                        {subToys.map((toy) => (
                          <SingleToy toy={toy} key={toy._id}></SingleToy>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
              </Tabs>
            </div>
          </div>
        </div>
      </>
    );
};

export default SectionTabs;