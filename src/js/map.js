let indexInfoWindow = 0;
const allMarkers = [];
let currentTabMarkers = [];
let map;

const locations = [
  {
    title: "Melbourne Theatre Company HQ",
    address: "252 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJOd8cyqtC1moRALmjSP4LeeE",
    lat: -37.82904584970476,
    lng: 144.96540315433683,
    type: "art",
  },
  {
    title: "Australian Centre For Contemporary Art",
    address: "111 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJCY-uHqxC1moRD3Tq9lMJbWo",
    lat: -37.82657824166182,
    lng: 144.9670152601772,
    type: "art",
  },
  {
    title: "Malthouse Theatre",
    address: "The Malthouse, 113 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJ03AKHKxC1moRQRdh_sKzMJk",
    lat: -37.82693383940648,
    lng: 144.96648777392406,
    type: "art",
  },
  {
    title: "Melbourne Symphony Orchestra",
    address: "120/130 Southbank Blvd, Southbank VIC 3006, Australia",
    place_id: "ChIJvSz64q1C1moRoT6U2Szhc9Q",
    lat: -37.82009048123877,
    lng: 144.96782629999893,
    type: "art",
  },
  {
    title: "NIDA - National Institute of Dramatic Art",
    address: "Suite 4/152 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJJz3wFB1o1moR-0rKTRS4EZU",
    lat: -37.82543953373668,
    lng: 144.9659133564469,
    type: "art",
  },
  {
    title: "National Gallery of Victoria",
    address: "180 St Kilda Rd, Melbourne VIC 3006, Australia",
    place_id: "ChIJuYNitLFC1moRVB5vMAKPcTM",
    lat: -37.82259095221605,
    lng: 144.96892618082268,
    type: "art",
  },
  {
    title: "Uomasa Japanese Restaurant",
    address: "75A Dorcas St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJn9thi6lC1moRnqJd_SfFY1I",
    lat: -37.83135053113267,
    lng: 144.96703332557152,
    type: "cafe",
  },
  {
    title: "Betwixt Cafe & Bar",
    address: "45 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJQ4D2GE9D1moRSyCBtS30iSg",
    lat: -37.824867511802,
    lng: 144.96713450232636,
    type: "cafe",
  },
  {
    title: "Lionel's Cafe",
    address: "The Stable, Grant St, Southbank VIC 3006, Australia",
    place_id: "ChIJxRekSq5C1moRqgi6Il15YkA",
    lat: -37.825198345039354,
    lng: 144.96943309216718,
    type: "cafe",
  },
  {
    title: "Jubilee on Dorcas",
    address: "100 Dorcas St, South Melbourne VIC 3006, Australia",
    place_id: "ChIJq29Bc5dD1moRD4vkc_tlhE0",
    lat: -37.831005756739316,
    lng: 144.96630242556424,
    type: "cafe",
  },
  {
    title: "Gordon Espresso",
    address: "71 Coventry St, Southbank VIC 3006, Australia",
    place_id: "ChIJrx7uSe9D1moRLKGIkM7TaUc",
    lat: -37.829818996743334,
    lng: 144.96781056691742,
    type: "cafe",
  },
  {
    title: "Queenie's",
    address: "41 Coventry St, Southbank VIC 3006, Australia",
    place_id: "ChIJOea_JqlC1moRQ2VTxOnlovM",
    lat: -37.829371166719014,
    lng: 144.96924537115623,
    type: "cafe",
  },
  {
    title: "Human Beans",
    address: "70 Dorcas St, Southbank VIC 3006, Australia",
    place_id: "ChIJC8pmuyBD1moRrmQP8acen5M",
    lat: -37.83060505190014,
    lng: 144.96733419999518,
    type: "cafe",
  },
  {
    title: "10 Hoff Cafe",
    address: "10 Hoff Bvd, Southbank VIC 3006, Australia",
    place_id: "ChIJXWzgRbRD1moRxVp-McLJqjI",
    lat: -37.82518298402039,
    lng: 144.96376229005793,
    type: "cafe",
  },
  {
    title: "Ayam Chef",
    address: "67-69 Coventry St, Southbank VIC 3006, Australia",
    place_id: "ChIJLVH3bKlC1moRx3TW_R-cYnw",
    lat: -37.82979042011781,
    lng: 144.96791350118676,
    type: "cafe",
  },
  {
    title: "Miss Pearl Bar",
    address: "140 Southbank Blvd, Southbank VIC 3006, Australia",
    place_id: "ChIJ4XiFZh9D1moRKHiz4fLLJ4Y",
    lat: -37.824007544616755,
    lng: 144.9681531620689,
    type: "cafe",
  },
  {
    title: "Tempura Hajime",
    address: "60 Park St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJeRMS16lC1moREbJCpcg7Hps",
    lat: -37.83275738258766,
    lng: 144.96888224894084,
    type: "cafe",
  },
  {
    title: "Mister Margherita",
    address: "1/52 Park St, South Melbourne VIC 3205, Australias",
    place_id: "ChIJCz8PzqlC1moRiJB9u1tb4bg",
    lat: -37.832676875953396,
    lng: 144.96915901448074,
    type: "cafe",
  },
  {
    title: "Olmate's Sangas",
    address: "20 Kavanagh St, Southbank VIC 3006, Australia",
    place_id: "ChIJMSLO2lBD1moRZkWPLF8473s",
    lat: -37.82294108126363,
    lng: 144.96601629991568,
    type: "cafe",
  },
  {
    title: "Royal Botanic Gardens",
    address: "Melbourne Gardens, Melbourne VIC 3004, Australia",
    place_id: "ChIJO40p-5ZC1moRwNcxBXZWBA8",
    lat: -37.830243003101764,
    lng: 144.98014905921352,
    type: "local_treasure",
  },
  {
    title: "Shrine of Remembrance",
    address: "Birdwood Ave, Melbourne VIC 3001, Australia",
    place_id: "ChIJGSSIDKZC1moRisWTaYaaq18",
    lat: -37.83051071682026,
    lng: 144.97342563179433,
    type: "local_treasure",
  },
  {
    title: "Kings Domain",
    address: "Main Yarra Trail, Melbourne VIC 3004, Australia",
    place_id: "ChIJoS72YKNC1moRL-iksMO0MqE",
    lat: -37.824262808293675,
    lng: 144.97784077484235,
    type: "local_treasure",
  },
  {
    title: "Sidney Myer Music Bowl",
    address: "Sidney Myer Music Bowl Reserve, Melbourne VIC 3004, Australia",
    place_id: "ChIJj7dqVrpC1moRqiRqi0YyNvc",
    lat: -37.823316354181934,
    lng: 144.97467470682528,
    type: "local_treasure",
  },
  {
    title: "South Melbourne Markets",
    address: "322-326 Coventry St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJU13Hrf5n1moRfzDr6g0ld28",
    lat: -37.83201162963896,
    lng: 144.95593910005442,
    type: "local_treasure",
  },
  {
    title: "Rod Laver Arena",
    address: "Olympic Blvd, Melbourne VIC 3001, Australia",
    place_id: "ChIJJc8qc7lC1moRYTElaEC226Y",
    lat: -37.821615899390835,
    lng: 144.97855748180203,
    type: "local_treasure",
  },
  {
    title: "MCG",
    address: "Brunton Ave, Richmond VIC 3002, Australia",
    place_id: "ChIJgWIaV5VC1moR-bKgR9ZfV2M",
    lat: -37.81996513548011,
    lng: 144.98344836612296,
    type: "local_treasure",
  },
  {
    title: "Melbourne Convention & Exhibition Centre",
    address: "1 Convention Centre Pl, South Wharf VIC 3006, Australia",
    place_id: "ChIJtYSic1Fd1moRhKPuTfDqjpU",
    lat: -37.82466679222774,
    lng: 144.9554644901373,
    type: "local_treasure",
  },
  {
    title: "Albert Park Grand Prix Circuit",
    address: "12 Aughtie Dr, Albert Park VIC 3206, Australia",
    place_id: "ChIJRaVhSQxo1moR6KiBWxXh_Qw",
    lat: -37.85006000194761,
    lng: 144.96901934343632,
    type: "local_treasure",
  },
  {
    title: "Blondie Bar",
    address:
      "Cnr Southbank Boulevard &, 31 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJ4-k_G65C1moRX3g97je74tA",
    lat: -37.82383168133003,
    lng: 144.9678448589051,
    type: "bar",
  },
  {
    title: "PJ O'Briend's Irish pub",
    address: "G14 / 15, 16/3 Southgate Ave, Southbank VIC 3006, Australia",
    place_id: "ChIJgZOibbFC1moRjJ5c8xm1eWE",
    lat: -37.820369681468904,
    lng: 144.96595043126297,
    type: "bar",
  },
  {
    title: "Petanque Social",
    address:
      "Crown Riverwalk, Crown Melbourne, 8 Whiteman St, Southbank VIC 3006, Australia",
    place_id: "ChIJG_IY3rRd1moRf6JiNoE66_0",
    lat: -37.822131346213695,
    lng: 144.95915315629347,
    type: "bar",
  },
  {
    title: "Limerick Arms Hotel",
    address: "364 Clarendon St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJW9eyVAdo1moRO6Y-4N3eC0U",
    lat: -37.835404162750194,
    lng: 144.96147240249977,
    type: "bar",
  },
  {
    title: "Hophaus Bar",
    address: "MR5/3 Southgate Ave, Southbank VIC 3006, Australia",
    place_id: "ChIJn6qqqq1C1moRI9ElnYJOHZ8",
    lat: -37.82024045899614,
    lng: 144.96565681104207,
    type: "bar",
  },
  {
    title: "Belgian Beer Cafe",
    address: "5 Riverside Quay, Southbank VIC 3006, Australia",
    place_id: "ChIJpzMMZ7JC1moRw81gAuNuexI",
    lat: -37.82149697010502,
    lng: 144.96436329991937,
    type: "bar",
  },
  {
    title: "Hopscotch Melbourne",
    address: "Ground Floor, 4 Riverside Quay, Southbank VIC 3006, Australia",
    place_id: "ChIJA8Rg8bJC1moRmF1fVyw4iqg",
    lat: -37.820720940582284,
    lng: 144.96345700000646,
    type: "bar",
  },
  {
    title: "Bells Hotel",
    address: "157 Moray St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJR8PDnqpC1moRUcW8PO7thQ4",
    lat: -37.83087094269473,
    lng: 144.96276871060522,
    type: "bar",
  },
];
const colorCode = {
  art: "#5684b9",
  cafe: "#c87474",
  bar: "#926dc1",
  local_treasure: "#e7c28c",
};
const icons = {
  art: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fc130beb68ae85d902_art-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3fa40e06da62f7a5a2f_art-active-marker.svg`,
  },
  cafe: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fc40e06da62f7770e4_cafe-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3f9f964c08e55a37139_active-cafe-marker.svg`,
  },
  bar: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fbed3778abead795a4_bar-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3fa861b944ecf8c2bde_active-bar-marker.svg`,
  },
  local_treasure: {
    default: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac0fbed3778abead795a1_local-treasure-marker.svg`,
    active: `https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/650ac3fa9681e98c08573f2d_active-local-treasure-marker.svg`,
  },
};

