const gridContainer = document.getElementById("grid");

for (let i = 0; i < 100; i++) {
  const item = document.createElement("div");
  item.className = "grid-item";
  item.addEventListener("click", () => {
    item.style.backgroundColor = getRandomColor();
  });
  gridContainer.appendChild(item);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
