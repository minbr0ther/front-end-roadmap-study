import Header from "../header/header";
import Footer from "../footer/footer";
import React, { useEffect } from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router-dom";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId }, //user의 userId를 전달하기 위한 state
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
    //login된 회원의 정보의 고유한 uid를 maker로 가는 router에 전달
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
      //user가 있다면 그냥 goToMaker화면으로 보내버린다
    });
  }); //component가 mount되거나 update될때 작동

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
