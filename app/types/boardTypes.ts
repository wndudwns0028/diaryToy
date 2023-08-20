export type BoardType = {
  _id: String;
  title: String;
  content: String;
  views: number;
  date: String;
};

export interface BoardTableProps {
  boardList: BoardType[];
}
