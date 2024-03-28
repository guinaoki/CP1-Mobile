import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import EndGameDialog from '../../../../components/EndGameDialog'; 
import { hasWinner } from '../../gameRules'; 

const Cell = () => {
    const navigation = useNavigation();

    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false); 

    const handleCellClick = (cellIndex) => {
        if (winner || boardState[cellIndex] !== null || isGameOver) {
            return;
        }

        const newBoardState = [...boardState];
        newBoardState[cellIndex] = getNextPlayer();
        setBoardState(newBoardState);
        
        if (hasWinner(newBoardState, cellIndex)) {
            setWinner(getNextPlayer());
            setIsGameOver(true); 
        } else if (isBoardFull(newBoardState)) {
            setIsGameOver(true); 
        }
    };

    const getNextPlayer = () => {
        const xCount = boardState.filter(cell => cell === 'X').length;
        const oCount = boardState.filter(cell => cell === 'O').length;
        return xCount === oCount ? 'X' : 'O';
    };

    const isBoardFull = (boardState) => {
        return boardState.every(cell => cell !== null);
    };

    const handlePlayAgain = () => {
        setBoardState(Array(9).fill(null)); 
        setWinner(null);
        setIsGameOver(false); 
    };

    const handleQuitGame = () => {
        navigation.navigate('Home'); 
    };

    const renderCell = (cellIndex) => {
        return (
            <TouchableOpacity
                key={cellIndex}
                style={styles.cell}
                onPress={() => handleCellClick(cellIndex)}
            >
                <Text style={styles.cellText}>{boardState[cellIndex]}</Text>
            </TouchableOpacity>
        );
    };

    const renderBoard = () => {
        return (
            <View style={styles.board}>
                {Array.from({ length: 3 }, (_, row) => (
                    <View key={row} style={styles.row}>
                        {Array.from({ length: 3 }, (_, col) =>
                            renderCell(row * 3 + col)
                        )}
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogo da Velha</Text>
            {renderBoard()}
            {winner && <Text style={styles.winnerText}>Vencedor: {winner}</Text>}
            <EndGameDialog
                isOpen={isGameOver} 
                resultText={winner ? `Vencedor: Jogador ${winner}` : 'Empate'}
                onClickYes={handlePlayAgain}
                onClickNo={handleQuitGame}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    board: {
        borderWidth: 2,
        borderColor: 'black',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellText: {
        fontSize: 40,
    },
    winnerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default Cell;