function initMap() {
  const mapContainer = document.querySelector(".location-map");
  if (!mapContainer) {
    console.error("Unable to load Map");
    return;
  }

  map = new google.maps.Map(mapContainer, {
    center: { lat: -37.8278762, lng: 144.9665503 },
    zoom: 18,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      { elementType: "geometry", stylers: [{ color: "#2c2c22" }] },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }],
      },
      { featureType: "administrative", stylers: [{ visibility: false }] },
      { featureType: "poi", stylers: [{ visibility: "off" }] },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#647362" }],
      },
      {
        featureType: "road.local",
        elementType: "labels",
        stylers: [{ visibility: false }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3", visibility: false }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c", visibility: false }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#647362", visibility: false }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563", visibility: false }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#647362" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
      { featureType: "poi.business", stylers: [{ visibility: "off" }] },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  createMarkers();

  //Novus map integration

  const novusMapElement = document.querySelector(".sec-location-v4-5");
  if (!novusMapElement) {
    console.error("Unable to load the Novus Map");
    return;
  }

  let latLong = { lat: -37.8278762, lng: 144.9665503 };

  if (window.screen.width > 1440) {
    latLong.lng += 0.06;
  }
  if (window.screen.width >= 1351 && window.screen.width <= 1440) {
    latLong.lng += 0.04;
  }
  if (window.screen.width < 1024) {
    latLong.lat -= 0.02;
  }

  const novusMap = new google.maps.Map(novusMapElement, {
    center: latLong,
    zoom: 13.5,
    disableDefaultUI: true,
    mapId: "4e7898bbcab92cd0",
  });
  createNovusMarker(novusMap);
}

