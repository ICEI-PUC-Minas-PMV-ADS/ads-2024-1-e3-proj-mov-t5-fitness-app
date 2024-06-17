import { Controller, Get, Param } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IListOneExerciseRes } from '../../dto';
import { ExerciseListOneService } from '../../services';

@Controller('exercise')
export class ExerciseListOneController {
    constructor(
        private readonly exerciseListOneService: ExerciseListOneService,
        private readonly message: Messages,
    ) {}

    @Get('list/:id')
    async listOne(
        @Param('id') id: string,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IListOneExerciseRes>>
    > {
        try {
            const response = await this.exerciseListOneService.listOne({
                id: Number(id),
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
