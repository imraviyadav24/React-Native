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

import React, { Component, useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function PizzaTranslator() {
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(" ")
          .map((word) => word && "pizza")
          .join(" ")}
      </Text>
    </View>
  );
}
