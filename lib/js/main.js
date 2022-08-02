dragElement(document.getElementById("weapons"));
dragElement1(document.getElementById("outfits"));
dragElement2(document.getElementById("money"));


function dragElement(elmnt) {
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    elmnt.style.top = e.clientY-720 + "px";
    elmnt.style.left = e.clientX-270 + "px";

    // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragElement1(elmnt) {
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    elmnt.style.top = e.clientY-720 + "px";
    elmnt.style.left = e.clientX-900 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragElement2(elmnt) {
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    elmnt.style.top = e.clientY-720 + "px";
    elmnt.style.left = e.clientX-1500 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}