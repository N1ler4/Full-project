import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormData3 } from "@interface";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import useAuthStore from "../../store/auth";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const index = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { forgotPassword } = useAuthStore();
  const initialValues: FormData3 = {
    email: "",
  };
  const schema = Yup.object().shape({
    email: Yup.string().min(4, "Too Short!").required("Required"),
  });
  const handleSubmit = async (values: FormData3) => {
    try {
      await schema.validate(values, { abortEarly: false });
      const res: any = await forgotPassword(values);
      if (res.status === 200) {
        handleOpen();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const backToLogin = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col h-[100vh] justify-center">
      <h3
        onClick={backToLogin}
        className="absolute top-4 left-4 text-[32px] cursor-pointer"
      >
        Back
      </h3>
      <h1 className="text-center text-[32px] mb-9 mt-5">Tizimga Kirish</h1>
      <h2 className="text-center text-[32px] mb-9 mt-5">
        Sizga kod yuborishimiz uchun email’ingizni kiriting
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form
            id="form"
            className="flex flex-col items-center justify-center gap-5"
          >
            <Field
              name="email"
              as={TextField}
              label="Email"
              type="text"
              size="small"
            />
            <ErrorMessage name="email" component="p" />
            <Button variant="contained" type="submit">
              Contained
            </Button>
          </Form>
        )}
      </Formik>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-[34px] mb-4">Kod emailga yuborildi</h1>
          <button onClick={backToLogin} className="bg-blue-400 p-4">
            Davom Etish
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default index;
