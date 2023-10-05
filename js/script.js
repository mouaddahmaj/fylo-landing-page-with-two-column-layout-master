const input1=document.getElementById('input1');
    const btn1=document.getElementById('btn1');
    const msg1=document.getElementById('msgErr1');
    function messageErr1(){
      msg1.style.display="block";
      input1.style.borderColor="red";
      btn1.style.backgroundColor="hsl(224, 77%, 66%)";
    }
    btn1.addEventListener('click',messageErr1);
    const input2=document.getElementById('input2');
    const btn2=document.getElementById('btn2');
    const msg2=document.getElementById('msgErr2');
    function messageErr2(){
      msg2.style.display="block";
      input2.style.borderColor="red";
      btn2.style.backgroundColor="hsl(224, 77%, 66%)";
    }
    btn2.addEventListener('click',messageErr2);