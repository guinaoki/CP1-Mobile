import { useState } from 'react';
import { View } from 'react-native';
import InvalidMoveDialog from '../../components/InvalidMoveDialog';
import EndGameDialog from '../../components/EndGameDialog';
import { initialTableState, fullTable, hasWinner } from './gameRules';
import GameTable from './Table';
import TurnRecorder from './TurnRecorder';

const PLAYERS_NAME = ['Jogador 1', 'Jogador 2']; 

const GameScreen = ({ navigation }) => {
  const [invalidMoveDialog, setInvalidMoveDialog] = useState(false);
  const [endGameDialog, setEndGameDialog] = useState(false);
  const [activePlayer, setActivePlayer] = useState(1);
  const [table, setTable] = useState(initialTableState);

  const endGameText = hasWinner(table) ? `${PLAYERS_NAME[activePlayer - 1]} venceu!` : "Empate";

  const resetGame = () => {
    setActivePlayer(1);
    setTable(initialTableState);
  }

  const onCellClicked = (cellId) => {
    if (table[cellId] !== 0 || fullTable(table)) {
      setInvalidMoveDialog(true);
      return;
    }

    const updatedTable = [...table];
    updatedTable[cellId] = activePlayer;
    setTable(updatedTable);

    if (hasWinner(updatedTable) || fullTable(updatedTable)) {
      setEndGameDialog(true);
      return;
    }

    setActivePlayer(activePlayer === 1 ? 2 : 1);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <TurnRecorder
        playerName={PLAYERS_NAME[activePlayer - 1]}
      />
      <GameTable
        onCellClicked={onCellClicked}
        tableState={table}
      />
      <EndGameDialog
        isOpen={endGameDialog}
        resultText={endGameText}
        onClickYes={resetGame}
        onClickNo={() => navigation.navigate('Home')}
      />
      <InvalidMoveDialog
        isOpen={invalidMoveDialog}
        onClickClose={() => setInvalidMoveDialog(false)}
      />
    </View>
  );
}

export default GameScreen;
