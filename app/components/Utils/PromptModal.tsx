"use client";

import { Button, Modal } from "react-bootstrap";

type PromptModalType = {
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
  show: boolean;
};

export default function PromptModal(props: PromptModalType) {
  const { show, title, message, onConfirm, onClose } = props;
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onConfirm} variant="danger">
          확인
        </Button>
        <Button onClick={onClose} variant="outline-danger">
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
