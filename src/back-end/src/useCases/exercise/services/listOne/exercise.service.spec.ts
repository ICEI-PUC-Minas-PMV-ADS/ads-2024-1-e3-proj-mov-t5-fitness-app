import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseListOneService } from './exercise.service.listOne';

describe('ExerciseListOneService', () => {
    let service: ExerciseListOneService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExerciseListOneService],
        }).compile();

        service = module.get<ExerciseListOneService>(ExerciseListOneService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
