import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, S, Slide, Text
} from "../src/spectacle";



import preloader from "../src/utils/preloader";

import Interactive from "./interactive";
import LeafletMap from "./LeafletMap";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  osmWorld: require("./osm-whole-world.png"),
  hotLogo: require("./hot-osm-logo.png"),
  IDPCamps: require("./ny-times-kathmandu-camps.png"),
  taskManager: require("./nepal-hotosm-task-manager.png"),
  nepalRescueMap: require("./nepal-canadian-rescue-map.png"),
  missingMapsProcess: require("./missing-maps-process.svg"),

  //https://www.flickr.com/photos/isohedral/14675824683/
  espressoPour: require("./moon-shot-espresso-cup-14675824683_c17e10c8a2_k.jpg"),

  //https://www.flickr.com/photos/biblarte/9963929406/in/photolist-gbtK5j-cvXbGE-hghPwY-gbu4kV-67UZCU-6RYpHp-fEAYXj-os4AMh-bNtVQ-55AERH-3bxdXe-n71Tt2-7ziHrZ-o5erp3-fUApRE-bm1Y1H-9916kg-hUnRYZ-5CSMrX-hSwQbK-apAQwp-4Q8dXu-63obju-gbzS6G-gbAcQP-63iUS4-37sjB-51ffP-aBgQeQ-7NqwRf-fDZWw5-nFvACJ-4rt2p8-nHjfEd-nHju1d-nHjinN-qGRGFt-nr4PAh-nGByxE-nHKHpL-nr4JBu-nKNa1F-nGNZZH-pWgN8p-nGwaar-nKMUKB-nGNNYz-nK8JZk-nqdEDN-nqRYxu
  pracaDoComercio: require("./praca-do-comercio-9963929406_4ba50c00e3_o.jpg"),
};

