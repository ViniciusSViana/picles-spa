import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import styles from './PetDetails.module.css'

export function PetDetails() {
    return (
        <>
            <Grid>
                <div className={styles.container}>
                    <Header ShowReturn={true} />
                    <h1>Detalhes do pet</h1>
                </div>
            </Grid>

        </>
    )
}