import Modal from "@mui/material/Modal";
import { IModal } from "./IModal";

const ModalComp = ({ children, ...props }: IModal) => {
  return <Modal {...props}>{children}</Modal>;
};

export default ModalComp;
