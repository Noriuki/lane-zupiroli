import Head from "next/head";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { animated, useSpring } from "react-spring";
import { TypeAnimation } from "react-type-animation";
import styles from "../styles/Home.module.css";

export default function Home() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
  });

  return (
    <div>
      <Head>
        <title>Lane Zupiroli</title>
        <meta
          name="description"
          content="Desenvolvedor fullstack Web & Mobile"
        />
        <meta name="author" content="Noriuki" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, Laravel, NodeJS, Express, Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <animated.div className={styles.container} style={props}>
          <div className={styles.profilePhoto}></div>
          <h1 style={{ margin: 0 }}>Lane Zupiroli</h1>
          <TypeAnimation
            style={{ margin: 0, minHeight: "55px" }}
            sequence={["Desenvolvedor Fullstack Web & Mobile 👋"]}
            speed={35}
            wrapper="h2"
            repeat={1}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://www.linkedin.com/in/noriuki/"
              aria-label="linkedin"
              style={{ margin: "0 1rem" }}
              target="__blank"
            >
              <BsLinkedin size="2.5rem" />
            </a>
            <a
              href="https://github.com/noriuki"
              aria-label="github"
              style={{ margin: "0 1rem" }}
              target="__blank"
            >
              <BsGithub size="2.5rem" />
            </a>
            <a
              href="https://youtube.com/@noriuki"
              aria-label="youtube"
              style={{ margin: "0 1rem" }}
              target="__blank"
            >
              <TfiYoutube size="2.5rem" />
            </a>
            <a
              href="https://dev.to/noriuki"
              aria-label="blog"
              style={{ margin: "0 1rem" }}
              target="__blank"
            >
              <FaDev size="3rem" />
            </a>
          </div>
        </animated.div>
      </main>
    </div>
  );
}
