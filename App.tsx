import { NativeModules, Platform, StyleSheet, Text, View } from "react-native"
import { FC, useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import Header from "./components/header"

const { StatusBarManager } = NativeModules

const App: FC = () => {
    const [ statusBarHeight, setStatusBarHeight ] = useState(0)

    useEffect(() => {
        const statusBarHeight = Math.ceil(Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT)
        setStatusBarHeight(statusBarHeight)
    }, [])

    return (
        <View style={styles.container}>
            <Header statusBarHeight={statusBarHeight}/>
            <Text>Aplicativo Template Feito por Marcuth (@1Marcuth)!</Text>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default App