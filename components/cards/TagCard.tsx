import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";

interface Props {
  _id: string;
  name: string;
  questions?: string;
  showCount?: boolean;
  compact?: boolean;
}
const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {

    const tagClass = getDeviconClassName(name)
  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light900_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <i className={`${tagClass} text-sm`}></i>
        <span>{name}</span>
      </Badge>

      {showCount?(
        <p className="small-medium text-dark500_light700">{questions}</p>
      ):(<></>)}
    </Link>
  );
};

export default TagCard;
