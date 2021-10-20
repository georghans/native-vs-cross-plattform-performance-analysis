import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';

const SharedPreferencesView = () => {
  const [jsonData, setJsonData] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <Button title={'START TEST'} />
    </>
  );
};

export default SharedPreferencesView;
