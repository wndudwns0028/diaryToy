export default function Other({
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
        backgroundColor: "green",
        padding: "2%",
      }}
    >
      <p>다른사람</p>
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
