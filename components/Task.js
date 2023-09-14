import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {removeTask, editTask} from '../store/taskSlice';

const Task = props => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);

  const handleTaskCompletion = () => {
    dispatch(removeTask(props.index));
  };

  const handleEditSubmit = () => {
    dispatch(editTask({index: props.index, newText: editedText}));
    setIsEditing(false);
  };

  return (
    <View style={styles.tasks}>
      <View style={styles.left}>
        <TouchableOpacity
          style={styles.box}
          onPress={handleTaskCompletion}></TouchableOpacity>
      </View>
      {isEditing ? (
        <TextInput
          style={styles.editInput}
          value={editedText}
          onChangeText={setEditedText}
          onBlur={handleEditSubmit}
          autoFocus
        />
      ) : (
        <Text style={styles.tasksText}>{props.text}</Text>
      )}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setIsEditing(!isEditing)}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  tasks: {
    backgroundColor: '#FEFBEA',
    padding: 15,
    marginTop: 18,
    borderRadius: 10,
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box: {
    width: 24,
    height: 24,
    backgroundColor: '#00b4d8',
    opacity: 0.3,
    borderRadius: 6,
    marginRight: 15,
  },
  tasksText: {
    flexDirection: 'row',
    flex: 1,
  },
  editInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: '70%',
  },
  editButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#e6394799',
    borderRadius: 5,
    marginLeft: 10,
  },
  editButtonText: {
    color: 'white',
  },
});

export default Task;
