interface EnvironmentValues {
  BACKEND_URL: string;
}

const rawEnv = process.env;

const envValues = Object.keys(rawEnv).reduce(
  (a, key) => ({
    ...a,
    [key.replace("REACT_APP_", "")]: rawEnv[key] || "",
  }),
  {}
) as EnvironmentValues;

export const env = envValues;
