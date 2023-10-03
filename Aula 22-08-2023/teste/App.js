import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        O title e o onPress precisam do toque. 
        É recomendado já setar o acessibilityLabel para ajudar a fazer o seu app usável para todos
      </Text>
      <Button
        title="Me aperte" //Título do botão
        onPress={() => Alert.alert('O botão foi pressionado')} //O que vai aparecer ao apertar o botão
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Ajuste a cor conforme for padrão de cada plataforma. 
        No IOS, a props de cor controla a cor do texto. 
        No android, a props de cor ajusta a cor do background do botão.
      </Text>
      <Button
        title="Me aperte"
        color="#282a36" //Cor do botão para o android
        onPress={() => Alert.alert('O botão com cor foi pressionado')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Todas as interações para esse botão estão desativadas.
      </Text>
      <Button
        title="Me aperte"
        disabled
        onPress={() => Alert.alert('Não pode apertar esse botão')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
          Isso faz com que o tamanho do botão se adapte ao seu texto
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Botão esquerdo"
          onPress={() => Alert.alert('O botão esquerdo foi pressionado')}
        />
        <Button
          title="Botão direito"
          onPress={() => Alert.alert('O botão direito foi pressionado')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;