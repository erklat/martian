import logo from "/public/assets/logo.svg";
import user from "/public/assets/user.svg";
import menu from "/public/assets/menu.svg";
import article from "/public/assets/article.svg";
import x from "/public/assets/x.svg";

export type TIcons = {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const svgManifest: TIcons = {
  logo,
  user,
  menu,
  article,
  x,
};

export default svgManifest;
