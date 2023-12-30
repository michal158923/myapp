interface Props {
  onClose() : void
}

function Alert(props : Props) {
    return (
        <div className="alert alert-primary alert-dismissible" role="alert">
          A simple primary alert—check it out!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={props.onClose}
          ></button>
        </div>
    );
  }
  
  export default Alert;