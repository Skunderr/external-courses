import './base.js';
import { Header } from "./components/Header/Header";
import { Backlog } from "./components/Boards/Backlog/Backlog";
import { Ready } from "./components/Boards/Ready/Ready";
import { Inprogress } from "./components/Boards/Inprogress/Inprogress";
import { Finished } from "./components/Boards/Finished/Finished";
import { Footer } from "./components/Footer/Footer";

const header = new Header();
const backlog = new Backlog();
const ready = new Ready();
const inprogress = new Inprogress();
const finished = new Finished();
const footer = new Footer();

document.body.appendChild(header.element);
document.body.appendChild(backlog.element);
document.body.appendChild(ready.element);
document.body.appendChild(inprogress.element);
document.body.appendChild(finished.element);
document.body.appendChild(footer.element);
