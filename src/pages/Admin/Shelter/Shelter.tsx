import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Panel } from "../../../components/layout/Panel/Panel";


export function Shelter() {
    return (
        <>
            <Panel>
                <form>
                    <Input label='Nome' />
                    <Button type="submit">Salvar Dados</Button>
                </form>

            </Panel>
        </>
    )

}