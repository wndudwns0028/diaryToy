export default function MyBox({
  user,
  message,
}: {
  user: string;
  message: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "yellow",
        padding: "2%",
        alignItems: "flex-end",
      }}
    >
      <p>user_나</p>
      <div
        style={{
          backgroundColor: "blue",
          width: "200px",
          height: "50px",
        }}
      >
        안녕
      </div>
    </div>
  );
}
