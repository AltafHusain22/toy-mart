import React, { useEffect, useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "./tabs.css";
import Racer from "./Racer/Racer";
import TurboCharge from "./TurboCharge/TurboCharge";
import SpeedyMoon from "./SpeedyMoon/SpeedyMoon";

const CategoryTabs = () => {
  const [speedies, setSpeedies] = useState([]);
  const [turbos, setTurboThrillers] = useState([]);
  const [SpeedyMoons, setSpeedyMoon] = useState([]);

  useEffect(() => {
    // speedies
    fetch(`http://localhost:5000/TurboThrillers`)
      .then((res) => res.json())
      .then((data) => {
        setTurboThrillers(data.products);
      });
    // turbos
    fetch(`http://localhost:5000/racerSpeedy`)
      .then((res) => res.json())
      .then((data) => {
        setSpeedies(data.products);
      });

    // speedymons

    fetch(`http://localhost:5000/SpeedDemon`)
      .then((res) => res.json())
      .then((data) => {
        setSpeedyMoon(data.products);
      });
  }, []);

  return (
    <section className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 md:mb-12">
      <h2 className="font-bold md:text-5xl text-4xl mb-10 text-center mt-10">
        Shop by category
      </h2>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        {/* for first tab */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Racer Speedy</Tab>
              <Tab>Turbocharged Thrillers</Tab>
              <Tab>Speed Demon Series</Tab>
            </TabList>

            {/* racer speedy tab */}
            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {speedies.map((racers) => (
                  <Racer key={racers._id} racers={racers}></Racer>
                ))}
              </div>
            </TabPanel>
            {/* turbocharge tab */}
            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {turbos.map((turbo) => (
                  <TurboCharge key={turbo._id} turbo={turbo}></TurboCharge>
                ))}
              </div>
            </TabPanel>
            {/* speedyMoon */}
            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {SpeedyMoons.map((SpeedyMoonToys) => (
                  <SpeedyMoon
                    key={SpeedyMoon._id}
                    SpeedyMoonToys={SpeedyMoonToys}
                  ></SpeedyMoon>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>

        {/* for 2nd tab */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Extreme Speedsters</Tab>
              <Tab>Turbo Boosters</Tab>
              <Tab>Firestorm Racers</Tab>
            </TabList>
          </Tabs>
        </TabPanel>

        {/* for 3nd tab */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Mega Off-Roaders</Tab>
              <Tab>Monster Smashers</Tab>
              <Tab>Beastly Crushers</Tab>
            </TabList>
          </Tabs>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryTabs;
