import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native';

interface Style {
	button: ViewStyle;
	buttonText: TextStyle;
}

interface PressFunc {
	(source: string, subString: string): boolean;
}
type Props = {
	text: string;
	onPress: any; // Figure out how to make function type
};

const Button = ({ text, onPress }: Props) => (
	<TouchableOpacity onPress={onPress} style={styles.button}>
		<Text style={styles.buttonText}>{text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create<Style>({
	button: {
		flex: 1,
		alignSelf: 'center',
		backgroundColor: '#E31C23',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#E31C23',
		marginLeft: 5,
		marginRight: 5,
	},
	buttonText: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	},
});

export default Button;
