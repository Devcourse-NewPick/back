import { IsOptional, IsNumber, IsBoolean } from 'class-validator';

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
