import { useState } from "react";
import { View, Text, LayoutChangeEvent } from "react-native";
import { Event } from "../../data/dummyEvents";
import { styles, CARD_PADDING, CARD_GAP } from "./EventCard.styles";

interface EventCardProps {
	event: Event;
}

export default function EventCard({ event }: EventCardProps) {
	const [iconSize, setIconSize] = useState(0);
	const [titleHeight, setTitleHeight] = useState(30);

	const handleCardLayout = (e: LayoutChangeEvent) => {
		const { width, height } = e.nativeEvent.layout;
		const availableWidth = width - CARD_PADDING.horizontal * 2;
		const availableHeight = height - CARD_PADDING.vertical * 2 - titleHeight - CARD_GAP;
		const newSize = Math.max(0, Math.min(availableWidth, availableHeight));
		if (Math.abs(newSize - iconSize) > 1) {
			setIconSize(newSize);
		}
	};

	const handleTitleLayout = (e: LayoutChangeEvent) => {
		const newHeight = e.nativeEvent.layout.height;
		if (Math.abs(newHeight - titleHeight) > 1) {
			setTitleHeight(newHeight);
		}
	};

	return (
		<View style={styles.card} onLayout={handleCardLayout}>
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
			<Text style={styles.title} onLayout={handleTitleLayout}>
				{event.title}
			</Text>
		</View>
	);
}
