var json = require('./sjf.json');
console.log(json[2])
var process = [1, 34, 2, 5, 13, 3, 21, 8];
console.log(process);
function bubbleSort(array) {
    let iteration = 0;
    for (let last = array.length - 1; last > 0; last--) {
        for (let i = 0; i < last; i++) {
            if (array[i] > array[i + 1]) {
                let help = array[i + 1];
                array[i + 1] = array[i];
                array[i] = help;
                help = 0;
            }
            iteration++;
        }
    }
    console.log(iteration)
    return array;
}
var order = bubbleSort(process);
console.log(order);

// Primeiro gráfico testado - falha
// import FusionCharts from "fusioncharts";
// import Widgets from "fusioncharts/fusioncharts.widgets";
// import Gantt from "fusioncharts/fusioncharts.gantt";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// import ReactFC from "react-fusioncharts";
// const number = 1;

// ReactFC.fcRoot(FusionCharts, Widgets, Gantt, FusionTheme);

// const dataSource = {
//   chart: {
//     dateformat: "yyyy-mm-dd",
//     theme: "fusion",
//     useverticalscrolling: "0",
//     ganttPaneDuration: "3",
//     baseFont: '"Roboto", "Helvetica", "Arial", sans-serif',
//     baseFontSize: "13",
//     ganttPaneDurationUnit: "m",
//     plottooltext: "Processo: $processName{br}",
//     useVerticalScrolling: "1"
//     //         "ganttWidthPercent": "50",
//     // "forceGanttWidthPercent": "1"
//   },
//   tasks: {
//     task: [
//       {
//         start: `2020-02-${number}`,
//         end: "2020-02-2",
//         color: "#56D9FE",
//         label: "Leaseline",
//         durationtime: 4,
//         id: "305",
//         processname: "A"
//       },
//       {
//         start: "2020-03-09",
//         end: "2020-03-16",
//         color: "#56D9FE",
//         label: "Leaseline",
//         duration: "12",
//         id: "2624",
//         processname: "B"
//       },
//       {
//         start: "2020-03-18",
//         end: "2020-03-19",
//         color: "#FEC056",
//         label: "Product",
//         duration: "8",
//         id: "2621",
//         processname: "C"
//       },
//       {
//         start: "2020-03-12",
//         end: "2020-03-13",
//         color: "#FEC056",
//         label: "Product",
//         duration: "10",
//         id: "396",
//         processname: "D"
//       }
//     ]
//   },
//   processes: {
//     align: "left",
//     headertext: "Processos",
//     headervalign: "bottom",
//     headeralign: "left",
//     process: [
//       { label: "A", height: 30, id: "305" },
//       { label: "B", height: 30, id: "2624" },
//       { label: "C", height: 30, id: "2621" },
//       { label: "D", height: 30, id: "396" },
//     ]
//   },
//   categories: [
//     {
//       category: [
//         {
//           start: "2/1/2020",
//           end: "2/2/2020",
//           label: "1"
//         },
//         {
//           start: "2/6/2020",
//           end: "2/8/2020",
//           label: "2"
//         },
//         {
//           start: "2/16/2020",
//           end: "2/22/2020",
//           label: "3"
//         },
//         {
//           start: "2/23/2020",
//           end: "2/29/2020",
//           label: "4"
//         },
//         {
//           start: "3/1/2020",
//           end: "3/7/2020",
//           label: "5"
//         },
//         {
//           start: "3/8/2020",
//           end: "3/14/2020",
//           label: "6"
//         },
//         {
//           start: "3/15/2020",
//           end: "3/21/2020",
//           label: "7"
//         },
//         {
//           start: "3/22/2020",
//           end: "3/28/2020",
//           label: "8"
//         },
//         {
//           start: "3/29/2020",
//           end: "4/4/2020",
//           label: "9"
//         },
//         {
//           start: "4/5/2020",
//           end: "4/11/2020",
//           label: "10"
//         },
//         {
//           start: "4/12/2020",
//           end: "4/18/2020",
//           label: "11"
//         },
//       ]
//     }
//   ],
//   trendlines: [
//     {
//       line: [
//         {
//           start: "2/2/2020",
//           color: "#B8B9BC",
//           thickness: "2",
//           displayValue: "."
//         },
//         {
//           start: "3/1/2020",
//           color: "#B8B9BC",
//           thickness: "2",
//           displayValue: "."
//         },
//         {
//           start: "4/5/2020",
//           color: "#B8B9BC",
//           thickness: "2",
//           displayValue: "."
//         },
//         {
//           start: "5/3/2020",
//           color: "#B8B9BC",
//           thickness: "2",
//           displayValue: "."
//         },
//         {
//           start: "5/31/2020",
//           color: "#B8B9BC",
//           thickness: "2",
//           displayValue: "."
//         },
//         {
//           start: "7/5/2020",
//           color: "#B8B9BC",
//           thickness: "2",
//           displayValue: "."
//         }
//       ]
//     }
//   ]
// };

// const chartConfigs = {
//   type: "gantt",
//   width: "99%",
//   height: 400,
//   dataFormat: "json",
//   dataSource: dataSource
// };

// <ReactFC {...chartConfigs} />

// Outro gráfico

{/* <DayPilotGantt
startDate={"2020-01-01"}
days={30}
tasks={[
  {
    id: 1,
    text: "A",
    start: "2020-01-01",
    end: "2020-01-02",
  },
  {
    id: 2,
    text: "B",
    start: "2020-01-03",
    end: "2020-01-04",
  }
]}
links={[
  {
    from: 1,
    to: 2,
    type: "FinishToStart"
  }
]}
/> */}