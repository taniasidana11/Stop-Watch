let [seconds,minutes,hours]=[0,0,0];
       let displayTime=document.getElementById('time_label');
       let timer=null;
       let lapList=document.getElementById('lap_list');
       let isRunning = false;

       function stopwatch(){
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
        let h=hours<10?"0"+hours:hours;
        let m=minutes<10?"0"+minutes:minutes;
        let s=seconds<10?"0"+seconds:seconds;
        displayTime.innerHTML=h+":"+m+":"+s;
       }
       function watchStart(){
        if(!isRunning) {
            if(timer!=null){
                clearInterval(timer);
            }
            timer=setInterval(stopwatch,1000);
            document.getElementById('start').textContent = 'Stop';
            document.getElementById('start').style.background = 'red';
            document.getElementById('lap').disabled = false;
            isRunning = true;
        } else {
            clearInterval(timer);
            document.getElementById('start').textContent = 'Start';
            document.getElementById('start').style.background = 'green';
            document.getElementById('lap').textContent = 'Reset';
            document.getElementById('lap').disabled = false;
            isRunning = false;
        }
       }
       function lap() {
        if (isRunning) {
                const lapTime = displayTime.innerHTML;
                const lapListItem = document.createElement('li');
                lapListItem.textContent = lapTime;
                lapList.appendChild(lapListItem);
            } else {
                seconds = 0;
                minutes = 0;
                hours = 0;
                displayTime.innerHTML = '00:00:00';
                lapList.innerHTML = '';
            }
        }

        document.getElementById('start').addEventListener('click', watchStart);
        document.getElementById('lap').addEventListener('click', lap);