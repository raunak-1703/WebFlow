import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";
const hotquestions = [
  {
    _id: "1",
    title: "What is HMR (Hot Module Replacement)?",
  },
  {
    _id: "2",
    title: "How does React hydration actually work?",
  },
  {
    _id: "3",
    title: "What is the difference between Client and Server Components?",
  },
  {
    _id: "4",
    title: "Why should you use Zod for schema validation?",
  },
  {
    _id: "5",
    title: "What is the purpose of a Controller in React Hook Form?",
  },
];

const popularTags = [
  {_id:"1",name:"react",questions:'100'},
  {_id:"2",name:"nextjs",questions:'130'},
  {_id:"3",name:"typescript",questions:'140'},
  {_id:"4",name:"javascript",questions:'150'},
  {_id:"5",name:"react-query",questions:'105'}
]
const RightSidebar = () => {

  
  return (
    <section className="pt-24 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-87.5 flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-7.5">
          {hotquestions.map((question) => (
            <Link
              href={ROUTES.PROFILE(question._id)}
              key={question._id}
              className="cursor-pointer flex items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {popularTags.map(({_id,name,questions})=>(
                <TagCard key={_id} name={name} questions={questions} showCount _id={_id} compact/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
