import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseCreateService } from './exercise.service.create';

describe('ExerciseCreateService', () => {
    let service: ExerciseCreateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ExerciseCreateService],
        }).compile();

        service = module.get<ExerciseCreateService>(ExerciseCreateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
