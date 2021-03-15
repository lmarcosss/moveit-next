import { GetServerSideProps } from "next";
import Head from "next/head";
import { AppBar } from "../components/common/AppBar";
import { Table } from "../components/ranking/Table";
import { CountdownProvider } from "../context/CountdownContext";

import styles from '../styles/pages/Ranking.module.css'

interface Props {
    savedTime: number;
}
export default function Ranking({ savedTime }: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ranking | Moveit</title>
            </Head>

            <CountdownProvider savedTime={savedTime}>
                <AppBar pageName="ranking" />
            </CountdownProvider>

            <p>Ranking (Em breve)</p>

            <Table />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {
      savedTime,
    } = context.req.cookies
  
    return {
      props: {
        savedTime: Number(savedTime),
      },
    }
  }