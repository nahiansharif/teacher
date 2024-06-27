  const bgPattern = document.querySelector('.bgPattern');

function triggerBgPatternAnimation() {
  bgPattern.classList.add('hover');
}

function stopBgPatternAnimation() {
  bgPattern.classList.remove('hover');
}


const allATags = document.querySelectorAll('a, button');

allATags.forEach(tag => {
  tag.addEventListener('mouseover', triggerBgPatternAnimation);
  tag.addEventListener('mouseleave', stopBgPatternAnimation);
});

