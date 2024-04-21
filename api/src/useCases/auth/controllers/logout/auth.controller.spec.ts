import { Test, TestingModule } from '@nestjs/testing';
import { AuthLogoutController } from './auth.controller.logout';

describe('AuthLogoutController', () => {
    let controller: AuthLogoutController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthLogoutController],
            providers: [],
        }).compile();

        controller = module.get<AuthLogoutController>(AuthLogoutController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
