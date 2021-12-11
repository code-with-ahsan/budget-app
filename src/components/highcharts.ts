import * as Highcharts from "highcharts";
Highcharts.chart(
  {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      renderTo: "chart-container",
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Expense",
        colorByPoint: true,
        type: "pie",
        data: [
          {
            name: "Housing",
            y: 61.41,
          },
          {
            name: "Travel/Transportation",
            y: 11.84,
          },
          {
            name: "Groceries",
            y: 10.85,
          },
          {
            name: "Retail",
            y: 4.67,
          },
          {
            name: "Other",
            y: 4.18,
          },
        ],
      },
    ],
  },
  (chart) => console.log
);
