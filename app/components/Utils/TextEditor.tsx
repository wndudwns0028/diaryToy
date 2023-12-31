import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

type EditorProps = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>에디터 불러오는 중...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function TextEditor(props: EditorProps) {
  return (
    <QuillWrapper
      theme="snow"
      id={"description"}
      placeholder={"내용을 입력해주세요"}
      onChange={props.setContent}
      modules={modules}
      formats={formats}
      style={{ height: "75vh" }}
    ></QuillWrapper>
  );
}
