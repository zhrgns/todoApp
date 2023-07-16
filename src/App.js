import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import InputBar from "./components/InputBar/InputBar";
import { useState } from "react";
import Task from "./components/Task";

export default function App() {
    const [taskItems, setTaskItems] = useState([]);

    const [task, setTask] = useState();

    const handleAddTask = () => {
        setTaskItems([...taskItems, task]);
        setTask("");
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.sectionTitle}>To Do List</Text>

            <FlatList
                style={styles.list}
                data={taskItems}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item, index }) => <Task text={item} />}
            />

            <InputBar
                style
                task={task}
                createTask={(text) => setTask(text)}
                onSave={handleAddTask}
            />
        </View>
    );
}

// STYLE
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        backgroundColor: "#FAFAFA",
    },
    sectionTitle: {
        fontSize: 32,
        color: "#424242",
        padding: 16,
        fontWeight:"bold"
    },
    list: {
        flex: 1,
    },
});
