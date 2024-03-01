import { assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";


Deno.test("equal test", () => {
  const value = 4
  assertEquals(4, value);
});

Deno.test("add test", () => {
  const value = 4 + 3
  assertEquals(7, value);
});