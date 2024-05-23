import withLogger from "@/components/WithNameLogging/WithNameLogging";

const LayoutContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div
      className={`
        container
        m-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
    `}
    >
      {children}
    </div>
  );
};

export default withLogger(LayoutContainer);
