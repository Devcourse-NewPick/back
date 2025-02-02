import { IsString, MinLength, IsOptional, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: '카테고리 이름은 문자열이어야 합니다' })
  @MinLength(1, { message: '카테고리 이름은 최소 1자 이상이어야 합니다' })
  @MaxLength(50, { message: '카테고리 이름은 50자를 초과할 수 없습니다' })
  name: string;

  @IsOptional()
  @IsString({ message: '설명은 문자열이어야 합니다' })
  @MaxLength(200, { message: '설명은 200자를 초과할 수 없습니다' })
  description?: string;
}
