import { Test, TestingModule } from '@nestjs/testing';
import { AgendaListAllService } from './agenda.service.list';

describe('AgendaListAllService', () => {
    let service: AgendaListAllService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AgendaListAllService],
        }).compile();

        service = module.get<AgendaListAllService>(AgendaListAllService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
