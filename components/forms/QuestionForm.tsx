"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { type MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import TagCard from "../cards/TagCard";
import z from "zod";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const editorRef = useRef<MDXEditorMethods>(null);
  const Editor = dynamic(() => import("@/components/editor"), {
    ssr: false,
  });

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] },
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim();

      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("tags", [...field.value, tagInput]);
        e.currentTarget.value = "";
        form.clearErrors("tags");
      } else if (tagInput.length > 15) {
        form.setError("tags", {
          type: "manual",
          message: "Tag should be less than 15 characters",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already added",
        });
      }
    }
  };

  const handleTagRemove = (tag:string, renderField:{value:string[]}) => {
    const newTags = renderField.value.filter((t)=> t!==tag)
    form.setValue("tags",newTags)
    if(newTags.length===0){
      form.setError("tags",{
        type:'manual',
        message:'Atleast one tag is required'
      })
    }
  };

  const handleCreateQuestion = (data:z.infer<typeof AskQuestionSchema>) => {
    console.log(data)
  };
  return (
    <form
      className="flex w-full flex-col gap-10"
      onSubmit={form.handleSubmit(handleCreateQuestion)}
    >
      <Controller
        control={form.control}
        name="title"
        render={({ field: renderField, fieldState }) => (
          <Field
            className="flex w-full flex-col"
            data-invalid={fieldState.invalid ? "" : undefined}
          >
            <FieldLabel
              className="paragraph-semibold text-dark400_light800"
              htmlFor="title"
            >
              Question Title <span className="text-primary-500">*</span>
            </FieldLabel>

            <Input
              className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
              {...renderField}
              type="text"
              aria-invalid={fieldState.invalid}
              id="title"
            />

            {fieldState.error && (
              <FieldError className="text-red-500">
                {fieldState.error.message}
              </FieldError>
            )}

            <FieldDescription className="body-regular mt-2.5">
              {" "}
              Be specific and imagine you are asking a question to another
              person
            </FieldDescription>
          </Field>
        )}
      />

      <Controller
        control={form.control}
        name="content"
        render={({ field: renderField, fieldState }) => (
          <Field
            className="flex w-full flex-col"
            data-invalid={fieldState.invalid ? "" : undefined}
          >
            <FieldLabel
              className="paragraph-semibold text-dark400_light800"
              htmlFor="content"
            >
              Detailed explanation of your problem
              <span className="text-primary-500">*</span>
            </FieldLabel>

            {/* <Input
              className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
              {...renderField}
              type="text"
              aria-invalid={fieldState.invalid}
              id="content"
              {...renderField}
            /> */}
            <Editor
              editorRef={editorRef}
              value={renderField.value}
              onChange={renderField.onChange}
            />

            {fieldState.error && (
              <FieldError className="text-red-500">
                {fieldState.error.message}
              </FieldError>
            )}

            <FieldDescription className="body-regular mt-2.5">
              {" "}
              Introduce the problem and expand on what you&apos;ve put on the
              title
            </FieldDescription>
          </Field>
        )}
      />

      <Controller
        control={form.control}
        name="tags"
        render={({ field: renderField, fieldState }) => (
          <Field
            className="flex w-full flex-col gap-3 "
            data-invalid={fieldState.invalid ? "" : undefined}
          >
            <FieldLabel
              className="paragraph-semibold text-dark400_light800"
              htmlFor="tags"
            >
              Tags<span className="text-primary-500">*</span>
            </FieldLabel>

            <div>
              <Input
                className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
                aria-invalid={fieldState.invalid}
                id="tags"
                placeholder="Add tags..."
                onKeyDown={(e) => handleInputKeyDown(e, renderField)}
              />
              {renderField.value.length > 0 && (
                <div className="flex-start mt-2.5 flex-wrap gap-2.5">
                  {renderField.value.map((tag: string) => (
                    <TagCard
                      key={tag}
                      _id={tag}
                      name={tag}
                      compact
                      remove
                      isButton
                      handleRemove={() => handleTagRemove(tag, renderField)}
                    />
                  ))}
                </div>
              )}
            </div>

            {fieldState.error && (
              <FieldError className="text-red-500">
                {fieldState.error.message}
              </FieldError>
            )}

            <FieldDescription className="body-regular mt-2.5">
              {" "}
              Add upto 3 tags to describe what your question is about. You need
              to press enter to add a Tag
            </FieldDescription>
          </Field>
        )}
      />

      <div className="mt-16 flex justify-end">
        <Button
          type="submit"
          className="primary-gradient text-light-900! w-fit cursor-pointer"
        >
          Ask a Question
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
