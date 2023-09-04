"use client";
import { SimpleModalType } from "@/types/componentTypes";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ReactModal from "react-modal";

const SimpleModal = (props: SimpleModalType) => {
  const { show, title, message, onHide } = props;
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
        <Button variant={"danger"} onClick={onHide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default SimpleModal;
