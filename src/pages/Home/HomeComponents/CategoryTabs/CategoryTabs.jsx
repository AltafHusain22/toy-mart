import React, { useEffect, useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "./tabs.css";
import Racer from "./Racer/Racer";
import TurboCharge from "./TurboCharge/TurboCharge";
import SpeedyMoon from "./SpeedyMoon/SpeedyMoon";
import ExtreamSpeed from "./ExtreamSpeed/ExtreamSpeed";
import TurbuBooster from "./TurbuBooster/TurbuBooster";
import FireStrom from "./FireStrom/FireStrom";
import MegaRoaders from "./MegaRoaders/MegaRoaders";
import Monster from "./Monster/Monster";
import BeastlyCrushers from "./BeastlyCrushers/BeastlyCrushers";

const CategoryTabs = () => {
  const [speedies, setSpeedies] = useState([]);
  const [turbos, setTurboThrillers] = useState([]);
  const [SpeedyMoons, setSpeedyMoon] = useState([]);
  const [extreamSpeeds, setExtreamSpeed] = useState([]);
  const [turboBoosters, setTurboBooster] = useState([]);
  const [fireStroms, setFireStroms] = useState([]);
  const [megaRoaders, setMegaRoaders] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [beastlyCrushers, setBeastlyCrushers] = useState([]);

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
    // extreamspeeds
    fetch(`http://localhost:5000/extremeSpeedsters`)
      .then((res) => res.json())
      .then((data) => {
        setExtreamSpeed(data.products);
      });
    // turboBooster
    fetch(`http://localhost:5000/turboBooster`)
      .then((res) => res.json())
      .then((data) => {
        setTurboBooster(data.products);
      });

    // firestrom
    fetch(`http://localhost:5000/fireStroms`)
      .then((res) => res.json())
      .then((data) => {
        setFireStroms(data.products);
      });
    // megaOffRoaders
    fetch(`http://localhost:5000/megaOffRoaders`)
      .then((res) => res.json())
      .then((data) => {
        setMegaRoaders(data.products);
      });
    // Monsters toys
    fetch(`http://localhost:5000/monsterSmashers`)
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data.products);
      });
    // BeastlyCrushers
    fetch(`http://localhost:5000/beastlyCrushers`)
      .then((res) => res.json())
      .then((data) => {
        setBeastlyCrushers(data.products);
      });

  }, []);

  return (
    <section className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 md:mb-12">
      <h2 className="font-bold md:text-5xl text-4xl mb-10 text-center mt-10">
        Shop by categor
      </h2>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        {/* main tab list */}
        <TabList>
          <Tab>Speedy Racer</Tab>
          <Tab>Turbo Blaze</Tab>
          <Tab>Monster Crusher</Tab>
        </TabList>

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
                  <Racer key={racers._id}  racers={racers}></Racer>
                )) }
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

            {/* Extreme Speedsters */}
            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {extreamSpeeds.map((extreamSpeed) => (
                  <ExtreamSpeed
                    key={extreamSpeed._id}
                    extreamSpeed={extreamSpeed}
                  ></ExtreamSpeed>
                ))}
              </div>
            </TabPanel>

            {/* Turboo Booster toys */}
            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {turboBoosters.map((turboBooster) => (
                  <TurbuBooster
                    key={turboBooster._id}
                    turboBooster={turboBooster}
                  ></TurbuBooster>
                ))}
              </div>
            </TabPanel>

            {/* firestrom toys */}
            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {fireStroms.map((fireStrom) => (
                  <FireStrom
                    key={fireStrom._id}
                    fireStrom={fireStrom}
                  ></FireStrom>
                ))}
              </div>
            </TabPanel>
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
              {/* megaRoaders products */}
            <TabPanel>
               <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {megaRoaders.map((megaRoader) => (
                  <MegaRoaders
                    key={megaRoader._id}
                    megaRoader={megaRoader}
                  ></MegaRoaders>
                ))}
              </div>
            </TabPanel>
            {/* monster card products */}
            <TabPanel>
            <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {monsters.map((monster) => (
                  <Monster
                    key={monster._id}
                    monster={monster}
                  ></Monster>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
            
            <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {beastlyCrushers.map((beastlyCrusher, index) => (
                  <BeastlyCrushers
                    key={beastlyCrusher._id}
                    beastlyCrusher={beastlyCrusher}
                  ></BeastlyCrushers>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryTabs;
