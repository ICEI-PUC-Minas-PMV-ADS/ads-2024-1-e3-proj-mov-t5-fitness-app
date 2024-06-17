import { Test, TestingModule } from '@nestjs/testing';
import { AgendaListDayService } from './listDay.service';

describe('AgendaListDayService', () => {
    let service: AgendaListDayService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AgendaListDayService],
        }).compile();

        service = module.get<AgendaListDayService>(AgendaListDayService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
