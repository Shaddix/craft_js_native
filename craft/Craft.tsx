import React from 'react';
import {Editor, Frame} from '@craftjs/core';
import content from './content.json';
import {TextComponent} from './components/TextComponent';
import {ContainerComponent} from './components/ContainerComponent';

export const CraftView = () => {
  return (
    <Editor enabled={false} resolver={{TextComponent, ContainerComponent}}>
      <Frame data={content} />
    </Editor>
  );
};
