import Link from "next/link";
import withLogger from "@/components/WithNameLogging/WithNameLogging";

const navSchema = [{ label: "Posts", href: "/app" }];

const Navigation = () => {
  return (
    <div>
      <ul
        className={`
            p-0
            list-none
        `}
      >
        {navSchema.map((item) => (
          <li key={`link_${item.href}`}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withLogger(Navigation);
