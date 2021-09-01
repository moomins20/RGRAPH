// CANVAS RADAR CHART ------------------------------------

const dessineMonRadar = () => {
    labels = ['Hommes', 'Femmes', '15-24 ans','25-54 ans', '55 ans et plus', 'Sans diplôme d\'études secondaires', 'Diplôme d\'études secondaires', 'Études postsecondaires', 'Diplôme universitaire'];

    new RGraph.Radar({
        id: 'radar',
        data: [
            [5.9, 5, 10.3, 6.2, 5.3, 3.8, 9.4, 4.7, 5.5],
            [5.7, 4.5, 9.0, 6.3, 4.7, 3.9, 8.5, 4.4, 5.2],
            [9.1, 8.6, 13.9, 11.1, 9.1, 5.9, 17.2, 7.3, 8.3]
        ],
        options: {
            backgroundCircles: true, 
            colorsStroke: ['#e9c46a', '#ce796b', '#84a59d'],
            colors: ['rgba(0,0,0,0)'],
            tooltips: '<strong>%{property:labels[%{index}]}</strong>%{key}',
            tooltipsFormattedKeyLabels: ['2018 :','2019 :','2020 :'],
            tooltipsFormattedKeyColors: ['#e9c46a', '#ce796b', '#84a59d'],
            tooltipsFormattedUnitsPost: '%',
            tooltipsFormattedPoint: ',',
            tooltipsFormattedDecimals: '2',
            tooltipsFormattedKeyColorsShape: 'circle',
            tooltipsCss: {
                backgroundColor: '#212529',
                boxShadow: '2px 2px 5px #141e61',
                fontSize: '16px',
                textAlign: 'left',
                width: '140px',
            }
        }
    }).draw().responsive([
        {
            maxWidth: null, 
            width: 550,
            height: 450,
            options: {
                labels: ['Hommes', 'Femmes', 'Sans diplôme d\'études secondaires', 'Diplôme d\'études secondaires', 'Études postsecondaires', 'Diplôme universitaire', '15-24 ans','25-54 ans', '55 ans +'],
                labelsSize: 14
            }
        },
        {
            maxWidth: 1100,
            width: 450,
            height: 400,
            options: {
                labels: ['Hommes', 'Femmes', 'Sans DES', 'DES', 'Postsecondaires', 'Universitaires', '15-24 ans','25-54 ans', '55 ans +'],
                labelsSize: 12
            }
        },
        {
            maxWidth: 600,
            width: 300,
            height: 300,
            options: {
                labels: ['Hommes', 'Femmes', 'Sans DES', 'DES', 'Postsecondaires', 'Universitaires', '15-24 ans','25-54 ans', '55 ans +'],
                labelsSize: 10,
                tooltipsEvent: 'click'
            }
        }
    ]);
}

// CANVAS LINE CHART ---------------------------------------

const dessineMaLigne = () => {
    data = [
        [1.36,1.02,1.06,1.63,1.91,2.33,3.81,3.58,4.06,4.56,3.35,2.71,4.99,7.49,11.00,10.67,7.54,7.98,8.97,9.15,10.13,12.47,10.77,5.86,4.31,3.96,4.20,4.36,4.03,4.98,4.78,5.63,1.49,1.87,0.17,2.15,1.57,1.62,1.00,1.74,2.72,2.53,2.26,2.76,1.86,2.21,2.00,2.14,2.37,0.30,1.78,2.91,1.52,0.94,1.91,1.13,1.43,1.60,2.27,1.95,0.72]
    ];
    xaxisLabels = ['1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'];

    new RGraph.Line({
        id: 'line',
        data: data,
        options: {
            mesannees: ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            tooltips: '<strong>%{property:mesannees[%{index}]}</strong> <br><em>Taux d\'inflation : %{value_formatted}</em>',
            tooltipsFormattedDecimals: '2',
            tooltipsFormattedUnitsPost: '%',
            tooltipsFormattedPoint: ',',
            backgroundGridVlines: true,
            backgroundGridBorder: true,
            colors: ['#141e61'],
            linewidth: 3,
            spline: false,
            tickmarksStyle: 'circle',
            tickmarksSize: 1,
            tickmarksColor: '#93b5c6',
            titleBold: true,
            xaxisLabels: xaxisLabels,
            xaxis: false,
            yaxis: false,
            xaxisTitle: 'Année',
            yaxisTitle: 'Pourcentage (%)',
            xaxisTitleItalic: true,
            yaxisTitleItalic: true,
            tooltipsCss: {
                backgroundColor: '#212529',
                boxShadow: '2px 2px 5px #141e61',
                fontSize: '16px',
                width: '200px',
            }
        }
    }).trace().responsive([
        {
            maxWidth: null, 
            width: 1000,
            height: 600,
            options: {
                xaxisLabelsOffsety: 5,
                xaxisTitleOffsety: 30,
                yaxisLabelsOffsetx: -5,
                yaxisTitleOffsetx: -15,
                xaxisLabelsSize: 14,
                yaxisLabelsSize: 14,
                xaxisTitleSize: 14,
                yaxisTitleSize: 14,
                marginBottom: 100,
                marginLeft: 50,
                marginRight: 50   
            },
  
        },
        {
            maxWidth: 1100,
            width: 500,
            height: 350,
            options: {
                xaxisLabelsAngle: 45,
                xaxisLabelsOffsety: 5,
                xaxisTitleOffsety: 25,
                yaxisLabelsOffsetx: -5,
                yaxisTitleOffsetx: -15,
                xaxisLabelsSize: 12,
                yaxisLabelsSize: 12,
                xaxisTitleSize: 12,
                yaxisTitleSize: 12,
                marginBottom: 80,
                marginLeft: 50,
                marginRight: 50
            }
        },
        {
            maxWidth: 600,
            width: 400,
            height: 300,
            options: {
                xaxisLabelsAngle: 60,
                xaxisLabelsOffsety: 5,
                xaxisTitleOffsety: 25,
                xaxisLabelsSize: 10,
                yaxisLabelsSize: 10,
                xaxisTitleSize: 10,
                yaxisTitleSize: 10,
                tooltipsEvent: 'click',
                marginBottom: 70,
                marginLeft: 50,
                marginRight: 50
            }
        }
    ]);
}

