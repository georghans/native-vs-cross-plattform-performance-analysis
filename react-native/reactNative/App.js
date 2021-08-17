import React, {useEffect, useState} from 'react';
import now from 'performance-now';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [todos, setTodos] = useState([]);
  const N = 10000;
  const [loading, setLoading] = useState(true);
  const [primes, setPrimes] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const clearState = () => {
    setPrimes([]);
    setTime(0);
  };

  const isPrime = n => {
    // Corner case
    if (n <= 1) {
      return false;
    }
    // Check from 2 to n-1
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const calcNPrimes = n => {
    let j = 0;
    let res = [];
    let t0 = now();
    for (let i = 0; i < n; i++) {
      let foundPrime = false;
      while (!foundPrime) {
        j++;
        if (isPrime(j)) {
          res.push(j);
          foundPrime = true;
        }
      }
    }
    setTime(now() - t0);
    setPrimes(res);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <View style={styles.container}>
        <FlatList
          data={todos}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        />
      </View> */}
      <Button onPress={() => calcNPrimes(N)} title={'START'} />
      {/* <Button onPress={() => clearState()} title={'Clear'} /> */}
      <ScrollView>
        {time ? (
          <>
            <Text style={styles.sectionTitle}>{`Calculated ${N} Primes in ${
              Math.round((time + Number.EPSILON) * 100) / 100
            } milliseconds`}</Text>
            <Text style={styles.sectionContainer}>{`${primes}`}</Text>
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  Button: {
    display: 'flex',
  },
});

export default App;
