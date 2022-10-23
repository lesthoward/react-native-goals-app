import { useState } from 'react';
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import defaultStyles from './config';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisible(!modalVisible);
  };

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoals) => [
      enteredGoalText || 'No Value Provided.',
      ...currentGoals,
    ]);
    setEnteredGoalText('');
    setModalVisible(false);
  };

  const deleteGoalHandler = (id: number) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((_, index) => index !== id);
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color={defaultStyles.primaryColor}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onGoalInput={goalInputHandler}
          value={enteredGoalText}
          showModal={modalVisible}
          onModalToggle={startAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {goalList.length ? (
            <FlatList
              alwaysBounceVertical={false}
              data={goalList}
              renderItem={(
                itemData: ListRenderItemInfo<typeof enteredGoalText>
              ) => (
                <GoalItem data={itemData} onDeleteGoal={deleteGoalHandler} />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          ) : (
            <Text>List of goals...</Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16 * 4,
    padding: 16,
    flex: 1,
    minHeight: 800,
  },
  goalsContainer: {
    marginTop: 24,
    flex: 6,
  },
});
