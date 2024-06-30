/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParticipantWhereInput } from "./ParticipantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ParticipantOrderByInput } from "./ParticipantOrderByInput";

@ArgsType()
class ParticipantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ParticipantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ParticipantWhereInput, { nullable: true })
  @Type(() => ParticipantWhereInput)
  where?: ParticipantWhereInput;

  @ApiProperty({
    required: false,
    type: [ParticipantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ParticipantOrderByInput], { nullable: true })
  @Type(() => ParticipantOrderByInput)
  orderBy?: Array<ParticipantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ParticipantFindManyArgs as ParticipantFindManyArgs };
