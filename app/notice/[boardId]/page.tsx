export default function BoardNotice({
  params,
}: {
  params: { boardId: string };
}) {
  return (
    <>
      <p>board: {params.boardId}</p>
    </>
  );
}
