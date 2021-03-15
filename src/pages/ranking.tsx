import Head from "next/head";
import { AppBar } from "../components/common/AppBar";
import { Table } from "../components/ranking/Table";
import { CountdownProvider } from "../context/CountdownContext";

import styles from '../styles/pages/Ranking.module.css'

export default function Ranking() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ranking | Moveit</title>
            </Head>

            <CountdownProvider>
                <AppBar pageName="ranking" />
            </CountdownProvider>

            <p>Ranking (Em breve)</p>

            <Table />
        </div>
    )
}