import React from 'react';

import { View, Text, StyleSheet } from "react-native";

interface Props {
    name: string,
    gender: 'male' | 'female',
    age: number
}

class App extends React.Component<Props> {

    static defaultProps: { name?: string, gender: string, age: number } = {
        name: "Zest",
        gender: 'male',
        age: 26
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hello {this.props.name}, gender: {this.props.gender}, age: {this.props.age}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5faff'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})

export default App