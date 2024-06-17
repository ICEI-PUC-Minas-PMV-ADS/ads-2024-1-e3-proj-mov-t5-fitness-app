import { Test, TestingModule } from '@nestjs/testing';
import { AgendaCreateService } from '../../services';
import { AgendaCreateController } from './agenda.controller.create';

describe('AgendaCreateController', () => {
    let controller: AgendaCreateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AgendaCreateController],
            providers: [AgendaCreateService],
        }).compile();

        controller = module.get<AgendaCreateController>(AgendaCreateController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
