import { Test, TestingModule } from '@nestjs/testing';
import { AgendaUpdateService } from '../../services';
import { AgendaUpdateController } from './agenda.controller.update';

describe('AgendaUpdateController', () => {
    let controller: AgendaUpdateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AgendaUpdateController],
            providers: [AgendaUpdateService],
        }).compile();

        controller = module.get<AgendaUpdateController>(AgendaUpdateController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
