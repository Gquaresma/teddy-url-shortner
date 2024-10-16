import Validator from '../Validators/UserValidator';
import UserService from '../services/UserService';
import Controller from './Controller';

class UserController extends Controller {}

export default new UserController(UserService, Validator);
