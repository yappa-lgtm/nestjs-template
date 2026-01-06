import {applyDecorators} from "@nestjs/common";
import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";

export function ApiNanoIdProperty({ optional = false } = {}) {
    return applyDecorators(
        ApiProperty({
            description: 'Unique identifier of the entity',
            required: !optional,
            example: 'B1xY_lROIRoktUTdnyqrb',
            type: String
        }),
        IsString(),
        Expose(),
        ...(optional ? [IsOptional()] : [])
    )
}

export function ApiCreateAtProperty({ optional = false } = {}) {
    return applyDecorators(
        ApiProperty({
            description: 'Date and time when the entity was created',
            required: !optional,
            example: '2026-01-06T12:00:00.000Z',
            type: String
        }),
        IsDate(),
        Expose(),
        ...(optional ? [IsOptional()] : [])
    )
}

export function ApiUpdatedAtProperty({ optional = false } = {}) {
    return applyDecorators(
        ApiProperty({
            description: 'Date and time when the entity was last updated',
            required: !optional,
            example: '2026-01-06T12:30:00.000Z',
            type: String
        }),
        IsDate(),
        Expose(),
        ...(optional ? [IsOptional()] : [])
    )
}