!function(){let e=new Date,t=e.getDate(),n=e.getMonth(),a=e.getFullYear(),l=document.getElementById("month-calendar"),o=l.getElementsByClassName("month-name")[0],s=l.getElementsByClassName("year-name")[0],g=l.getElementsByClassName("days")[0],m=l.getElementsByClassName("prev")[0],r=l.getElementsByClassName("next")[0],i=["January","February","March","April","May","June","July","August","September","October","November","December"];function y(e,l){let m=new Date(e,l+1,0).getDate(),r=new Date(e,l,0).getDay(),y="";if(o.textContent=i[l],s.textContent=e,g.innerHTML="",r>0)for(let e=1;e<=r;e++)y+="<li></li>";for(let e=1;e<=m;e++)y+="<li>"+e+"</li>";g.innerHTML=y,l==n&&e==a&&(days=g.getElementsByTagName("li"),days[r+t-1].classList.add("date-now"))}e.setMonth(e.getMonth()-1),console.log(e.getFullYear()),y(a,n),m.onclick=function(){let e=new Date(s.textContent,i.indexOf(o.textContent));e.setMonth(e.getMonth()-1),y(e.getFullYear(),e.getMonth())},r.onclick=function(){let e=new Date(s.textContent,i.indexOf(o.textContent));e.setMonth(e.getMonth()+1),y(e.getFullYear(),e.getMonth())}}();