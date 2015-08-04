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
  tangramsIkeda: require("./tangrams-ikeda.png"),

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
          notes="Hi everyone. I'm Andy. Thanks for having me, I'm really excited to be here to talk about OpenStreetMap. I'm not directly associated with the project, I just think it's really cool and relevant to the themes of the this institute. I'm just curious: Who has heard of OSM? Used OSM? Edited OSM? Hopefully by the end of today, if I do my job, then everyone will be able say that they have."
        >
          <Heading size={1} fit caps textColor="secondary">
            OpenStreetMap!
          </Heading>
        </Slide>

        <Slide bgImage={images.osmWorld.replace("/", "")} bgDarken={0}
          notes="Cool. Let's start off talking about what OpenStreetMap is..."
        >
        </Slide>

        <Slide transitionDuration={1000} bgColor="primary" bgImage={images.osmWorld.replace("/", "")} bgDarken={0.75}
          notes="A good analogy is that OpenStreetMap is [click] a Wikipedia of maps. [click] It is a map of the planet, global in scope. Every place on earth can be put into OpenStreetmap. We'll come back to this a little bit later, but this is a big deal especially in developing countries where high quality digital maps don't yet exist - OpenStreetMap is a low-cost vehicle to creating those maps.[click] It is a a crowd-sourced, democratized map, anybody in the world can freely edit it. If you see errors in the map, you can fix them. If your your street or town, or village is missing, you can literally put yourself on the map. That's a very powerful thing. [click] And there aren't many restrictions on what you you can do with it. [click]"
        >
          <Heading size={1} bold fit caps textColor="primary">
            OpenStreetMap is
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fill textColor="quinary">"Wikipedia of maps"</Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fill textColor="quinary">Map of the planet</Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fill textColor="quinary">Free to edit</Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fill textColor="quinary">Free to use*</Heading>
            <Heading size={4} caps fill textColor="quinary">*under ODbL</Heading>
          </Appear>
        </Slide>

        <Slide
           notes="OpenStreetMap data are licensed under the Open Database License, a license that from opendatacommons. There's a full legal document behind it, but the short version is that you can do whatever you want with it as long as you attribute OpenStreetMap as the source of the data and you make sure that if you make any changes to the data that you also make those changes available."
         >
          <Heading size={1} caps fit>
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

        <Slide
           notes="So this is kind of huge. It allows people to take OpenStreetMap data and do some really cool things with it."
         >
          <Heading size={2} caps fit>
            enables cool things
          </Heading>
        </Slide>


        <Slide full bgColor="primary" margin="0px" width="100%" height="100%"
           notes="So here is an example of what OpenStreetMap looks like. This is Portugal. I've heard it's a cool place. And it is pretty-well mapped."
         >
          <LeafletMap
            view='portugal'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Slide>

        <Slide bgColor="primary" margin="0px" width="100%" height="100%"
           notes="Zooming in for some more detail. This is Lisbon (Lisboa?), Portugal."
         >
          <LeafletMap
            view='lisboa'
            url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Slide>

        <Slide bgColor="primary"
           notes="This is the same map of Lisbon, but stylized a in just black and white. This was made by a Stamen Design, a design firm in San Francisco that does a lot of cool mapping and data visualization work."
        >
          <LeafletMap
            view='lisboa'
            url='http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png'
            attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          />
        </Slide>

        <Slide bgColor="primary"
           notes="Again, another view of Lisbon but stylized as a space ship - kind of death star looking."
        >
          <LeafletMap
            view='lisboa'
            url='http://{s}.tiles.mapbox.com/v3/examples.3hqcl3di/{z}/{x}/{y}.png'
            attribution='&copy; Map data © OpenStreetMap contributors'
          />
        </Slide>


        <Slide bgColor="primary" margin="0px" width="100%" height="100%"
           notes="This is Porto, Portgual in OpenStreetMap."
        >
          <LeafletMap
            view='porto'
            url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Slide>

        <Slide bgColor="primary"
           notes="Same map, but stylized as if it was painted with water-colors. This was also produced by Stamen Design and it is all done digitally using some cool rendering effects, from OpenStreetMap data."
        >
          <LeafletMap
            view='porto'
            url='http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png'
            attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          />
        </Slide>

        <Slide bgColor="primary"
           notes="This is a map that was made by Stamen and CartoDB that is designed to be a good a base-layer for visualizing other data on top of. You can take data and give it some color and put it on top of this base layer and the data that is being visualized will be promenant but this base-layer provides enough geographic context to know what you're looking at."
        >
          <LeafletMap
            view='porto'
            url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
        </Slide>

        <Slide bgColor="primary"
          bgImage={images.tangramsIkeda.replace('/','')}
           notes="There is a neat project called Tangrams is that is being developed Patricio Gonzalez Vivo - he works for a company called mapzen and he's doing some very awesome things with dynamic maps. This one is in the style of an artist named (pron. ryoghee-keydah) Ryoji Ikeda. I need to click on this link to really show it... "
        >
          <Link href="http://tangrams.github.io/tangram-sandbox/tangram.html?styles/ikeda#14.38604/38.7150/-9.1386">
            <Heading size={1} caps fit textColor="primary">
                tangrams
            </Heading>
          </Link>
        </Slide>

        <Slide
           notes="So those are fun, but I want to take a second to point out that because these all use the same underlying data, edits to OSM will show up on every one of these maps. I also wanted to show these things off, because at first glance if you directly visit the openstreetmap project, it appears kind of utilitarian. But that's because the openstreetmap.org site focuses on just the data - but there are lots of people doing very beautiful things with OpenStreetMap outside of the project itself."
         >
          <Heading size={2} caps fit>
            edits to openstreetmap
          </Heading>
          <Heading size={2} caps fit>
            are edits to all of these maps
          </Heading>
        </Slide>


        <Slide bgColor="primary"
          notes="Switching gears a little bit, but I think this is awesome and I want to take a second to talk about it. There is also an affiliated group called the Humanitarian OpenStreetMap Team..."
        >
          <Image src={images.hotLogo.replace('/','')} margin="0px" width="100%" height="100%"/>
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary"
          notes="In their own words... (read thing). HOT OSM organizes mappers around the world to focus on places that need to be mapped. Then they interface with established institutions like the Red Cross, Doctors without Borders, the United Nations, and the World Bank and work to get them updated OpenStreetMap data as quickly as possible."
        >
          <BlockQuote>
            <Quote>The Humanitarian OpenStreetMap Team [HOT] applies the principles of open source and open data sharing for humanitarian response and economic development.</Quote>
            <Cite>hotosm.org</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="primary" bgFill={true} bgImage={images.missingMapsProcess.replace('/','')}
          notes="What does that look like? This is from the missing maps project, which is focused on non-crisis mapping. Remote volunteers fill in the map by tracing high resolution imagery that has been donated by companies and governments. Details get filled in by people on the ground and then humanitarian organizations can use the maps to do their work. From what I understand, this is more or less how things work when mapping for crisis situations, but under a more compressed timeline."
        >
        </Slide>

        <Slide bgColor="primary" bgFill={true} bgImage={images.taskManager.replace('/','')}
          notes="This is the task manager. It is used to coordinate these large-scale remote mapping efforts."
        >
        </Slide>

        <Slide transition={["slide"]} bgColor="white" bgFill={true} bgImage={images.IDPCamps.replace('/','')}>
        </Slide>


        <Slide bgImage={images.nepalRescueMap.replace("/", "")} bgDarken={0.75}
          notes="This is literally saving lives with open data. Whoa."
        >
          <Heading size={1} caps fit textColor="tertiary">
            saving lives
          </Heading>
          <Heading size={1} caps fit textColor="primary">
            with open data
          </Heading>
        </Slide>


        <Slide bgColor="primary"
          notes="So all of that was to explain why I think OpenStreetMap is so cool and worth spending some time with. So hopefully some of you are wondering how to get involved. The easiest way to start is to learn how to edit OpenStreetMap and that's what we'll talk about for the rest of this workshop."
        >
          <Heading size={1} fit caps textColor="secondary">
            this is awesome!
          </Heading>
          <Heading size={2} fit caps textColor="secondary">
            Where do we start?
          </Heading>
        </Slide>

        <Slide bgColor="secondary" bgImage={images.espressoPour.replace("/", "")} bgDarken={0.75}
          notes="Let's begin by talking about how OpenStreetMap actually represents the world. I'll try not to get too far in the weeds, but it can help to be familiar with some of the terms and core concepts of OpenStreetMap. I'll talk more about each of these and then we'll dive into the map and look at some real-world examples. The four basic elements of OpenStreetMap are [click]..."
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

        <Slide bgColor="primary"
          notes="Nodes are individual points. [click] They are used to represent points of interest [click] like businesses, churches, bus stops, stop lights...."
        >
          <Heading size={1} fit caps textColor="quaternary"
            >
            nodes (points)
          </Heading>
          <Appear>
            <Heading size={2} caps fill textColor="secondary">points of interest</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">restaurants, restrooms, monuments, coffee shops, trees, transit stops, fire hydrants</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary"
          notes="Then there are ways, which are akin to lines and polygons in traditional GIS. [click] These are some examples of things that lines are often used to represent. [click] and here are some polygon examples: administrative boundaries like states and countries, land use can be used to indicate that this is a residential area or commercial area or a park, and then things like buildings are also ways."
        >
          <Heading size={1} fit caps textColor="quaternary"
            >
            ways (lines & polygons)
          </Heading>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">lines - roads, rivers, fences, paths</Heading>
          </Appear>
          <Appear>
            <Heading size={3} caps fill textColor="secondary">polygons - administrative boundaries (states, countries), land use (residential, commercial, forest), buildings</Heading>
          </Appear>
        </Slide>

        <Slide bgColor="primary"
          notes="Relations are a little more advanced, and you don't have to worry too much about them if you are starting out with OSM, but you might see references to relations and they are important for advanced usage. [click] They are used to link things in OSM together, like a highway that goes across the country might be broken up into smaller segments but they are all part of the same relation. [click] They are also used for capturing information like street intersections where right turns are not allowed."
        >
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

        <Slide bgColor="primary"
          notes="And then tags. These are key-value pairs. [click] that get attached to the things in OpenStreetMap that we just talked about - nodes, ways and relations. [click] And tags are what describe what something is. Tags tell us that a node *is* a restaurant, and it *is* named McDonalds (eww). And tags are used to say that a way *is* a street, and it's named Guadalupe. [click] Tags can be anything, you can put anything in as a key or a value, but part of learning OSM is learning about the conventions that are used. There are specific keys and values that are used to represent things, and those are what you should be using. I'll show you where to find that information."
        >
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
          notes="So let's look at a some real-world examples. I tried to pick a place that would be familiar and recognizable. This is (how do you say that?). I'm sure most of you already know about it, but there used to be a palace here where the Kings lived. But in the mid-18th century, there was an earthquake and tsunami that destroyed the palace and much of the city. Instead of rebuilding the palace here, they left it open and I guess they felt bad for the King at the time, so they made a statue of him on a horse and put that right in the middle. I'm going to click on this link and we take look a few things around this area."
        >
          <Link href="https://www.openstreetmap.org/way/96896573">
            <Heading size={1} caps fit textColor="primary">
                Praça Do Comercio
            </Heading>
          </Link>
        </Slide>

        <Slide bgColor="primary"
          notes="So that's what the map looks like. How do we make edits to it? [click] First, go to openstreetmap.org [click] sign up for a new account [click] and start mapping. I should note that there are two main ways that people edit OpenStreetMap. There is the interface that we just saw, and I'll be using that because it is easier to get started with. It is called the iD editor. There is also a popular desktop editing client called JOSM, but it requires an install and has a steeper learning curve. If you get really into OSM it is worth investing some time in, but we'll be just working with the iD editor. So I'll demo that now..."
        >
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


        <Slide bgColor="primary"
          notes="Also want to point out a few resources that are good for starting out. LearnOSM is a website dedicated to teaching people how to map and use OSM data. It's got some really good guides and tutorials. The OSM wiki is the source of OSM truth. It can be a little bit unweildy, and takes a little bit of getting used to, but is the best resource for finding out things like 'which tag should I use for X?'. And finally, mapbox is a really cool company that does a lot with OpenStreetMap and they put together another good set of documentation that gets into some of the more advanced stuff like using the JOSM editor"
        >
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
            <Layout>
              <Fill>
                <Link href="http://wiki.openstreetmap.org/wiki/Map_Features">
                  <Heading size={5} caps margin={10} textColor="quinary" textAlign="left">
                    http://wiki.openstreetmap.org
                  </Heading>
                </Link>
              </Fill>
            </Layout>
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
