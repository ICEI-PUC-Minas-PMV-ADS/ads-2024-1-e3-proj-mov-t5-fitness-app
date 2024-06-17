import { Test, TestingModule } from '@nestjs/testing';
import { AgendaListAllService } from '../../services';
import { AgendaListAllController } from './agenda.controller.list';

describe('AgendaListAllController', () => {
    let controller: AgendaListAllController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AgendaListAllController],
            providers: [AgendaListAllService],
        }).compile();

        controller = module.get<AgendaListAllController>(
            AgendaListAllController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
