import "./header.css";
import { Navegator } from "./navegator";
import { LinksAside } from "./linksAside";

export function Header() {
  return (
    <header className="header">
      <div>
        <LinksAside />
        <Navegator />
      </div>
    </header>
  );
}
