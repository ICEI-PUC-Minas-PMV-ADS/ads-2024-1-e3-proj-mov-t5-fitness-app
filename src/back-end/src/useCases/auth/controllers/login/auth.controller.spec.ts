import { Test, TestingModule } from '@nestjs/testing';
import { AuthLoginService } from '../../services';
import { AuthLoginController } from './auth.controller.login';

describe('AuthLoginController', () => {
    let controller: AuthLoginController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthLoginController],
            providers: [AuthLoginService],
        }).compile();

        controller = module.get<AuthLoginController>(AuthLoginController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
