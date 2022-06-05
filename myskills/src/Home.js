import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import {Button} from './components/Button';
import {SkillCard} from './components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Leticia Rodrigues </Text>

      <TextInput
        style={styles.input}
        placeholder="Skills"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button></Button>
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
      {mySkills.map(skill => (
        <SkillCard />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {color: '#FFF', fontSize: 20, fontWeight: 'bold'},
});
