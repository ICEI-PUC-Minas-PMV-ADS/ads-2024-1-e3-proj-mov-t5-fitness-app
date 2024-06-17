import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDeletedService } from '../../services';
import { ExerciseDeletedController } from './exercise.controller.delete';

describe('ExerciseDeletedController', () => {
    let controller: ExerciseDeletedController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExerciseDeletedController],
            providers: [ExerciseDeletedService],
        }).compile();

        controller = module.get<ExerciseDeletedController>(
            ExerciseDeletedController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
