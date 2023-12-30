interface Props {
  onClick() : void
}

function Button(props : Props) {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>
      Primary
    </button>
  );
}

export default Button;
