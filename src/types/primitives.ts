import {
  identifier,
  numericLiteral,
  stringLiteral,
  booleanLiteral
} from "@babel/types";

export function ID(name: string) {
  return identifier(name);
}

export function NUMBER(value: number) {
  return numericLiteral(value);
}

export function STRING(value: string) {
  return stringLiteral(value);
}

export function BOOLEAN(value: boolean){
  return booleanLiteral(value);
}
