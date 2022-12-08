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
