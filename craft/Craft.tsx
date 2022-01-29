import React from 'react';
import {Text, View} from 'react-native';
import {Editor, Frame, UserComponent} from '@craftjs/core';
import content from './content.json';

export const CraftView = () => {
  return (
    <Editor enabled={false} resolver={{TextComponent, ContainerComponent}}>
      <Frame data={content} />
    </Editor>
  );
};

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
