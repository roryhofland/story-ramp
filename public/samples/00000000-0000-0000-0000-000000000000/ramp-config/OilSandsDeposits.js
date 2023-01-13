let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmin: -2036967.8855660555,
                            ymin: 225988.15031441953,
                            xmax: -430249.8990248912,
                            ymax: 1630799.2940631039,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    }
                ],
                mapMouseThrottle: 200,
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: [
                            {
                                level: 0,
                                resolution: 38364.660062653464,
                                scale: 145000000
                            },
                            {
                                level: 1,
                                resolution: 22489.628312589961,
                                scale: 85000000
                            },
                            {
                                level: 2,
                                resolution: 13229.193125052918,
                                scale: 50000000
                            },
                            {
                                level: 3,
                                resolution: 7937.5158750317505,
                                scale: 30000000
                            },
                            {
                                level: 4,
                                resolution: 4630.2175937685215,
                                scale: 17500000
                            },
                            {
                                level: 5,
                                resolution: 2645.8386250105837,
                                scale: 10000000
                            },
                            {
                                level: 6,
                                resolution: 1587.5031750063501,
                                scale: 6000000
                            },
                            {
                                level: 7,
                                resolution: 926.04351875370423,
                                scale: 3500000
                            },
                            {
                                level: 8,
                                resolution: 529.16772500211675,
                                scale: 2000000
                            },
                            {
                                level: 9,
                                resolution: 317.50063500127004,
                                scale: 1200000
                            },
                            {
                                level: 10,
                                resolution: 185.20870375074085,
                                scale: 700000
                            },
                            {
                                level: 11,
                                resolution: 111.12522225044451,
                                scale: 420000
                            },
                            {
                                level: 12,
                                resolution: 66.1459656252646,
                                scale: 250000
                            },
                            {
                                level: 13,
                                resolution: 38.364660062653464,
                                scale: 145000
                            },
                            {
                                level: 14,
                                resolution: 22.489628312589961,
                                scale: 85000
                            },
                            {
                                level: 15,
                                resolution: 13.229193125052918,
                                scale: 50000
                            },
                            {
                                level: 16,
                                resolution: 7.9375158750317505,
                                scale: 30000
                            },
                            {
                                level: 17,
                                resolution: 4.6302175937685215,
                                scale: 17500
                            }
                        ]
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                        hasNorthPole: true
                    }
                ],
                basemaps: [
                    {
                        id: 'baseNrCan',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'The Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT',
                                layerType: 'esri-tile',
                                url:
                                    'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    }
                ],
                initialBasemapId: 'baseNrCan'
            },
            layers: [
                {
                    id: 'peaceriver',
                    layerType: 'esri-feature',
                    url:
                        'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/StoryRAMP/410b88da_0ed1_4749_903f_5e76c24e2e5f/MapServer/16',
                    state: {
                        opacity: 0.5,
                        visibility: true,
                        hovertips: false
                    }
                },
                {
                    id: 'athabasca',
                    layerType: 'esri-feature',
                    url:
                        'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/StoryRAMP/410b88da_0ed1_4749_903f_5e76c24e2e5f/MapServer/17',
                    state: {
                        opacity: 0.5,
                        visibility: true,
                        hovertips: false
                    }
                },
                {
                    id: 'coldlake',
                    layerType: 'esri-feature',
                    url:
                        'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/StoryRAMP/410b88da_0ed1_4749_903f_5e76c24e2e5f/MapServer/18',
                    state: {
                        opacity: 0.5,
                        visibility: true,
                        hovertips: false
                    }
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'peaceriver'
                            },
                            {
                                layerId: 'athabasca'
                            },
                            {
                                layerId: 'coldlake'
                            }
                        ]
                    },
                    legendHeaderControls: ['groupToggle', 'visibilityToggle']
                },
                appbar: {
                    items: ['legend', 'export']
                },
                mapnav: {
                    items: ['fullscreen', 'geolocator', 'help', 'home', 'legend']
                },
                details: {
                    panelWidth: {
                        default: 350,
                        'details-items': 400
                    }
                },
                export: {
                    title: {
                        value: 'Oil Sands Deposits in Canada',
                        selectable: false
                    },
                    legend: {
                        selected: false
                    },
                    fileName: 'ramp-pcar-4-map-carte'
                },
                help: {
                    location: './help'
                }
            },
            system: { animate: true }
        }
    }
};

let options = {
    loadDefaultFixtures: true,
    loadDefaultEvents: true,
    startRequired: false
};

export function initialize(panel) {
    const rInstance = RAMP.createInstance(panel, config, options);

    // add export fixtures
    rInstance.fixture.add('export');
    return rInstance;
}
