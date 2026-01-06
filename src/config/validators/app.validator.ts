import { IsInt, IsString, Matches, Max, Min } from 'class-validator'

export class AppValidator {
	@Matches(/^(development|production|test)$/, {
		message: 'NODE_ENV must be one of: development, production, test'
	})
	public NODE_ENV: string

	@IsString({
		message: 'TITLE must be a string (application title)'
	})
	public TITLE: string

	@IsString({
		message: 'DESCRIPTION must be a string (application description)'
	})
	public DESCRIPTION: string

	@IsString({
		message: 'VERSION must be a string (application version)'
	})
	public VERSION: string

	@IsString({
		message: 'HOST must be a string (server host address)'
	})
	public HOST: string

	@IsInt({
		message: 'PORT must be an integer (server port number)'
	})
	@Min(1, {
		message: 'PORT must be at least 1'
	})
	@Max(65535, {
		message: 'PORT must be at most 65535'
	})
	public PORT: number

	@IsString({
		message: 'SWAGGER_URL must be a string (Swagger UI path)'
	})
	@Matches(/^\/[a-zA-Z0-9/_-]*$/, {
		message: 'SWAGGER_URL must be a valid path (e.g. /docs, /api-docs)'
	})
	public SWAGGER_URL: string

	@IsString({
		message:
			'SWAGGER_DOCUMENT_YAML_URL must be a string (OpenAPI spec path)'
	})
	@Matches(/^\/[a-zA-Z0-9/_-]*\.ya?ml$/, {
		message:
			'SWAGGER_DOCUMENT_YAML_URL must be a yaml path (e.g. /openapi.yaml, /swagger.yml)'
	})
	public SWAGGER_DOCUMENT_YAML_URL: string

	@IsString({
		message:
			'CORS must be a string containing allowed origins (e.g. "https://example.com" or "https://example.com,https://another.com")'
	})
	public CORS: string
}