function createMarkers() {
  const bounds = new google.maps.LatLngBounds();

  const defaultMarker = new google.maps.Marker({
    map,
    position: { lat: -37.8278762, lng: 144.9665503 },
    icon: "https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/65082b1e3487e4f9f004f556_location-marker.svg",
  });
  bounds.extend(defaultMarker.position);

  for (let i = 0; i < locations.length; i++) {
    const currentLocation = locations[i];

    const markerLatLng = {
      lat: locations[i]?.lat,
      lng: locations[i]?.lng,
    };
    const marker = new google.maps.Marker({
      map,
      position: markerLatLng,
      icon: icons[currentLocation.type].default,
    });

    google.maps.event.addListener(marker, "click", () => {
      for (let i = 0; i < allMarkers.length; i++) {
        allMarkers[i].marker.setIcon(icons[allMarkers[i].type].default);
      }

      marker.setIcon(icons[currentLocation.type].active);
      openInfoWindow({
        type: currentLocation.type,
        title: currentLocation.title,
        address: currentLocation.address,
        place_id: currentLocation.place_id,
      });
    });

    bounds.extend(marker.position);
    allMarkers.push({ marker, type: currentLocation.type });
    currentTabMarkers.push({ marker, type: currentLocation.type });

    if (i === 0) {
      openInfoWindow({
        type: currentLocation.type,
        title: currentLocation.title,
        address: currentLocation.address,
        place_id: currentLocation.place_id,
      });
    }

    if (i === locations.length - 1) {
      if (window.screen.width <= 1024) {
        map.fitBounds(bounds, { top: 300 });
        return;
      }
      map.fitBounds(bounds);
    }
  }
}

