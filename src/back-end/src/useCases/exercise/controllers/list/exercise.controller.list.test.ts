import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseListAllService } from '../../services';
import { ExerciseListAllController } from './exercise.controller.list';

describe('ExerciseListAllController', () => {
    let controller: ExerciseListAllController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExerciseListAllController],
            providers: [ExerciseListAllService],
        }).compile();

        controller = module.get<ExerciseListAllController>(
            ExerciseListAllController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
