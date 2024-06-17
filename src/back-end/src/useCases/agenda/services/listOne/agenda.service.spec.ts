import { Test, TestingModule } from '@nestjs/testing';
import { AgendaListOneService } from './agenda.service.listOne';

describe('AgendaListOneService', () => {
    let service: AgendaListOneService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AgendaListOneService],
        }).compile();

        service = module.get<AgendaListOneService>(AgendaListOneService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
