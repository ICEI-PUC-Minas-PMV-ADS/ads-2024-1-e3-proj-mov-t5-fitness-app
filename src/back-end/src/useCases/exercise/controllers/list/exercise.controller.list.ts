import { Controller, Get, Query } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IListExerciseDto, IListExerciseRes } from '../../dto/list.dto';
import { ExerciseListAllService } from '../../services';

@Controller('exercise')
export class ExerciseListAllController {
    constructor(
        private readonly exerciseListAllService: ExerciseListAllService,
        private readonly message: Messages,
    ) {}

    @Get('list')
    async list(
        @Query() { itemsPerPage, itemsToSkip }: IListExerciseDto,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<Array<IListExerciseRes>>>
    > {
        try {
            const response = await this.exerciseListAllService.listAll({
                itemsPerPage: Number(itemsPerPage),
                itemsToSkip: Number(itemsToSkip),
            });

            if (response.isException()) {
                const { message, statusCode, typeError } = response.exception;
                return { message, statusCode, typeError };
            }
            if (response.isSuccess()) {
                const { message, statusCode, value, meta } = response.success;
                return { message, statusCode, value, meta };
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
