import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDeletedService } from './exercise.service.delete';

describe('ExerciseDeletedService', () => {
    let service: ExerciseDeletedService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExerciseDeletedService],
        }).compile();

        service = module.get<ExerciseDeletedService>(ExerciseDeletedService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
