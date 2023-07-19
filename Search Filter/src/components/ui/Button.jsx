import { Button } from "react-bootstrap";
function ButtonAction(props) {
  let { action, title, type } = props;
  return (
    <Button
      variant="primary"
      type={type}
      className="me-2 ms-2"
      onClick={action}
    >
      {title}
    </Button>
  );
}

export default ButtonAction;
