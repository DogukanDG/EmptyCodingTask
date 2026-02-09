import { useEffect, useState } from "react";
import { View, Text, LayoutChangeEvent } from "react-native";
import { Event } from "../../data/dummyEvents";
import { styles, CARD_PADDING, CARD_GAP, HORIZONTAL_THRESHOLD,TITLE_SIZE} from "./EventCard.styles";

type Layout = "vertical" | "horizontal";

interface EventCardProps {
	event: Event;
}

export default function EventCard({ event }: EventCardProps) {
	const [iconSize, setIconSize] = useState(0);
	const [layout, setLayout] = useState<Layout>("vertical");

	const handleCardLayout = (e: LayoutChangeEvent) => {
		const { width, height } = e.nativeEvent.layout;
		const availableWidth = width - CARD_PADDING.horizontal * 2;
		const availableHeight = height - CARD_PADDING.vertical * 2 - TITLE_SIZE - CARD_GAP;
		const calculatedIcon = Math.max(0, Math.min(availableWidth, availableHeight));


		// If icon would be smaller than threshold, switch to horizontal
		if (calculatedIcon <= HORIZONTAL_THRESHOLD) {
        setLayout("horizontal");

        const horizontalIconSize = height - CARD_PADDING.vertical * 2;
        setIconSize(Math.min(horizontalIconSize, HORIZONTAL_THRESHOLD));
    } else {
        setLayout("vertical");
        setIconSize(calculatedIcon);
    }
	};

	return (
		<View
			style={[styles.card, layout === "horizontal" && styles.cardHorizontal]}
			onLayout={handleCardLayout}
		>
			{iconSize > 0 && (
				<View
					style={[
						styles.iconContainer,
						{
							width: iconSize,
							height: iconSize,
							borderRadius: iconSize / 2,
						},
					]}
				>
					<Text style={[styles.icon, { fontSize: iconSize * 0.45 }]}>
						{event.icon}
					</Text>
				</View>
			)}
			<Text 

			style={[styles.title, layout === "horizontal" && styles.titleHorizontal]}>
				{event.title}
			</Text>
		</View>
	);
}