function createNovusMarker(map) {
  if (!map) {
    console.error("novus map not found");
    return;
  }
  const novusMapElement = document.querySelector(".sec-location-v4-5");
  new google.maps.Marker({
    map,
    position: { lat: -37.8278762, lng: 144.9665503 },
    icon: "https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/651e88d5a20c548195874c45_location-marker-darker.svg",
  });

  const infoWindow = document.createElement("div");
  infoWindow.classList.add("novus-info-window");
  infoWindow.innerHTML = `
                            <div class="home-location">
                              <div class="info">
                                <h3>Location Details</h3>
                                <p><strong>153 Sturt Street, Southbank VIC 3006</strong></p>
                                <p>Suitably located within walking or cycling distance of all necessary amenities and the city centre</p>
                                </div>
                                <div class="distance">
                                <table>
                                  <thead>
                                    <tr>
                                      <td>Trams</td>
                                      <td>Distance</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Miles St / Sturt St Tram Stop</td>
                                      <td>0.09 km</td>
                                    </tr>
                                    <tr>
                                      <td>Grant St / Sturt St Tram Stop</td>
                                      <td>0.22 km</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table>
                                  <thead>
                                    <tr>
                                      <td>Train / Metro</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Anzac Metro Station</td>
                                      <td>1.00 km</td>
                                    </tr>
                                    <tr>
                                      <td>Flinders Street Station</td>
                                      <td>1.30 km</td>
                                    </tr>
                                  </tbody>
                                </table>
  
                                <button type="button" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=153 Sturt Street, Southbank VIC 3006', '_blank')" class="location-btn"><img src="https://uploads-ssl.webflow.com/6227f17380fa37ea2192faa4/64fe14922994b2723a781908_Group.svg" />Get Directions</button>
                              </div>
                            </div>
                           `;
  novusMapElement.parentNode.append(infoWindow);
}

