import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
} from 'react-native';
import defaultStyles from '../config';

interface GoalInputProps {
  onAddGoal: () => void;
  onGoalInput: (enteredText: string) => void;
  value: string;
  showModal: boolean;
  onModalToggle: () => void;
}

const GoalInput = ({
  onAddGoal,
  onGoalInput,
  value,
  showModal,
  onModalToggle,
}: GoalInputProps) => {
  return (
    <>
      <Modal visible={showModal} animationType="fade">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/Arrow.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="What is on your mind"
            onChangeText={onGoalInput}
            value={value}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add goal"
                color={defaultStyles.primaryColor}
                onPress={onAddGoal}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Cancel"
                color={defaultStyles.dangerColor}
                onPress={onModalToggle}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: defaultStyles.inputBorderColor,
    padding: 16,
    backgroundColor: defaultStyles.backgroundLayerColor,
    alignContent: 'center',
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: defaultStyles.inputBorderColor,
    width: '100%',
    borderRadius: 4,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 8,
    width: '40%',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

export default GoalInput;
