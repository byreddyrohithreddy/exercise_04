
function q1tog()
{
  const nodeList= document.getElementById('a1');
  const nodeList1= document.getElementById('ans1');

  if (nodeList1.style.display==="block") {
    nodeList1.style.display = "none";
    nodeList.innerText="+";
  } else {
    nodeList1.style.display = "block";
    nodeList.innerText="-";
  }
  
   document.getElementById('ans2').style.display="none";
   document.getElementById('ans3').style.display="none";
   document.getElementById('a2').innerText="+";
   document.getElementById('a3').innerText="+";
}
function q2tog()
{
  const nodeList= document.getElementById('a2');
  const nodeList1= document.getElementById('ans2');

  if (nodeList1.style.display==="block") {
    nodeList1.style.display = "none";
    nodeList.innerText="+";
  } else {
    nodeList1.style.display = "block";
    nodeList.innerText="-";
    
  }
  
  document.getElementById('ans1').style.display="none";
  document.getElementById('ans3').style.display="none";
  document.getElementById('a1').innerText="+";
  document.getElementById('a3').innerText="+";
}

function q3tog()
{
  const nodeList= document.getElementById('a3');
  const nodeList1= document.getElementById('ans3');

  if (nodeList1.style.display==="block") {
    nodeList1.style.display = "none";
    nodeList.innerText="+";
  } else {
    nodeList1.style.display = "block";
    nodeList.innerText="-";
  }
  document.getElementById('ans2').style.display="none";
  document.getElementById('ans1').style.display="none";
  document.getElementById('a2').innerText="+";
  document.getElementById('a1').innerText="+";
  
}
