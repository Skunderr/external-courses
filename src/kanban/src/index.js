import { Header } from './components/Header/Header.js';
import { Field } from './components/Field/Field.js';
import { Footer } from './components/Footer/Footer.js';
import { addDropdown, removeDropdown } from './components/events/dropdown.js';
import { addTaskBacklog } from './components/events/backlogEvent.js';
import { addTaskReady, createListTaskReady } from './components/events/readyEvent.js';
import { addTaskInprogress, createListTaskInprogress } from './components/events/inprogressEvent.js';
import { addTaskFinished, createListTaskFinished } from './components/events/finishedEvent.js';

const header = new Header();
const field = new Field();
const footer = new Footer();

document.body.appendChild(header.element);
addDropdown()
removeDropdown()
document.body.appendChild(field.element);
addTaskBacklog();
createListTaskReady();
addTaskReady();
addTaskInprogress();
createListTaskInprogress();
addTaskFinished();
createListTaskFinished();
document.body.appendChild(footer.element);
