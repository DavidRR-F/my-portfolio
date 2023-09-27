import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={`flex justify-between items-center w-screen p-10 ${className} mobile:p-0`}
    >
      {children}
    </section>
  );
};

export default Section;