const huge = {
  width: '100%'
}

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={300} progress="bar">
        <Slide
          bgColor="primary"
          notes="Audience Questions: Who has heard of OSM? Used OSM? Edited OSM?"
        >
          <Heading size={1} fit caps textColor="secondary">
            OpenStreetMap!
          </Heading>
        </Slide>

        <Slide bgImage={images.osmWorld.replace("/", "")} bgDarken={0}
          notes="Let's start off talking about what OpenStreetMap is."
        >
        </Slide>

        <Slide transitionDuration={1000} bgColor="primary" bgImage={images.osmWorld.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} bold fit caps textColor="primary">
            OpenStreetMap is
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fill textColor="tertiary">"Wikipedia of maps"</Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fill textColor="tertiary">Map of the planet</Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fill textColor="tertiary">Free to edit</Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fill textColor="tertiary">Free to use*</Heading>
            <Heading size={4} caps fill textColor="tertiary">*under ODbL</Heading>
          </Appear>
        </Slide>



        <Slide full bgColor="primary" margin="0px" width="100%" height="100%">
          <LeafletMap
            view='portugal'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Slide>

        <Slide bgColor="primary" margin="0px" width="100%" height="100%">
          <LeafletMap
            view='lisboa'
            url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Slide>

        <Slide bgColor="primary">
          <LeafletMap
            view='lisboa'
            url='http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png'
            attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          />
        </Slide>

        <Slide bgColor="primary">
          <LeafletMap
            view='lisboa'
            url='http://{s}.tiles.mapbox.com/v3/examples.3hqcl3di/{z}/{x}/{y}.png'
            attribution='&copy; Map data © OpenStreetMap contributors'
          />
        </Slide>

        <Slide bgColor="primary">
          <LeafletMap
            view='lisboa'
            url='http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png'
            attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          />
        </Slide>

        <Slide bgColor="primary" margin="0px" width="100%" height="100%">
          <LeafletMap
            view='porto'
            url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Slide>

        <Slide bgColor="primary">
          <LeafletMap
            view='porto'
            url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
        </Slide>

        <Slide bgColor="primary">
          <LeafletMap
            view='porto'
            url='http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
        </Slide>

        <Slide bgColor="primary"
        >
          tangrams
        </Slide>

        <Slide bgColor="primary"
        >
          mapsense
        </Slide>

        <Slide bgColor="primary"
          notes="There is also a serious side to OpenStreetMap. I think this is pretty cool, so I'm going to take a few minutes to talk about this."
        >
          <Image src={images.hotLogo.replace('/','')} margin="0px" width="100%" height="100%"/>
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary"
          notes="In their own words..."
        >
          <BlockQuote>
            <Quote>The Humanitarian OpenStreetMap Team [HOT] applies the principles of open source and open data sharing for humanitarian response and economic development.</Quote>
            <Cite>hotosm.org</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage={images.nepalRescueMap.replace("/", "")} bgDarken={0.75}
          notes="This is literally saving lives with open data. That's incredibly powerful."
        >
          <Heading size={1} caps fit textColor="tertiary">
            saving lives
          </Heading>
          <Heading size={1} caps fit textColor="primary">
            with open data
          </Heading>
        </Slide>

        <Slide bgColor="primary" bgFill={true} bgImage={images.missingMapsProcess.replace('/','')}
          notes="What does that look like? This is from the missing maps project, which is focused on non-crisis mapping. Remote volunteers fill in the map by tracing high resolution imagery that has been donated by companies and governments. Details get filled in by people on the ground and then humanitarian organizations can use the maps to do their work. This is more or less how things work in crisis mapping, but under a very compressed timeline."
        >
        </Slide>

        <Slide bgColor="primary" bgFill={true} bgImage={images.taskManager.replace('/','')}
          notes="This is the task manager. It is used to coordinate these large-scale remote mapping efforts."
        >
        </Slide>

        <Slide transition={["slide"]} bgColor="white" bgFill={true} bgImage={images.IDPCamps.replace('/','')}>
        </Slide>

        <Slide bgColor="tertiary"
          notes=" Also, I think relevant to the interests of most of us here is that some of this work requires compromise. High quality imagery of all of these places is not generally freely available. There was a fascinating talk John Crowley at State of the Map US in June, that explores the dynamics of the international and intergovernmental humanitarian community and OpenStreetMap and tension between 'openness' and the practical side of how some of these organizations work with regards to things like licensing high resolution imagery. If you are at all interested in this stuff, definitely watch that."
        >
          <Heading size={1} caps fit textColor="primary">
            compromise
          </Heading>
          <Appear>
            <Heading size={2} caps fit textColor="secondary">
              source imagery
            </Heading>
            <Heading size={2} caps fit textColor="secondary">
              is often restricted
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Working with OpenStreetMap Data
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            for your own projects
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps fit>
            <Link textColor="secondary" href="http://opendatacommons.org/licenses/odbl/">Open Database License</Link>
          </Heading>
          <Text caps textColor="quaternary">
            TL;DR you are free to share, create, adapt as long as you
          </Text>
          <Text caps textColor="quaternary">
              <S type="bold"> attribute </S> and
              <S type="bold"> share-alike </S>
          </Text>
        </Slide>

        <Slide bgColor="secondary" bgImage={images.espressoPour.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} fit caps textColor="primary">
            Choose your extract
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fill textColor="quinary">whole planet</Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fill textColor="quinary">country / region</Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fill textColor="quinary">metro area</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="secondary"
          notes="I'm going to take a moment to talk about how OpenStreetMap actually represents the world. I'll try not to get too far in the weeds, but it can help to be familiar with some of the terms and core concepts of OpenStreetMap. I'll talk more about each of these and show some real-world examples, but the four basic elements of OpenStreetMap are..."
        >
          <Heading size={1} fit caps textColor="primary">
            How does it work?
          </Heading>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  nodes
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (points)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  ways
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (lines & polygons)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  relations
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (collections)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="right">
                  tags
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps margin={10} textColor="quinary" textAlign="left">
                  (key=value pairs)
                </Heading>
              </Fill>
            </Layout>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="quaternary">
            nodes (points)
          </Heading>
          <Appear>
            <Heading size={2} caps fill textColor="secondary">points of interest</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">restaurants, restrooms, monuments, coffee shops, trees, transit stops, fire hydrants</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="quaternary">
            ways (lines & polygons)
          </Heading>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">lines - roads, rivers, fences, paths</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">polygons - administrative boundaries (states, countries), land use (residential, commercial, forest), buildings</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="quaternary">
            relations (collections)
          </Heading>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">for grouping very long routes into managable segments</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">also used to encode things like turn restrictions</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="quaternary">
            tags (key=value pairs)
          </Heading>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">can be attached to any OpenStreetMap object</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">describe what something is</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">free-form, but conventions exist and <S type="bold" textColor="tertiary"> should </S> be used</Heading>
          </Appear>
        </Slide>


        <Slide bgColor="secondary" bgImage={images.pracaDoComercio.replace("/", "")} bgDarken={0.55}
          notes="So let's look at a some real-world examples. This is (how do you say that?). I'm sure most of you already know about it, but there used to be a palace here where the Kings lived. Unfortunately, in the mid-18th century, there was a really bad earthquake and tsunami that destroyed the palace and much of the city. Instead of rebuilding the palace here, they left it open and I guess they felt bad for the King at the time, so they made a statue of him on a horse and put that right in the middle. I'm going to click on this link and we take look a few things around this area."
        >
          <Link href="https://www.openstreetmap.org/way/96896573">
            <Heading size={1} caps fit textColor="primary">
                Praça Do Comercio
            </Heading>
          </Link>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            How to Edit
          </Heading>
          <Appear>
            <Link href="https://openstreetmap.org">
              <Heading size={3} caps fill textColor="tertiary">
                go to openstreetmap.org
              </Heading>
            </Link>
          </Appear>
          <Appear>
            <Link href="https://openstreetmap.org">
              <Heading size={3} caps fill textColor="quaternary">
                sign up for a new account
              </Heading>
            </Link>
          </Appear>
          <Appear>
            <Link href="https://openstreetmap.org">
              <Heading size={3} caps fill textColor="quinary">
                start mapping (demo!)
              </Heading>
            </Link>
          </Appear>
        </Slide>


        <Slide bgColor="primary">
          <Heading size={3} fit caps textColor="secondary">
            some good resources
          </Heading>
          <Appear>
            <Layout>
              <Fill>
                <Link href="http://learnosm.org/en/beginner/">
                  <Heading size={5} caps margin={10} textColor="quinary" textAlign="left">
                    http://learnosm.org/en/beginner/
                  </Heading>
                </Link>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Link href="http://wiki.openstreetmap.org/wiki/Map_Features">
                  <Heading size={5} caps margin={10} textColor="quinary" textAlign="left">
                    http://wiki.openstreetmap.org/wiki/Map_Features
                  </Heading>
                </Link>
              </Fill>
            </Layout>
          </Appear>
          <Appear>
            <Layout>
              <Fill>
                <Link href="https://github.com/mapbox/mapping/wiki">
                  <Heading size={5} caps margin={10} textColor="quinary" textAlign="left">
                    https://github.com/mapbox/mapping/wiki
                  </Heading>
                </Link>
              </Fill>
            </Layout>
          </Appear>
        </Slide>


        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Thanks for listening!
          </Heading>
          <Link href="http://osmlab.github.io/show-me-the-way/">
            <Heading size={3} caps fit textColor="quaternary">
              let's go forth and map
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
