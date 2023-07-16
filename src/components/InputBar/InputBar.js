import {
    View,
    TextInput,
    Text,
    TouchableOpacity
} from "react-native";
import styles from "./InputBar.style";

const InputBar = (props) => {
    return (
        <View style={styles.container}>
            {/* Input Line */}
            <View style={styles.inputBar}>
                <TextInput
                    placeholder="To do.."
                    maxLength={40}
                    onChangeText={props.createTask}
                    value={props.task}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={props.onSave}>
                <Text style={styles.button_title}>ADD TO LIST</Text>
            </TouchableOpacity>
        </View>
    );
};

export default InputBar;
