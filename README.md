TS Terms

1. Strongly Typed Languages- you must define/specify data types

- In TS, we specify the types of data we are using. This helps us write code that is self documenting and allows us to enforce certain aspects of our code

2. Loosely Typed Languages / Weakly Typed - do not require specification of types (JavaScript)

3. Statically Typed - types are checked at compile time (TypeScript)

4. Dynamically Typed - types are checked at run time (JavaScript)

- Strongly and Loosely Typed relates to Static/Dynamic, but THEY ARE NOT THE SAME!
- A language that is strongly typed can be either statically OR dynamically typed

Lesson 1 - Setup

1. How to set up tsconfig
   - Don't manually add the file, use the tsc CLI (npx tsc --init), unless of course its been created for you (like using NextJS)
   - specify a rootDir for src files (ts files that will be compiled to JS)
   - specify an outDir for all emitted (compiled) files (build/js)
   - noEmitOnError / include
2. How to add TS to a project
   - npm i typescript --save-dev (do not necessarily need to global install)
   - This allows us to then run the TS compiler using 'npx tsc'
3. Using the TS compiler
   - npx tsc
   - npx tsc --all (shows all available commands)
   - npx tsc -w (watch mode)

Lesson 2 - Basic Types

1. Type inference (difference between implicit versus explicit)
2. Basic Types
   - string, number, boolean, any, union
3. Type annotation for functions
4. RegExp built in type (RegExp)

Lesson 3- Arrays and Objects (and Tuples)

1. Objects, arrays and functions are type object (anything that is a reference type)
2. We can use both type and interfaces to define objects (interfaces seem to be preferred in general and also seem to be preferred specifically for creating classes)
3. Tuples are arrays with a fixed size and are immutable
4. Enums (object with enumerated properties) are not a type-level addition, but are an extra feature made available by TS

Lesson 4- Functions

1. Type Aliases and Literal Types
   a. Cant use interfaces with aliases
2. Annotating params and return types
3. Function specific types (void, never)
4. Optional params, Default params, Rest/Spread Params
5. Using type guards and creating custom type guards