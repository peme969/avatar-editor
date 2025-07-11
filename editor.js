var elementList = document.querySelectorAll(".item");
for (var element of elementList) {
  element.onclick = function (e) {
    if (e.currentTarget.classList.contains("face")) {
      document.getElementById("face").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("hair")) {
      document.getElementById("hair").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("hat")) {
      document.getElementById("hat").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("neck")) {
      document.getElementById("neck").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("body")) {
      document.getElementById("body").src = e.currentTarget.children[0].src;
    } else {
      document.getElementById("clothing").src = e.currentTarget.children[0].src;
    }
  }
  if (element.classList.contains("face")) {
    continue;
  }
  element.style.display = "none";
}

function switchToFace(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("face")) {
      element.style.display = "inline-block";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToHair(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("hair")) {
      element.style.display = "inline-block";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToHat(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("hat")) {
      element.style.display = "inline-block";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToNeck(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("neck")) {
      element.style.display = "inline-block";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToBody(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("body")) {
      element.style.display = "inline-block";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToClothing(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("clothing")) {
      element.style.display = "inline-block";
      continue;
    }
    element.style.display = "none";
  }
}