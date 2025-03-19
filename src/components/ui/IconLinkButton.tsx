import { IconLinkButtonProps } from "@/types";
import { Icon } from "@iconify/react";
import React from "react";

const IconLinkButton: React.FC<IconLinkButtonProps> = ({ url, icon }) => {
  return (
    <a
      className="flex items-center gap-2 active:scale-95 hover:text-gray-300 hover:transition-colors hover:duration-200"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={icon} width="32" height="32" />
    </a>
  );
};

export default IconLinkButton;
