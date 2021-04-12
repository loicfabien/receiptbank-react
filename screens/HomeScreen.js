import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { nameError } from "../helpers/utils";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      modalVisible: false,
    };
  }

  render() {
    const { folders } = this.props.FoldersReducer;
    const { modalVisible } = this.state;
    
    return (
      <View>
        <View style={styles.container}>
          {folders.map((folder) => (
            <View style={styles.item}>
              <TouchableOpacity
                key={folder.name}
                onPress={this.onFolderPressed}
              >
                <Text style={styles.text}>{folder.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.separator}></View>
        {/* <View>
          <Button title="Ajouter un dossier" onPress={() => this.openModal()}></Button>
        </View> */}
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Ajouter un dossier</Text>
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Ajouter un dossier</Text>
              <TextInput
                placeholder="Nom"
                value={this.state.name}
                onChangeText={(text) => this.setState({ name: text })}
                returnKeyType="next"
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.addFolder()}
              >
                <Text style={styles.textStyle}>Ajouter</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  alert(message) {
    Alert.alert(
      "Erreur",
      message,
      [
        {
          text: "OK",
          onPress: () => {
            console.log("ok");
          },
        },
      ],
      { cancelable: false }
    );
  }

  onFolderPressed() {
    console.log("click");
    //this.props.navigation.navigate("ReceiptList", { id: idFolder });
  }

  addFolder() {
    if (!nameError(this.state.name)) {
      const action = {
        type: "ADD_FOLDER",
        value: {
          name: this.state.name,
        }
      };
      console.log(action)
      this.props.dispatch(action);
    } else {
      this.alert("Erreur");
    }
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  item: {
    width: "50%",
    backgroundColor: "#fafafa",
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(HomeScreen);
