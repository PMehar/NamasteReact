import React from "react";
import ReactDOM from "react-dom/client";

/*
      Header
        -Logo(title)
        -Nav Items(Right side)
        -cart
      Body
        -search bar
        -RestaurantList
          -RestaurantCard(many cards)
            -Image
            -Name
            -Rating
            -cusines
      Footer
        -Links
        -Copyrights
    */
   //React.Fragment
   //jsx has only one parent

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://cdn.vectorstock.com/i/preview-1x/43/01/restaurant-map-pointer-icon-food-point-pin-symbol-vector-47134301.webp"
    />
  </a>
);

//composing component
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const  restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "333450",
      "name": "Biryani By Kilo",
      "uuid": "d1d4b8a8-c83a-43f6-b74a-11d9e17a5cbb",
      "city": "16",
      "area": "Dharampeth",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "cmghgjsw36hnrxtqwrp8",
      "cuisines": [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 49900,
      "costForTwoString": "₹499 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 3.700000047683716,
      "slugs": {
        "restaurant": "biryani-by-kilo-dharampeth-dharampeth",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Commercial First Floor, F1 & F2 INDU YASH II, 186, Dharampeth Extn, Ramnagar Square, Nagpur",
      "locality": "Dharampeth",
      "parentId": 130,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7472829~p=1~eid=00000189-4905-153e-0460-de8700b40120~srvts=1689147217214",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "333450",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 3.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "287845",
      "name": "Haldiram's Sweets and Namkeen",
      "uuid": "09458fab-53fe-45a0-addb-f46010305f00",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "edf8410c87fc2a56e2e047bec146702b",
      "cuisines": [
        "Sweets",
        "Bakery",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 11,
      "minDeliveryTime": 11,
      "maxDeliveryTime": 11,
      "slaString": "11 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "haldiram-sweets-and-namkeen-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "ABHYANKAR ROAD, SITABULDI,NAGPUR",
      "locality": "Abhyankar Road",
      "parentId": 391465,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "287845",
        "deliveryTime": 11,
        "minDeliveryTime": 11,
        "maxDeliveryTime": 11,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "180402",
      "name": "Mullaji Zillah Biryani Center",
      "uuid": "988fc4aa-fd8f-4c4e-9ad5-4b39f7fa5b1b",
      "city": "16",
      "area": "Sadar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "enh2ihuirlv2dl5lon5n",
      "cuisines": [
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "mullaji-zillah-biryani-centre-sadar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "SHOP NO 52 MINI MANGALWARI BAJAR COMPLEX SADAR , District - Nagpur-1, STATE - Maharashtra - 440001",
      "locality": "Mini Mangalwari Bajar",
      "parentId": 141304,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "180402",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "721134",
      "name": "Lush House",
      "uuid": "8ddeba1b-73ec-4754-8c5c-8bda0e6c9982",
      "city": "16",
      "area": "Bajaj Nagar",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "5cc0695f030745ee3a79f9164c0db5d2",
      "cuisines": [
        "Beverages",
        "Snacks",
        "Italian",
        "Fast Food",
        "Burgers"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 4.300000190734863,
      "slugs": {
        "restaurant": "lush-house-bajaj-nagar-bajaj-nagar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Plot No. 75, Abhyankar Nagar, Main Road, Nagpur, Nagpur (Urban), Nagpur 440022",
      "locality": "Abhyankar Nagar",
      "parentId": 126897,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7147815~p=4~eid=00000189-4905-153e-0460-de8800b40455~srvts=1689147217214",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "721134",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 4.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "697183",
      "name": "Burger King",
      "uuid": "f1903ba0-851a-4e12-ac78-d3f220fe9664",
      "city": "16",
      "area": "Eternity Mall",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "burger-king-nagpur-dharampeth",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shop No.G7,G8,F7 &F8, Ground and First Floor, Eternity Mall,Asian Highway 46, Sitabuldi,Nagpur-440010",
      "locality": "Nagpur",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "697183",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "103936",
      "name": "Anaya Bakery",
      "uuid": "70c063ab-c190-450a-a7cc-5075c01d5cea",
      "city": "16",
      "area": "Teka Naka",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "x2ozxjclpnlyf2cshf2e",
      "cuisines": [
        "Bakery",
        "Chinese",
        "Pizzas",
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "anaya-bakery-jaripatka-jaripatka",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Plot 17, Teka Naka, Kamatee Road, Jaripatka, Nagpur",
      "locality": "Kamatee Road",
      "parentId": 33031,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7336324~p=7~eid=00000189-4905-153e-0460-de8900b40733~srvts=1689147217214",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "103936",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "67332",
      "name": "Pind Punjabi",
      "uuid": "a11cc830-0b73-41e7-988d-b33ebf23bf2b",
      "city": "16",
      "area": "Loha Pul",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "psh10puzrr6ddmhhiph8",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "shree-ganesh-bhojnalay-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shree Ganesh Bhojnalay, Manas Chowk, Sahu Colony, Sitabuldi, Nagpur, Maharashtra",
      "locality": "Sahu Colony",
      "parentId": 12427,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "67332",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56274",
      "name": "Ghugre Nasta Point",
      "uuid": "f8110a1f-3bcf-475d-8ab3-1fe06804862a",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "bofjce9s9jbppwdppkyp",
      "cuisines": [
        "Fast Food",
        "Street Food",
        "Snacks",
        "Sweets"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 13,
      "minDeliveryTime": 13,
      "maxDeliveryTime": 13,
      "slaString": "13 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "ghugare-nasta-point-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Mahajan Market, Near Apna Bazar, Sitabuldi, Nagpur",
      "locality": "Tekdi Road",
      "parentId": 4840,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM",
        "subHeader": "",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "56274",
        "deliveryTime": 13,
        "minDeliveryTime": 13,
        "maxDeliveryTime": 13,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "53484",
      "name": "Haldiram's Restaurant",
      "uuid": "3e0b1254-63e9-46db-9326-708de1e1f2a3",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "c058b951bd917bf716630dff74648a5d",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Sweets",
        "Desserts",
        "Chaat"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "haldiram-munje-chowk-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Abhyankar Marg, Munje Chowk, Sitabuldi, Nagpur, Maharashtra 440012",
      "locality": "Abhyankar Marg",
      "parentId": 351771,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7450582~p=13~eid=00000189-4905-153e-0460-de8b00b40d17~srvts=1689147217214",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "53484",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "99138",
      "name": "Pakodewala",
      "uuid": "1f12cf3e-3b1c-421b-b7b2-697092ada5fb",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "pzah08i0tuwuuhymkahp",
      "cuisines": [
        "Snacks",
        "Street Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "pakodewala-restaurant-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Subhash Rd, Bhaji Mandi Chowk, Telipura, Sitabuldi, Nagpur, Maharashtra 440012",
      "locality": "Telipura",
      "parentId": 153857,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "99138",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "87718",
      "name": "Foody Moody Thali",
      "uuid": "61944a9e-68b4-4287-a78c-8bb9fcca8341",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "sm2d7bzlpx6mb7qauodz",
      "cuisines": [
        "Indian",
        "Thalis",
        "Chinese",
        "Biryani",
        "North Indian",
        "Punjabi",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 15,
      "minDeliveryTime": 15,
      "maxDeliveryTime": 15,
      "slaString": "15 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "foody-moody-dharampeth-sadar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shree Ganesh Bhojnalay, Manas Chowk, Sahu Colony, Sitabuldi, Nagpur, Maharashtra",
      "locality": "Sahu Colony",
      "parentId": 83005,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "87718",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "53868",
      "name": "KFC",
      "uuid": "1a378519-fe52-4d38-a47a-b497f285eb5a",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "kfc-ground-floor-eternity-mall-variety-square-bajaj-nagar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "G1, G2, Ground Floor, Eternity Mall, Variety Square, Sitaburdi, Nagpur, Maharashtra 440010",
      "locality": "Eternity Mall",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "53868",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "78133",
      "name": "Jubilee Bakery",
      "uuid": "a7ecf4a2-f0d7-4b99-bd49-97b27b7f7f70",
      "city": "16",
      "area": "Chaoni",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "hrlidz9wa646aiv6mr7m",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Snacks",
        "Desserts",
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "jubilee-bakery-chaoni-sadar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shop 1, Dhadiwal Complex, Opposite MOIL Bhavan, Katol Road, Chhaoni, Nagpur",
      "locality": "Katol Road",
      "parentId": 7967,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7327425~p=16~eid=00000189-4905-153e-0460-de8c00b41011~srvts=1689147217214",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "78133",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "405545",
      "name": "Shree Ganesh Bhojnalaya",
      "uuid": "f3e29dcf-f5b8-4ee3-a8b3-ad2200a3504f",
      "city": "16",
      "area": "Loha Pul",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "zqnj9vqi2vcuotnvpdue",
      "cuisines": [
        "Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "shankar-bhojnalaya-nandanvan-nandanvan",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shree Ganesh Bhojnalay, Manas Chowk, Sahu Colony, Sitabuldi, Nagpur, Maharashtra",
      "locality": "Sahu Colony",
      "parentId": 262318,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "405545",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.0",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "110413",
      "name": "Taste Of Indore",
      "uuid": "c4ac6001-7c33-4324-b282-bba0b9ed691b",
      "city": "16",
      "area": "Dharampeth",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "hijcdvoxbjvbmrz8oj2z",
      "cuisines": [
        "Street Food",
        "North Indian",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 7000,
      "costForTwoString": "₹70 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "taste-of-indore-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Mahajan Market Road, Sitabuldi, Nagpur",
      "locality": "Mahajan Market Road",
      "parentId": 201613,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "110413",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  }
];
 

const RestaurantCard = (props)=>{
  console.log(props);
  return(
    <div className="card">
      <img src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
        props.restaurant.data?.cloudinaryImageId}/>
      <h2>{props.restaurant.data?.name}</h2>
      <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.data?.avgRating} stars</h4>
    </div>
  );
};
//props(data/properties)
const Body = () => {
  return (
  <div className="restaurant-list">
    <RestaurantCard restaurant = {restaurantList[0]} hello="world"/>
    <RestaurantCard restaurant = {restaurantList[1]}/>
    <RestaurantCard restaurant = {restaurantList[2]}/>
    <RestaurantCard restaurant = {restaurantList[3]}/>
    <RestaurantCard restaurant = {restaurantList[4]}/>
    <RestaurantCard restaurant = {restaurantList[5]}/>
    <RestaurantCard restaurant = {restaurantList[6]}/>
    <RestaurantCard restaurant = {restaurantList[7]}/>
    <RestaurantCard restaurant = {restaurantList[8]}/>
    <RestaurantCard restaurant = {restaurantList[9]}/>
    <RestaurantCard restaurant = {restaurantList[10]}/>
    <RestaurantCard restaurant = {restaurantList[11]}/>
    <RestaurantCard restaurant = {restaurantList[12]}/>
    <RestaurantCard restaurant = {restaurantList[13]}/>
    <RestaurantCard restaurant = {restaurantList[14]}/>
  </div>)
};

const Footer = () => {
  return <h1>Footer</h1>;
};
const styleObj ={ //as an obj
  backgroundColor : "red",
}

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); //paasing multiple child using container inside the root (takes in react element and modifies the dom)
