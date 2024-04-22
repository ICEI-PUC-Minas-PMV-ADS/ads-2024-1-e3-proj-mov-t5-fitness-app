import { Test, TestingModule } from '@nestjs/testing';
import { AuthRefreshService } from '../../services';
import { AuthRefreshController } from './auth.controller.refresh';

describe('AuthRefreshController', () => {
    let controller: AuthRefreshController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthRefreshController],
            providers: [AuthRefreshService],
        }).compile();

        controller = module.get<AuthRefreshController>(AuthRefreshController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
