import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';


const EndGameDialog = ({ resultText, isOpen, onClickYes, onClickNo }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpen}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>
                        {resultText}
                    </Text>
                    <Text style={styles.modalText}>
                        {'Deseja jogar novamente?'}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 30 }}>
                        <Pressable
                            style={[styles.button, styles.buttonYes]}
                            onPress={onClickYes}
                        >
                            <Text style={styles.buttonText}>
                                Sim
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNo]}
                            onPress={onClickNo}
                        >
                            <Text style={styles.buttonText}>
                                Não
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

// Estilos do componente
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonYes: {
        backgroundColor: '#2196F3',
    },
    buttonNo: {
        backgroundColor: '#c17993',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

// Exportando o componente EndGameDialog
export default EndGameDialog;
