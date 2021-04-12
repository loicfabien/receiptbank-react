import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ReceiptListScreen from "./screens/ReceiptListScreen";
import Store from "./store/configStore";
import { Provider } from "react-redux";
import AddFolderModal from "./components/AddFolderModal";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: "Accueil"}}/>
            <Stack.Screen name="ReceiptList" component={ReceiptListScreen} options={{title: "Liste de factures"}}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Detail"}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
