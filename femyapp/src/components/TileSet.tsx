import Tile from "./Tile";
import { Projects } from "../images/Projects";



function TileSet() {
  return (
    <div>
      {Projects.map((project, index) => (
        <Tile project={project} key={index} />
      ))}
    </div>
  );
}

export default TileSet;
