/*6. Songs

Define a class Song, which holds the following information about songs: typeList, name and time.

You will receive the input as an array.

The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the the last element will be Type List / "all".

Print only the names of the songs which are from that Type List / All songs.*/

function solve(input) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let numberOfSongs = input.shift();
  let typeSong = input.pop();

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = input[i].split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }

  if (typeSong === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.type === typeSong);
    filtered.forEach((i) => console.log(i.name));
  }
}

solve([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);
