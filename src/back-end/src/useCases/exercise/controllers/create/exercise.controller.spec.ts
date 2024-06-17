import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseCreateService } from '../../services';
import { ExerciseCreateController } from './exercise.controller.create';

describe('ExerciseCreateController', () => {
    let controller: ExerciseCreateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExerciseCreateController],
            providers: [ExerciseCreateService],
        }).compile();

        controller = module.get<ExerciseCreateController>(
            ExerciseCreateController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
