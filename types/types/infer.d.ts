import { Expression } from "@babel/types";
export interface InferableObject {
    [key: string]: Inferable;
}
export interface InferableArray extends Array<Inferable> {
}
export declare type Inferable = string | number | boolean | undefined | null | InferableObject | InferableArray;
export declare function INFER(value: Inferable): Expression;
