import User from '../models/user.model';

const user = new User({
    email: 'test@asd.cc',
    username: 'test',
    name: 'test',
});
user.id = 'd62095b7-0cb0-4d43-9eb2-e52cb7d1de4e';
const user2 = new User();
user2.id = 'b16d08ed-9292-4e51-a4a6-61adcddca157';
const users = [user, user2];

export {
    user,
    users,
}
