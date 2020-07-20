// import React from "react";
// import { Text, View } from "react-native";

// export default function YourApp() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Hello World</Text>
//     </View>
//   );
// }

//CLASS COMPONENT EXAMPLE
//

// import React from "react";
// import { View, Text, Image, ScrollView, TextInput } from "react-native";

// export default function App() {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
//           style={{ width: 200, height: 200 }}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "grey",
//           borderWidth: 1,
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// }

// import React from "react";
// import { Text } from "react-native";

// export default function Cat() {
//   const name = "Maru";
//   return <Text>Hello I am {name}!</Text>;
// }

// import React from "react";
// import { Text } from "react-native";

// export default function Cat() {
//   function getFullName(firstName, secondName, thirdName) {
//     return firstName + " " + secondName + " " + thirdName;
//   }

//   return <Text>Hello I am {getFullName("Rum", "Tum", "Tugger")}</Text>;
// }

// import React from "react";
// import { Text, TextInput, View } from "react-native";

// export default function Cat() {
//   return (
//     <View>
//       <Text>Hello I am...</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "gray",
//           borderWidth: 1,
//         }}
//         defaultValue="Name me!"
//       />
//     </View>
//   );
// }

// import React from "react";
// import { Text, TextInput, View } from "react-native";

// function Cat() {
//   return (
//     <View>
//       <Text>I am a also cat!</Text>
//     </View>
//   );
// }

// export default function Cafe() {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat />
//       <Cat />
//       <Cat />
//     </View>
//   );
// }

// import React from "react";
// import { Text, View } from "react-native";

// function Cat(props) {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// }

// export default function Cafe() {
//   return (
//     <View>
//       <Cat name="Maru" />
//       <Cat name="Jellybean" />
//       <Cat name="Spot" />
//     </View>
//   );
// }

// import React from "react";
// import { Text, View, Image } from "react-native";

// export default function CatApp() {
//   return (
//     <View>
//       <Image
//         source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
//         style={{ width: 200, height: 200 }}
//       />
//       <Text>Hello I am your cat</Text>
//     </View>
//   );
// }

// import React, { useState } from "react";
// import { Button, Text, View } from "react-native";

// function Cat(props) {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
//       </Text>
//       <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? "Pour me some milk, please " : "Thank you!"}
//       />
//     </View>
//   );
// }

// export default function Cafe() {
//   return (
//     <>
//       <Cat name="Ravi" />
//       <Cat name="Spot" />
//     </>
//   );
// }

// import React, { Component, useState } from "react";
// import { Text, TextInput, View } from "react-native";

// export default function PizzaTranslator() {
//   const [text, setText] = useState("");
//   return (
//     <View style={{ padding: 10 }}>
//       <TextInput
//         style={{ height: 40 }}
//         placeholder="Type here to translate!"
//         onChangeText={(text) => setText(text)}
//         defaultValue={text}
//       />
//       <Text style={{ padding: 10, fontSize: 42 }}>
//         {text
//           .split(" ")
//           .map((word) => word && "pizza")
//           .join(" ")}
//       </Text>
//     </View>
//   );
// }

// import React from "react";
// import { Image, ScrollView, Text } from "react-native";

// const logo = {
//   uri: "https://reactnative.dev/img/tiny_logo.png",
//   width: 64,
//   height: 64,
// };

// export default App = () => (
//   <ScrollView>
//     <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>If you like</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Scrolling down</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>What's the best</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Framework around</Text>
//   </ScrollView>
// );

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//   },
//   bigBlue: {
//     color: "blue",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   red: {
//     color: "red",
//   },
// });

// export default LotsOfStyles = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.red}>just red</Text>
//       <Text style={styles.bigBlue}>just BigBlue</Text>
//       <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//       <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//     </View>
//   );
// };

// import React from "react";
// import { View } from "react-native";

// export default function FixedDimensionsBasics() {
//   return (
//     <View>
//       <View style={{ width: 50, height: 50, backgroundColor: "powerblue" }} />
//       <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
//       <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} />
//     </View>
//   );
// }

// import React, { Component } from "react";
// import { View } from "react-native";

// export default function FlexDimensionsBasics() {
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1, backgroundColor: "powderblue" }} />
//       <View style={{ flex: 2, backgroundColor: "skyblue" }} />
//       <View style={{ flex: 3, backgroundColor: "steelblue" }} />
//     </View>
//   );
// }

// import React from "react";
// import { View } from "react-native";

// export default FlexDirectionBasics = () => {
//   return (
//     <View style={{ flex: 1, flexDirection: "row" }}>
//       <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
//       <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
//       <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
//     </View>
//   );
// };

// import React from "react";
// import { View } from "react-native";

// export default AlignItemsBasics = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "stretch",
//       }}
//     >
//       <View style={{ width: 50, height: 50, backgroundColor: "powderblue" }} />
//       <View style={{ height: 50, backgroundColor: "skyblue" }} />
//       <View style={{ height: 100, backgroundColor: "steelblue" }} />
//     </View>
//   );
// };

// import React, { Component } from "react";
// import { Button, StyleSheet, View } from "react-native";

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert("You tapped the button!");
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button onPress={this._onPressButton} title="Press Me" />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button onPress={this._onPressButton} title="OK!" color="#841584" />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     margin: 20,
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// });

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default class Touchables extends Component {
  _onPressButton() {
    alert("You tapped the button!");
  }

  _onLongPressButton() {
    alert("You long-pressed the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={
            Platform.OS === "android"
              ? TouchableNativeFeedback.SelectableBackground()
              : ""
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              TouchableNativeFeedback{" "}
              {Platform.OS !== "android" ? "(Android only)" : ""}{" "}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});
