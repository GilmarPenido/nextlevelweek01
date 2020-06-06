import React, { useState } from "react";
import { View, Image, Text, ImageBackground, TextInput, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const Home = () => {

    const navigation = useNavigation();

    function handleNavigateToPoints() {
        navigation.navigate("Points", {
            uf,
            city
        });
    }

    const [uf, setUf] = useState("");
    const [city, setCity] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : undefined}>
                <ImageBackground
                    source={require("../../assets/home-background.png")}
                    imageStyle={{ width: 274, height: 268 }}
                    style={styles.container}>
                    <View style={styles.main}>
                        <Image source={require("../../assets/logo.png")} />

                        <View>
                            <Text style={styles.title}>Seu marketplace de coletas de residuos</Text>
                            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
                        </View>
                    </View>

                    <View style={styles.footer}>

                        <TextInput
                            style={styles.input}
                            placeholder="Digite a UF"
                            onChangeText={setUf}
                            maxLength={2}
                            autoCapitalize="characters"
                            autoCorrect={false}
                        >
                        </TextInput>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a Cidade"
                            onChangeText={setCity}
                            autoCorrect={false}
                        ></TextInput>

                        <RectButton style={styles.button} onPress={handleNavigateToPoints} >
                            <View style={styles.buttonIcon}>
                                <Text>
                                    <Feather name="arrow-right" color="#FFF" size={24}></Feather>
                                </Text>
                            </View>
                            <Text style={styles.buttonText}>
                                Entrar
                    </Text>
                        </RectButton>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

};

export default Home;