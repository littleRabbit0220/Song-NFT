import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: {
        target: 'origin',
        above: 'rgba(255, 90, 0, 0.2)',
      },
      borderColor: 'rgba(255, 90, 0)',
      tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    y: {
      display: true,
      beginAtZero: true,
    },
    x: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  onBeforeDraw: function (chart, args, options) {
    var ctx = chart.ctx,
      topY = chart.chartArea.top,
      bottomY = chart.chartArea.bottom;

    var gradient = ctx.createLinearGradient(0, topY, 0, bottomY);
    gradient.addColorStop(0, 'rgba(255, 90, 0, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 90, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(
      chart.chartArea.left,
      topY,
      chart.chartArea.right - chart.chartArea.left,
      bottomY - topY
    );
  },
};

const StreamChart = () => {
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
    const chart = new Chart('myChart', {
      type: 'line',
      data: data,
      options: options,
    });
    setChartInstance(chart);

    return () => chart.destroy();
  }, []);

  return (
    <canvas
      height={150}
      id='myChart'
      className='mt-5 -ml-[27px] -mb-5 -mr-1 !h-[150] w-full'
    ></canvas>
  );
};

export default StreamChart;
