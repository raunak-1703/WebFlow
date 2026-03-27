"use client";

import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  toolbarPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  UndoRedo,
  BoldItalicUnderlineToggles,
  Separator, 
  codeBlockPlugin, 
  codeMirrorPlugin,
  ListsToggle,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
  linkPlugin,
  linkDialogPlugin,
  tablePlugin,
  imagePlugin,
  diffSourcePlugin
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import type { ForwardedRef } from "react";
import { basicDark } from "cm6-theme-basic-dark";
import "./dark-editor.css";
import { useTheme } from "next-themes";

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
  editorRef: ForwardedRef<MDXEditorMethods> | null;
};

export default function Editor({ value, onChange, editorRef }: EditorProps) {
  const { resolvedTheme } = useTheme();
  const themeExtension = resolvedTheme === "dark" ? [basicDark] : [];

  return (
    <MDXEditor
      key={resolvedTheme}
      markdown={value || ""}
      ref={editorRef}
      className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border grid"
      onChange={onChange}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        tablePlugin(),
        imagePlugin(),
        codeBlockPlugin({defaultCodeBlockLanguage:""}),
        codeMirrorPlugin({
            codeBlockLanguages:{
                css:'css',
                txt:'txt',
                sql:'sql',
                html:'html',
                saas:'saas',
                scss:'scss',
                bash:'bash',
                json:'json',
                js:'javascript',
                ts:'typescript',
                "":'unspecified',
                tsx:'Typescript (React)',
                jsx:'Javascript (React)'
            },
            autoLoadLanguageSupport:true,
            codeMirrorExtensions:themeExtension
        }),
        diffSourcePlugin({viewMode:'rich-text', diffMarkdown:""}),
        toolbarPlugin({
          toolbarContents: () => (
            <ConditionalContents
              options={[
                {
                  when: (editor) => editor?.editorType === "codeblock",
                  contents: () => <ChangeCodeMirrorLanguage />,
                },
                {
                  fallback: () => (
                    <>
                      <UndoRedo />
                      <Separator/>

                      <BoldItalicUnderlineToggles/>
                      <Separator/>

                      <ListsToggle/>
                      <Separator/>

                      <CreateLink/>
                      <InsertImage/>
                      <Separator/>

                      <InsertTable/>
                      <InsertThematicBreak/>

                      <InsertCodeBlock/>
                    </>
                  ),
                },
              ]}
            />
          ),
        }),
      ]}
    />
  );
}