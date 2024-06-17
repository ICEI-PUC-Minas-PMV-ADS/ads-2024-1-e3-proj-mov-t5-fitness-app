import { Test, TestingModule } from '@nestjs/testing';
import { AgendaUpdateService } from './agenda.service.update';

describe('AgendaUpdateService', () => {
    let service: AgendaUpdateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AgendaUpdateService],
        }).compile();

        service = module.get<AgendaUpdateService>(AgendaUpdateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
