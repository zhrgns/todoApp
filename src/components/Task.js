import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Task.style";
import { useState } from "react";


const Task = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        setIsActive(!isActive);
    };

    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.container,
                    isActive ? styles.completed : {},
                ]}
                onPress={handlePress}
            >
                <Text
                    style={[
                        styles.itemText,
                        isActive ? styles.completedText : {},
                    ]}
                >
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Task;
