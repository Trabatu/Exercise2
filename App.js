import React, { useState } from 'react';
/*import type {Node} from 'react';*/
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App/*: () => Node */ = () => {

  return (

    <View style={styles.columnA}>
      <View style={styles.first}>
        <Text style={styles.text}>1</Text>
      </View>

      <View style={styles.rowA}>
        <View style={styles.second}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.third}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.fourth}>
            <Text style={styles.text}>4</Text>
          </View>
        </View>
      </View>
      <View style={styles.rowB}>
        <View style={styles.fifth}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.sixth}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.seventh}>
            <Text style={styles.text}>7</Text>
            </View>
      </View>
      <View style={styles.eighth}>
        <Text style={styles.text}>8</Text>
      </View>
    </View>



  );
};

const styles = StyleSheet.create({
  
  column: {
    flexDirection: 'column',
    width: '100%',
  },
  columnA: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
   },
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000',
    
  },
  first: {
    height: '40%',
    width: '100%',
    backgroundColor: '#FFFF00',
  },
  second: {
    width: '40%',
    backgroundColor: '#ADD8E6',
  },
  third: {
    height: '50%',
    width: '60%',
    backgroundColor: '#90EE90',
  },
  fourth: {
    height: '50%',
    width: '60%',
    backgroundColor: '#D3D3D3'
  },
  fifth: {
    width: '20%',
    backgroundColor: '#FBBF77',
  },
  sixth: {
    width: '60%',
    backgroundColor: '#90EE90',
  },
  seventh: {
    width: '20%',
    backgroundColor: '#D3D3D3',
  },
  eighth: {
    height: '10%',
    width: '100%',
    backgroundColor: '#808080',
  },
  rowA: {
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    
  },
  rowB: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
  },
  column: {
    flexDirection: 'column',
    width: '100%',
    
  },
});

export default App;
