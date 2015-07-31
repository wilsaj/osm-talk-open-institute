import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
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
          <Heading size={1} fit caps textColor="black">
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
          <Appear>
            <Heading size={2} caps fill textColor="tertiary">"Wikipedia of maps"</Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fill textColor="tertiary">Map of the planet</Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fill textColor="tertiary">Free to edit</Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps fill textColor="tertiary">Free to use</Heading>
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
          notes="There is also a serious side to OpenStreetMap. I think this is pretty cool, so I'm going to take a few minutes to talk about this."
        >
          <Image src={images.hotLogo.replace('/','')} margin="0px" width="100%" height="100%"/>
        </Slide>


        <Slide transition={["slide"]} bgColor="black"
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


        <Slide bgColor="primary"
          notes=" Also, I think relevant to the interests of most of us here is that some of this work requires compromise. High quality imagery of all of these places is not generally freely available. . There is an fascinating talk that was given by John Crowley at State of the Map US in June, that explores the dynamics of the international and intergovernmental humanitarian community and OpenStreetMap and tension between 'openness' and the practical side of how some of these organizations work with regards to things like licensing high resolution imagery. If you are at all interested in this stuff, definitely watch that."
        >
          <Heading size={1} caps fill textColor="tertiary">
            compromise
          </Heading>
          <Appear>
            <Heading size={2} caps fill textColor="secondary">
              source imagery often comes with restrictions
            </Heading>
          </Appear>
        </Slide>



        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            OpenStreetMap!
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            A ReactJS Presentation Library
          </Heading>
          <Heading size={2} fit caps textColor="black">
            Where You Can Write Your Decks In JSX
          </Heading>
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
        </Slide>
        <Slide bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.city.replace('/','')} margin="0px" width="100%" height="100%"/>
        </Slide>
        <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide bgImage={images.city.replace("/", "")} bgFill={true}>
          <Heading size={1} caps fit textColor="primary">
            Filled
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      </Deck>
    );
  }
}
