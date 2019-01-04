import {
  identifier,
  numericLiteral,
  stringLiteral,
  booleanLiteral
} from "@babel/types";

export function id(name: string) {
  return identifier(name);
}

export function num(value: number) {
  return numericLiteral(value);
}

export function str(value: string) {
  return stringLiteral(value);
}

export function bool(value: boolean){
  return booleanLiteral(value);
}
