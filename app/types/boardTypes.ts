export type BoardType = {
  _id: string;
  title: string;
  content: string;
  views: number;
  date: string;
};

export interface BoardTableProps {
  boardList: BoardType[];
}
