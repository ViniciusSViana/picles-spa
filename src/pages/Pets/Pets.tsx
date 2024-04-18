import { useEffect } from "react";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";




export function Pets() {
    useEffect
    return (
        <>
            <Grid>
                <div className={styles.container}>
                    <Header />
                    <main className={styles.list}>
                        {true && <Skeleton count={5} containerClassName={styles.skeleton}/>}
                        <Card href="/pet/1" text="nina" thumb="" />

                    </main>
                </div>

            </Grid>

        </>
    )
}