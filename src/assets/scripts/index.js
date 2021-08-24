// CANVAS RADAR CHART ------------------------------------

const dessineMonRadar = () => {
    labels = ['Montréal','Québec','Laval','Gatineau','Longueuil','Sherbrooke','Lévis','Saguenay', 'Trois-Rivières', 'Terrebonne'];

    new RGraph.Radar({
        id: 'radar',
        data: [
            [1675174,522647,405926,268634,233955,156522,140075,146039,132542,107571],
            [1821070,550326,442648,290239,252828,171158,149929,147410,140420,119450]
        ],
        options: {
            backgroundCircles: true,
            textSize: 16,
            labels: labels,
            colorsStroke: ['green', 'yellow'],
            colors: ['rgba(0,0,0,0)'],
            linewidth: 3,
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 85,
            marginRight: 125,
            tooltips: '<b>%{property:labels[%{index}]}\'s results:</b>%{key}',
            tooltipsFormattedKeyLabels: ['2011','2020'],
            tooltipsFormattedKeyColors: ['green', 'yellow'],
            tooltipsFormattedUnitsPost: 'habitants',
            tooltipsCss: {
                fontSize: '16pt',
                boxShadow: '',
                textAlign: 'left'
            }
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
            tooltipsFormattedKeyColors: ['#141E61'],
            tooltipsFormattedKeyLabels: ['Taux d\'intérêt de'],
            tooltipsCss: {
                fontSize: '16pt',
                textAlign: 'left'
            },
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            colors: ['#141E61'],
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
        id: 'thermo',
        min: 0,
        max: 100,
        value: 52,
        options: {
            marginLeft: 45,
            marginRight: 45,
            tooltips: '<span style="font-size: 14pt">Todays temperature</span><br/>%{key}',
            colors: ['red'],
            tooltipsFormattedKeyLabels: ['London'],
            tooltipsFormattedUnitsPost: '°',
            tooltipsCss: {
                fontSize: '18pt',
                textAlign: 'left'
            }
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
    data = [[5,3],[4,6],[4,5],[8,5],[3,6],[5,6],[8,5],[1,9],[4,3],[4,8],[5,8],[4,8]];
    labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Sep','Dec']

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
            yaxisScaleUnitsPost: 'k',
            yaxisScalePoint: '.',    // Default
            yaxisScaleThousand: ',', // Default
            yaxisScaleDecimals: 0,
            xaxisLinewidth: 3,
            xaxisTickmarks: false,
            xaxisLabels: '%{global:labels[%{index}]}',
            colors: ['#5cf', 'black'],
            marginInner: 9,
            marginInnerGrouped: 2,
            titleSubtitle: 'Turnover grouped by sales team',
            title: 'Monthly sales figures',
            titleBold: true,
            titleSize: 16,
            tooltips: '%{key}',
            tooltipsFormattedUnitsPre: '$',
            tooltipsFormattedUnitsPost: ',000',
            tooltipsFormattedKeyLabels: ['Sales team A','Sales team B'],
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
