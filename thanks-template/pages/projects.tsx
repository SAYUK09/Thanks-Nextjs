import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../assets/projectBackground.svg";
import styles from "../styles/Projects.module.css";

const projects = () => {
  return (
    <div className={styles.projectsParent}>
      <div className={styles.headerBackground}>
        <Image src={profilePic} alt="Picture of the author" />
      </div>

      <h1 className={styles.titleXl}>PROJECTS</h1>

      <Link href={`/`}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default projects;
