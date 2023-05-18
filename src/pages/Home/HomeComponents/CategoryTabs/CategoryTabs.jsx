import React from "react";
import { Tab, TabList, Tabs,TabPanel } from "react-tabs";
import './tabs.css'

const CategoryTabs = () => {
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
              <Tab>Homer Simpson</Tab>
              <Tab>Marge Simpson</Tab>
              <Tab>Bart Simpson</Tab>
            </TabList>
            <TabPanel>
              <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
                alt="Homer Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                alt="Marge Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Oldest child and only son of Homer and Marge; brother of Lisa
                and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                alt="Bart Simpson"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>

		{/* for 2nd tab */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Philip J. Fry</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
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
              <Tab>Philip J. Fry</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
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
