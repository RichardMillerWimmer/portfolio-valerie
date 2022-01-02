import { NextPage } from "next";
import React from "react";
import styles from "../styles/Cv.module.scss";
import { Button } from '@material-ui/core'
import Link from "next/link";

const Cv: NextPage = () => {
  return (
    <section className={styles.cvContainer}>
      <div className={styles.boxshadow}>
        <div className={styles.innerContainer}>
          <h2 className='visualHidden'>CV</h2>
          <p>
            For your convienence you can download my CV or view the google doc.
          </p>
          <p>
            If you have any questions or want to talk further please feel free to <Link href='/contact'><a>contact</a></Link> me.
          </p>
          <div className={styles.buttonContainer}>
            <Button className={styles.resumeButton} variant='outlined'><a
              href="https://docs.google.com/document/d/1_gpG0nhrPrHhr04xQLNj1Yf3b2En5tP3-XkwiF19gP0/export?format=pdf"
            >
              download
            </a>
            </Button>
            <Button className={styles.resumeButton} variant='outlined'>
              <a target='_blank' rel='noopener noreferrer'
                href="https://docs.google.com/document/d/1_gpG0nhrPrHhr04xQLNj1Yf3b2En5tP3-XkwiF19gP0"
              >
                google
              </a>
            </Button>
          </div>
        </div>
        {/* <p>Doc viewer iframe</p> */}
      </div>
    </section>
  );
};

export default Cv;
