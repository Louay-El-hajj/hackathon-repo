// Hooks
import { useGeolocation } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Header from "../components/Header";
import DisasterCard from "./components/DisasterCard";
import TipsTricksCarousel from "./components/TipsTricksCarousel";
import Footer from "../components/Footer";

// Assets
import map from "../../assets/map.png";
import app_store from "../../assets/appstore.png";
import google_play from "../../assets/googleplay.png";
import mockup from "../../assets/mockup.png";

const Landing = () => {
  const location = useGeolocation();
  const [error, setError] = useState(false);
  const [disasters, setDisasters] = useState([
    {
      id: "us7000ki5u",
      magnitude: "5.5",
      type: "earthquake",
      title: "M 5.5 - Central Turkey",
      date: "2023-07-25T05:44:50",
      time: "1690263890996",
      updated: "1690329382925",
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/us7000ki5u",
      detailUrl:
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000ki5u.geojson",
      felt: "29",
      cdi: "6",
      mmi: "6",
      alert: "green",
      status: "reviewed",
      tsunami: "0",
      sig: "484",
      net: "us",
      code: "7000ki5u",
      ids: ",us7000ki5u,",
      sources: ",us,",
      types: ",dyfi,losspager,origin,phase-data,shakemap,",
      nst: "110",
      dmin: "0.309",
      rms: "0.75",
      gap: "56",
      magType: "mww",
      geometryType: "Point",
      depth: "10",
      latitude: "37.5831",
      longitude: "35.9568",
      place: "Central Turkey",
      distanceKM: "0",
      placeOnly: "Central Turkey",
      location: "Central Turkey",
      continent: "Asia",
      country: "Turkiye",
      subnational: "Adana",
      city: "Kozan",
      locality: "Kozan",
      postcode: "",
      what3words: "pickled.ornately.undone",
      timezone: "180",
      locationDetails: [
        {
          id: "108",
          wikidataId: "Q48",
          name: "Asia",
          description: "continent, mainly on the Earth's northeastern quadrant",
          geonameId: "6255147",
          adminLevel: "0",
        },
        {
          id: "87165",
          wikidataId: "",
          name: "Europe/Istanbul",
          description: "time zone",
          geonameId: "0",
          adminLevel: "0",
        },
        {
          id: "1121",
          wikidataId: "Q51614",
          name: "Anatolia",
          description: "Asian part of Turkey",
          geonameId: "323835",
          adminLevel: "0",
        },
        {
          id: "86392",
          wikidataId: "Q43",
          name: "Turkiye",
          description: "country spanning Southeastern Europe and Western Asia",
          geonameId: "298795",
          adminLevel: "2",
        },
        {
          id: "4986",
          wikidataId: "Q155552",
          name: "Mediterranean Region",
          description: "region of Turkey",
          geonameId: "0",
          adminLevel: "3",
        },
        {
          id: "86979",
          wikidataId: "Q40549",
          name: "Adana",
          description: "province of Turkey",
          geonameId: "325361",
          adminLevel: "4",
        },
        {
          id: "82704",
          wikidataId: "Q926426",
          name: "Kozan",
          description: "District of Adana, Turkey",
          geonameId: "7911055",
          adminLevel: "6",
        },
      ],
    },
    {
      id: "us6000jqjc",
      magnitude: "5.5",
      type: "earthquake",
      title: "M 5.5 - 11 km W of Uzunba\u011f, Turkey",
      date: "2023-02-20T17:07:35",
      time: "1676912855745",
      updated: "1676988873695",
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/us6000jqjc",
      detailUrl:
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000jqjc.geojson",
      felt: "0",
      cdi: "0",
      mmi: "6",
      alert: "green",
      status: "reviewed",
      tsunami: "0",
      sig: "465",
      net: "us",
      code: "6000jqjc",
      ids: ",us6000jqjc,",
      sources: ",us,",
      types: ",losspager,origin,phase-data,shakemap,",
      nst: "37",
      dmin: "1.462",
      rms: "0.97",
      gap: "88",
      magType: "mb",
      geometryType: "Point",
      depth: "10",
      latitude: "36.1491",
      longitude: "35.9086",
      place: "11 km W of Uzunba\u011f, Turkey",
      distanceKM: "11",
      placeOnly: "W of Uzunba\u011f, Turkey",
      location: "Uzunba\u011f, Turkey",
      continent: "Asia",
      country: "Turkiye",
      subnational: "Hatay",
      city: "Samandag",
      locality: "Samandag",
      postcode: "",
      what3words: "reconsidered.heist.predetermined",
      timezone: "180",
      locationDetails: [
        {
          id: "108",
          wikidataId: "Q48",
          name: "Asia",
          description: "continent, mainly on the Earth's northeastern quadrant",
          geonameId: "6255147",
          adminLevel: "0",
        },
        {
          id: "1121",
          wikidataId: "Q51614",
          name: "Anatolia",
          description: "Asian part of Turkey",
          geonameId: "323835",
          adminLevel: "0",
        },
        {
          id: "86392",
          wikidataId: "Q43",
          name: "Turkiye",
          description: "country spanning Southeastern Europe and Western Asia",
          geonameId: "298795",
          adminLevel: "2",
        },
        {
          id: "4986",
          wikidataId: "Q155552",
          name: "Mediterranean Region",
          description: "region of Turkey",
          geonameId: "0",
          adminLevel: "3",
        },
        {
          id: "13512",
          wikidataId: "Q83274",
          name: "Hatay",
          description: "province of Turkey",
          geonameId: "312394",
          adminLevel: "4",
        },
        {
          id: "87088",
          wikidataId: "Q840957",
          name: "Samandag",
          description: "district and town of Hatay, Turkey",
          geonameId: "301975",
          adminLevel: "6",
        },
      ],
    },
    {
      id: "us6000jqcn",
      magnitude: "6.3",
      type: "earthquake",
      title: "M 6.3 - 3 km SSW of Uzunba\u011f, Turkey",
      date: "2023-02-20T17:04:29",
      time: "1676912669441",
      updated: "1676998159392",
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/us6000jqcn",
      detailUrl:
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000jqcn.geojson",
      felt: "530",
      cdi: "9",
      mmi: "8",
      alert: "red",
      status: "reviewed",
      tsunami: "0",
      sig: "2482",
      net: "us",
      code: "6000jqcn",
      ids: ",us6000jqcn,",
      sources: ",us,",
      types:
        ",dyfi,ground-failure,losspager,moment-tensor,origin,phase-data,shakemap,",
      nst: "140",
      dmin: "1.43",
      rms: "1.18",
      gap: "26",
      magType: "mww",
      geometryType: "Point",
      depth: "16",
      latitude: "36.1269",
      longitude: "36.0062",
      place: "3 km SSW of Uzunba\u011f, Turkey",
      distanceKM: "3",
      placeOnly: "SSW of Uzunba\u011f, Turkey",
      location: "Uzunba\u011f, Turkey",
      continent: "Asia",
      country: "Turkiye",
      subnational: "Hatay",
      city: "Samandag",
      locality: "Samandag",
      postcode: "",
      what3words: "tackled.resource.impulsive",
      timezone: "180",
      locationDetails: [
        {
          id: "108",
          wikidataId: "Q48",
          name: "Asia",
          description: "continent, mainly on the Earth's northeastern quadrant",
          geonameId: "6255147",
          adminLevel: "0",
        },
        {
          id: "1121",
          wikidataId: "Q51614",
          name: "Anatolia",
          description: "Asian part of Turkey",
          geonameId: "323835",
          adminLevel: "0",
        },
        {
          id: "86392",
          wikidataId: "Q43",
          name: "Turkiye",
          description: "country spanning Southeastern Europe and Western Asia",
          geonameId: "298795",
          adminLevel: "2",
        },
        {
          id: "4986",
          wikidataId: "Q155552",
          name: "Mediterranean Region",
          description: "region of Turkey",
          geonameId: "0",
          adminLevel: "3",
        },
        {
          id: "13512",
          wikidataId: "Q83274",
          name: "Hatay",
          description: "province of Turkey",
          geonameId: "312394",
          adminLevel: "4",
        },
        {
          id: "87088",
          wikidataId: "Q840957",
          name: "Samandag",
          description: "district and town of Hatay, Turkey",
          geonameId: "301975",
          adminLevel: "6",
        },
      ],
    },
  ]);

  const getPreviousDisasters = (latitude, longtitude) => {
    axios({
      method: "GET",
      url: `https://everyearthquake.p.rapidapi.com/recentEarthquakes?start=1&count=10&type=earthquake&latitude=${latitude}&longitude=${longtitude}&units=miles&magnitude=3&intensity=1&radius=500&interval=P1Y2M3W4DT1H2M3S`,
      headers: {
        "X-RapidAPI-Key": "c4953a7521msh1b46d25392a96adp15a998jsn5e91e2c7f40c",
        "X-RapidAPI-Host": "everyearthquake.p.rapidapi.com",
      },
    })
      .then((response) => {
        const { errorCode, data } = response.data;
        if (errorCode === "none") {
          setDisasters(data);
        } else {
          setError(true);
        }
      })
      .catch((error) => setError(true));
  };
  useEffect(() => {
    if (!location.loading && !location.error) {
      const { latitude, longitude } = location;
      // getPreviousDisasters(latitude, longitude);
    }
  }, [location]);

  return (
    <>
      <section className="bg-slate-900 min-h-screen relative">
        <img
          src={map}
          className="w-full h-full absolute top-0 left-0 z-0 opacity-50"
        />

        <Header className="relative z-10" />

        <div className="container mx-auto flex justify-between items-start">
          <div className="flex justify-center">
            <img src={mockup} className="w-[220px]" />
          </div>
          <div className="relative container text-white z-10 max-w-lg flex flex-col gap-4 mt-24">
            <h1 className="text-5xl font-bold">Disaster Prevention App</h1>
            <p>
              Delivering the most appropriate information at the fastest level.
            </p>
            <div className="flex gap-4">
              <img src={app_store} alt="App Store" className="w-40" />
              <img src={google_play} alt="Google Play" className="w-40" />
            </div>
          </div>
        </div>

        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full absolute bottom-0 left-0 -scale-y-100"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-white"
          ></path>
        </svg>
      </section>

      <section className="mt-4 container mx-auto" id="previous-disasters">
        <h2 className="my-8" id="tips-tricks">
          Tips & Tricks
        </h2>
        <TipsTricksCarousel />

        <h2 className="my-8">Previous Disasters</h2>
        {error && (
          <p className="text-red-600 font-bold">
            Sorry, something went wrong and we couldn't fetch the most recent
            disasters. Try to reload the page.
          </p>
        )}
        <div className="grid grid-cols-3 gap-4">
          {disasters.map((disaster, index) => (
            <DisasterCard key={index} disaster={disaster} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
