import {
  objectExpression,
  objectProperty,
  objectMethod,
  blockStatement,
  spreadElement,
  memberExpression
} from "@babel/types";

import {
  ObjectProperty,
  ObjectMethod,
  SpreadElement,
  Identifier,
  Expression,
  PatternLike,
  Pattern,
  RestElement,
  Statement
} from "@babel/types";

export interface ObjectPropertyProps {
  key: any;
  value: Expression | PatternLike;
  computed?: boolean;
  shorthand?: boolean;
}

export interface ObjectMethodProps {
  kind?: "method" | "get" | "set" | undefined;
  key: any;
  params?: Array<Identifier | Pattern | RestElement>;
  body?: Array<Statement>;
  computed?: boolean;
}

export interface MemberProps {
  object: Expression;
  property: any;
  computed?: boolean;
  optional?: true | false | null;
}

export function OBJECT(properties: Array<ObjectMethod | ObjectProperty | SpreadElement>) {
  return objectExpression(properties);
}

export function OBJECT_PROP(props: ObjectPropertyProps) {
  return objectProperty(
    props.key,
    props.value,
    props.computed,
    props.shorthand
  );
}

export function OBJECT_METHOD(props: ObjectMethodProps) {
  return objectMethod(
    props.kind || "method",
    props.key,
    props.params || [],
    blockStatement(props.body || []),
    props.computed
  );
}

export const SPREAD_OBJECT = spreadElement;

export function MEMBER(props: MemberProps) {
  return memberExpression(
    props.object,
    props.property,
    props.computed,
    props.optional
  );
}
