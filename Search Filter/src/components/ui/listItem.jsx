function ListItemSingle(props) {
  const { item } = props;

  return (
    <tr>
      <td>{item.id} </td>
      <td>{item.name}</td>
      <td>{item.user_type}</td>
    </tr>
  );
}

export default ListItemSingle;
