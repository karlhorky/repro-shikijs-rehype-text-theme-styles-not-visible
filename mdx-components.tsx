import { MDXComponents } from 'mdx/types';

const components = {} satisfies MDXComponents;

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
