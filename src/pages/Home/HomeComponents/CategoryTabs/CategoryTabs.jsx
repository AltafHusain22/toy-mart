import React, { useEffect, useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "./tabs.css";
import Racer from "./Racer/Racer";
import TurboCharge from "./TurboCharge/TurboCharge";

const CategoryTabs = () => {
  const [speedies, setSpeedies] = useState([]);
  const [turbos, setTurboThrillers] = useState([]);

 
  useEffect(() => {
    fetch(`http://localhost:5000/TurboThrillers`)
      .then((res) => res.json())
      .then((data) => {
        setTurboThrillers(data.products);
      });

    fetch(`http://localhost:5000/racerSpeedy`)
      .then((res) => res.json())
      .then((data) => {
        setSpeedies(data.products);
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

            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {speedies.map((racers) => <Racer 
                
                key={racers._id}
                racers={racers}
                
                >
                </Racer>)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:mt-10 mt-5 grid md:grid-cols-3 md:gap-10 gap-4">
                {turbos.map((turbo) => <TurboCharge 
                
                key={turbo._id}
                turbo={turbo}
                
                >
                </TurboCharge>)}
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

            <TabPanel>
              <p>
                Mutant cyclops. Captain of the Planet Express Ship. Love
                interest of Fry.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                alt="Turanga Leela"
              />
            </TabPanel>
            <TabPanel>
              <p>
                A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who
                is Fry's best friend. Built in Tijuana, Mexico, he is the Planet
                Express Ship's cook.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                alt="Bender Bending Rodriguez"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                Kroker.
              </p>
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

            <TabPanel>
              <p>
                Mutant cyclops. Captain of the Planet Express Ship. Love
                interest of Fry.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                alt="Turanga Leela"
              />
            </TabPanel>
            <TabPanel>
              <p>
                A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who
                is Fry's best friend. Built in Tijuana, Mexico, he is the Planet
                Express Ship's cook.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                alt="Bender Bending Rodriguez"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                Kroker.
              </p>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryTabs;
