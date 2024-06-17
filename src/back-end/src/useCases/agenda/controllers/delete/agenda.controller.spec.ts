import { Test, TestingModule } from '@nestjs/testing';
import { AgendaDeletedService } from '../../services';
import { AgendaDeletedController } from './agenda.controller.delete';

describe('AgendaDeletedController', () => {
    let controller: AgendaDeletedController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AgendaDeletedController],
            providers: [AgendaDeletedService],
        }).compile();

        controller = module.get<AgendaDeletedController>(AgendaDeletedController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
