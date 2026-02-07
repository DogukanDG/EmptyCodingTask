import EventColumn from "../components/EventColumn/EventColumn";
import { dummyEvents } from "../data/dummyEvents";

export default function App() {
	return <EventColumn events={dummyEvents} />;
}
