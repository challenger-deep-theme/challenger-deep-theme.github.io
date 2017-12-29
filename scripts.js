/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rootBubble = document.getElementById("rootbubble");

const animateBubble = ({ x, size, delay, duration }) => {
  const bubble = rootBubble.cloneNode(true);
  document.getElementById("bubbles").appendChild(bubble);
  bubble.setAttribute(
    "style",
    `left:${x}vw;animation-duration: ${duration}ms; animation-delay: ${delay}ms;`
  );
  bubble.style.width = `${size}px`;
  bubble.classList.remove("hidden");
};

for (i = 0; i < 20; i++) {
  const delay = getRandomInt(0, 4000);
  animateBubble({
    x: getRandomInt(0, 100),
    size: getRandomInt(3, 20),
    delay,
    duration: getRandomInt(6000, 10000)
  });
}
