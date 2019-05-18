import EmptyObjectError from "./packages/EmptyObjectError";
import UndefinedObjectError from "./packages/UndefinedObjectError";
import { getObjectKeys } from "./utils";

const testObj1 = undefined;
const testObj2 = {};

// Test 1
getObjectKeys(testObj1, UndefinedObjectError);

// Test 2
getObjectKeys(testObj2, EmptyObjectError);