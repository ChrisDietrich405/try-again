import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
	return (
		<div style={{ height: "3000px" }} className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to my SmoothScroll</h1>
				<h1 className={styles.title}>Proof of Concept</h1>

				<p className={styles.description}>
					If you scroll down on the page an arrow will appear in the left hand
					corner to redirect you to the top. I thought this would be a nice
					addition to the vegvisits website.
				</p>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
			<SmoothScroll />
		</div>
	);
}
