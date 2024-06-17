import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseListOneService } from '../../services';
import { ExerciseListOneController } from './exercise.controller.listOne';

describe('ExerciseListOneController', () => {
    let controller: ExerciseListOneController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExerciseListOneController],
            providers: [ExerciseListOneService],
        }).compile();

        controller = module.get<ExerciseListOneController>(
            ExerciseListOneController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
