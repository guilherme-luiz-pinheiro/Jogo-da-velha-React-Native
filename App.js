import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [imagem1, setImagem1] = useState(null);
  const [imagem2, setImagem2] = useState(null);
  const [imagem3, setImagem3] = useState(null);
  const [imagem4, setImagem4] = useState(null);
  const [imagem5, setImagem5] = useState(null);
  const [imagem6, setImagem6] = useState(null);
  const [imagem7, setImagem7] = useState(null);
  const [imagem8, setImagem8] = useState(null);
  const [imagem9, setImagem9] = useState(null);
  const [contador, setContador] = useState(1);
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));

  const imagens = {
    O: require('./assets/O.png'),
    X: require('./assets/X.png'),
    L: null,
  };
  function SelecionaImagem(valor) {
    const indice = valor - 1;
    if (tabuleiro[indice] !== null) return; // Impede jogadas em espaços ocupados
    const jogador = contador % 2 === 0 ? 'O' : 'X';
    const imagem = jogador === 'X' ? imagens.X : imagens.O;

    switch (valor) {
      case 1: setImagem1(imagem); break;
      case 2: setImagem2(imagem); break;
      case 3: setImagem3(imagem); break;
      case 4: setImagem4(imagem); break;
      case 5: setImagem5(imagem); break;
      case 6: setImagem6(imagem); break;
      case 7: setImagem7(imagem); break;
      case 8: setImagem8(imagem); break;
      case 9: setImagem9(imagem); break;
      default: Alert.alert('Valor inválido'); return;
    }
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = jogador;
    setTabuleiro(novoTabuleiro);

    if (VerificaVitoria(novoTabuleiro)) {
      setTimeout(() => {
        Alert.alert(
          'Vitória!',
          `Jogador ${jogador} ganhou!\nParabéns! 🎉🎉🎉🎉`
        ); LimpaImagem();
      }, 100);
    } else if (contador == 9) {
      Alert.alert(
        'Empate!',
        `Deu VELHA\n👵👵👵👵`
      ); LimpaImagem();
    }
    else {
      setContador(contador + 1);
    }
  }
  function VerificaVitoria(board) {
    const combinacoes = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of combinacoes) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }
  function LimpaImagem() {
    setTabuleiro(Array(9).fill(null));
    setContador(1);
    const imagem = imagens.L;
    setImagem1(imagem);
    setImagem2(imagem);
    setImagem3(imagem);
    setImagem4(imagem);
    setImagem5(imagem);
    setImagem6(imagem);
    setImagem7(imagem);
    setImagem8(imagem);
    setImagem9(imagem);
  }
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require('./assets/Jogodavelha.png')} // Caminho da sua imagem
          style={styles.imagemJogodaVelha}
        />
        <Text style={styles.titulo}>Jogo da Velha 👵</Text>
      </View>
      <View style={styles.meio}>
        <View style={styles.jogo}>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(1)} style={styles.botao}>
              <Image
                source={imagem1}
                style={styles.imagemBotao}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(2)} style={styles.botao}>
              <Image
                source={imagem2}
                style={styles.imagemBotao}
              />

            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(3)} style={styles.botao}>
              <Image
                source={imagem3}
                style={styles.imagemBotao}
              />

            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.jogo2}>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(4)} style={styles.botao}>
              <Image
                source={imagem4}
                style={styles.imagemBotao}
              />

            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(5)} style={styles.botao}>
              <Image
                source={imagem5}
                style={styles.imagemBotao}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(6)} style={styles.botao}>
              <Image
                source={imagem6}
                style={styles.imagemBotao}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.jogo3}>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(7)} style={styles.botao}>
              <Image
                source={imagem7}
                style={styles.imagemBotao}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(8)} style={styles.botao}>
              <Image
                source={imagem8}
                style={styles.imagemBotao}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => SelecionaImagem(9)} style={styles.botao}>
              <Image
                source={imagem9}
                style={styles.imagemBotao}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity style={styles.button} onPress={() => LimpaImagem()}>
          <Text style={styles.textoBotao}> Limpar </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  titulo: {
    marginTop: 20,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  meio: {
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  jogo: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  }, jogo2: {
    borderBottomWidth: 3,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  }, jogo3: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  imagemJogodaVelha: {
    width: 48,
    height: 48,
  },
  imagemBotao: {
    width: 48,
    height: 48,
    margin: 5,
  },
  botao: {
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    padding: 3,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#FFC107',
    borderRadius: 10,
  },
  button: {
    shadowColor: '#000', // Cor da sombra
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 3.5, // Raio da sombra
    elevation: 5, // Para Android
  },
});
