function scrollToTargetAdjusted() {
  var element = document.getElementById("targetElement");
  var headerOffset = 45;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to handle scroll event
function handleScroll() {
  var element = document.querySelector(".fadeInUp");
  if (isElementInViewport(element)) {
    element.classList.add("animated");
  }
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);
