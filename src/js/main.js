let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    prev = container.getElementsByClassName('prev')[0],
    next = container.getElementsByClassName('next')[0],
    monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

function setMonthCalendar(year, month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0) {
        for (let i = 1; i <= monthPrefix; i++) {
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++) {
        monthDaysText += '<li>' + i + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear) {
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear, nowMonth);

prev.onclick = function () {
    let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear, curMonth);
}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear, curMonth);
}
///////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    var ctx = document.getElementById("graphline").getContext('2d');
    const gradientBC = ctx.createLinearGradient(0,0,550,0);
    gradientBC.addColorStop(0.5, 'orange');
    gradientBC.addColorStop(0, 'yellow');
    gradientBC.addColorStop(1, 'red');
    var cts = document.getElementById("graphline").getContext('2d');
    const gradientBG = ctx.createLinearGradient(0,0,550,0);
    gradientBG.addColorStop(0.5, 'rgba(231, 234, 34, 0.1)');
    gradientBG.addColorStop(0, 'rgba(255, 165, 0, 0.1)');
    gradientBG.addColorStop(1, 'rgba(255, 0, 0, 0.1)');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/income.json', true);
    xhr.onload = function(){
        if(this.status == 200){
            console.log('sds');
        }
        console.log('sds');
    }
    new Chart(
        document.querySelector('.graphline'),
        {
            type: 'line', // изменили тип графика
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        data: [220, 160, 180, 210, 250, 240, 220, 190, 170, 170, 190, 300],
                        borderColor: gradientBC,
                        borderWidth: 4,
                        fill: true,
                        backgroundColor: gradientBG,
                        cubicInterpolationMode: 'monotone',
                        pointBorderColor: 'transparent',
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 500,
                        grid: {
                            lineWidth: 0.4,
                          }
                    },
                    x: {
                        grid: {
                            lineWidth: 0,
                          }
                    }
                },
                maintainAspectRatio: false
            }
        }
    );

})

///////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    new Chart(
        document.querySelector('.doughnut'),
        {
            type: 'doughnut', // изменили тип графика
            data: {
                datasets: [
                    {
                        data: [220, 160, 300, 180],
                        backgroundColor: [
                            'rgb(84, 196, 67)',
                            'rgb(54, 162, 235)',
                            'rgb(245,245,245)',
                            'orange',
                          ],
                    }
                ]
            },
            options: {
                borderWidth: 0.1,
                cutout: '80%',
                plugins: {
                    legend: {
                        display: false
                    },
                },
                maintainAspectRatio: false,
            }
        }
    );

})

function setgreenprogress(value) {
    var progress = document.getElementById('greenprogress');
      progress.value = value;
  }
function setmonthlysale(value) {
    var progress = document.getElementById('monthlysale');
      progress.value = value;
  }

  function getdata(){
    $.ajax({
        url: '/json/income.json',
        method: "GET"
    }).done(function(data){
        console.log(data.monthlySale)
    })
  }
  getdata();
  setgreenprogress(75);
  setmonthlysale(95);