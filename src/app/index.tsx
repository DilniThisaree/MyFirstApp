import { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [points, setPoints] = useState(0);
  const [newPoints, setNewPoints] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const addPoints = () => {
    const amount = parseInt(newPoints);

    if (!isNaN(amount) && amount > 0) {
      setPoints(points + amount);
      setNewPoints('');
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>

        {/* Female Avatar */}
        <View style={styles.profileCircle}>
          <Text style={styles.profileIcon}>👩🏻</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Name */}
        <View style={styles.detailSection}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Dilni Thisaree</Text>
        </View>

        {/* Email */}
        <View style={styles.detailSection}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.row}>
            <Text style={styles.icon}>✉</Text>
            <Text style={styles.value}>
              thisaree3@gmail.com
            </Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.detailSection}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.row}>
            <Text style={styles.icon}>★</Text>
            <Text style={styles.value}>{points}</Text>
          </View>
        </View>

      </View>

      {/* Plus Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

      {/* Add Points Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>

          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>
              Add Points
            </Text>

            <Text style={styles.modalSubtitle}>
              Enter the number of points you want to add
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter points"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={newPoints}
              onChangeText={setNewPoints}
            />

            <View style={styles.modalButtons}>

              {/* Cancel */}
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setNewPoints('');
                  setModalVisible(false);
                }}
              >
                <Text style={styles.cancelText}>
                  CANCEL
                </Text>
              </TouchableOpacity>

              {/* Add */}
              <TouchableOpacity
                style={styles.addPointsButton}
                onPress={addPoints}
              >
                <Text style={styles.addPointsText}>
                  ADD
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  /* Header */

  header: {
    height: 58,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  /* Profile */

  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  profileCircle: {
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  profileIcon: {
    fontSize: 55,
  },

  divider: {
    height: 1.5,
    backgroundColor: '#222222',
    width: '100%',
    marginBottom: 14,
  },

  detailSection: {
    marginBottom: 17,
  },

  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 7,
  },

  value: {
    fontSize: 15,
    color: '#333333',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 17,
    color: '#000000',
    marginRight: 9,
  },

  /* Plus Button */

  addButton: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 6,
  },

  plus: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '300',
  },

  /* Modal */

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 8,
  },

  modalSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#111111',
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },

  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },

  cancelText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555555',
  },

  addPointsButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 7,
  },

  addPointsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },

});