import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseUpdateService } from '../../services';
import { ExerciseUpdateController } from './exercise.controller.update';

describe('ExerciseUpdateController', () => {
    let controller: ExerciseUpdateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExerciseUpdateController],
            providers: [ExerciseUpdateService],
        }).compile();

        controller = module.get<ExerciseUpdateController>(
            ExerciseUpdateController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
