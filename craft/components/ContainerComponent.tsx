import {UserComponent} from '@craftjs/core';
import {View} from 'react-native';
import React from 'react';

export type ContainerComponentProps = {
  backgroundColor: string;
};
export const ContainerComponent: UserComponent<
  ContainerComponentProps
> = props => {
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: props.backgroundColor,
      }}>
      {props.children}
    </View>
  );
};
