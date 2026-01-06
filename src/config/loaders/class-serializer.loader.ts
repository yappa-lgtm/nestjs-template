import { ClassSerializerInterceptorOptions } from '@nestjs/common/serializer/class-serializer.interceptor'

export function getClassSerializeConfig(): ClassSerializerInterceptorOptions {
	return {
		excludeExtraneousValues: true
	}
}
