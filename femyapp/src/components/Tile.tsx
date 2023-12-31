import { Project } from "../images/Projects";
import "./Tile.css";


interface Props {
  project: Project;
}

function Tile({ project }: Props) {
  return (
    <div className="pym-card">
      <h5>{project.name}</h5>
      <img className="pym-image" src={project.image} alt="no image"></img>
    </div>
  );
}

export default Tile;
