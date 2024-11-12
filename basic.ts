// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.
import type { Sodium } from "./basic_types.ts";
import sodium from "./dist/browsers/sodium2.js";

const sodiumLib: Record<string, any> = {};

const entries = Object.entries(((sodium as any).libsodium)).concat(Object.entries(((sodium as any).sodium)));

for (const entry of entries) {
    const prop = entry[0];
    const val = entry[1];

    const newPropName = prop.startsWith("_") ? prop.slice(1) : prop;

    if (sodiumLib[newPropName] === undefined) {
        sodiumLib[newPropName] = val;
    }
}


export default sodiumLib as Sodium;

export * from "./basic_types.ts";
