import fs from "fs";
const rootPath = "..\\maze";
const mapPath = ".\\map.txt";
let currentPath = "";

function findTreasureSync(roomPath) {
  const contentRoom = fs.readdirSync(roomPath); // show what in the room
  currentPath = roomPath;
  drawMapSync(currentPath);
  let chestsContent = arrayContentFromChests(contentRoom); //array of clus

  chestsContent.forEach((element) => {
    try {
      let nextRoomPath = element.clue.substring(1, element.clue.length); //  clue without /

      nextRoomPath = nextRoomPath.replace(/\//g, "\\");

      nextRoomPath = nextRoomPath.replace("\\maze", ""); //path to next room

      findTreasureSync(rootPath + nextRoomPath);
    } catch {
      if (element.treasure) {
        console.log("FOUND");
        return;
      }
    }
  });
}

function openChestSync(chestPath) {
  const content = fs.readFileSync(chestPath).toString();

  return content;
}

function drawMapSync(currentRoomPath) {
  fs.writeFileSync(
    mapPath,
    fs.readFileSync(mapPath) + currentRoomPath + "\r\n"
  );
}

function arrayContentFromChests(roomContent) {
  let chestsContent = [];
  roomContent.forEach((element) => {
    if (element.includes("chest")) {
      try {
        chestsContent.push(
          JSON.parse(openChestSync(currentPath + "\\" + element))
        );
      } catch {}
    }
  });
  return chestsContent;
}

findTreasureSync(rootPath);
