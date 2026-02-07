import { View } from "react-native";
import { Event } from "../../data/dummyEvents";
import EventCard from "../EventCard/EventCard";
import { styles } from "./EventColumn.styles";

interface EventColumnProps {
	events: Event[];
}

export default function EventColumn({ events }: EventColumnProps) {
	return (
		<View style={styles.column}>
			{events.map((event, index) => (
				<EventCard key={index} event={event} />
			))}
		</View>
	);
}
