$(document).ready((function(){$(".clearvisa").click((function(){this.classList.contains("click")?($(".cardnumber").hide(1e3),$(".cardinformation").hide(1e3),$(".smallcardtext").hide(1e3),$(this).removeClass("click")):($(".cardnumber").show(1e3),$(".cardinformation").show(1e3),$(".smallcardtext").show(1e3),$(this).addClass("click"))}))})),function(){let e=new Date,t=e.getDate(),n=e.getMonth(),o=e.getFullYear(),a=document.getElementById("month-calendar"),l=a.getElementsByClassName("month-name")[0],d=a.getElementsByClassName("year-name")[0],r=a.getElementsByClassName("days")[0],i=a.getElementsByClassName("prev")[0],s=a.getElementsByClassName("next")[0],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function g(e,a){let i=new Date(e,a+1,0).getDate(),s=new Date(e,a,0).getDay(),g="";if(l.textContent=c[a],d.textContent=e,r.innerHTML="",s>0)for(let e=1;e<=s;e++)g+="<li></li>";for(let e=1;e<=i;e++)g+="<li>"+e+"</li>";r.innerHTML=g,a==n&&e==o&&(days=r.getElementsByTagName("li"),days[s+t-1].classList.add("date-now"))}e.setMonth(e.getMonth()-1),console.log(e.getFullYear()),g(o,n),i.onclick=function(){let e=new Date(d.textContent,c.indexOf(l.textContent));e.setMonth(e.getMonth()-1),g(e.getFullYear(),e.getMonth())},s.onclick=function(){let e=new Date(d.textContent,c.indexOf(l.textContent));e.setMonth(e.getMonth()+1),g(e.getFullYear(),e.getMonth())},document.addEventListener("DOMContentLoaded",(()=>{var e=document.getElementById("graphline").getContext("2d");const t=e.createLinearGradient(0,0,550,0);t.addColorStop(.5,"orange"),t.addColorStop(0,"yellow"),t.addColorStop(1,"red"),document.getElementById("graphline").getContext("2d");const n=e.createLinearGradient(0,0,550,0);n.addColorStop(.5,"rgba(231, 234, 34, 0.1)"),n.addColorStop(0,"rgba(255, 165, 0, 0.1)"),n.addColorStop(1,"rgba(255, 0, 0, 0.1)"),new Chart(document.querySelector(".graphline"),{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[220,160,180,210,250,240,220,190,170,170,190,300],borderColor:t,borderWidth:4,fill:!0,backgroundColor:n,cubicInterpolationMode:"monotone",pointBorderColor:"transparent"}]},options:{plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,suggestedMax:500,grid:{lineWidth:.4}},x:{grid:{lineWidth:0}}},maintainAspectRatio:!1}})})),document.addEventListener("DOMContentLoaded",(()=>{new Chart(document.querySelector(".doughnut"),{type:"doughnut",data:{datasets:[{data:[220,160,300,180],backgroundColor:["rgb(84, 196, 67)","rgb(54, 162, 235)","rgb(245,245,245)","orange"]}]},options:{borderWidth:.1,cutout:"80%",plugins:{legend:{display:!1}},maintainAspectRatio:!1}})})),$.ajax({url:"https://jsonplaceholder.typicode.com/todos",method:"GET"}).done((function(e){var t;t=e[74].id,document.getElementById("greenprogress").value=t,function(e){document.getElementById("monthlysale").value=e}(e[9].id)}))}();