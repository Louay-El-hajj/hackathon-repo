// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Icons
import { RiEarthquakeLine } from "react-icons/ri";
import { TbVolcano } from "react-icons/tb";
import { RiFloodLine } from "react-icons/ri";

import TipsCard from "./TipsCard";

const TipsTricksCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      interval={2000}
    >
      <TipsCard
        title="Shake It Up: Earthquake Readiness"
        icon={RiEarthquakeLine}
      >
        <ul>
          <li>
            Secure Your Space: Anchor heavy furniture, appliances, and tall
            structures to walls to prevent them from toppling over during an
            earthquake. Use earthquake-resistant straps for water heaters and
            secure tall furniture like bookshelves.
          </li>
          <li>
            Emergency Kit Essentials: Prepare a go-bag with essential items such
            as water, non-perishable food, first aid supplies, flashlight,
            batteries, and a whistle. Keep it easily accessible in case of
            evacuation.
          </li>
          <li>
            Family Communication Plan: Establish a communication plan with your
            family members or roommates, including an out-of-area contact
            person. Practice "drop, cover, and hold on" drills regularly to
            ensure everyone knows what to do during an earthquake.
          </li>
        </ul>
      </TipsCard>
      <TipsCard
        title="Riding the Wave: Flood Prevention Tips"
        icon={RiFloodLine}
      >
        <ul>
          <li>
            Know Your Risk: Understand your flood risk by checking flood maps
            and staying informed about weather forecasts and flood warnings.
            Consider purchasing flood insurance to protect your property.
          </li>
          <li>
            Protect Your Home: Elevate electrical panels, HVAC systems, and
            appliances above potential flood levels. Seal basement walls and
            install sump pumps to prevent water from seeping in during heavy
            rainfall.
          </li>
          <li>
            Evacuation Plan: Plan evacuation routes and identify higher ground
            areas in case of flooding. Keep emergency supplies such as bottled
            water, canned food, medication, and important documents ready to
            grab and go if evacuation is necessary.
          </li>
        </ul>
      </TipsCard>
      <TipsCard
        title="Volcano Watch: Safety Measures and Response"
        icon={TbVolcano}
      >
        <ul>
          <li>
            Stay Informed: Monitor local news and updates from geological
            agencies to stay informed about volcanic activity in your area.
            Familiarize yourself with volcano evacuation routes and emergency
            shelters.
          </li>
          <li>
            Respiratory Protection: In the event of ashfall, wear N95 masks or
            cover your nose and mouth with a damp cloth to protect yourself from
            inhaling volcanic ash, which can be harmful to your respiratory
            system.
          </li>
          <li>
            Community Support: Volunteer with local relief organizations to
            assist communities affected by volcanic eruptions. Donate essential
            supplies such as masks, goggles, gloves, and non-perishable food
            items to support relief efforts in impacted areas.
          </li>
        </ul>
      </TipsCard>
    </Carousel>
  );
};

export default TipsTricksCarousel;
