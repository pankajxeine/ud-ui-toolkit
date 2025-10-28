// ud-ui-toolkit
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material"; // ✅ Import Box for layout
import { IModal } from "./IModal";

const ModalComp = ({ children, ...props }: IModal) => {
  return (
    <Modal {...props}>
      <Box>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComp;
