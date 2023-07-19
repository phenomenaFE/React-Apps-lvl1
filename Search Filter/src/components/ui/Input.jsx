function InputImplement(props) {
  const { onChangeInput } = props;
  return (
    <input type="text" className="form-control" onChange={onChangeInput} />
  );
}

export default InputImplement;
