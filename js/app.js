const days = document.getElementById('days');
const hours=document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds=document.getElementById('seconds');

const year = document.getElementById('year');

const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentyear = new Date().getFullYear();
//console.log(currentyear);

const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
//console.log(newyeartime);

year.innerText = currentyear + 1;

function updatecountdown(){

    //console.log('hey');
    const currenttime = new Date();
    //console.log(currenttime);
    const diff = newyeartime - currenttime;
   // console.log(diff);
   //                                  s     min  hour  day
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
   // console.log(d);
   //                                  s   min  hour
    const h = Math.floor(diff /1000 /60 /60 ) % 24;
   // console.log(h);
    //                                s   min
    const m = Math.floor(diff/ 1000/ 60) % 60;
   // console.log(m);

   const s = Math.floor(diff/1000) % 60;
  // console.log(s);

    days.textContent = d;
    hours.textContent = h <10? "0"+h : h;
    minutes.innerText =m < 10? "0"+m : m;
    seconds.innerText =s < 10? "0"+s : s;

}
// shi nay pyi thar ko a chain nae pyaut forloading
setTimeout( ()=>{

    loading.remove();
    countdown.style.display = "flex";


},1000);


//for function revoke;
setInterval(updatecountdown,1000);