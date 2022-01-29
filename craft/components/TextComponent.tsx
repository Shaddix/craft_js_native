import {UserComponent} from '@craftjs/core';
import {Text, View} from 'react-native';
import React from 'react';

export type TextComponentProps = {
  text: string;
  backgroundColor: string;
};
export const TextComponent: UserComponent<TextComponentProps> = ({
  backgroundColor,
  text,
}) => {
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: backgroundColor,
      }}>
      <Text>{text}</Text>
    </View>
  );
};
