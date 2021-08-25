// CANVAS RADAR CHART ------------------------------------

const dessineMonRadar = () => {
    labels = ['Hommes', 'Femmes', '15-24 ans','25-54 ans', '55 ans et plus', 'Sans diplôme d\'études secondaires', 'Diplôme d\'études secondaires', 'Études postsecondaires', 'Diplôme universitaire'];

    new RGraph.Radar({
        id: 'radar',
        data: [
            [5.9, 5, 9.4, 4.7, 5.5, 10.3, 6.2, 5.3, 3.8],
            [5.7, 4.5, 8.5, 4.4, 5.2, 9.0, 6.3, 4.7, 3.9],
            [9.1, 8.6, 17.2, 7.3, 8.3, 13.9, 11.1, 9.1, 5.9]
        ],
        options: {
            backgroundCircles: true, 
            textSize: 16,
            labels: labels,
            labelsSize: 12,
            colorsStroke: ['#e9c46a', '#ce796b', '#84a59d'],
            colors: ['rgba(0,0,0,0)'],
            linewidth: 3,
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 85,
            marginRight: 125,
            tooltips: '<b>%{property:labels[%{index}]}</b>%{key}',
            tooltipsFormattedKeyLabels: ['2018 :','2019 :','2020 :'],
            tooltipsFormattedKeyColors: ['#e9c46a', '#ce796b', '#84a59d'],
            tooltipsFormattedUnitsPost: '%',
            tooltipsCss: {
                fontSize: '18px',
                boxShadow: '2px 2px 5px #141e61',
                textAlign: 'left',
                backgroundColor: '#212529',
            },
            tooltipsFormattedPoint: ',',
            tooltipsFormattedDecimals: '2',
            tooltipsFormattedKeyColorsShape: 'circle',
            title: 'Taux de chômage'
        }
    }).draw();
}

// CANVAS LINE CHART ---------------------------------------

const dessineMaLigne = () => {
    data = [
        [1.36,1.02,1.06,1.63,1.91,2.33,3.81,3.58,4.06,4.56,3.35,2.71,4.99,7.49,11,10.67,7.54,7.98,8.97,9.15,10.13,12.47,10.77,5.86,4.31,3.96,4.2,4.36,4.03,4.98,4.78,5.63,1.49,1.87,0.17,2.15,1.57,1.62,1,1.74,2.72,2.53,2.26,2.76,1.86,2.21,2,2.14,2.37,0.3,1.78,2.91,1.52,0.94,1.91,1.13,1.43,1.6,2.27,1.95,0.72]
    ];

    xaxisLabels = ['1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'];

    new RGraph.Line({
        id: 'line',
        data: data,
        options: {
            tooltips: '%{key}',
            tooltipsFormattedUnitsPost: '%',
            tooltipsFormattedKeyColors: ['#141e61'],
            tooltipsFormattedKeyLabels: ['Taux d\'intérêt de'],
            tooltipsCss: {
                fontSize: '16pt',
                textAlign: 'left'
            },
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            colors: ['#141e61'],
            linewidth: 3,
            spline: false,
            tickmarksStyle: null,
            xaxisLabels: xaxisLabels,
            xaxis: false,
            yaxis: false,
            marginLeft: 40
        }
    }).trace();
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
            // tooltips: '<span style="font-size: 14pt">Todays temperature</span><br/>%{key}',
            colors: ['#141e61'],
            tooltipsFormattedKeyLabels: ['London'],
            tooltipsFormattedUnitsPost: '°C',
            tooltipsCss: {
                fontSize: '18pt',
                textAlign: 'left'
            },
            title: 'Montréal',
            titleSize: 16,
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
    }).draw();

    new RGraph.Thermometer({
        id: 'thermo2',
        min: 0,
        max: 10,
        value: 4.6,
        options: {
            marginLeft: 45,
            marginRight: 45,
            // tooltips: '<span style="font-size: 14pt">Todays temperature</span><br/>%{key}',
            colors: ['#141e61'],
            tooltipsFormattedKeyLabels: ['London'],
            tooltipsFormattedUnitsPost: '°',
            tooltipsCss: {
                fontSize: '18pt',
                textAlign: 'left'
            },
            title: 'Québec',
            titleSize: 16,
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
    }).draw();
}

// CANVAS DONUT -----------------------------------------------

const dessineMonBeigne = () => {
    data   = [45,57,48,32, 26,41];
    labels = ['Jan', 'Ben', 'Mark', 'Lucy','Jill', 'James'];

    new RGraph.Pie({
        id: 'donut',
        data: data,
        options: {
            labels: labels,
            tooltips: 'Results:<br />%{key}',
            tooltipsFormattedKeyLabels: labels,
            tooltipsCss: {
                fontSize: '16pt',
                textAlign: 'left'
            },
            linewidth: 3,
            colorsStroke: 'white',
            variant: 'donut',
            shadow: false
        }
    }).draw();
}

// SVG SEMI-CIRCULAR PROGRESS BAR ------------------------------

const dessineMonDemiCercle = () => {
    new RGraph.SVG.SemiCircularProgress({
        id: 'semicircular',
        min: 0,
        max: 100,
        value:50,
        options: {
            labelsCenterDecimals: 1,
            tooltips: 'Progress: %{value}%',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
        }
    }).draw();
}

// SVG BAR CHART -----------------------------------------------

const dessineMesBarres = () => {
    data = [[220647,209603],[237746,228144],[4,5],[8,5],[3,6],[5,6],[8,5],[1,9],[4,3],[4,8]];
    labels = ['0-4','5-9','10-14','15-19','20-24','25-44','45-64','65-74','75-99','100 et +']

    new RGraph.SVG.Bar({
        id: 'bar',
        data: data,
        options: {
            marginLeft: 35,
            marginRight: 5,
            marginBottom: 35,
            marginTop: 45,
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            textSize: 12,
            yaxis: false,
            yaxisScaleUnitsPre: '',  // Default
            // yaxisScaleUnitsPost: 'k',
            yaxisScalePoint: '.',    // Default
            yaxisScaleThousand: ',', // Default
            yaxisScaleDecimals: 0,
            yaxisScaleMax: 2000,
            xaxisLinewidth: 5,
            xaxisTickmarks: false,
            xaxisLabels: '%{global:labels[%{index}]}',
            colors: ['#5cf', 'black'],
            marginInner: 9,
            marginInnerGrouped: 2,
            titleSubtitle: '',
            title: 'Population selon le groupe d\'âge et le sexe, 2020',
            titleBold: true,
            titleSize: 16,
            tooltips: '%{key}',
            tooltipsFormattedKeyLabels: ['Hommes :','Femmes :'],
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
            
        }
    }).wave();
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
