// select all tiles
const tiles = document.querySelectorAll("td");

const canMove = (tile) => {
  // horizontal index of tile
  const tileCol = tile.cellIndex;
  //vertical index of tile
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector(".empty");
  // horizontal index of tile empty
  const emptyTileCol = emptyTile.cellIndex;
  //vertical index of tile empty
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (
    (tileCol === emptyTileCol && tileRow === emptyTileRow + 1) ||
    (tileCol === emptyTileCol && tileRow === emptyTileRow - 1) ||
    (tileRow === emptyTileRow && tileCol === emptyTileCol + 1) ||
    (tileRow === emptyTileRow && tileCol === emptyTileCol - 1)
  );
};

const moveTile = (tile) => {
  // 1. Select empty tile
  const emptyTile = document.querySelector(".empty");
  // 2. Replace its content with the `tile`'s content
  emptyTile.innerHTML = tile.innerHTML;
  // 2. Remove its `tile` class
  emptyTile.classList.remove("empty");
  // 4. Empty `tile`'s content
  tile.innerHTML = "";
  // 5. Add empty class to `tile`
  tile.classList.add("empty");
};

// for each tile
tiles.forEach((tile) => {
  // add event listener
  tile.addEventListener('click', (event) => {
    if(canMove(tile)) {
      moveTile(tile);
    }
  })
});


const btn = document.querySelector("#show-hint");
btn.addEventListener("click", () => {
  const hint = document.querySelector(".hint");
  hint.classList.toggle("active");
});
