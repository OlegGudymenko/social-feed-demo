import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Feed from './src/screens/Feed';

export default function App() {
  return (
    <>
      <Feed />
      <StatusBar style="auto" />
    </>
  );
}

