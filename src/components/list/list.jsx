import { listData } from "../../lib/list_mock_data";
import ListCard from "../card/list-card";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <ListCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
