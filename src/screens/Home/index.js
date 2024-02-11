import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import Questions from "./Questions";
import AddButton from "../../components/AddButton";
import AddNewModal from "./Questions/AddNewModal";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton onPress={() => setModalVisible((prev) => !prev)} />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Questions />

      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <AddNewModal closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default Home;
