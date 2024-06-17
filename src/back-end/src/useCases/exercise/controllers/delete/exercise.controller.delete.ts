import { Controller, Delete, Param } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IDeleteExerciseResDto } from '../../dto';
import { ExerciseDeletedService } from '../../services';

@Controller('exercise')
export class ExerciseDeletedController {
    constructor(
        private readonly exerciseDeletedService: ExerciseDeletedService,
        private readonly message: Messages,
    ) {}

    @Delete('delete/:id')
    async delete(
        @Param('id') id: string,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IDeleteExerciseResDto>>
    > {
        try {
            const response = await this.exerciseDeletedService.delete({
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
