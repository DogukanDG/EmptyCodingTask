import { View } from "react-native";
import { Event } from "../../data/dummyEvents";
import DummyCard from "../DummyCard/DummyCard";
import { styles } from "./EventColumn.styles";

interface EventColumnProps {
	events: Event[];
}

export default function EventColumn({ events }: EventColumnProps) {
	return (
		<View style={styles.column}>
			{events.map((_, index) => (
				<DummyCard key={index} />
			))}
		</View>
	);
}
