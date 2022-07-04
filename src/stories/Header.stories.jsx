import React from 'react';

import Header from "../Components/Header/Header.tsx"


export default {
  title: 'App/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header/>;

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
