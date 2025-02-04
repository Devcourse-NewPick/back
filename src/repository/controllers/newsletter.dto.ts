import {
  IsOptional,
  IsNumber,
  IsBoolean,
  IsDefined,
  Min,
  IsNumberString,
  IsInt,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class NewsletterDto {
  @IsOptional()
  @IsNumber({}, { message: 'offset는 숫자여야 합니다' })
  offset?: number;

  @IsOptional()
  @IsNumber({}, { message: 'limit는 숫자여야 합니다' })
  limit?: number;

  @IsOptional()
  @IsBoolean({ message: 'trend는 불리언이어야 합니다' })
  trend?: boolean;
}

export class NewsletterTrendDto {
  @IsOptional()
  @IsNumber({}, { message: 'categoryId는 숫자여야 합니다' })
  categoryId?: number;
}

export class NewsletterCategoryDto {
  @Type(() => Number)
  @IsNumber({}, { message: 'offset는 숫자여야 합니다' })
  @IsDefined({ message: 'offset는 필수 값입니다' })
  offset: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'limit는 숫자여야 합니다' })
  @IsDefined({ message: 'limit는 필수 값입니다' })
  limit: number;
}

export class NewsletterRandomDto {
  @IsOptional()
  @IsNumberString({}, { message: 'num은 숫자여야 합니다' })
  @Transform(({ value }) => Number(value))
  @IsInt({ message: 'num은 정수여야 합니다' })
  @Min(1, { message: 'num은 1보다 커야 합니다' })
  num?: number;

  @IsOptional()
  @IsNumberString({}, { message: 'from은 숫자여야 합니다' })
  @Transform(({ value }) => Number(value))
  @IsInt({ message: 'from은 정수여야 합니다' })
  @Min(1, { message: 'from은 1보다 커야 합니다' })
  from?: number;
}
