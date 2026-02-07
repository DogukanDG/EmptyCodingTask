import { StyleSheet } from "react-native";

export const CARD_PADDING = { vertical: 8, horizontal: 32 };
export const CARD_GAP = 4;

export const styles = StyleSheet.create({
	card: {
		flex: 1,
		width: "100%",
		backgroundColor: "#755AFF",
		borderRadius: 20,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: CARD_GAP,
		paddingVertical: CARD_PADDING.vertical,
		paddingHorizontal: CARD_PADDING.horizontal,
	},
	iconContainer: {
		borderWidth: 1,
		borderColor: "#747474",
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		textAlign: "center",
	},
	title: {
		color: "#FFFFFF",
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
		letterSpacing: 0,

	},
});
