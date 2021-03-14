import Head from "next/head";
import { AppBar } from "../components/common/AppBar";
import { Table } from "../components/ranking/Table";

import styles from '../styles/pages/Ranking.module.css'

export default function Ranking() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ranking | Moveit</title>
            </Head>
            <AppBar pageName="ranking" />

            <p>Ranking (Em breve)</p>

            <Table />
        </div>
    )
}