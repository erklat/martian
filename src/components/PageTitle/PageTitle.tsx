import withLogger from "@/components/WithNameLogging/WithNameLogging";

const PageTitle = ({
  title,
  actions,
}: {
  title: string;
  actions?: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="title container mx-auto">
      <div className="flex gap-4 md:justify-between py-10 justify-center flex-wrap md:flex-nowrap">
        <h2 className="text-3xl">
          <strong>{title}</strong>
        </h2>
        {actions && <div>{actions}</div>}
      </div>
    </div>
  );
};

export default withLogger(PageTitle);
