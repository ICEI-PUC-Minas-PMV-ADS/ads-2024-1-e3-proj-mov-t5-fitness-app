import { Test, TestingModule } from '@nestjs/testing';
import { AgendaDeletedService } from './agenda.service.delete';

describe('AgendaDeletedService', () => {
    let service: AgendaDeletedService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AgendaDeletedService],
        }).compile();

        service = module.get<AgendaDeletedService>(AgendaDeletedService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