function handleTabChange(event, tab) {
  const tabs = document.querySelectorAll("[data-selected]");

  if (tabs && event) {
    for (const tab of tabs) {
      tab.setAttribute("data-selected", "false");
    }
    event.currentTarget.setAttribute("data-selected", "true");
  }

  currentTabMarkers = [];
  indexInfoWindow = 0;
  const bounds = new google.maps.LatLngBounds();

  allMarkers.forEach(({ type, marker }, index) => {
    if (type === tab) {
      bounds.extend(marker.position);
      marker.setVisible(true);
      currentTabMarkers.push({ type, marker });
    } else {
      marker.setVisible(false);
    }
  });
  new google.maps.event.trigger(
    currentTabMarkers[indexInfoWindow].marker,
    "click"
  );
  if (window.screen.width <= 1024) {
    map.fitBounds(bounds, { top: 300 });
    return;
  }
  map.fitBounds(bounds);
}

const openInfoWindow = async (location) => {
  const locationMap = document.querySelector(".location-map");
  let carouselContainer = document.querySelector(".owl-carousel");
  let infoDiv = document.querySelector(".location-data");

  if (!locationMap) {
    console.error("Map container not found");
    return;
  }
  if (!infoDiv) {
    infoDiv = document.createElement("div");
  }

  infoDiv.classList.add("location-data");

  const images = (await getImageByPlaceId(location.place_id)) ?? [];

  carouselContainer = "";

  images.forEach((image) => {
    carouselContainer += `
          <div class="owl-item-image-box item">
            <img src=${image}/>
          </div>
        `;
  });

  infoDiv.innerHTML = `
        <div class="info-image-div">
          <div class="owl-carousel">
            ${carouselContainer}
          </div>
        </div>
        <div class="info-heading">
          <h3 class="info-title">${location.title}</h3>
          <div class="info-navigation prev_next">
            <svg class="nav-prev" style="height:23px;width:23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="currentColor" stroke-width="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>
            <p class="info-description">${location.address}</p>
            <svg class="nav-next" style="height:23px;width:23px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="currentColor" stroke-width="2" points="7 2 17 12 7 22"></polyline></svg>
          </div>
        </div>
      `;

  infoDiv.style.setProperty("--main-bg-color", colorCode[location.type]);
  locationMap.parentNode.insertBefore(infoDiv, locationMap.nextSibling);

  const navNext = document.querySelector(".nav-next");
  const navPrev = document.querySelector(".nav-prev");
  if (navNext && navPrev) {
    navNext.onclick = function () {
      if (currentTabMarkers.length - 1 === indexInfoWindow) {
        indexInfoWindow = 0;
      } else {
        indexInfoWindow++;
      }
      new google.maps.event.trigger(
        currentTabMarkers[indexInfoWindow].marker,
        "click"
      );
    };
    navPrev.onclick = function () {
      if (0 === indexInfoWindow) {
        indexInfoWindow = currentTabMarkers.length - 1;
      } else {
        indexInfoWindow--;
      }
      new google.maps.event.trigger(
        currentTabMarkers[indexInfoWindow].marker,
        "click"
      );
    };
  }
  getOwlCarousel($(".owl-carousel"), colorCode[location.type]);
};

async function getImageByPlaceId(place_id) {
  const service = new window.google.maps.places.PlacesService(map);
  try {
    if (!place_id) {
      console.info("Address not found");
      return null;
    }
    return new Promise((resolve, reject) => {
      const request = { placeId: place_id, fields: ["photo"] };
      service.getDetails(request, (data, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          let images = [];
          if (data.photos) {
            data.photos.forEach((photo, index) => {
              if (index > 0) {
                return;
              }
              images.push(photo.getUrl({ maxWidth: 600, maxHeight: 500 }));
            });
          }
          resolve(images);
        } else {
          reject(
            new Error(`Failed to retrieve place details. Status: ${status}`)
          );
        }
      });
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

function getOwlCarousel(element, color = "#eec485") {
  if (!element) {
    console.error("carousel element not found");
    return;
  }
  element.owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    navText: [
      `<svg style="width:20px; height:20px" class="w-64 h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polyline fill="none" stroke="${color}" stroke-width="3" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>`,
      `<svg style="width:20px; height:20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><polyline fill="none" stroke="${color}" stroke-width="3" points="7 2 17 12 7 22"></polyline></svg>`,
    ],
  });
}

$(document).ready(function () {
  $(".location-filter").click(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).toggleClass("active");
    $(this).find(".location-menu").slideToggle(300);
  });
  $(".location-filter").focusout(function () {
    $(this).removeClass("active");
    $(this).find(".location-menu").slideUp(300);
  });
});
