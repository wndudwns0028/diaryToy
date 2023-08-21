"use client";

import { Button, SSRProvider } from "react-bootstrap";

interface CustomButtonProps {
  btnText: string;
  variant: string;
}

export default function CustomButton(props: CustomButtonProps) {
  const { btnText, variant } = props;
  return <Button variant={props.variant}>{props.btnText}</Button>;
}
