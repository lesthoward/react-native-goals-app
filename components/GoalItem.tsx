import {
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import defaultStyles from '../config';

interface GoalItemProps {
  data: ListRenderItemInfo<string>;
  onDeleteGoal: (data: any) => void;
}

const GoalItem = ({ data, onDeleteGoal }: GoalItemProps) => {
  const { item, index } = data;
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteGoal(index)}
        style={({ pressed }) => pressed && styles.pressedStyle}
      >
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: defaultStyles.secondaryColor,
    borderRadius: 4,
    marginVertical: 4,
  },
  goalText: {
    color: defaultStyles.textColor,
    fontWeight: 'bold',
    padding: 12,
  },
  pressedStyle: {
    backgroundColor: defaultStyles.dangerColor,
    borderRadius: 4,
    opacity: 0.5,
  },
});

export default GoalItem;
