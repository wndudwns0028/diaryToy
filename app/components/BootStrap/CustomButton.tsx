"use client";

import { Button, SSRProvider } from "react-bootstrap";

interface CustomButtonProps {
  btnText: string;
}

export default function CustomButton(props: CustomButtonProps) {
  const { btnText } = props;
  return (
    <SSRProvider>
      <Button variant="dark">{btnText}</Button>
    </SSRProvider>
  );
}
