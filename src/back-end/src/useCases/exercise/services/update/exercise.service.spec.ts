import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseUpdateService } from './exercise.service.update';

describe('ExerciseUpdateService', () => {
    let service: ExerciseUpdateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExerciseUpdateService],
        }).compile();

        service = module.get<ExerciseUpdateService>(ExerciseUpdateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
