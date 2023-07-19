import { Button } from "react-bootstrap";
function ButtonAction(props) {
  let { action, title } = props;
  return (
    <Button variant="primary" className="me-2 ms-2" onClick={action}>
      {title}
    </Button>
  );
}

export default ButtonAction;
