"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import dynamic from "next/dynamic";
import WirtualNavbarWrapper from "@/component/WirtualNavbarWrapper";
import { Button } from "antd";

export default function Home() {
  const handleGetAccess = async () => {
    try {
      const response = await fetch(
        `https://pmat-stg.wirtual.co/api/auth/access`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response?.json();
      // const data: { access_token: string } = await response?.json();

      const responseUser = await fetch(
        `https://api-dyp8.onrender.com/api/users/me`,
        {
          headers: {
            Authorization: `Bearer ${data?.accessToken}`,
          },
        }
      );
      // const dataUser: GetApi = await responseUser?.json();
      console.log(
        "responseUser: ",
        responseUser?.json(),
        "data: ",
        data.accessToken
      );
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className={styles.page}>
      <pmat-header />
      <main className={styles.main}>
        <Button onClick={handleGetAccess}>ssdsfdsfsdf</Button>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
