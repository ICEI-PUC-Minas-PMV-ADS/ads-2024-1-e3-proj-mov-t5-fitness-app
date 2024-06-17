import { Test, TestingModule } from '@nestjs/testing';
import { AgendaListOneService } from '../../services';
import { AgendaListOneController } from './agenda.controller.listOne';

describe('AgendaListOneController', () => {
    let controller: AgendaListOneController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AgendaListOneController],
            providers: [AgendaListOneService],
        }).compile();

        controller = module.get<AgendaListOneController>(
            AgendaListOneController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
