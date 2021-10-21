import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text } from 'react-native';
import generatedData from './generated.json';
import DefaultPreference from 'react-native-default-preference';
import now from 'performance-now';

const SharedPreferencesView = () => {
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(false);

  const startTest = () => {
    setLoading(true);
    let t0 = now();
    generatedData.map(async e => {
      await DefaultPreference.set(e.key, e.value);
    });
    setTime(now() - t0);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Button title={'START TEST'} onPress={() => startTest()} />
          {time !== 0 ? (
            <>
              <Button
                title={'CLEAR MEMORY'}
                onPress={async () => {
                  setLoading(true);
                  setTime(0);
                  await DefaultPreference.clearAll();
                  setLoading(false);
                }}
              />

              <Text>{`Stored ${generatedData.length} Key-Value Pairs in ${time} milliseconds`}</Text>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default SharedPreferencesView;
