import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";
import Image from "next/image";

interface Props {
  _id: string;
  name: string;
  questions?: string;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}
const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  handleRemove,
  remove,
  isButton,
}: Props) => {
  const tagClass = getDeviconClassName(name);
  const content = (
    <>
      <Badge className="subtle-medium background-light900_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row gap-2">
        <div className="flex-center space-x-2">
          <i className={`${tagClass} text-sm`}></i>
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close Icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>

      {showCount ? (
        <p className="small-medium text-dark500_light700">{questions}</p>
      ) : (
        <></>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button className="flex justify-between gap-2" onClick={(e)=>e.preventDefault()}>{content}</button>
    ) : (
      <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
        {content}
      </Link>
    );
  }
};

export default TagCard;
