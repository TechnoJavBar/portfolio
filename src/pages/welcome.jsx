import { Presentation } from "../components/presentation";
import { DonwloadCVButton } from "../components/downloadCVButton";
import "./welcome.css";

export function Welcome(){

    return(
    <main className="welcome-main">
        <Presentation />
        <DonwloadCVButton />
    </main>
    );
}