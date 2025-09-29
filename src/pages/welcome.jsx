import { Presentation } from "../components/presentation";
import { DonwloadCVButton } from "../components/downloadCVButton";

export function Welcome(){

    return(
    <main>
        <Presentation />
        <DonwloadCVButton />
    </main>
    );
}