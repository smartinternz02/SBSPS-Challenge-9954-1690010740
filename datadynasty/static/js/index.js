var hOMEText = document.getElementById("hOMEText");
if (hOMEText) {
  hOMEText.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='topGreen']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var aBOUTText = document.getElementById("aBOUTText");
if (aBOUTText) {
  aBOUTText.addEventListener("click", function (e) {
    // Please sync "ABOUT PAGE" to the project
  });
}

var dASHBOARDText = document.getElementById("dASHBOARDText");
if (dASHBOARDText) {
  dASHBOARDText.addEventListener("click", function (e) {
    // Please sync "DASHBOARD PAGE" to the project
  });
}

var sTORYText = document.getElementById("sTORYText");
if (sTORYText) {
  sTORYText.addEventListener("click", function (e) {
    // Please sync "STORY PAGE" to the project
  });
}

var cONTACTText = document.getElementById("cONTACTText");
if (cONTACTText) {
  cONTACTText.addEventListener("click", function (e) {
    // Please sync "CONTACT PAGE" to the project
  });
}

var getStartedContainer = document.getElementById("getStartedContainer");
if (getStartedContainer) {
  getStartedContainer.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='indianAgricultureChallenges']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var contactText = document.getElementById("contactText");
if (contactText) {
  contactText.addEventListener("click", function (e) {
    // Please sync "CONTACT PAGE" to the project
  });
}

var aboutText = document.getElementById("aboutText");
if (aboutText) {
  aboutText.addEventListener("click", function (e) {
    // Please sync "ABOUT PAGE" to the project
  });
}

var dashBoardText = document.getElementById("dashBoardText");
if (dashBoardText) {
  dashBoardText.addEventListener("click", function (e) {
    // Please sync "DASHBOARD PAGE" to the project
  });
}

var storyText = document.getElementById("storyText");
if (storyText) {
  storyText.addEventListener("click", function (e) {
    // Please sync "STORY PAGE" to the project
  });
}