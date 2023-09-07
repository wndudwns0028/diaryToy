import { BoardType } from "../../types/boardTypes";
import BoardTable from "../components/BootStrap/BoardTable";
import Spinner from "react-bootstrap/Spinner";

type NoticeType = {
  boardList: BoardType[];
  isLoaded: boolean;
  currentPage: number;
  itemsCountPerPage: number;
};

export default function NoticeWrapper(props: NoticeType) {
  const { boardList, isLoaded, itemsCountPerPage, currentPage } = props;
  return (
    <div>
      {isLoaded ? (
        <BoardTable
          boardList={boardList}
          currentPage={currentPage}
          itemsCountPerPage={itemsCountPerPage}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}
