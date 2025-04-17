document.getElementById("myBtn").onclick = () => {
    alert("Clicked from JS!");
  };

  myBtn.onclick=() => {
    console.log("button was clicked");
    let a=25;
    a++;
    console.log(a);
  }

  let div = document.querySelector("div");
  div.onmouseover = () => {
    console.log('you are inside div');
  };

  Node.event = () =>{
    console.log("click me ");
  };

  myBtn.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type); 
    console.log(evt.targrt);
    console.log(evt.clientX, evt.clientY);
  };