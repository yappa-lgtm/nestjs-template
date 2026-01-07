import { compareSync, hashSync } from 'bcrypt'

const SALT = 10

export function hashString(str: string) {
	return hashSync(str, SALT)
}

export function compareHashedString(str: string, hashed: string) {
	return compareSync(str, hashed)
}
