import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return <div className='h-full'>AppLayout {children}</div>;
}

export default AppLayout;