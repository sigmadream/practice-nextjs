import Head from "next/head";
import Image from "next/image";

import Banner from "../components/banner";
import Card from "../components/card";

import styles from "../styles/Home.module.css";

import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("hi! banner button");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="Hero Image"
          />
        </div>
        {coffeeStores.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.headding2}>Stores near me</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map(({ name, imgUrl, id }) => (
                <Card
                  key={id}
                  className={styles.card}
                  name={name}
                  imgUrl={imgUrl}
                  href={`/coffee-store/${id}`}
                />
              ))}
            </div>
          </div>
        )}
        {props.coffeeStores.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.headding2}>Toronto Coffee Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map(({ name, imgUrl, id }) => (
                <Card
                  key={id}
                  className={styles.card}
                  name={name}
                  imgUrl={imgUrl}
                  href={`/coffee-store/${id}`}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
