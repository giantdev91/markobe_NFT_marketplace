import React, {useState, useEffect, useRef} from 'react';
import {Chart} from 'primereact/chart';

const Doughnut = ({title, percentage, left_num, right_num}) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  let gradient;
  const chartRef = useRef();

  const setCanvasGradient = (context) => {
    if (title === 'Twitter') {
      gradient = context.createLinearGradient(400, 0, 0, 400);
      gradient.addColorStop(0, '#833CFCFF');
      gradient.addColorStop(1, '#833CFC00');
    }
    if (title === 'Discord') {
      gradient = context.createLinearGradient(400, 0, 0, 400);
      gradient.addColorStop(0, '#E859B9FF');
      gradient.addColorStop(1, '#E859B900');
    }
    if (title === 'Telegram') {
      gradient = context.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, '#1BC28CFF');
      gradient.addColorStop(1, '#1BC28C00');
    }
  };

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    if (chartRef.current) {
      const canvas = chartRef.current.getCanvas();
      const context = canvas.getContext('2d');
      setCanvasGradient(context);
    }
    let backColor = '#833CFC1A';
    if (title === 'Discord') {
      backColor = '#E859B91A';
    }
    if (title === 'Telegram') {
      backColor = '#1BC28C1A';
    }
    const data = {
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: [
            gradient,
            backColor,
          ],
          hoverBackgroundColor: gradient,
        },
      ], // labels: ['A', 'B', 'C'],
      // datasets: [
      //     {
      //         data: [300, 50, 100],
      //         backgroundColor: [
      //             documentStyle.getPropertyValue('--blue-500'),
      //             documentStyle.getPropertyValue('--yellow-500'),
      //             documentStyle.getPropertyValue('--green-500')
      //         ],
      //         hoverBackgroundColor: [
      //             documentStyle.getPropertyValue('--blue-400'),
      //             documentStyle.getPropertyValue('--yellow-400'),
      //             documentStyle.getPropertyValue('--green-400')
      //         ]
      //     }
      // ]
    };
    const options = {
      cutout: '70%',
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className='doughnut w-full'>
      <div className='title'>{title}</div>
      <div className='flex align-items-center justify-content-center chart-container'>
        <Chart type='doughnut' data={chartData} options={chartOptions} className='chart' ref={chartRef} />
        <div className='chart chart-inner flex flex-column align-items-center justify-content-center'>
          <div className='title-percent mb-2'>{percentage}<span className='percent'>%</span></div>
          <hr className='seperate mb-3' />
          <div className='txt-data'>{left_num}/{right_num}</div>
          <div className='txt-data'>users</div>
        </div>
      </div>
    </div>
  );
};

export default Doughnut;