// CANVAS THERMOMETER ----------------------------------------

const dessineMonThermometre = () => {
    new RGraph.Thermometer({
        id: 'thermo1',
        min: 0,
        max: 10,
        value: 6.6,
        options: {
            marginLeft: 45,
            marginRight: 45,
            marginTop: 45,
            colors: ['#141e61'],
            title: 'Montréal',
            titleOffsety: -5,
            scaleDecimals: '1',
            scalePoint: ',',
            scaleUnitsPost: '°C',
            shadow: true,
            shadowColor: '#141e61',
            shadowBlur: 5,
            colors: ['Gradient(#141e61:#00296b:#141e61)'],
            labelsValueBold: true   
        }
    }).draw().responsive([
        {
            maxWidth: null,
            width: 150,
            height: 500,
            options: {
                titleSize: 16
            }
        },
        {
            maxWidth: 1100,
            width: 150,
            height: 500,
            options: {
                titleSize: 14
            }
        },
        {
            maxWidth: 600,
            width: 140,
            height: 400,
            options: {
                titleSize: 12
            }
        }
    ]);

    new RGraph.Thermometer({
        id: 'thermo2',
        min: 0,
        max: 10,
        value: 4.6,
        options: {
            marginLeft: 45,
            marginRight: 45,
            marginTop: 45,
            colors: ['#141e61'],
            title: 'Québec',
            titleOffsety: -5,
            scaleDecimals: '1',
            scalePoint: ',',
            scaleUnitsPost: '°C',
            shadow: true,
            shadowColor: '#141e61',
            shadowBlur: 5,
            colors: ['Gradient(#141e61:#00296b:#141e61)'],
            labelsValueBold: true,
        }
    }).draw().responsive([
        {
            maxWidth: null, 
            width: 150,
            height: 500,
            options: {
                titleSize: 16,
            }
        },
        {
            maxWidth: 1100,
            width: 150,
            height: 500,
            options: {
                titleSize: 14,
            }
        },
        {
            maxWidth: 600,
            width: 140,
            height: 400,
            options: {
                titleSize: 12,
            }
        }
    ]);
}

// CANVAS DONUT -----------------------------------------------

const dessineMonBeigne = () => {
    data = [4.8, 6.9, 14.3, 74.1];
    labels = ['Venant d\'autres pays','Américains', 'Canadiens des autres provinces', 'Québécois'];

    new RGraph.Pie({
        id: 'donut',
        data: data,
        options: {
            labels: labels,
            tooltips: '<strong>%{property:labels[%{index}]} : </strong> <br><em>%{key}</em>',
            tooltipsFormattedKeyLabels: data,
            tooltipsFormattedDecimals: '1',
            tooltipsFormattedUnitsPost: '%',
            tooltipsFormattedPoint: ',',
            tooltipsCss: {
                fontSize: '16pt',
                textAlign: 'left'
            },
            linewidth: 5,
            labelsSticksLinewidth: 2,
            colorsStroke: '#D2D2D2',
            colors: [ '#787A91', '#FFAA4C', '#7D0633', '#141E61'],
            variant: 'donut',
            shadow: false,
            titleBold: true,
            tooltipsCss: {
                backgroundColor: '#212529',
                boxShadow: '2px 2px 5px #141e61',
                textAlign: 'left',
                width: '150px',
            }
        }
    }).draw().responsive([
        {
            maxWidth: null, 
            width: 600,
            height: 500,
            options: {
                labelsSize: 16  
            }
        },
        {
            maxWidth: 1100,
            width: 500,
            height: 400,
            options: {
                labelsSize: 14
            }
        },
        {
            maxWidth: 600,
            width: 350,
            height: 300,
            options: {
                labelsSize: 10,
                tooltipsEvent: 'click' 
            }
        }
    ]);
}

