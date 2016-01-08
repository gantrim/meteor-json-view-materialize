if (Meteor.isClient) {
    Session.set("jsonData", {
        "_id": {
            "$oid": "dbd78c5aa6e1b724746a6f1f"
        },
        "name": "Kellie Underwood",
        "description": "Kellie Underwood - 01-05-2016",
        "estimateTypeId": "bd643df397bcc22b9020a525",
        "inputValues": {
            "skyLight": [{
                "count": 0
            }],
            "eave": [{
                "linealFeet": 0
            }],
            "rake": [{
                "linealFeet": 0,
                "lf2": 0
            }],
            "valley": [{
                "linealFeet": 0
            }],
            "pipeFlashing2Inch": [{
                "count": 0
            }],
            "pipeFlashing3To4Inch": [{
                "count": 0
            }],
            "roofedPorch": [{
                "area": 0
            }],
            "capShingles": [{
                "square": 0
            }]
        },
        "sums": {
            "skyLight": {
                "count": 0
            },
            "eave": {
                "linealFeet": 0
            },
            "rake": {
                "linealFeet": 0,
                "lf2": 0
            },
            "valley": {
                "linealFeet": 0
            },
            "pipeFlashing2Inch": {
                "count": 0
            },
            "pipeFlashing3To4Inch": {
                "count": 0
            },
            "roofedPorch": {
                "area": 0
            },
            "capShingles": {
                "square": 0
            }
        },
        "calculatedValues": {
            "iceAndWaterShieldLinealFt": 0,
            "cccc": 0
        },
        "selectedResources": {},
        "resourceTypes": [{
            "_id": {
                "$oid": "562e5aafae5d760823898203"
            },
            "name": "Drip Edge",
            "unit": "Lineal Foot",
            "waste": 0,
            "type": "DripEdge",
            "quantity": 0,
            "allowMultipleResources": false,
            "possibleResources": [{
                "_id": {
                    "$oid": "562e5f7bae5d76082389827a"
                },
                "type": "DripEdge",
                "name": "Drip Edge - T",
                "UID": "2341",
                "manufacturerID": "2341",
                "manufacturer": "Quality Edge",
                "distributor": "Wimsatt",
                "distributorSKU": "2341",
                "materialCost": "3.67",
                "laborCost": "0",
                "variable": "0",
                "unit": "Lineal Foot",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825f",
                "resourceType": "562e5aafae5d760823898203",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d76082389827b"
                },
                "type": "DripEdge",
                "name": "Drip Edge - C",
                "UID": "2342",
                "manufacturerID": "2342",
                "manufacturer": "Quality Edge",
                "distributor": "Wimsatt",
                "distributorSKU": "2342",
                "materialCost": "5.74",
                "laborCost": "0",
                "variable": "0",
                "unit": "Lineal Foot",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825f",
                "resourceType": "562e5aafae5d760823898203",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d76082389827c"
                },
                "type": "DripEdge",
                "name": "Drip Edge - L",
                "UID": "2343",
                "manufacturerID": "2343",
                "manufacturer": "Quality Edge",
                "distributor": "Wimsatt",
                "distributorSKU": "2343",
                "materialCost": "4.72",
                "laborCost": "0",
                "variable": "0",
                "unit": "Lineal Foot",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825f",
                "resourceType": "562e5aafae5d760823898203",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d76082389827d"
                },
                "type": "DripEdge",
                "name": "Drip Edge - T",
                "UID": "2351",
                "manufacturerID": "2351",
                "manufacturer": "Quality Edge",
                "distributor": "Eikenhout",
                "distributorSKU": "2351",
                "materialCost": "3.77",
                "laborCost": "0",
                "variable": "0",
                "unit": "Lineal Foot",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825f",
                "resourceType": "562e5aafae5d760823898203",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d76082389827e"
                },
                "type": "DripEdge",
                "name": "Drip Edge - C",
                "UID": "2352",
                "manufacturerID": "2352",
                "manufacturer": "Quality Edge",
                "distributor": "Eikenhout",
                "distributorSKU": "2352",
                "materialCost": "4.42",
                "laborCost": "0",
                "variable": "0",
                "unit": "Lineal Foot",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825f",
                "resourceType": "562e5aafae5d760823898203",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d76082389827f"
                },
                "type": "DripEdge",
                "name": "Drip Edge - L",
                "UID": "2353",
                "manufacturerID": "2353",
                "manufacturer": "Quality Edge",
                "distributor": "Eikenhout",
                "distributorSKU": "2353",
                "materialCost": "4.88",
                "laborCost": "0",
                "variable": "0",
                "unit": "Lineal Foot",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825f",
                "resourceType": "562e5aafae5d760823898203",
                "otherCost": "0"
            }]
        }, {
            "_id": {
                "$oid": "562e5aafae5d760823898210"
            },
            "name": "Skylight",
            "unit": "Item",
            "waste": 0,
            "type": "Skylight",
            "quantity": 0,
            "allowMultipleResources": false,
            "possibleResources": [{
                "_id": {
                    "$oid": "562e5f7bae5d7608238982ab"
                },
                "type": "Skylight",
                "name": "Skylight with flashing 23.25W by 46.25H",
                "UID": "2205",
                "manufacturerID": "2205",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2205",
                "materialCost": "338",
                "laborCost": "50",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982ac"
                },
                "type": "Skylight",
                "name": "Skylight with flashing  30.55W by 36.5H",
                "UID": "2206",
                "manufacturerID": "2206",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2206",
                "materialCost": "315",
                "laborCost": "50",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982ad"
                },
                "type": "Skylight",
                "name": "Skylight with flashing 44.75W by 46.25H",
                "UID": "2207",
                "manufacturerID": "2207",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2207",
                "materialCost": "460",
                "laborCost": "75",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982ae"
                },
                "type": "Skylight",
                "name": "Skylight with flashing 15.25W by 46.25H with trim-no paint",
                "UID": "2208",
                "manufacturerID": "2208",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2208",
                "materialCost": "285",
                "laborCost": "200",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982af"
                },
                "type": "Skylight",
                "name": "Skylight with flashing 21.5W by 27.3H with trim-no paint",
                "UID": "2209",
                "manufacturerID": "2209",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2209",
                "materialCost": "264",
                "laborCost": "200",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982b0"
                },
                "type": "Skylight",
                "name": "Skylight with flashing  21.5W by 46.25H with trim-no paint",
                "UID": "2210",
                "manufacturerID": "2210",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2210",
                "materialCost": "327",
                "laborCost": "200",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982b1"
                },
                "type": "Skylight",
                "name": "Skylight with flashing 23.25W by 46.25H with trim-no paint",
                "UID": "2211",
                "manufacturerID": "2211",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2211",
                "materialCost": "338",
                "laborCost": "200",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982b2"
                },
                "type": "Skylight",
                "name": "Skylight with flashing  30.55W by 36.5H with trim-no paint",
                "UID": "2212",
                "manufacturerID": "2212",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2212",
                "materialCost": "315",
                "laborCost": "200",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982b3"
                },
                "type": "Skylight",
                "name": "Skylight with flashing 44.75W by 46.25H with trim-no paint",
                "UID": "2213",
                "manufacturerID": "2213",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2213",
                "materialCost": "460",
                "laborCost": "225",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982a7"
                },
                "type": "Skylight",
                "name": "Skylight 2x4 with roof",
                "UID": "2201",
                "manufacturerID": "2201",
                "manufacturer": "Velux",
                "distributor": "Eikenhout",
                "distributorSKU": "2201",
                "materialCost": "350",
                "laborCost": "48",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d7608238982a8"
                },
                "type": "Skylight",
                "name": "Skylight with flashing 15.25W by 46.25H",
                "UID": "2202",
                "manufacturerID": "2202",
                "manufacturer": "Velux",
                "distributor": "Wimsatt",
                "distributorSKU": "2202",
                "materialCost": "285",
                "laborCost": "50",
                "variable": "0",
                "unit": "Item",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389826c",
                "resourceType": "562e5aafae5d760823898210",
                "otherCost": "0"
            }]
        }, {
            "_id": {
                "$oid": "562e5aafae5d760823898201"
            },
            "name": "Cap Shingles",
            "unit": "Square",
            "waste": 0,
            "type": "CapShingles",
            "quantity": 0,
            "allowMultipleResources": false,
            "possibleResources": [{
                "_id": {
                    "$oid": "562e5f7bae5d760823898274"
                },
                "type": "CapShingles",
                "name": "Accesory Cap",
                "UID": "2110",
                "manufacturerID": "2110",
                "manufacturer": "Owens Corning",
                "distributor": "Wimsatt",
                "distributorSKU": "2110",
                "materialCost": "53.95",
                "laborCost": "30",
                "variable": "0",
                "unit": "Square",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825d",
                "resourceType": "562e5aafae5d760823898201",
                "otherCost": "0"
            }, {
                "_id": {
                    "$oid": "562e5f7bae5d760823898275"
                },
                "type": "CapShingles",
                "name": "Hip and Ridge 30ft",
                "UID": "2130",
                "manufacturerID": "2130",
                "manufacturer": "Certainteed",
                "distributor": "Wimsatt",
                "distributorSKU": "2130",
                "materialCost": "47.95",
                "laborCost": "30",
                "variable": "0",
                "unit": "Square",
                "amountInPackage": "1",
                "resourceBehavior": "562e5d85ae5d76082389825d",
                "resourceType": "562e5aafae5d760823898201",
                "otherCost": "0"
            }]
        }]
    });

    Template.hello.events({
        'click .btn-update-json': function () {
            Session.set("jsonData", Fake.user());
        }
    });
    Template.hello.helpers({
        jsonData: function () {
            return Session.get("jsonData");
        },

        options: function () {
            return {
                collapsed: false
            };
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
