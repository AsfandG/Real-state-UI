import ListCard from "../../components/card/list-card";
import Filter from "../../components/filter/filter";
import { listData } from "../../lib/list_mock_data";
import "./lists.scss";

const ListsPage = () => {
  return (
    <div className="listPage">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {listData.map((item) => (
            <ListCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="map-container">Map</div>
    </div>
  );
};

export default ListsPage;
