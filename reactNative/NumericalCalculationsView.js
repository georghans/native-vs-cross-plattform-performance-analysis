import React, { useEffect, useState } from 'react';
import now from 'performance-now';

import { StyleSheet, Text, Button, ScrollView, ActivityIndicator } from 'react-native';

const NumericalCalculationsView = () => {
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
    <>
      {/* <View style={styles.container}>
        <FlatList
          data={todos}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        />
      </View> */}
      <ActivityIndicator size="large" />
      <Button onPress={() => calcNPrimes(N)} title={'START TEST'} />
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
    </>
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

export default NumericalCalculationsView;
