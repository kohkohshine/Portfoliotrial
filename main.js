projectImageContainer.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('mousemove', handleMouseMove);

// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const offsetTop = target.offsetTop;

      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
  });
});


  let projectType = document.getElementById("projectType");
  let projectImageContainer = document.getElementById("projectImageContainer");
  let images = projectImageContainer.querySelectorAll(".img");

  projectType.addEventListener("change", function () {
    let selectedOption = projectType.value;
    for (const image of images) {
      if (selectedOption === "all" || image.getAttribute("data-type") === selectedOption) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    }
  });


  function changeText() {
    const button = document.getElementById("buttonOfLp");
    button.innerText = " ↓ My Work ↓";
  }
  
  function resetText() {
    const button = document.getElementById("buttonOfLp");
    button.innerText = "View my Work ->";
  }
