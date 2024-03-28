// Table.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
    return (
        <View style={styles.table}>
            {tableState.map((cellState, id) => (
                <View key={id} style={styles.cellContainer}>
                    <Cell
                        onClick={onCellClicked}
                        id={id}
                        cellState={cellState}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    table: {
        width: "70%",
        aspectRatio: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#111'
    },
    cellContainer: {
        width: '33.3%',
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: '#111'
    }
})

export default Table;
