import { IsString } from 'class-validator'

export class AuthValidator {
	@IsString({
		message:
			'COOKIES_DOMAIN must be a string (domain for cookies, e.g. example.com or .example.com)'
	})
	public COOKIES_DOMAIN: string

	@IsString({
		message:
			'COOKIES_SECRET must be a string (secret key for signing cookies)'
	})
	public COOKIES_SECRET: string
}
