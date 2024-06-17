import { Body, Controller, Param, Put } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IUpdateExerciseDto, IUpdateExerciseRes } from '../../dto';
import { ExerciseUpdateService } from '../../services';

@Controller('exercise')
export class ExerciseUpdateController {
    constructor(
        private readonly exerciseUpdateService: ExerciseUpdateService,
        private readonly message: Messages,
    ) {}

    @Put('update/:id')
    async update(
        @Param('id') id: string,
        @Body()
        { name }: IUpdateExerciseDto,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IUpdateExerciseRes>>
    > {
        try {
            const response = await this.exerciseUpdateService.update({
                id: Number(id),
                name,
            });

            if (response.isException()) {
                const { message, statusCode, internalError, typeError } =
                    response.exception;
                return { message, statusCode, internalError, typeError };
            }
            if (response.isSuccess()) {
                const { message, statusCode, value } = response.success;
                return { message, statusCode, value };
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: Statuscode.INTERNAL_SERVER_ERROR,
                message: this.message.language().internalServerError,
                value: error,
            };
        }
    }
}
