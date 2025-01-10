import React, { ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <div>
      {children}
    </div>
  );
};

export default CustomLayout;