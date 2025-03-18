// In the name of ALLAH!
// Mahdi Salehi

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useSizeValues from '../hooks/useSizeValues';
import CustomSelectBox from './CustomSelectBox';

const Table: React.FC = () => {
  const [clothesTypeLabel, setClothesTypeLabel] = useState<string>('پیراهن');
  const measurements = useSizeValues();

  const getClothesType = () => {
    switch (clothesTypeLabel) {
      case 'پیراهن':
        return 'shirt';
      case 'کت':
        return 'coat';
      case 'پالتو':
        return 'overcoat';
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomSelectBox
        label='نوع لباس'
        options={['پیراهن', 'کت', 'پالتو']}
        selectedValue={clothesTypeLabel}
        onSelect={setClothesTypeLabel}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>اندازه‌های فرعی</Text>
        <Text style={styles.header}>فیت بدن</Text>
        <Text style={styles.header}>آزاد</Text>
        <Text style={styles.header}>نرمال</Text>
        <Text style={styles.header}>تنگ</Text>
      </View>
      {measurements.map((measurement: any, index: number) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{measurement.fitLabel}</Text>
          <Text style={styles.cell}>{measurement.getBodyFit()}</Text>
          <Text style={styles.cell}>{measurement.getClothesValue(getClothesType(), 'tight')}</Text>
          <Text style={styles.cell}>{measurement.getClothesValue(getClothesType(), 'normal')}</Text>
          <Text style={styles.cell}>{measurement.getClothesValue(getClothesType(), 'loose')}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5', // Light grey background
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#6200ea', // Primary color for header underline
    paddingBottom: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3, // Shadow for header
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6200ea', // Primary color for header text
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
    elevation: 1, // Shadow for rows
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#333', // Darker text color
    fontSize: 16,
  },
});

export default Table;