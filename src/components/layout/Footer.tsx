import { IconLinkButon } from "@/components";
import { IconLinkButtonIcons } from "@/types";

const Footer: React.FC = () => {
  return (
    <>
      <IconLinkButon
        url="https://www.linkedin.com/in/thomas-moreton-942488141/"
        icon={IconLinkButtonIcons.LINKEDIN}
      />
      <IconLinkButon
        url="https://github.com/TMoretonDev"
        icon={IconLinkButtonIcons.GITHUB}
      />
    </>
  );
};

export default Footer;
