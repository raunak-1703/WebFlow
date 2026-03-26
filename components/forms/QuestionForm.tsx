"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });
  const handleCreateQuestion = () => {};
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
              {...renderField}
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

            <Input
              className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
              {...renderField}
              type="text"
              aria-invalid={fieldState.invalid}
              id="content"
              {...renderField}
            />

            {fieldState.error && (
              <FieldError className="text-red-500">
                {fieldState.error.message}
              </FieldError>
            )}

            <FieldDescription className="body-regular mt-2.5">
              {" "}
              Introduce the problem and expand on what you've put on the title
            </FieldDescription>
          </Field>
        )}
      />

      <Controller
        control={form.control}
        name="title"
        render={({ field: renderField, fieldState }) => (
          <Field
            className="flex w-full flex-col gap-3 "
            data-invalid={fieldState.invalid ? "" : undefined}
          >
            <FieldLabel
              className="paragraph-semibold text-dark400_light800"
              htmlFor="title"
            >
              Tags<span className="text-primary-500">*</span>
            </FieldLabel>

            <div>
              <Input
                className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
                {...renderField}
                type="text"
                aria-invalid={fieldState.invalid}
                id="title"
                {...renderField}
                placeholder="Add tags..."
              />
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
