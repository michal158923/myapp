import forest from "./forest.png";
import river from "./river.png";
import mountain from "./mountain.png";
import meadow from "./meadow.png";

export class Project {
  image: string;
  name: string;

  constructor(image: string, name: string) {
    this.image = image;
    this.name = name;
  }
}

export const Projects = [
  new Project(forest, "Forest"),
  new Project(river, "River"),
  new Project(mountain, "Mountain"),
  new Project(meadow, "Meadow"),
];
