let woman = document.getElementById("woman");
let man = document.getElementById("man");
let general = document.getElementById("general");
let taping = document.getElementById("taping");


function blurAll(){
    woman.style.filter="blur(2px) saturate(0)"
    man.style.filter="blur(2px) saturate(0)"
    general.style.filter="blur(2px) saturate(0)"
    taping.style.filter="blur(2px) saturate(0)"

  }

  function unBlur(){
    woman.style.filter="blur(0px) saturate(1)"
    man.style.filter="blur(0px) saturate(1)"
    general.style.filter="blur(0px) saturate(1)"
    taping.style.filter="blur(0px) saturate(1)"
  }







  woman.onmouseover =()=>{
    blurAll();
    woman.style.filter="blur(0px)"
  }
  man.onmouseover =()=>{
    blurAll();
    man.style.filter="blur(0px)"
  }
  general.onmouseover =()=>{
    blurAll();
    general.style.filter="blur(0px)"
  }
  taping.onmouseover =()=>{
    blurAll();
    taping.style.filter="blur(0px)"
  }

  woman.onmouseout =()=>{
    unBlur();
  }
  man.onmouseout =()=>{
    unBlur();
  }
  general.onmouseout =()=>{
    unBlur();
  }
  taping.onmouseout =()=>{
    unBlur();
  }
