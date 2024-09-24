import { StyleSheet } from "react-native";

  const estilo = StyleSheet.create({
    boxDados: {
      padding: 30,

      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "space-between"
    },

    boxCard: {
      backgroundColor: '#ddf2ed',
      minWidth: 150,

      alignItems: "center",

      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,

      borderWidth: 1,
      borderColor: '#e6e6e6',
      borderRadius: 5,
    },

    boxCardIcone: {
      width: 30,
      height: 30
    },

    boxCardTexto: {
      color: '#00a79d'
    },

    boxCardValor: {
      color: '#00a79d',
      fontSize: 20,
      fontWeight: "700"
    },
  });

  export default estilo;