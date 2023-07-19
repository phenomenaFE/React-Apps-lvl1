import { useState } from "react";
import ButtonAction from "./ui/Button";
import InputImplement from "./ui/Input";
import ListItemSingle from "./ui/listItem";
const ItemsList = [
  { id: "1", name: "Joe", user_type: "Developer" },
  { id: "2", name: "Hill", user_type: "Designer" },
  { id: "3", name: "hazem", user_type: "ios" },
  { id: "4", name: "ahmed", user_type: "android" },
  { id: "5", name: "test", user_type: "devops" },
  { id: "6", name: "tarek", user_type: "Engineer" },
];
function SearchForm() {
  const [serachKeyItem, setSearchKey] = useState("");
  const [filterList, setFilterList] = useState(ItemsList);

  const UsersInfo = filterList.map((singleItem) => {
    return <ListItemSingle item={singleItem} />;
  });

  SearchForm = () => {
    if (serachKeyItem.length > 0) {
      setFilterList(
        ItemsList.filter(
          (filteredList) =>
            filteredList.name.toLowerCase() == serachKeyItem ||
            filteredList.user_type.toLowerCase() == serachKeyItem
        )
      );
    } else {
      setFilterList(ItemsList);
    }
  };
  let onChange = (event) => {
    setSearchKey(event.target.value);
  };
  return (
    <>
      <div className="search-Form m-auto mt-3 mb-3">
        <form className="w-100 d-flex ">
          <InputImplement onChangeInput={onChange} />
          <ButtonAction type="button" title={"Search"} action={SearchForm} />
        </form>
      </div>
      <div className="table-padding">
        <table>
          <thead>
            <tr>
              <th>#Id</th>
              <th>Name</th>
              <th>User Type</th>
            </tr>
          </thead>
          <tbody>{UsersInfo}</tbody>
        </table>
      </div>
    </>
  );
}

export default SearchForm;
