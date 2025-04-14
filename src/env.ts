import { type } from "arktype";
import { exit } from "process";

const envSchema = type({
  NODE_ENV: "'development' | 'production'",
});

export function env() {
  const out = envSchema({
    NODE_ENV: process.env.NODE_ENV,
  });

  if (out instanceof type.errors) {
    console.error(out.summary);
    exit(1);
  }

  return out;
}