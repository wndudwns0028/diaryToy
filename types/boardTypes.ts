export type BoardType = {
  _id: string;
  title: string;
  content: string;
  views: number;
  date: string;
};

export interface BoardTableProps {
  boardList: BoardType[];
  currentPage: number;
  itemsCountPerPage: number;
}

export type GalleryItemType = {
  imageUrl: string;
  title: string;
  author: string;
  groupName: string;
};
