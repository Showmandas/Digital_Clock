  // let chngebg=document.getElementById("changebg");
  let Clock=setInterval(clockTime,1000);
  function clockTime(){
      let d=new Date();
  let Time=d.toLocaleTimeString();
  document.getElementById('showClock').innerHTML=Time;
  }

      let colors=["#00bfff","#034f84","#f7786b","#50394c","#96897f","#4f3222","#ff00bf","#ff0040","#ffff00","#ff8000","#4d0000","#878f99","#feb236","#b5e7a0","#dac292"];
      let i=0;
      let btn=document.querySelector('button');
      btn.addEventListener('click',function(){
          i=i<colors.length?++i:0;
          document.querySelector('#clock').style.background=colors[i];
      })
      let btn1=document.querySelector('#defClockBg');
      btn1.addEventListener('click',function(){
          let color="rgba(30,30,30,0.5)";
          document.querySelector('#clock').style.background=color;
      })