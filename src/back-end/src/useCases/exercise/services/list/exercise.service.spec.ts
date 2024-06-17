import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseListAllService } from './exercise.service.list';

describe('ExerciseListAllService', () => {
    let service: ExerciseListAllService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExerciseListAllService],
        }).compile();

        service = module.get<ExerciseListAllService>(ExerciseListAllService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
