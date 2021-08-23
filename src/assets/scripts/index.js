
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
        [8,7,6,4,9,5,6,7,9],
        [4,3,5,8,6,4,2,4,9],
        [8,4,9,5,3,5,1,2,5]
    ];

    xaxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    new RGraph.Line({
        id: 'line',
        data: data,
        options: {
            tooltips: '%{key}',
            tooltipsFormattedUnitsPost: '%',
            tooltipsFormattedKeyColors: ['red','blue','#0f0'],
            tooltipsFormattedKeyLabels: ['John','Richard','Luis'],
            tooltipsCss: {
                fontSize: '16pt',
                textAlign: 'left'
            },
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            colors: ['red','blue','green'],
            linewidth: 2,
            spline: true,
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
