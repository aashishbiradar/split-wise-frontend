import Api from './api';

class UserApi extends Api{
    async authenticate() {
        return await this.get('user/me');
    }
    async login(user) {
        return await this.post('user/login', user);
    }
}

export default new UserApi();