function ButtonControl(props) {
  const { title, action } = props;
  return (
    <button className="button-tem" onClick={action}>
      {title}
    </button>
  );
}

export default ButtonControl;
