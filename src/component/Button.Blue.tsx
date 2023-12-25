import { Button, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React, { PropsWithChildren } from "react";

type BtnProps = {
  text: string
} & TouchableOpacityProps

export const BlueButton = (props: BtnProps) => {
	return (
		<TouchableOpacity style={styles.blueButton} {...props}>
			<Text style={styles.textButton}>{props.text}</Text>
		</TouchableOpacity>
	);
};

// export default {BlueButton, TextButton};

const styles = StyleSheet.create({
	blueButton: {
		backgroundColor: "#76CFF1",
		justifyContent: "center",
		alignItems: "center",
		height: 21,
		borderRadius: 100,
		paddingHorizontal: 12,
		paddingVertical: 10,
		flex: 1,
	},
	textButton: {
		// color: "#1F2937",
		fontSize: 14,
		fontWeight: "500",
	},
});
