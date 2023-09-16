import React, { useState, useEffect } from 'react';

import { InputSwitch } from 'primereact/inputswitch';
import { Chart } from 'primereact/chart';
import { Checkbox } from 'primereact/checkbox';
import Right_Icon from '../../../assets/img/buttons/month_right.svg';
import Left_Icon from '../../../assets/img/buttons/month_left.svg';
import Circle_Icon from '../../../assets/img/analytics_diagram.svg';
import DateSwitcher from '../../Switchers/DateSwitcher';

const AnalyticsChart = ({ Discord, Twitter, Marko, Diagrams }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    // setDiscordData(DiscordData);
    // setChartData(TwitterData);
    // setMarkoData(MarkoData);
    const data = {
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],

      datasets: [
        {
          label: 'Dataset 1',
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: '#E859B9',
          tension: 0.9,
          data: Discord,
          yAxisID: 'y',
        },
        {
          label: 'Dataset 3',
          fill: false,
          borderColor: '#1BC28C',
          yAxisID: 'y',
          tension: 0.9,
          data: Twitter,
        },
        {
          label: 'Dataset 2',
          fill: false,
          borderColor: '#833CFC',
          yAxisID: 'y',
          tension: 0.9,
          data: Marko,
        },
      ],
    };
    const options = {
      stacked: false,
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      layout: {
        padding: { top: 110, left: 34, right: 21, bottom: 80 },
      },
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
          position: 'bottom',
          display: false,
        },
        // title:{
        //     text:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        //     display: true
        // }
        axisY: {
          lineThickness: 3,
          lineColor: 'green',
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: '#1414141A',
            display: true,
            dash: [5, 5],
          },
          border: {
            display: true,
            color: '#141414',
            dash: [5, 5],
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'right',
          // suggestedMin: 50,
          // suggestedMax: 100,
          beginAtZero: true,
          min: 0,
          max: 90,
          ticks: {
            stepSize: 10,
            color: '#141414',
            beginAtZero: true,
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return value + 'k';
            },
          },
          grid: {
            drawOnChartArea: true,
            color: '#1414141A',
            // dash: [2,4]
          },
          border: {
            // display: true,
            // color:'#141414',
            // position:'left',
            dash: [5, 5],
          },
          // borderDash: [8, 4],
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  /** ***************************    table     **********************************/
  const [discordShow, setDiscordShow] = useState(true);
  const [twitterShow, setTwitterShow] = useState(true);
  const [markoShow, setMarkoShow] = useState(true);
  const showDiscord = () => {
    setDiscordShow(!discordShow);
    let chartDataCopy = {};
    chartDataCopy = Object.assign(chartDataCopy, chartData);
    if (discordShow) {
      chartDataCopy.datasets[0].data = [];
    } else {
      chartDataCopy.datasets[0].data = Discord;
    }

    setChartData(chartDataCopy);
  };
  const showTwitter = () => {
    setTwitterShow(!twitterShow);
    let chartDataCopy = {};
    chartDataCopy = Object.assign(chartDataCopy, chartData);
    if (twitterShow) {
      chartDataCopy.datasets[1].data = [];
    } else {
      chartDataCopy.datasets[1].data = Twitter;
    }
    setChartData(chartDataCopy);
  };
  const showMarko = () => {
    setMarkoShow(!markoShow);
    let chartDataCopy = {};
    chartDataCopy = Object.assign(chartDataCopy, chartData);
    if (markoShow) {
      chartDataCopy.datasets[2].data = [];
    } else {
      chartDataCopy.datasets[2].data = Marko;
    }
    setChartData(chartDataCopy);
  };

  const [showRequest, setShowRequest] = useState(false);
  const converShowRequest = (value) => {
    setShowRequest(value);
    let chartOptionsCopy = {};
    chartOptionsCopy = Object.assign(chartOptionsCopy, chartOptions);
    if (value) {
      chartOptionsCopy.scales.y.max = 100;
      chartOptionsCopy.scales.y.ticks.stepSize = 20;
    } else {
      chartOptionsCopy.scales.y.max = 90;
      chartOptionsCopy.scales.y.ticks.stepSize = 10;
    }
    setChartOptions(chartOptionsCopy);
  };

  return (
    <div className="client-analytics-chart">
      <div className="flex flex-row flex-wrap justify-content-between toolbar">
        <div className="flex flex-row left-btns gap-2">
          <div className="flex align-items-center justify-content-between btn">Total users</div>
          <div className="flex align-items-center justify-content-between btn">Quests passed</div>
          <div className="flex align-items-center justify-content-between btn">New users</div>
        </div>
        <div className="flex flex-row right-btns gap-2">
          <div className="flex flex-row align-items-center swictch-btn">
            <span className="date-label">Show all requests</span>
            <InputSwitch
              checked={showRequest}
              onChange={(e) => converShowRequest(e.target.value)}
            />
          </div>
          <DateSwitcher />
        </div>
      </div>
      <div className="main-part" style={{ borderRadius: '8px' }}>
        <Chart type="line" data={chartData} options={chartOptions} style={{ height: '560px' }} />
        <div className={`${showRequest ? 'comment-container-request' : 'comment-container'}`}>
          <div className="flex flex-row align-items-center justify-content-between month-comment">
            <div className="flex align-items-center justify-content-center month-btn">
              <img src={Left_Icon} alt={'left-icon'} />
            </div>
            <div
              className="flex flex-wrap align-items-center justify-content-between"
              style={{ width: '80%' }}
            >
              <span>August</span>
              <span>September</span>
              <span>October</span>
            </div>
            <div className="flex align-items-center justify-content-center month-btn">
              <img src={Right_Icon} alt={'right-icon'} />
            </div>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="date-comment">1</span>
            <span className="date-comment">8</span>
            <span className="date-comment">16</span>
            <span className="date-comment">24</span>
            <span className="date-comment">31</span>
            <span className="date-comment">1</span>
            <span className="date-comment">7</span>
            <span className="date-comment">14</span>
            <span className="date-comment">24</span>
            <span className="date-comment">31</span>
            <span className="date-comment">7</span>
            <span className="date-comment">14</span>
            <span className="date-comment">24</span>
            <span className="date-comment">31</span>
          </div>
          <div className="flex flex-row grid-part">
            <>
              <div className="col-4"></div>
              <div className="col-5"></div>
              <div className="col-4-right"></div>
            </>
            {showRequest ? (
              <div className="quest-diagram-container">
                {Diagrams.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      bottom: `${item.bottom}%`,
                      left: `${item.start}%`,
                      width: `${item.width}px`,
                    }}
                    className="flex flex-row align-items-center quest-diagram"
                  >
                    <img src={Circle_Icon} className="mr-1" />
                    {item.title}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex align-items-center justify-content-center">
            <div className="flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="flex align-items-center justify-content-center chk-box-discord">
                <Checkbox
                  inputId="ingredient1"
                  name="discord"
                  value="Discord"
                  onChange={showDiscord}
                  checked={discordShow}
                  className="chk-show-box"
                />
                <label htmlFor="ingredient1" className="ml-2 chk-show-comment">
                  Discord
                </label>
              </div>
              <div className="flex align-items-center justify-content-center chk-box-twitter">
                <Checkbox
                  inputId="ingredient2"
                  name="twitter"
                  value="Twitter"
                  onChange={showTwitter}
                  checked={twitterShow}
                  className="chk-show-box"
                />
                <label htmlFor="ingredient2" className="ml-2 chk-show-comment">
                  Twitter
                </label>
              </div>
              <div className="flex align-items-center justify-content-center chk-box-marko">
                <Checkbox
                  inputId="ingredient3"
                  name="marko"
                  value="Marko"
                  onChange={showMarko}
                  checked={markoShow}
                  className="chk-show-box"
                />
                <label htmlFor="ingredient3" className="ml-2 chk-show-comment">
                  Marko
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
