import { NextPage } from "next";
import React from "react";
import styles from "../styles/Cv.module.scss";

const Cv: NextPage = () => {
  return (
    <section className={styles.cvContainer}>
      <div className={styles.boxshadow}>
        <p>
          For your convienence you can view my CV here on this page, download
          the pfd, or view the google doc.
        </p>
        <div className={styles.buttonContainer}>
          <a
            className={styles.resumeButton}
            href="https://docs.google.com/document/d/1_gpG0nhrPrHhr04xQLNj1Yf3b2En5tP3-XkwiF19gP0/export?format=pdf"
          >
            download
          </a>
          <a
            className={styles.resumeButton}
            href="https://docs.google.com/document/d/1_gpG0nhrPrHhr04xQLNj1Yf3b2En5tP3-XkwiF19gP0"
          >
            google
          </a>
        </div>
        <p>Doc viewer iframe</p>
      </div>
    </section>
  );
};

export default Cv;
