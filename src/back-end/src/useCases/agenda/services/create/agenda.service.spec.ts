import { Test, TestingModule } from '@nestjs/testing';
import { AgendaCreateService } from './agenda.service.create';

describe('AgendaCreateService', () => {
    let service: AgendaCreateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AgendaCreateService],
        }).compile();

        service = module.get<AgendaCreateService>(AgendaCreateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
