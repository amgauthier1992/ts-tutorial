## TS Terms

1. Strongly Typed Languages- you must define/specify data types

- In TS, we specify the types of data we are using. This helps us write code that is self documenting and allows us to enforce certain aspects of our code

2. Loosely Typed Languages / Weakly Typed - do not require specification of types (JavaScript)

3. Statically Typed - types are checked at compile time (TypeScript)

4. Dynamically Typed - types are checked at run time (JavaScript)

- Strongly and Loosely Typed relates to Static/Dynamic, but THEY ARE NOT THE SAME!
- A language that is strongly typed can be either statically OR dynamically typed

## Lesson 1 - Setup

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

## Lesson 2 - Basic Types

1. Type inference (difference between implicit versus explicit)
2. Basic Types
   - string, number, boolean, any, union (avoid any type whenever possible)
3. Type annotation for functions
4. RegExp built in type (RegExp)

## Lesson 3- Arrays and Objects (and Tuples)

1. Objects, arrays and functions are type object (anything that is a reference type)
2. We can use both type and interfaces to define objects (interfaces seem to be preferred in general and also seem to be preferred specifically for creating classes)
3. Tuples are arrays with a fixed size and are immutable
4. Enums (object with enumerated properties) are not a type-level addition, but are an extra feature made available by TS

## Lesson 4- Functions

1. Type Aliases and Literal Types
   - Cant use interfaces with aliases
2. Annotating params and return types
3. Function specific types (void, never)
4. Optional params, Default params, Rest/Spread Params
5. Using type guards and creating custom type guards

## Lesson 5- Type Casting/Type Assertions

- An Assertion is simply telling the TS compiler you know more about the type because you have more detail about it than what TS compiler can infer or know about.
  - ex. When creating a variable that represents an HTML element i.e. a span, the TS compiler will infer that the variable is of type HTMLElement or null. We can assert that the variable is of type HTMLSpanElement.
- Sometimes we will have information about the type of a value that TS can't or doesn't know about. This happens most often when we're working with the DOM/web page documents.

1. As keyword
2. <> syntax
3. `non null` assertion (!)

## Lesson 6- Classes

1. Instance members- properties of a class that show up when it's instantiated
2. Creating classes
   - Using access/visibility modifiers
     - public (default)
     - private - member is visible within the class itself
     - protected - member is visible only to the class and its derived classes.
   - Default values
3. Extending classes
   - What to include in constructor
   - super()
4. Implementing classes with interfaces
5. Static members- properties of a class that are visible on the class itself rather than on it's instances
6. Getter/Setter
   - get keyword
   - set keyword
     - setter cannot return a value

Bonus Tips-
Shift + alt and down arrow to copy lines
Ctrl + D - Select current word your cursor is located at
Ctrl + Shift + I - Open dev tools

## Lesson 7- Index Signatures & keyof Assertions

1. What are Index Signatures?
   - Allows us to define a type for objects that have properties with dynamic keys (i.e. keys not known at compile time). They provide a way to declare the types of such properties.
2. What is a keyof Assertion?
   - Uses the keyof keyword to extract keys from an object type. It's a way to obtain a union type representing all possible keys of an object type. This can be particularly useful in scenarios where you want to enforce type safety when accessing properties of an object.
3. Record<> utility type

## Lesson 8- Generics

1. What are they?
   - Sometimes we simply don't know what types will be passed into a function, interface, type alias, class etc.
   - Generics allow us to provide a placeholder (a sort of type variable)
2. Use of `<T>`
   - function params and use of extends keyword
   - interfaces
   - classes

Bonus Tips-
Use of !! operator

## Lesson 9- Utility Types

1. Partial- create a new type with all the properties of type T, but with all properties set to optional
2. Required- create a new type with all the properties of type T, and with all properties set to required
3. Readonly- ensures that we can't overwrite any properties of type T
4. Record- construct a type with a set of properties K of type T
5. Pick- create a new type by selecting properties from an existing type T
6. Omit- create a new type by omitting specified properties from an existing type T
7. Exclude- exclude from T those types that are assignable to U
8. Extract- extract from T those types that are assignable to U
9. Non-nullable- exclude null and undefined from T
10. ReturnType- derive the return type of a function type
11. Parameters- derive the return type of function parameters
12. Awaited- helps us with the ReturnType of a Promise

## Lesson 10- Vite.js and TypeScript
