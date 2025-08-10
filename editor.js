var elementList = document.querySelectorAll(".item");
for (var element of elementList) {
  element.onclick = function (e) {
    var choices, random;
    if (e.currentTarget.classList.contains("face")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".face"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("face").src = random;
        return;
      }
      document.getElementById("face").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("eyes")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".eyes"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("eyes").src = random;
        return;
      }
      document.getElementById("eyes").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("nose-mouth")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".nose-mouth"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("nose-mouth").src = random;
        return;
      }
      document.getElementById("nose-mouth").src =
        e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("background")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".background"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("background").src = random;
        return;
      }
      document.getElementById("background").src =
        e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("hair")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".hair"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("hair").src = random;
        return;
      }
      document.getElementById("hair").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("hat")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".hat"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("hat").src = random;
        return;
      }
      document.getElementById("hat").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("neck")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".neck"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("neck").src = random;
        return;
      }
      document.getElementById("neck").src = e.currentTarget.children[0].src;
    } else if (e.currentTarget.classList.contains("body")) {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".body"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("body").src = random;
        return;
      }
      document.getElementById("body").src = e.currentTarget.children[0].src;
    } else {
      if (e.currentTarget.children[1].textContent == "Random") {
        choices = Array.from(document.querySelectorAll(".clothing"));
        choices.splice(choices.indexOf(e.currentTarget), 1);
        random =
          choices[Math.floor(Math.random() * choices.length)].children[0].src;
        document.getElementById("clothing").src = random;
        return;
      }
      document.getElementById("clothing").src = e.currentTarget.children[0].src;
    }
    var price = 0;
    for (var el of document.querySelector(".avatar").children) {
      if (el.getAttribute("src")) {
        price += parseInt(
          document.querySelector(`img[src="${el.getAttribute("src")}"]`)
            .parentElement.children[3].textContent,
        );
      }
    }
    document.querySelector(".avatar-price").textContent = price;
  };
  if (element.classList.contains("eyes")) {
    continue;
  }
  element.style.display = "none";
}

function switchToBackground(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("background")) {
      element.style.display = "flex";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToEyes(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("eyes")) {
      element.style.display = "flex";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToNoseMouth(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("nose-mouth")) {
      element.style.display = "flex";
      continue;
    }
    element.style.display = "none";
  }
}

function switchToFace(event) {
  document.querySelector(".active").classList.remove("active");
  event.classList.add("active");
  var elements = document.querySelectorAll(".item");
  for (var element of elements) {
    if (element.classList.contains("face")) {
      element.style.display = "flex";
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
      element.style.display = "flex";
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
      element.style.display = "flex";
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
      element.style.display = "flex";
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
      element.style.display = "flex";
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
      element.style.display = "flex";
      continue;
    }
    element.style.display = "none";
  }
}
