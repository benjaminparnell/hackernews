import * as React from 'react';

const Visibility = ({
  visible,
  children
}: {
  visible: boolean;
  children: React.ReactNode;
}) => {
  if (visible) {
    return <div>{children}</div>;
  } else {
    return <div hidden={true}>{children}</div>;
  }
};

export default Visibility;
