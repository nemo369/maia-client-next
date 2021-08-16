import React from 'react';

export const Switch = (props) => {
  const { test, children } = props;
  // filter out only children with a matching prop
  const isTestPass = (value, tester) => {
    if (Array.isArray(value)) {
      return value.includes(tester);
    }
    return value === tester;
  };
  return (
    (children.find && children.find((child) => isTestPass(child.props.value, test))) || <div />
  );
};
export const Case = ({ children }) => children;
// I don't want do add container around my cases ! };
