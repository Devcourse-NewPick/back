import { IsOptional, IsNumber, IsBoolean, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';

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
