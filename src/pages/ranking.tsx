import { GetServerSideProps } from "next";
import Head from "next/head";
import { AppBar } from "../components/common/AppBar";
import { Table } from "../components/ranking/Table";
import { CountdownProvider } from "../context/CountdownContext";

import styles from '../styles/pages/Ranking.module.css'

interface Props {
    countdownTime: number;
}

export default function Ranking({ countdownTime }: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ranking | Moveit</title>
            </Head>

            <CountdownProvider countdownTime={countdownTime}>
                <AppBar pageName="ranking" />
            </CountdownProvider>

            <p>Ranking</p>

            <Table />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {
      countdownTime,
    } = context.req.cookies
  
    return {
      props: {
        countdownTime: Number(countdownTime),
      },
    }
  }