import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
      <ScrollView style={styles.taskList}>
        {tasks.map((t, index) => (
          <View key={index} style={styles.taskItem}>
            <Text>{t}</Text>
            <Button title="Excluir" onPress={() => deleteTask(index)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  taskList: {
    width: '100%',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
});

export default App;