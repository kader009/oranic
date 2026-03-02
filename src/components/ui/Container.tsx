import { ContainerProps } from '@/src/types/containerProps';

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1360px] mx-auto w-full px-4 md:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
