import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Modal, Portal, List } from 'react-native-paper';

const CustomSelectBox: React.FC<{ label: string; options: string[]; selectedValue: string; onSelect: (value: string) => void }> = ({ label, options, selectedValue, onSelect }) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    closeModal();
  };

  return (
    <View>
      <TouchableOpacity onPress={openModal}>
        <TextInput
          label={label}
          value={selectedValue}
          editable={false} // Prevent direct editing
          pointerEvents="none" // Disable touch events
          style={styles.input}
          right={<TextInput.Icon name="menu-down" />} // Add a dropdown icon
        />
      </TouchableOpacity>
      <Portal>
        <Modal visible={visible} onDismiss={closeModal} contentContainerStyle={styles.modal}>
          <List.Section>
            {options.map((option, index) => (
              <List.Item key={index} title={option} onPress={() => handleSelect(option)} />
            ))}
          </List.Section>
        </Modal>
      </Portal>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    marginBottom: 25,
    width: '100%',
    backgroundColor: '#cce6ff',
    textAlign: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
  },
});

export default CustomSelectBox;