// SVG SEMI-CIRCULAR PROGRESS BAR ------------------------------

const dessineMonDemiCercle = () => {

    new RGraph.SVG.SemiCircularProgress({
        id: 'semicircular',
        min: 0,
        max: 100,
        value: 78,
        options: {
            scaleUnitsPost: '%',
            tooltips: 'Portion du Québec en terre: %{value}%',
            tooltipsCss: {
                backgroundColor: '#212529',
                boxShadow: '2px 2px 5px #141e61',
                fontSize: '16px',
                textAlign: 'left',
                width: '250px',
            },
            backgroundFill: 'blue',
            backgroundFillOpacity: 1,
            backgroundStroke: 'black',
            colors: ['green'],
            colorsStroke: 'black'
        },
    }).draw().responsive([
        {
            maxWidth: null, 
            width: 600,
            height: 300,
            options: {
                textSize: 14 
            }
        },
        {
            maxWidth: 1100,
            width: 500,
            height: 250,
            options: {
                textSize: 12,
                tooltipsEvent: 'click',
            }
        },
        {
            maxWidth: 600,
            width: 400,
            height: 250,
            options: {
                textSize: 10,
                tooltipsEvent: 'click',
            }
        }
    ]);
}

// SVG BAR CHART -----------------------------------------------

const dessineMesBarres = () => {
    data = [[15.5, 26.5, 18.8, 18.5, 20.6],[21.7, 29.9, 19.1, 18.8, 10.5],[27.3, 31.5, 17.5, 16, 7.7],[30.7, 34.4, 15.5, 13.1, 6.2],[33.3, 34.8, 13.9, 12.1, 6]];
    labels = ['1976','1986','1996','2006','2016'];

    new RGraph.SVG.Bar({
        id: 'bar',
        data: data,
        options: {
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            yaxisTitle: 'Pourcentage (%)',
            yaxisScaleMax: 40,
            xaxisLinewidth: 2,
            yaxisLinewidth: 2,
            xaxisTickmarks: false,
            xaxisLabels: '%{global:labels[%{index}]}',
            colors: ['#5cf', 'black', 'red', 'green', 'yellow'],
            tooltips: '%{key}',
            tooltipsFormattedDecimals: 2,
            tooltipsFormattedPoint: ',',
            tooltipsFormattedUnitsPost: '%',
            tooltipsFormattedKeyColorsShape: 'circle',
            tooltipsCss: {
                backgroundColor: '#212529',
                boxShadow: '2px 2px 5px #141e61',
                fontSize: '16px',
                width: '100px',
            },
            key: ['1 pers', '2 pers', '3 pers', '4 pers', '5 + pers'],
            keyOffsety: -15,
            keyLabelsSize: 12,
            keyBackground: 'black',
            keyColorShape: 'circle' 
        }
    }).wave().responsive([
        {
            maxWidth: null, 
            width: 1000,
            height: 600,
            options: {
                yaxisLabelsSize: 14,
                yaxisTitleSize: 14,
                yaxistitleOffsetx: -15,
                xaxisLabelsSize: 14,
                marginBottom: 50,
                marginLeft: 50,
                marginRight: 50,
                marginTop: 60,
                marginInner: 20,
                marginInnerGrouped: 5
            },
        },
        {
            maxWidth: 1100,
            width: 500,
            height: 350,
            options: {
                yaxisLabelsSize: 12,
                yaxisTitleSize: 12,
                yaxistitleOffsetx: -15,
                xaxisLabelsSize: 12,
                tooltipsEvent: 'click',
                marginBottom: 50,
                marginLeft: 50,
                marginRight: 50,
                marginTop: 60,
                marginInner: 10,
                marginInnerGrouped: 5
            }
        },
        {
            maxWidth: 600,
            width: 400,
            height: 300,
            options: {
                yaxisLabelsSize: 10,
                yaxisTitleSize: 10,
                xaxisLabelsSize: 10,
                tooltipsEvent: 'click',
                marginBottom: 50,
                marginLeft: 60,
                marginRight: 50,
                marginTop: 60,
                marginInner: 5,
                marginInnerGrouped: 2 
            }
        }
    ]);
}

// -------------------------------------------------------------

const appelerToutesLesFonctions = () => {
    dessineMonRadar();
    dessineMaLigne();
    dessineMonThermometre();
    dessineMonBeigne();
    dessineMonDemiCercle();
    dessineMesBarres();
}

appelerToutesLesFonctions();