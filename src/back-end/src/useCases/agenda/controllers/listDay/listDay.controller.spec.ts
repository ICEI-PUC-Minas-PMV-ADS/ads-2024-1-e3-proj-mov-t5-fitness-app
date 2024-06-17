import { Test, TestingModule } from '@nestjs/testing';
import { AgendaListDayService } from '../../services';
import { AgendaListDayController } from './listDay.controller';

describe('AgendaListDayController', () => {
    let controller: AgendaListDayController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AgendaListDayController],
            providers: [AgendaListDayService],
        }).compile();

        controller = module.get<AgendaListDayController>(
            AgendaListDayController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
