import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const cache = new Map<string, any>();

export async function compileMDX(source: string) {
  if (cache.has(source)) {
    return cache.get(source);
  }

  const compiled = await compile(source, {
    outputFormat: "function-body",
  });

  const Content = new Function("runtime", `${compiled}`)(runtime);
  cache.set(source, Content);

  return Content;
}
