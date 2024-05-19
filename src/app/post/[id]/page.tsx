import Button from "@/components/Button/Button";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      /post/[id]
      {/* <Button /> */}
    </>
  );
};

export default Page;
