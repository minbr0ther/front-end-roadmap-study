import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory(); //화면에서 다른 라우터로 갈때 사용 History
  const goToMaker = (userId) => {
    //history를 사용해서 maker로 갈때 userID의 정보를 갖고감
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //로그인을 하면 그 데이터를 받아서
      .then((data) => goToMaker(data.user.uid)); //goToMaker로 주입
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid); //user가 로그인 되어 있다면 바로 Maker로 보내버림
    });
  });

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
