import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (
  props //component prop은 보통 대문자로 시작함
) => <ImageFileInput {...props} imageUploader={imageUploader} />;

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
