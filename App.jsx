import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './components/Task';
import {addTask} from './store/taskSlice';
import store from './src/store';
import {Provider} from 'react-redux';

export default function App() {
  const [task, setTask] = useState('');
  const data = useSelector(state => state.task.data);
  const dispatch = useDispatch();

  const addNewTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <Provider store={store}>
      <KeyboardAvoidingView behavior="" style={styles.container}>
        {/* content */}
        <View>
          <View style={{...styles.header}} />
          <Text style={styles.taskTitle}>Tasks for today</Text>
        </View>

        <FlatList
          style={styles.tasks}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <Task text={item} index={index} />}
          ListEmptyComponent={
            <Text style={styles.noTasks}>Great Job! No tasks Due</Text>
          }
        />

        {/* footer */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write a task"
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity
            style={styles.addNewTask}
            onPress={() => addNewTask()}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003566',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  header: {
    height: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addNewTask: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e63946',
    borderRadius: 25,
  },
  taskWrapper: {
    paddingTop: '1%',
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FEFBEA',
  },
  tasks: {
    flex: 1,
    width: '100%',
  },
  input: {
    padding: 12,
    backgroundColor: '#FEFBEA',
    // width: 270,
    width: '81%',
    borderRadius: 25,
  },
  addText: {
    width: 53,
    height: 53,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 19,
    paddingTop: 7,
  },
  noTasks: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: '#119822',
    padding: 20,
    width: '100%',
    borderRadius: 22,
  },
});
