export function envName(): string {
  return env('NODE_ENV', 'development')
}

export function env(name: string, defaultValue: string = ''): string {
  return process.env[name]?.trim() ?? defaultValue
}

export function withEnv(name: string, separator: string = '_'): string {
  return [envName(), name].join(separator)
}
